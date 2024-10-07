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
        <br/>
            Добро пожаловать в Конфигуратор Идеального ПК!<br/>
            На нашем сайте вы можете создать компьютер, полностью адаптированный под ваши задачи и предпочтения.<br/>
            Просто выберите необходимые компоненты, и конфигуратор поможет вам собрать ПК вашей мечты!<br/>
            Соберите свой идеальный компьютер уже сегодня – начните прямо сейчас!
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
