import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Icon, IconButton } from '@mui/material';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  //   height: 200,
  //   [theme.breakpoints.down('sm')]: {
  //     width: '100% !important' // Overrides inline-style
  //     // height: 100
  //   },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    borderRadius: '50%',
    '& .MuiImageBackdrop-root': {
      //   opacity: 0.15
      opacity: 1
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      //   border: '3px solid currentColor'
      border: '3px solid yellow',
      borderRadius: '50%'
    }
  }
}));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%'
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white
// }));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  //   backgroundColor: theme.palette.common.red,
  backgroundColor: 'red',
  borderRadius: '50%',
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.black,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity')
// }));

export default function ButtonBases() {
  return (
    // <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    <Box>
      <ImageButton
        focusRipple
        style={{
          //   border: '1px solid ',
          margin: '120px 20px 0px 20px  '
        }}
      >
        {/* <ImageSrc style={{ backgroundImage: `url(${'/assets/images_1/img_4.jpg'})` }} /> */}
        <ImageBackdrop className="MuiImageBackdrop-root" />
        {/* <Image> */}
        <Typography
          component="span"
          variant="subtitle1"
          //   color="inherit"
          sx={{
            position: 'relative',
            p: 4,
            pt: 2,
            color: 'white',
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
          }}
        >
          {/* Show All */}
          <IconButton>
            <Icon sx={{ color: 'white' }}>arrow_right_alt</Icon>
          </IconButton>
          {/* <ImageMarked className="MuiImageMarked-root" /> */}
        </Typography>
        {/* </Image> */}
      </ImageButton>
    </Box>
  );
}
