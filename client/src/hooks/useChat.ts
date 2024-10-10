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

  const [allUsers, setAllUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axiosInstance.get('/api/users/all').then((res) => setAllUsers(res.data));
  }, []);

  useEffect(() => {
    allUsers.forEach((user) => {
      const existingValue = localStorage.getItem(user.id.toString());
      if (!existingValue) {
        localStorage.setItem(user.id.toString(), JSON.stringify(0));
      }
    });
  }, [allUsers]);

  const incrementUnreadMessagesForUser = (userId) => {
    const currentUnreadMessages = JSON.parse(localStorage.getItem(userId)) || 0;
    localStorage.setItem(userId, JSON.stringify(currentUnreadMessages + 1));
  };

  const keys: any = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

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
          setMessages((prev) => {
            keys.forEach((key) => {
              if (Number(key) !== loggedUser.id) {
                incrementUnreadMessagesForUser(Number(key));
              }
            });

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
  };
}
