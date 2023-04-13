import React, { useState, forwardRef } from "react";
import "../channel.css";
import { Box, IconButton, Icon, Button, Divider } from "@mui/material";
import ChannelListObject from "./ChannelListObject";
import { useNavigate } from "react-router-dom";
import AddCategoriesButton from "./AddCategoriesButton";
import AddChannelButton from "./AddChannelButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ShowChannelList() {
  // ** delete
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  // ** edit
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
                    border: "3px solid black",
                    background:
                      "linear-gradient(to right bottom, #430089, #82ffa1)",
                  }}
                >
                  <img
                    key={i}
                    src={ele.channel_img}
                    alt="channel-logo"
                    sx={{ border: "3px solid black" }}
                  />
                </Box>
                <Box
                  key={i}
                  className="list-name"
                  sx={{ fontWeight: "bold", fontSize: "larger" }}
                >
                  {ele.list_name}
                </Box>
                <Box className="list-name" sx={{ display: "flex" }}>
                  <div>
                   <Button color="error" sx={{ width: "1px", ml: 9 }}>
                      <Icon onClick={handleClickOpenDelete}>delete</Icon>
                    </Button>
                    <Dialog
                      open={openDelete}
                      keepMounted
                      onClose={handleCloseDelete}
                      TransitionComponent={Transition}
                      aria-labelledby="alert-dialog-slide-title"
                      aria-describedby="alert-dialog-slide-description"
                      BackdropProps ={{ style: { backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)' }, }}
                      // BackdropProps ={{ style: { backgroundColor: 'rgba(52, 52, 52, 0.1)' }, }}
                      // BackdropProps ={{ style: { backgroundColor: 'transparent' }, }}
                    >
                      <DialogTitle id="alert-dialog-slide-title">
                        Confirm the action!
                      </DialogTitle>
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
                    <Icon
                      color="primary"
                      sx={{ mt: 1 }}
                      onClick={handleClickOpen}
                    >
                      edit_icon
                    </Icon>
                    <Dialog open={open} onClose={handleClose} BackdropProps ={{ style: { backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.2)' }, }}>
                      <Box sx={{ color: "#0d47a1" }}>
                        <DialogTitle>{"Edit Channel"}</DialogTitle>
                        <Divider />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/assets/images_1/img_1.jpg"
                            alt=""
                            style={{
                              width: "100px",
                              height: "100px",
                              border: "3px solid red",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <DialogContent>
                          Channel Icon
                          <TextField
                            fullWidth
                            autoFocus
                            id="name"
                            type="file"
                            margin="dense"
                          />
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
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>

                          <Button onClick={handleClose} color="primary">
                            Update
                          </Button>
                        </DialogActions>
                      </Box>
                    </Dialog>
                  </div>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>

      <Divider sx={{ borderBottomWidth: 4, marginRight: "5%" }} />

      <Box id="inside-channel">
        <Box className="categories">
          <h1 style={{ marginLeft: "5px" }}>Categories</h1>
          <Box className="categories-list" sx={{ fontSize: "large" }}>
            <p style={{ marginLeft: "5px" }}>category list</p>
          </Box>
        </Box>

        <Box className="videos">
          <Box className="main-videos">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Main Video</p>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: "bold", fontSize: "large" }}
                onClick={() => navigate("/channel-list/OnMainVideo")}
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
                <IconButton
                  className="button"
                  aria-label="Delete"
                  color="error"
                >
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Categories</p>
                <AddCategoriesButton />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <p>New Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton
                      className="button"
                      aria-label="Delete"
                      color="error"
                    >
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box className="list list1" style={{ width: 160 }}>
                    <Box className="list-image">
                      <img src="" alt="channel-logo" />
                    </Box>
                    <Box className="list-name">Video</Box>
                    <Box className="list-name">
                      <Icon color="primary" sx={{ mt: 1 }}>
                        edit_icon
                      </Icon>
                      <IconButton
                        className="button"
                        aria-label="Delete"
                        color="error"
                      >
                        <Icon sx={{ mt: -2 }}>delete</Icon>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      width: 160,
                      height: "180px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid lightgray",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/channel-list/ShowAllButton")}
                    >
                      Show All
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <p>Upcoming Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton
                      className="button"
                      aria-label="Delete"
                      color="error"
                    >
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
                    <IconButton
                      className="button"
                      aria-label="Delete"
                      color="error"
                    >
                      <Icon sx={{ mt: -2 }}>delete</Icon>
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <p>Popular Movie</p>
                  <Box className="list-name">
                    <Icon color="primary" sx={{ mt: 1 }}>
                      edit_icon
                    </Icon>
                    <IconButton
                      className="button"
                      aria-label="Delete"
                      color="error"
                    >
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
                    <IconButton
                      className="button"
                      aria-label="Delete"
                      color="error"
                    >
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
