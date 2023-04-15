import React, { useState, forwardRef } from 'react';
import '../channel.css';
import { Box, IconButton, Icon, Button, Divider } from '@mui/material';
import MainVideoObject from './MainVideoObject';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import shadows from '@mui/material/styles/shadows';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainVideo() {
  // ** delete
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  // ** edit
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          border: '1px solid lightgray',
          backgroundColor: 'whitesmoke'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(to right bottom, #fff, #72A2c0)'
          }}
        >
          <p style={{ color: 'blue', fontSize: '25px', fontWeight: 'bold', marginLeft: '5px' }}>
            Main Video
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold', fontSize: 'large', marginRight: '5px' }}
            // onClick={() => navigate('/channel-list/button/OnMainVideo')}
          >
            +Add Main Video
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {MainVideoObject.map((ele, i) => {
            // console.log('ele', ele);
            return (
              <>
                <Box
                  sx={{
                    width: '250px',
                    height: '250px',
                    border: '1px solid #72A2c0',
                    marginTop: 2,
                    marginLeft: 1,
                    marginBottom: 2,
                    borderRadius: '10px',
                    boxShadow: 5
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '200px',
                      border: '3px solid black',
                      borderRadius: '10px 10px 0px 0px',
                      background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
                    }}
                  >
                    <img
                      // key={i}
                      // src={ele.channel_img}
                      alt="channel-logo"
                      sx={{ border: '3px solid black' }}
                    />
                  </Box>
                  <Box
                    // key={i}
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 'larger',
                      width: '100%',
                      height: '50px',
                      backgroundColor: 'gray',
                      color: 'white',
                      borderRadius: '0px 0px 10px 10px'
                    }}
                  >
                    {ele.list_name}
                    {/* sundrani video */}
                  </Box>
                  {/* <Box className="list-name" sx={{ display: 'flex' }}>
              <div>
                <Button color="error" sx={{ width: '1px', ml: 10 }}>
                  <Icon onClick={handleClickOpenDelete}>delete</Icon>
                </Button>
                <Dialog
                  open={openDelete}
                  keepMounted
                  onClose={handleCloseDelete}
                  TransitionComponent={Transition}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                  BackdropProps={{ style: { backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)' } }}
                >
                  <DialogTitle id="alert-dialog-slide-title">Confirm the action!</DialogTitle>
                  <Box position="absolute" top={0} right={0}>
                    <IconButton onClick={handleCloseDelete}>
                      <Icon>close</Icon>
                    </IconButton>
                  </Box>

                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Are you sure you want to delete this channel?
                    </DialogContentText>
                  </DialogContent>

                  <DialogActions>
                    <Button onClick={handleCloseDelete} color="secondary">
                      CLOSE
                    </Button>
                    <Button onClick={handleCloseDelete} color="error">
                      CONFIRM
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div>
                <Icon color="primary" sx={{ mt: 1 }} onClick={handleClickOpen}>
                  edit_icon
                </Icon>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  BackdropProps={{ style: { backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)' } }}
                >
                  <Box sx={{ color: '#0d47a1' }}>
                    <DialogTitle>{'Edit Channel'}</DialogTitle>
                    <Divider />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        src="/assets/images_1/img_1.jpg"
                        alt=""
                        style={{
                          width: '100px',
                          height: '100px',
                          border: '3px solid red',
                          borderRadius: '50%'
                        }}
                      />
                    </Box>
                    <DialogContent>
                      Channel Icon
                      <TextField fullWidth autoFocus id="name" type="file" margin="dense" />
                      Channel Name
                      <TextField
                        fullWidth
                        autoFocus
                        id="name"
                        type="text"
                        margin="dense"
                        // variant="standard"
                      />
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                      <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Cancel
                      </Button>

                      <Button onClick={handleClose} color="primary">
                        Update
                      </Button>
                    </DialogActions>
                  </Box>
                </Dialog>
              </div>
              	</Box> */}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
