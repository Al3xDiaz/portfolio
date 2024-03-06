import { Modal,Box } from '@mui/material';
import { useState } from 'react';
interface ModalImageProps{
  small:string;
  large:string;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: '70vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
 };
export const ModalImage = ({small,large}:ModalImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        style={{
          backgroundImage:`url(${small})`,
          height:"9rem",
          width:"11rem",
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center center",
          cursor:'pointer',
        }}>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        >
          <Box sx={{...style,
            backgroundImage: `url("${large}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          </Box>
      </Modal>
    </div>
  )
}
