import { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        variant="outlined"
        color="secondary"
        style={{ border: '3px solid orange' }}
        sx={{ m: 2, fontWeight: 'bold', color: 'red', fontSize: 'large' }}
        onClick={handleClickOpen}
      >
        Add Channel
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Create Channel</DialogTitle> */}
        <DialogTitle >{"Create Channel"}</DialogTitle>

        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          Channel Icon
          <TextField
            fullWidth
            autoFocus
            id="name"
            type="file"
            margin="dense"
            // label="Choose file"
          />
          Channel Name
          <TextField
            fullWidth
            autoFocus
            id="name"
            type="text"
            margin="dense"
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
