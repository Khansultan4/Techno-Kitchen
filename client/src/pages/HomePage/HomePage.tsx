import { Button, Typography } from "@mui/material";
import styles from './HomePage.module.css';
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function HomePage(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    return (
      <div>
        <div className={styles.wrapper}>
        <div>
        <Typography variant="h3" component="h2">Конфигуратор ПК</Typography>
        <Typography variant="h6" component="h4">
        <br></br>
        <tr>Добро пожаловать в Конфигуратор Идеального ПК!</tr>
        <tr>Создайте свой идеальный компьютер, точно под ваши нужды.</tr>
        <tr>На нашем сайте вы можете собрать свой идеальный ПК,</tr> 
        <tr>выбрав каждый компонент с помощью нашего конфигуратора.</tr>
        <tr>Создайте Свой Идеальный Компьютер Сегодня!</tr>
        <br></br>
        <tr>Используйте наш конфигуратор, чтобы собрать компьютер,</tr>
        <tr>который идеально подходит для ваших потребностей.</tr>
        <tr>Начните создавать свой компьютер прямо сейчас!</tr>
        </Typography>
        </div>
      <img className={styles.photo}
      src="/landingPic.png">
      </img>
      </div >
      <div className={styles.button}>
      <Button onClick={() => navigate("/configs")} variant="contained">Собрать ПК</Button>
      </div>
      </div>
    )
  }
