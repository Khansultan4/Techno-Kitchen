import { useEffect, useRef, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { IMessage, IUser } from '../types/types';
import { useAppSelector } from '../redux/hooks';

export default function useChat() {
  const { user: loggedUser } = useAppSelector((store) => store.user);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [typing, setTyping] = useState<boolean>(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/messages`)
      .then(({ data }) => setMessages(data));
  }, []);

  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      'unread',
      JSON.stringify({ unreadMessages, id: loggedUser.id })
    );
  }, [unreadMessages, loggedUser.id]);

  const incrementUnreadMessages = () => {
    setUnreadMessages((prev) => prev + 1);
  };

  const resetUnreadMessages = () => {
    setUnreadMessages(0);
  };

  useEffect(() => {
    socketRef.current = new WebSocket(import.meta.env.VITE_BASE_URL);

    const socket = socketRef.current;

    socket.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data);

      switch (type) {
        case 'SET_USERS_FROM_SERVER':
          setUsers(payload);
          break;

        case 'ADD_MESSAGE_FROM_SERVER':
          setMessages((prev) => {
            incrementUnreadMessages();

            return [...prev, payload];
          });
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

  return {
    messages,
    users,
    typing,
    submitMessage,
    socketRef,
    resetUnreadMessages,
    unreadMessages,
  };
}
