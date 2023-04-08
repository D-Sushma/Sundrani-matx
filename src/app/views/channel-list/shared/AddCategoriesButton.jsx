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
        variant="contained"
        color="primary"
        sx={{ fontWeight: 'bold', fontSize: 'large', height: '45px' }}
        onClick={handleClickOpen}
      >
        +Add Category
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Add Category</DialogTitle> */}
        <Box sx={{ color: '#0d47a1' }}>
          <DialogTitle>{'Add Category'}</DialogTitle>

          <DialogContent>
            Category Name
            <TextField fullWidth autoFocus id="name" type="file" margin="dense" />
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
