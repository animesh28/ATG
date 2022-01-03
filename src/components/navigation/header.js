import React, { useState } from 'react'
import logo from '../../assets/images/atg-logo.png'
import profile from '../../assets/images/profile.png'
import {
    TextField,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    ListItemIcon,
    IconButton,
    Backdrop,
    Typography,
    Fade,
    Modal,
    Box,
    FormControl,
    InputAdornment,
    InputLabel,
    FilledInput,
} from '@mui/material'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import login from '../../assets/images/login.png'
import google from '../../assets/images/google.png'
import fb from '../../assets/images/fb.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '0 0 36px 0',
    borderRadius: '8px'
  };

const Header = () => {
    const ariaLabel = { 'aria-label': 'description' };
    const [userAuth, setUserAuth] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [modalOpen, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

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

      const [userLogin,setUserLogin] = useState(false)
    return (
        <div className='navbar_wrap'>
            <div className='navbar'>
                
                <img src={logo} className='navbar__logo' alt='LOGO'/>

                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder='Search for your facourite groups in ATG'
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                {

                    userAuth ?
                    <div className='navbar__userAuth'>
                        <img className='navbar__userAuth-profile' src={profile} alt='profile'/>
                        <span className='navbar__userAuth-userName'>
                            Siddharth Goyal 
                            
                        </span>
                        <IconButton
                            onClick={handleClick}
                        >
                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" className='navbar__user-dropdown navbar__userAuth-dropdown'/>
                        </svg>
                        </IconButton>
                        
                    </div>
                    :
                    <div className='navbar__user'>
                        Create account. <em><pre style={{fontStyle: 'none'}}> It's free! 
                        <IconButton>
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={handleOpen}>
                            <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" className='navbar__user-dropdown'/>
                            </svg>
                        </IconButton>
                        </pre></em>
                    </div>
                }
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                    <Avatar /> Rahul Kumar
                    </MenuItem>
                    <MenuItem>
                    <Avatar /> Sonu Kumar
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                    </MenuItem>
                    <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                    </MenuItem>
                    <MenuItem
                        onClick={() => setUserAuth(false)}
                    >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </MenuItem>
                </Menu>

                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={modalOpen}
                        onClose={handleModalClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={modalOpen}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <div className='modal__header'>
                                    <h2 className='modal__head'>{userLogin?'Sign In' :'Create Account'}</h2>
                                    <span className='modal__head-text'>
                                        {userLogin?
                                        <>Dont have an account yet? <span onClick={()=>setUserLogin(false)}>Create new for free!</span></>:
                                        <>Already have an account? <span onClick={()=>setUserLogin(true)}>Sign in</span></>}
                                        
                                    </span>
                                </div>
                                <div className='modal__body'>
                                    <div className='modal__col'>
                                        {
                                            !userLogin ?
                                            <div className='modal__row'>
                                                <TextField id="filled-basic" label="First Name" variant="filled" className='fname'/>
                                                <TextField id="filled-basic" label="Last Name" variant="filled" />
                                            </div>
                                            : null
                                        }
                                        
                                        <div className='modal__row'>
                                            <TextField id="filled-basic" label="Email" variant="filled" className='full-btn'/>
                                        </div>
                                        <div className='modal__row'>
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
                                            <div className='modal__row'>
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
                                        

                                        <div className='modal__row'>
                                            <a className='modal__action-btn'>{userLogin?'Sign In' :'Create Account'}</a>
                                        </div>

                                        <div className='modal__row modal__row-social'>
                                            
                                            <a className='modal__social-btn'><img src={fb} alt='Facebook'/> Sign up with Facebook</a>
                                        </div>

                                        <div className='modal__row'>
                                            <a className='modal__social-btn'>
                                            <img src={google} alt='Facebook'/>Sign up with Google</a>
                                        </div>

                                        {
                                            userLogin ?
                                            <div className='modal__row'>
                                                <a className='modal__forgot'>Forgot Password?</a>
                                            </div>
                                            : null
                                        }

                                    </div>
                                    <div className='modal__col'>
                                    <img src={login} alt='modal hero'/>
                                    {
                                    !userLogin ? 
                                        <div className='modal__row terms'>
                                            By signing up, you agree to our Terms & conditions, Privacy policy                                        
                                        </div>
                                    :null}
                                        
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                        </Fade>
                    </Modal>
                </div>
            

                
            </div>
            
        </div>
    )
}

export default Header
