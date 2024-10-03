import React from 'react'
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material'
export default function MainList({className}:{className:string}) {
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
