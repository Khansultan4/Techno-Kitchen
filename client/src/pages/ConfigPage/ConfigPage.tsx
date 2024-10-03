import { Typography, Rating, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axiosInstance from '../../../axiosInstance';
import { useEffect, useState } from 'react';
//import { useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
import { IItem } from '../../types/types';

interface Build {
  id: number;
  UserId: number;
  image: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  Items: IItem[];
  Ratings: Rating[];
  Comments: Comment[];
  Owner: User;
}

interface Item {
  id: number;
  title: string;
  price: number;
  specifications: object;
  description: string;
  image: string;
  TypeId: number;
  createdAt: Date;
  updatedAt: Date;
  ItemBundle: object;
  Type: object;
}

interface Rating {
  UserId: number;
  BuildId: number;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Comment {
  id: number;
  UserId: number;
  BuildId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: number;
  login: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
export default function ConfigPage(): JSX.Element {
  const [data, setData] = useState<Build | null>(null);
  
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await axiosInstance.get<Build>(
            `${import.meta.env.VITE_API}/build/${id}`
          );
          setData(response.data);
          
          
        } catch (error) {
          console.log(error);
        
      }
    };
    fetchData();
  }, [id]);

  return (
    <div style={{ padding: 50 }}>
      <Grid container spacing={2} sx={{ marginBottom: 16 }}>
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={data?.image}
              alt="Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Typography variant="h3" sx={{ marginTop: 2 }}>
              {data?.title}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: 2 }}>
            {data?.Items.reduce((acc, rating) => acc + rating.price, 0)} ₽
            </Typography>
            <Rating
              name="read-only"
              value={calculateAverageRating(data?.Ratings)}
              readOnly
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
          <Typography variant="h3" gutterBottom>
            Конфигурация:
          </Typography>
          <Typography variant="h5" gutterBottom>
            <ul>
             {data?.Items.map(item => <li>
              {item.Type.title}
             </li>)}
            </ul>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: 10 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Описание
          </Typography>
          <Typography variant="h5" gutterBottom>
            {data?.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Отзывы
          </Typography>
          {data?.Comments.map((comment) => (
            <Typography variant="h5" gutterBottom key={comment.id}>
              {comment.content}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

function calculateAverageRating(ratings: Rating[] | undefined): number {
  if (!ratings) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating.score, 0);
  return sum / ratings.length;
}
