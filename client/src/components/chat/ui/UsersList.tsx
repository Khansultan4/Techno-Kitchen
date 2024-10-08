import { AdjustRounded } from '@mui/icons-material';
import { IUser } from '../../../types/types';
import { Box } from '@mui/material';

type USersListProps = {
  users: IUser[];
  loggedUser: IUser;
};

export default function UsersList({ users, loggedUser }: USersListProps) {
  return (
    <>
      <h6>Users online</h6>
      {users.map((user: IUser) => (
        <Box key={user.id}>
          <AdjustRounded color="primary" />
          {user.id !== loggedUser.id ? user.login : 'You'}
        </Box>
      ))}
    </>
  );
}
