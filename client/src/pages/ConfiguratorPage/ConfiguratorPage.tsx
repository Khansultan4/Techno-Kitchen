import style from './styles.module.css';
import Test from './ListOfComponents'
export default function Configurator(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div>
        <Test></Test>
        <ol>
          <li>CPU</li>
          <li>GPU</li>
          <li>RAM</li>
        </ol>
      </div>
      <div>kek</div>
      <div>cheburek</div>
    </div>
  );
}
