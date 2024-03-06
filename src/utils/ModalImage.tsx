import { Modal,Box } from '@mui/material';
import { useState,CSSProperties } from 'react';
interface ModalImageProps extends CSSProperties {
  small:string;
  large:string;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
 };
export const ModalImage = (props:ModalImageProps) => {
  const {small,large,...styleProps} = props
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        style={{
          backgroundImage:`url(${small})`,
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center center",
          cursor:'pointer',
          width: '100%',
          height: '100%',
          ...styleProps,
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
            width: '100%',
            height: '100%'
          }}>
          </Box>
      </Modal>
    </>
  )
}
