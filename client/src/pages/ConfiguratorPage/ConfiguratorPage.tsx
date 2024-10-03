import style from './styles.module.css';
import Test from './ListOfComponents'
import MainList from './MainList';
export default function Configurator(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div>
        <Test></Test>
      </div>
      <MainList/>
      <div>cheburek</div>
    </div>
  );
}
