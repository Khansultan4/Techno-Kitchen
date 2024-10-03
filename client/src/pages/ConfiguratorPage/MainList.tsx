import React, { useEffect, useState } from 'react'
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
import axiosInstance from '../../../axiosInstance'
import {IItem} from '../../types/types'
import { initItem } from '../../redux/initStates/initStates'
export default function MainList({className}:{className:string}) {

  const [comps, changeComps] = useState<IItem[]>([initItem])

  useEffect(() => {
    axiosInstance.get('/api/item/all').then((res) => changeComps(res.data))
  }, [])
  //!--------------------------------------------------------------------
  console.log(1, comps)
  console.log(2, comps[0].TypeId)
  console.log(3, comps.filter((el) => el.TypeId === 1))
  //!--------------------------------------------------------------------
  return (
    <div className={className}>
    <Typography >Видеокарта</Typography>
    <Box sx={{bgcolor: 'background.paper', borderRadius:'2px', margin:'20px'}}>
        <FormControl
        id='GPUForm'
        >
            <RadioGroup
            name='GPUGroup'>
                <FormControlLabel value='VooDoo3D' control={<Radio/>} label='VooDoo3D'/>
                <FormControlLabel value='GeForce GT600m' control={<Radio/>} label='GeForce GT600m'/>
                <FormControlLabel value='GeForce GT700' control={<Radio/>} label='GeForce GT700'/>
                <FormControlLabel value='GeForce GTX1080' control={<Radio/>} label='GeForce GTX1080'/>
                <FormControlLabel value='GeForce RTX1650' control={<Radio/>} label='GeForce RTX1650'/>
                <FormControlLabel value='GeForce RTX4070' control={<Radio/>} label='GeForce RTX4070'/>
            </RadioGroup>
        </FormControl>
    </Box>
    </div>
  )
}
