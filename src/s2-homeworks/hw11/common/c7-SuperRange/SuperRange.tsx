import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
               margin: '0 10px',
               color: '#00CC22',
               width: '147px',
               height: 4,
               padding: '25px 0',
               "& .MuiSlider-rail": {
                  height: 4,
                  backgroundColor: "#8B8B8B"
               },
               '& .MuiSlider-thumb': {
                  height: 18,
                  width: 18,
                  backgroundColor: '#fff',
                  border: "1px solid currentColor",
                  '&::before': { // add the small circle
                     content: '""',
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     width: '6px',
                     height: '6px',
                     borderRadius: '50%',
                     backgroundColor: '#00CC22',
                  },
                  '&:hover': {
                     boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                  },
                  '&:.airbnb-bar': {
                     height: 9,
                     width: 1,
                     backgroundColor: 'currentColor',
                     marginLeft: 1,
                     marginRight: 1
                  },
               },
               '& .MuiSlider-track': {
                  height: 4,
               },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
