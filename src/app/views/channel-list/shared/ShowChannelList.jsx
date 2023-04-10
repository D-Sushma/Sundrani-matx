import React, { useState } from 'react';
import '../channel.css';
// import { Fab } from "@mui/material";
import { Box, IconButton, Icon, Button, Divider } from '@mui/material';
import ChannelListObject from './ChannelListObject';
import { useNavigate } from 'react-router-dom';
import AddCategoriesButton from './AddCategoriesButton';
import AddChannelButton from './AddChannelButton';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function ShowChannelList() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AddChannelButton />

      <Box id="channel">
        {ChannelListObject.map((ele, i) => {
          // console.log('ele', ele);
          return (
            <>
              <Box className="list list1">
                <Box
                  className="list-image"
                  sx={{
                    border: '3px solid black',
                    background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
                  }}
                >
                  <img
                    key={i}
                    src={ele.channel_img}
                    alt="channel-logo"
                    sx={{ border: '3px solid black' }}
                  />
                </Box>
                <Box key={i} className="list-name" sx={{ fontWeight: 'bold', fontSize: 'larger' }}>
                  {ele.list_name}
                </Box>
                <Box className="list-name">
                  <IconButton className="button" aria-label="Delete" color="error">
                    <Icon sx={{ mt: -2 }}>delete</Icon>
                  </IconButton>
                  {/* <Fab color="secondary" aria-label="Edit" className="button" color="primary" sx={{width: '15%', height:'5%'}}> */}
                  <Icon color="primary" sx={{ mt: 1 }} onClick={handleClickOpen}>
                    edit_icon
                  </Icon>
                  {/* </Fab> */}
                  <Dialog open={open} onClose={handleClose}>
                    <Box sx={{ color: '#0d47a1' }}>
                      <DialogTitle>{'Edit Channel'}</DialogTitle>
                      <Divider />
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                </Box>
              </Box>
            </>
          );
        })}
      </Box>

      <Divider sx={{ borderBottomWidth: 4, marginRight: '5%' }} />

      <Box id="inside-channel">
        <Box className="categories">
          <h1 style={{ marginLeft: '5px' }}>Categories</h1>
          <Box className="categories-list" sx={{ fontSize: 'large' }}>
            <p style={{ marginLeft: '5px' }}>category list</p>
          </Box>
        </Box>

        <Box className="videos">
          <Box className="main-videos">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p>Main Video</p>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: 'bold', fontSize: 'large' }}
                onClick={() => navigate('/channel-list/OnMainVideo')}
              >
                +Add Main Video
              </Button>
            </Box>
            <Box className="list list1" style={{ width: 160 }}>
              <Box className="list-image">
                <img src="" alt="channel-logo" />
              </Box>
              <Box className="list-name">Video</Box>
              <Box className="list-name">
                <IconButton className="button" aria-label="Delete" color="error">
                  <Icon sx={{ mt: -2 }}>delete</Icon>
                </IconButton>
                <Icon color="primary" sx={{ mt: 1 }}>
                  edit_icon
                </Icon>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box className="videos-category">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <p>Categories</p>
                <AddCategoriesButton />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <p>New Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton className="button" aria-label="Delete" color="error">
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box className="list list1" style={{ width: 160 }}>
                    <Box className="list-image">
                      <img src="" alt="channel-logo" />
                    </Box>
                    <Box className="list-name">Video</Box>
                    <Box className="list-name">
                      <Icon color="primary" sx={{ mt: 1 }}>
                        edit_icon
                      </Icon>
                      <IconButton className="button" aria-label="Delete" color="error">
                        <Icon sx={{ mt: -2 }}>delete</Icon>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      width: 160,
                      height: '180px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid lightgray'
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate('/channel-list/ShowAllButton')}
                    >
                      Show All
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <p>Upcoming Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton className="button" aria-label="Delete" color="error">
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
                <Box className="list list1" style={{ width: 160 }}>
                  <Box className="list-image">
                    <img src="" alt="channel-logo" />
                  </Box>
                  <Box className="list-name">Video</Box>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton className="button" aria-label="Delete" color="error">
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                  <p>Popular Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton className="button" aria-label="Delete" color="error">
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
                <Box className="list list1" style={{ width: 160 }}>
                  <Box className="list-image">
                    <img src="" alt="channel-logo" />
                  </Box>
                  <Box className="list-name">Video</Box>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton className="button" aria-label="Delete" color="error">
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
