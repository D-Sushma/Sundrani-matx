// ** React Imports
// import { useState } from "react";
//  ** Breadcrumb import
import { Breadcrumb } from "app/components";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import { IconButton, Icon } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

const movieDetails = [
  {
    image: "/assets/images_1/movie_1.jpg",
    name: "raghubir",
    description:
      "A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something. Most people watch movies to entertain ...",
  },
  {
    image: "/assets/images_1/movie_1.jpg",
    name: "Benam Badshah",
    description:
      "A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something. Most people watch movies to entertain ...",
  },
  {
    image: "/assets/images_1/movie_1.jpg",
    name: "Raja Bhaiya Ek Awara",
    description:
      "A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something. Most people watch movies to entertain ...",
  },
  {
    image: "/assets/images_1/movie_1.jpg",
    name: "Raja Bhaiya Ek Awara",
    description:
      "A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something. Most people watch movies to entertain ...",
  },
];

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up("md")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

// for breadcrumb-----------------
const ProgressRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px",
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
  "& .progress": {
    margin: theme.spacing(2),
  },
}));
const CardMobile = () => {

  // ** State
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <ProgressRoot>
        <div className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: "Channel List", path: "/ChannelList" },
              { name: "Channel" },
            ]}
          />
        </div>

        {movieDetails.map((movie, i) => (
          <>
            <Card sx={{mb:2}}>
              <Grid container spacing={6}>
                <StyledGrid item md={3} xs={12}>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      width={220}
                      height={176}
                      alt="Apple "
                      // src="/assets/images_1/movie_1.jpg"
                      src={movie.image}
                    />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{
                    paddingTop: [
                      "0 !important",
                      "0 !important",
                      "1.5rem !important",
                    ],
                    paddingLeft: [
                      "1.5rem !important",
                      "1.5rem !important",
                      "0 !important",
                    ],
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 2, mt:3 }}>
                      {movie.name}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 3.5 }}>
                      {movie.description}
                    </Typography>
                    <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                      {/* Price:{" "} */}
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {/* $899 */}
                      </Box>
                    </Typography>
                  </CardContent>
                  <CardActions className="card-action-dense">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Button variant='outlined' sx={{width:30}}>
                       Delete
                      </Button>
                    </Box>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </>
        ))}
      </ProgressRoot>
    </>
  );
};

export default CardMobile;

// import React from 'react';
// import { Box, Button, IconButton, Icon, Fab } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Breadcrumb } from 'app/components';
// import { styled } from '@mui/material';
// import { SimpleCard } from 'app/components';

// const ProgressRoot = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: {
//     margin: '16px'
//   },
//   '& .breadcrumb': {
//     marginBottom: '30px',
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: '16px'
//     }
//   },
//   '& .progress': {
//     margin: theme.spacing(2)
//   }
// }));

// const showAllMovie = [
//   {
//     image: '',
//     name: 'Raja Bhaiya Ek Awara'
//   },
//   {
//     image: '',
//     name: 'Benam Badshah'
//   },
//   {
//     image: '',
//     name: 'Maya'
//   }
// ];

// export default function ShowAllButton() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <ProgressRoot>
//         <div className="breadcrumb">
//           <Breadcrumb
//             routeSegments={[{ name: 'Channel List', path: '/ChannelList' }, { name: 'Channel' }]}
//           />
//         </div>
//         <SimpleCard>
//           <Box className="main-videos">
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <p style={{ fontSize: 'large', fontWeight: 'bold' }}>New Movie</p>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ fontWeight: 'bold', fontSize: 'large' }}
//                 onClick={() => navigate('/channel-list/OnMainVideo')}
//               >
//                 +Add Movie
//               </Button>
//             </Box>
//             {showAllMovie.map((ele) => {
//               return (
//                 <>
//                   <Box
//                     sx={{
//                       width: '100%',
//                       height: '150px',
//                       border: '1px solid gray',
//                       mb: 1,
//                       display: 'flex'
//                     }}
//                   >
//                     <Box sx={{ width: '20%', height: '100%', backgroundColor: 'lightblue' }}>
//                       {ele.image}image
//                     </Box>
//                     <Box sx={{ width: '60%', height: '100%', backgroundColor: '', ml: 1 }}>
//                       {ele.name}
//                     </Box>
//                     <Box sx={{width:"20%",height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
//                       <Fab aria-label="Edit" className="button" color="" sx={{border:"1px solid black", backgroundColor:"white",width:"50px",height:"50px"}}>
//                         <Icon color="primary">edit_icon</Icon>
//                       </Fab>
//                       <Fab aria-label="Edit" className="button" color="" sx={{ml:1,border:"1px solid black", backgroundColor:"white",width:"50px",height:"50px"}}>
//                         <IconButton className="button" aria-label="Delete" color="primary">
//                           <Icon>delete</Icon>
//                         </IconButton>
//                       </Fab>
//                     </Box>
//                   </Box>
//                 </>
//               );
//             })}
//           </Box>
//         </SimpleCard>
//       </ProgressRoot>
//     </>
//   );
// }
