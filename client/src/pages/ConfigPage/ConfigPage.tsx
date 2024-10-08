import {
  Typography,
  Rating,
  Box,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import axiosInstance from '../../../axiosInstance';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IRating, IBuild } from '../../types/types';
import StarsReadOnly from '../../components/Stars/StarsReadOnly';
import { useAppSelector } from '../../redux/hooks';
import Auth from '../../components/Auth/Auth';
import styles from '../../components/ConfigsModal/ConfigsModal.module.css';

export default function ConfigPage(): JSX.Element {
  const [build, setBuild] = useState<IBuild | null>(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [userNames, setUserNames] = useState<string[]>([]);
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<IBuild>(
          `${import.meta.env.VITE_API}/build/${id}`
        );
        setBuild(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    axiosInstance
      .get<string[]>(`${import.meta.env.VITE_API}/users/logins`)
      .then((res) => setUserNames(res.data));
  }, []);

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
      setBuild((prev) => {
        const newPrev: IBuild = { ...(prev as IBuild) };
        newPrev.Comments = newPrev.Comments || [];
        newPrev.Ratings = newPrev.Ratings || [];
        newPrev.Comments.push({
          content: comment,
          id: 0,
          UserId: user.id,
          BuildId: Number(id),
          createdAt: String(new Date()),
        });
        newPrev.Ratings.push({
          UserId: user.id,
          BuildId: Number(id),
          score: rating,
          id: 0,
          createdAt: String(new Date()),
        });
        return newPrev;
      });
      setComment('');
      setRating(null);
    } catch (error) {
      console.log('Error submitting comment or rating:', error);
    }
  };


  const handleDeleteComment = async (commentId: number) => {
    try {
      const res = await axiosInstance.delete(
        `${import.meta.env.VITE_API}/build/${id}/comments/${commentId}`
      );
      setBuild((prev) => {
        const newPrev: IBuild = { ...(prev as IBuild) };
        newPrev.Comments = newPrev.Comments.filter((comment) => comment.id !== commentId);
        newPrev.Ratings = newPrev.Ratings.filter((rating) => rating.id !== commentId);
        return newPrev;
      });
    } catch (error) {
      console.log('Error deleting comment:', error);
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
              src={build?.image}
              alt="Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                padding: 2,
                border: '1px dotted  #ddd',
                borderRadius: 1,
                fontSize: 14,
              }}
            >
              <Typography variant="h3" sx={{ marginTop: 2 }}>
                {build?.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{ marginTop: 2, color: 'text.secondary' }}
              >
                Пользователь: {userNames[build?.UserId]}
              </Typography>

              <Typography variant="h5" sx={{ marginTop: 2 }}>
                {build?.Items.reduce((acc, rating) => acc + rating.price, 0)} ₽
              </Typography>

              <Rating
                name="read-only"
                value={calculateAverageRating(build?.Ratings)}
                readOnly
                precision={0.1}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
          <Typography variant="h3" gutterBottom align="center">
            Конфигурация:
          </Typography>

          <div>
            <TableContainer
              sx={{ marginTop: 2, marginLeft: 2, width: 720, minWidth: 1200 }}
            >
              <Table size="medium" aria-label="a dense table">
                <TableBody>
                  {build?.Items.map((item) => {
                    const specs = Object.entries(item.specifications);
                    return (
                      <TableRow key={item.id}>
                        <TableCell sx={{ fontSize: 20 }}>
                          {item.Type?.title}:
                        </TableCell>
                        <TableCell sx={{ fontSize: 16 }}>
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <span>{item.title}</span>
                            <span>{item.price} ₽</span>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ fontSize: 14 }}>
                          {specs.map((spec, i) => (
                            <p key={i}> {`${spec[0]}: ${spec[1]}`}</p>
                          ))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={styles.buttons}></div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ marginBottom: 10 }}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom>
            Описание
          </Typography>
          <Typography variant="h5" gutterBottom>
            {build?.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom>
            Отзывы
          </Typography>

          {build?.Comments.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                backgroundColor: 'background.paper',
                marginBottom: '20px',
                padding: '10px',
                border: '1px dotted  #ddd',
                borderRadius: '5px',
              }}
            >
              <Typography variant="h5" gutterBottom>
                {userNames[comment.UserId] || 'Anonymous'}
              </Typography>

              <div style={{ marginBottom: '10px' }}>
                <StarsReadOnly
                  value={
                    (
                      build.Ratings.find(
                        (el) => el.UserId === comment.UserId
                      ) as IRating
                    )?.score
                  }
                />
              </div>
              <Typography variant="body1" gutterBottom key={comment.id}>
                {comment.content}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginTop: '10px' }}
              >
                {comment.createdAt
                  ? `${new Date(comment.createdAt).toLocaleDateString('ru-RU', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}`
                  : 'No date available'}
              </Typography>

              {comment.UserId === user.id && (
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDeleteComment(comment.id)}
      >
        Удалить
      </Button>
    )}


            </Box>
          ))}
          {user.id ? (
            <>
              <Typography variant="h5" gutterBottom>
                Оставить отзыв:
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label=""
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  fullWidth
                  margin="normal"
                  disabled={build?.Comments.some((el) => el.UserId === user.id)}
                  sx={{ backgroundColor: 'rgba(128, 128, 128, 0.1)' }}
                />
                <Box display="flex" alignItems="center">
                  <Rating
                    name="comment-rating"
                    value={rating}
                    disabled={build?.Comments.some(
                      (el) => el.UserId === user.id
                    )}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={build?.Comments.some(
                      (el) => el.UserId === user.id
                    )}
                  >
                    Отправить
                  </Button>
                </Box>
              </form>
            </>
          ) : (
            <Box
              sx={{
                marginTop: 6,
                marginBottom: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Чтобы оставить отзыв, пожалуйста, авторизуйтесь
              </Typography>
              <Auth />
            </Box>
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
