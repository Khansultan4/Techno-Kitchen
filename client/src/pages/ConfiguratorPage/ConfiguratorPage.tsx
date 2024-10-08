import style from './styles.module.css';
import Left from './ListOfComponents'
import Center from './MainList';
import Right from './PreveiwPanel'
import { useState } from 'react';
import { initConfiguratorBuild } from '../../types/initStates';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeTitle } from '../../redux/slices/configuratorBuildSlice';

export default function Configurator(): JSX.Element {
  const {configuratorBuild} = useAppSelector((state) => state.configuratorBuild)




  return (
    <div className={style.wrapper}>
      {/* <Left className={style.left} /> */}
      <Center className={style.center} />
      <Right className={style.right}/>
    </div>
  );
}
