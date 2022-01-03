import React, {useState} from "react"
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    Divider,
    Button,
    CssBaseline,
    TextField,
    InputLabel,
    FormControl,
    IconButton,
    FilledInput,
    InputAdornment,
    SwipeableDrawer
} from '@mui/material'
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import sid from '../../assets/images/profile.png'
import { grey } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import login from '../../assets/images/login.png'
import google from '../../assets/images/google.png'
import fb from '../../assets/images/fb.png'


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const MobileHeader = (props) => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const [valuesCnfrm, setValuesCnfrm] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleChangeCnfrm = (prop) => (event) => {
        setValuesCnfrm({ ...valuesCnfrm, [prop]: event.target.value });
      };
    
      const handleClickShowPasswordCnfrm = () => {
        setValuesCnfrm({
          ...valuesCnfrm,
          showPassword: !valuesCnfrm.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleBottomDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
              <ListItem button>
                <img src={sid} alt="user_dp" style={{marginRight: '12px'}}/>
                <ListItemText primary='Siddharth Goyal' />
              </ListItem>
          </List>
          <Divider />
          <List>
            {['Register'].map((text, index) => (
              <ListItem button key={text} onClick={toggleBottomDrawer(true)}>
                <ListItemIcon>
                 <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
      
      const [userLogin, setUserLogin] = useState(false)
      return (
        <div 
            className="mob-header_wrap"
        >
          {['top'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
              <svg className='mob-header__icon' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="-0.00012207" width="10" height="10" fill="#868E96"/>
              </svg>

                <svg className='mob-header__icon' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z" fill="#868E96"/>
                </svg>

                <svg className='mob-header__icon'  width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96"/>
                </svg>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

<Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleBottomDrawer(false)}
        onOpen={toggleBottomDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'hidden',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <div>
              {
                  <div className='mob-header'>
                    <h2 className='mob-header__head'>{userLogin?'Sign In' :'Create Account'}</h2>
                    <IconButton
                        onClick={toggleBottomDrawer(false)}
                    >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529"/>
                    </svg>
                    </IconButton>
                  </div>
              }
              {
                  <div className='mob-header__body'>
                  <div className='mob-header__col'>
                      {
                          !userLogin ?
                          <div className='mob-header__row'>
                              <TextField id="filled-basic" label="First Name" variant="filled" className='fname'/>
                              <TextField id="filled-basic" label="Last Name" variant="filled" />
                          </div>
                          : null
                      }
                      
                      <div className='mob-header__row'>
                          <TextField id="filled-basic" label="Email" variant="filled" className='full-btn'/>
                      </div>
                      <div className='mob-header__row'>
                      <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                      <FilledInput
                          id="filled-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
                          endAdornment={
                          <InputAdornment position="end">
                              <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              >
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                          </InputAdornment>
                          }
                      />
                      </FormControl>
                      </div>

                      {
                          !userLogin ?
                          <div className='mob-header__row'>
                          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                          <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                          <FilledInput
                              id="filled-adornment-password"
                              type={valuesCnfrm.showPassword ? 'text' : 'password'}
                              value={valuesCnfrm.password}
                              onChange={handleChangeCnfrm('password')}
                              endAdornment={
                              <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPasswordCnfrm}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  >
                                  {valuesCnfrm.showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                              </InputAdornment>
                              }
                          />
                          </FormControl>                                        
                          </div>
                          : null
                      }
                      

                      <div className='mob-header__row mob-header-center'>
                          <a className='modal__action-btn mob-header__action-btn'>{userLogin?'Sign In' :'Create Account'}</a>
                          <a 
                          className="changeUserAuth" 
                          style={{textDecoration: 'underline', cursor: 'pointer'}}
                          onClick={() => setUserLogin(!userLogin)}
                          > 
                              {
                                  !userLogin ?
                                  'or, Sign In':
                                  'or, Create Account'
                              }
                          </a>
                      </div>

                      <div className='modal__row modal__row-social'>  
                          <a className='modal__social-btn mob-header_social'><img src={fb} alt='Facebook'/> Sign up with Facebook</a>
                      </div>

                      <div className='modal__row'>
                          <a className='modal__social-btn mob-header_social'>
                          <img src={google} alt='Facebook'/>
                          Sign up with Google
                          </a>
                      </div>

                      {
                          userLogin ?
                          <div className='modal__row'>
                              <a className='modal__forgot'>Forgot Password?</a>
                          </div>
                          : null
                      }

                  </div>
                  <div className='mob-header__col'>
                  {
                  !userLogin ? 
                      <div className='mob-header__row terms terms-mob'>
                          By signing up, you agree to our Terms & conditions, Privacy policy                                        
                      </div>
                  :null}
                      
                  </div>
              </div>
              }
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
        </div>
      );
}

export default MobileHeader