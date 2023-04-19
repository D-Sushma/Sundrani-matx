import React from 'react';
import { Box, Button } from '@mui/material';

export default function Categories() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          // border: '1px solid lightgray',
          backgroundColor: 'whitesmoke',
          marginTop: 1,
          marginBottom: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
            // background: 'linear-gradient(to right bottom, #fff, #72A2c0)'
          }}
        >
          <p style={{ color: 'blue', fontSize: '25px', fontWeight: 'bold', marginLeft: '5px' }}>
            Categories
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold', fontSize: 'large', marginRight: '5px' }}
            // onClick={() => navigate('/channel-list/button/OnMainVideo')}
          >
            +Add Categories
          </Button>
        </Box>

        <Box sx={{ marginTop: 4, display: 'flex' }}>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Trending
            </div>
          </Box>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              New Movie
            </div>
          </Box>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Popular Movie
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
