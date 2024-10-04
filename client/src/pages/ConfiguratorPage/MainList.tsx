import { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance';
import { IItem } from '../../types/types';
import RadioItemsList from './RadioItemsList';
import { initItem, initType } from '../../types/initStates';
export default function MainList({ className }: { className: string }) {

  const initItems: IItem[] = [initItem];
  for(let i = 0; i < 10; i++){
    initItems.push({
      id: 0,
      title: '',
      image: '',
      specifications: Object(),
      TypeId: i,
      Type: initType,
      price: 0,
      description: '',
      createdAt: '',
      updatedAt: '',
    })
  }

  const [comps, changeComps] = useState<IItem[]>(initItems);
  useEffect(() => {
    axiosInstance.get('/api/item/all').then((res) => changeComps(res.data));
  }, []);

  const CPUs =             comps.filter((el) => el.TypeId === 1) //prettier-ignore
  const GPUs =             comps.filter((el) => el.TypeId === 2) //prettier-ignore
  const motherboards =     comps.filter((el) => el.TypeId === 3) //prettier-ignore
  const RAMs =             comps.filter((el) => el.TypeId === 4) //prettier-ignore
  const SSDs =             comps.filter((el) => el.TypeId === 5) //prettier-ignore
  const cooling =          comps.filter((el) => el.TypeId === 6) //prettier-ignore
  const HDDs =             comps.filter((el) => el.TypeId === 7) //prettier-ignore
  const powerUnits =       comps.filter((el) => el.TypeId === 8) //prettier-ignore
  const cases =            comps.filter((el) => el.TypeId === 9) //prettier-ignore
  const termoInterfaces =  comps.filter((el) => el.TypeId === 10) //prettier-ignore

  return (
    <div className={className}>
      <RadioItemsList items={CPUs} />
      <RadioItemsList items={GPUs} />
      <RadioItemsList items={motherboards} />
      <RadioItemsList items={RAMs} />
      <RadioItemsList items={SSDs} />
      <RadioItemsList items={cooling} />
      <RadioItemsList items={HDDs} />
      <RadioItemsList items={powerUnits} />
      <RadioItemsList items={cases} />
      <RadioItemsList items={termoInterfaces} />
    </div>
  );
}
