import { Typography, Rating, Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axiosInstance from '../../../axiosInstance';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IRating, IBuild } from '../../types/types';
import StarsReadOnly from '../../components/Stars/StarsReadOnly';
import { useAppSelector } from '../../redux/hooks';
import Auth from '../../components/Auth/Auth';

export default function ConfigPage(): JSX.Element {
  const [data, setData] = useState<IBuild | null>(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<IBuild>(
          `${import.meta.env.VITE_API}/build/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!comment || rating === null || rating < 1 || rating > 5) {
      alert('Invalid comment or rating');
      return;
    }
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API}/build/${id}/comments`,
        {
          UserId: user.id,
          BuildId: id,
          content: comment,
          score: rating,
        }
      );
      console.log('Response:', response);
      setComment('');
      setRating(null);
    } catch (error) {
      console.log('Error submitting comment or rating:', error);
    }
  };

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
              {data?.Items.map((item) => (
                <li key={item.Type.id}>{item.Type.title}</li>
              ))}
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
            <div key={comment.id}>
              <StarsReadOnly
                value={
                  (
                    data.Ratings.find(
                      (el) => el.UserId === comment.UserId
                    ) as IRating
                  )?.score
                }
              />
              <Typography variant="h5" gutterBottom key={comment.id}>
                {comment.content}
              </Typography>
            </div>
          ))}

          {user.id ? (
            <>
              <Typography variant="h5" gutterBottom>
                Оставить отзыв:
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Ваш отзыв"
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  fullWidth
                  margin="normal"
                  disabled={data?.Comments.some((el) => el.UserId === user.id)}
                />
                <Rating
                  name="comment-rating"
                  value={rating}
                  disabled={data?.Comments.some((el) => el.UserId === user.id)}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={data?.Comments.some((el) => el.UserId === user.id)}
                  onClick={() => console.log(rating)}
                >
                  Отправить
                </Button>
              </form>
            </>
          ) : (
            <Typography variant="h5" gutterBottom>
              Чтобы оставить отзыв, пожалуйста, авторизуйтесь <Auth />
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

function calculateAverageRating(ratings: IRating[] | undefined): number {
  if (!ratings) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating.score, 0);
  return sum / ratings.length;
}
