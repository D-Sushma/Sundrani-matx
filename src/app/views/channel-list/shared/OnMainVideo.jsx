import { Button, Grid, Icon, styled, Box, InputLabel } from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import { SimpleCard } from 'app/components';
import { Breadcrumb } from 'app/components';

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

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px'
}));

const SimpleForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { username, firstName, email } = state;

  return (
    <>
      <ProgressRoot>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="breadcrumb">
            <Breadcrumb
              routeSegments={[{ name: 'Channel List', path: '/ChannelList' }, { name: 'Channel' }]}
            />
          </div>
          <Button
            variant="contained"
            sx={{ height: 30 }}
            color="primary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>

        <SimpleCard title="Video Details">
          <Box sx={{ width: '60%', ml: 30 }}>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={8}>
                <Grid item lg={12} md={6} sm={12} xs={12} sx={{ mt: 2, ml: 5, mr: 5 }}>
                  <InputLabel sx={{ color: 'blue', fontWeight: 'bold', fontSize: '15px' }}>
                    Video Name:<span style={{ color: 'red' }}>*</span>
                  </InputLabel>
                  <TextField
                    type="text"
                    name="username"
                    id="standard-basic"
                    value={username || ''}
                    onChange={handleChange}
                    errorMessages={['this field is required']}
                    //   label="Username (Min length 4, Max length 9)"
                    label="Enter Video Name"
                    validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
                  />
                  <InputLabel sx={{ color: 'blue', fontWeight: 'bold', fontSize: '15px' }}>
                    Video Description:
                  </InputLabel>
                  <TextField
                    type="text"
                    name="firstName"
                    label="Enter Video Description"
                    onChange={handleChange}
                    value={firstName || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  {/* <hr style={{ color: 'lightgray' }} /> */}
                  <InputLabel sx={{ color: 'blue', fontWeight: 'bold', fontSize: '15px' }}>
                    Video Status:
                  </InputLabel>
                  <TextField
                    type="text"
                    name="email"
                    //   label="Email"
                    label="Select Status-> Public, Private"
                    value={email || ''}
                    onChange={handleChange}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                  {/* <hr /> */}
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid
                  item
                  lg={12}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{ display: 'flex', justifyContent: 'space-between', ml: 10 }}
                >
                  <Grid sx={{ ml: 5, width: '350px' }}>
                    <InputLabel sx={{ color: 'blue', fontWeight: 'bold', fontSize: '15px' }}>
                      Video:<span style={{ color: 'red' }}>*</span>
                    </InputLabel>
                    <TextField fullWidth autoFocus id="name" type="file" margin="dense" />
                  </Grid>
                  <Grid sx={{ mr: 5, width: '350px' }}>
                    <InputLabel sx={{ color: 'blue', fontWeight: 'bold', fontSize: '15px' }}>
                      Video Image:<span style={{ color: 'red' }}>*</span>
                    </InputLabel>
                    <TextField fullWidth autoFocus id="name" type="file" margin="dense" />
                  </Grid>
                </Grid>
              </Grid>

              <br />
              <br />
              <Button color="primary" variant="contained" type="submit" sx={{ ml: 40 }}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
              </Button>
            </ValidatorForm>
          </Box>
        </SimpleCard>
      </ProgressRoot>
    </>
  );
};

export default SimpleForm;
