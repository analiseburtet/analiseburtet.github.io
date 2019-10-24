import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Unicorn from '../../assets/unicorn.jpg'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundImage: `url(${Unicorn})`,
        width: '20%',
        height:'50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      },
}));

export default function Footer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ backgroundColor: '#000000', height: '70px', color: '#ffffff', position: 'absolute', bottom: '0px' }}>
        <Box display="flex" alignItems="center" style={{ height:'100%' }}>  
            <Box flexGrow={1}>
                <Typography component="h1" >
                    Analise Burtet
                </Typography>
            </Box>
            <Box>
            <Button variant="contained" className={classes.button} onClick={handleOpen}>
                Click me!
            </Button>
            </Box>    
        </Box>
        </Container>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}