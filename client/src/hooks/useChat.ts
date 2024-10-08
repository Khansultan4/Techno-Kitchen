import { useEffect, useRef, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { IMessage, IUser } from '../types/types';
import { useAppSelector } from '../redux/hooks';

export default function useChat() {
  const { user: loggedUser } = useAppSelector((store) => store.user);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [typing, setTyping] = useState<boolean>(false);
  const [newMessagesCount, setNewMessagesCount] = useState<number>(0);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/messages`)
      .then(({ data }) => setMessages(data));
  }, []);

  useEffect(() => {
    socketRef.current = new WebSocket(import.meta.env.VITE_BASE_URL);

    const socket = socketRef.current;

    socket.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data);
      console.log(payload);

      switch (type) {
        case 'SET_USERS_FROM_SERVER':
          setUsers(payload);
          break;

        case 'ADD_MESSAGE_FROM_SERVER':
          setMessages((prev) => [...prev, payload]);

          setNewMessagesCount((prev) => prev + 1);

          break;

        case 'CLIENT_TYPING_FROM_SERVER':
          setTyping(payload);
          break;

        case 'TYPING_FROM_SERVER_STOP':
          setTyping(false);
          break;

        default:
          break;
      }
    };
  }, [loggedUser]);

  const submitMessage = (input: string) => {
    const socket = socketRef.current;

    if (socket !== null) {
      socket.send(
        JSON.stringify({ type: 'ADD_MESSAGE_FROM_CLIENT', payload: input })
      );
    }
  };

  const resetCount = () => {
    setNewMessagesCount(0);
  };

  return {
    messages,
    users,
    typing,
    submitMessage,
    socketRef,
    resetCount,
    newMessagesCount,
  };
}
