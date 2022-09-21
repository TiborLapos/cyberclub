import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './Welcome_CSS.css'


const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
};

export default function Welcome_Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='Welcome_warning' sx={style}>
            <Alert severity="warning" id='Warning_Icon'>
                <AlertTitle id='Warning_Title'>Warning</AlertTitle>
                <a id='Warning_Alert'>This is a warning alert — <strong>check it out!</strong></a>
            </Alert>
        </Box>
      </Modal>
    </div>
  );
}
