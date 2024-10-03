import style from './styles.module.css';
import Left from './ListOfComponents'
import Center from './MainList';
import Right from './PreveiwPanel'
import { useState } from 'react';
export default function Configurator(): JSX.Element {

  const [currentBuild, changeCurrentBuild] = useState({})

  return (
    <div className={style.wrapper}>
      <Left className={style.left} />
      <Center className={style.center} />
      <Right className={style.right} currentBuild={currentBuild}/>
    </div>
  );
}
