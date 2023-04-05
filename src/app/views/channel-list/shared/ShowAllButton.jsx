import React from 'react';
import { Box, Button, IconButton, Icon, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'app/components';
import { styled } from '@mui/material';
import { SimpleCard } from 'app/components';

const ProgressRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px'
    }
  },
  '& .progress': {
    margin: theme.spacing(2)
  }
}));

const showAllMovie = [
  {
    image: '',
    name: 'Raja Bhaiya Ek Awara'
  },
  {
    image: '',
    name: 'Benam Badshah'
  },
  {
    image: '',
    name: 'Maya'
  }
];

export default function ShowAllButton() {
  const navigate = useNavigate();
  return (
    <>
      <ProgressRoot>
        <div className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Channel List', path: '/ChannelList' }, { name: 'Channel' }]}
          />
        </div>
        <SimpleCard>
          <Box className="main-videos">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontSize: 'large', fontWeight: 'bold' }}>New Movie</p>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: 'bold', fontSize: 'large' }}
                onClick={() => navigate('/channel-list/OnMainVideo')}
              >
                +Add Movie
              </Button>
            </Box>
            {showAllMovie.map((ele) => {
              return (
                <>
                  <Box
                    sx={{
                      width: '100%',
                      height: '150px',
                      border: '1px solid gray',
                      mb: 1,
                      display: 'flex'
                    }}
                  >
                    <Box sx={{ width: '20%', height: '100%', backgroundColor: 'lightblue' }}>
                      {ele.image}image
                    </Box>
                    <Box sx={{ width: '60%', height: '100%', backgroundColor: '', ml: 1 }}>
                      {ele.name}
                    </Box>
                    <Box sx={{width:"20%",height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <Fab aria-label="Edit" className="button" color="" sx={{border:"1px solid black", backgroundColor:"white",width:"50px",height:"50px"}}>
                        <Icon color="primary">edit_icon</Icon>
                      </Fab>
                      <Fab aria-label="Edit" className="button" color="" sx={{ml:1,border:"1px solid black", backgroundColor:"white",width:"50px",height:"50px"}}>
                        <IconButton className="button" aria-label="Delete" color="primary">
                          <Icon>delete</Icon>
                        </IconButton>
                      </Fab>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </SimpleCard>
      </ProgressRoot>
    </>
  );
}
