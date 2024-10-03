import style from './styles.module.css';
import Left from './ListOfComponents'
import Center from './MainList';
import Right from './PreveiwPanel'
import { useState } from 'react';
import { initConfiguratorBuild } from '../../redux/initStates/initStates';
export default function Configurator(): JSX.Element {

  const [currentBuild, changeCurrentBuild] = useState(initConfiguratorBuild)
  console.log(currentBuild)
  return (
    <div className={style.wrapper}>
      <Left className={style.left} />
      <Center className={style.center} />
      <Right className={style.right} currentBuild={currentBuild}/>
    </div>
  );
}
