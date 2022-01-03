import React, { useState } from 'react'
import {
    Box,
    Tab,
    Tabs,
    Button,
    Divider,
    MenuItem,
    Menu,
} from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import { styled, alpha } from '@mui/material/styles';



//user account dropdown
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const PostNav = () => {

    const [groupStatus, setGroupStatus] = useState(false)
    
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
          setValue(newValue);
      };
    
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
    
      const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
          setAnchorEl(null);
      };

    return (
        <div className='postNav'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                        <Tab label="All Posts(32)" {...a11yProps(0)} />
                        <Tab label="Article" {...a11yProps(1)} />
                        <Tab label="Event" {...a11yProps(2)} />
                        <Tab label="Education" {...a11yProps(3)} />
                        <Tab label="Job" {...a11yProps(4)} />

                        <div className='button-group'>
                        <Button
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" className='write-post-dropdown'/>
                                </svg>                            
                            }
                            style={{
                                textTransform: 'none',
                                background: '#EDEEF0',
                                color: '#000',
                                fontFamily: 'IBM Plex Sans',
                                fontStyle: 'normal',
                                fontSize: '15px',
                                fontWeight: '500',
                                lineHeight: '20px',
                                letterSpacing: '0em',
                                textAlign: 'left'
                            }}
                        >
                            Write a Post
                        </Button>


                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                            </MenuItem>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                            </MenuItem>
                        </StyledMenu>


                        <Button
                            id="demo-customized-button"
                            variant="contained"
                            disableElevation
                            startIcon={
                                groupStatus?
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z" fill="#6A6A6B"/>
                                </svg>
                                :null
                            }
                            endIcon={
                                !groupStatus ?
                                <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white"/>
                                </svg>:
                                null
                                                                    
                            }
                            onClick={() => setGroupStatus(!groupStatus)}
                            style={
                                !groupStatus ?
                                {
                                    textTransform: 'none',
                                    background: '#2F6CE5',
                                    color: '#fff',
                                    fontFamily: 'IBM Plex Sans',
                                    fontStyle: 'normal',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    marginLeft: '16px'
                                } :
                                {
                                    textTransform: 'none',
                                    background: '#fff',
                                    color: '#6A6A6B',
                                    fontFamily: 'IBM Plex Sans',
                                    fontStyle: 'normal',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    marginLeft: '16px',
                                    border: '0.8px solid #989899'
                                }
                        }
                        >
                            Join Group
                        </Button>
                        </div>
                    </Tabs>
                </Box>
                </Box>
                </div>
    )
}

export default PostNav