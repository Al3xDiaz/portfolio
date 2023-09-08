import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import styles from './index.module.css'


interface Props {
  images?: string[];
}


export default function Carrusel(props: Props) {
  const theme = useTheme();
  
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return props.images && (
    <Box sx={{ flexGrow: 1 ,}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
      </Paper>
      <div 
        className={styles.image} 
        style={{background:`url(${props.images[activeStep] || ""}) no-repeat center/300px` ,}}
        >
          <div 
            className={styles.background}  
            style={{background:`#000 url(${props.images[activeStep] || ""}) no-repeat center/100%` ,}}
          >
        </div>
      </div>
      <MobileStepper
        variant="dots"
        steps={props.images.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === props.images.length - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  ) || <div></div>;
}
