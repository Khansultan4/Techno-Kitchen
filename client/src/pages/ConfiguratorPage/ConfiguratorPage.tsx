import style from './styles.module.css';
import Left from './ListOfComponents'
import Center from './MainList';
import Right from './PreveiwPanel'
export default function Configurator(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <Left className={style.left} />
      <Center className={style.center} />
      <Right className={style.right} />
    </div>
  );
}
