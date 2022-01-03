import React,{useState} from 'react'
import {
    Box,
    FormControl,
    Input,
    InputAdornment,
} from '@mui/material'
import marker from '../../assets/images/location.svg'
import Leisure from '../../assets/images/group1.png'
import Activism from '../../assets/images/group2.png'
import MBA from '../../assets/images/group3.png'
import Philosophy from '../../assets/images/group4.png'

let groups = [
    {
      image : Leisure,
      name: 'Leisure',
      follow: false
    },
    {
      image : Activism,
      name: 'Activism',
      follow: false
    },
    {
      image : MBA,
      name: 'MBA',
      follow: false
    },
    {
      image : Philosophy,
      name: 'Philosophy',
      follow: false
    }
  ]

const UserInfo = () => {
    const [edit,setEdit] = useState(false)

    const focusLocation = () => {
        const location = document.querySelector('#input-with-icon-adornment')
        location.focus()
      }
  
      const checkNullInput = () => {
        const location = document.querySelector('#input-with-icon-adornment')
        if(location.value == '') {
           setEdit(false)
        }
      }
  
      const handleEdit = () => {
        setEdit(true)
        checkNullInput()
      }

      const handleFollow = (event) => {
        event.target.classList.toggle('groups__follow-btn_active')
  
        if(event.target.classList.contains('groups__follow-btn_active')) {
          event.target.innerHTML = 'Followed'
        } else {
          event.target.innerHTML = 'Follow'
        }
      }

    return (
        <Box className='user-info'>
                  <FormControl variant="standard">
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={marker} alt='location'/>
                        </InputAdornment>
                      }
                      placeholder='Enter your location'
                      endAdornment={
                        !edit?
                        <InputAdornment position="end">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8333 1.34163L10.6583 0.166626L6.00001 4.82496L1.34167 0.166626L0.166672 1.34163L4.82501 5.99996L0.166672 10.6583L1.34167 11.8333L6.00001 7.17496L10.6583 11.8333L11.8333 10.6583L7.17501 5.99996L11.8333 1.34163Z" fill="black"/>
                          </svg>
                        </InputAdornment>
                        :
                        <InputAdornment position="end" style={{cursor: 'pointer'}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={focusLocation}>
                            <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black"/>
                          </svg>
                        </InputAdornment>
                      }
                      onBlur={ handleEdit}
                    />
                  </FormControl>

                  <div className='location-info'>
                    <div>
                    <svg className='location-icon' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.33333 9.00004H7.66667V10.3334H6.33333V9.00004ZM6.33333 3.66671H7.66667V7.66671H6.33333V3.66671ZM6.99333 0.333374C3.31333 0.333374 0.333332 3.32004 0.333332 7.00004C0.333332 10.68 3.31333 13.6667 6.99333 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99333 0.333374ZM7 12.3334C4.05333 12.3334 1.66667 9.94671 1.66667 7.00004C1.66667 4.05337 4.05333 1.66671 7 1.66671C9.94667 1.66671 12.3333 4.05337 12.3333 7.00004C12.3333 9.94671 9.94667 12.3334 7 12.3334Z" fill="black"/>
                    </svg>
                    </div>

                    <span className='location-text'>
                      Your location will help us serve better and extend a personalised experience.
                    </span>

                  </div>

                  <div className='groups'>
                    <div className='groups__head'>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black"/>
                    </svg>

                    <span className='groups__title'>Recommended Groups</span>
                    </div>

                    {
                      groups.map((item,i) => {

                      return (
                        <div className='groups__list'>
                          <img src={item.image} alt='group-dp'/>
                          <span className='groups__name'>{item.name}</span>
                          <div className='groups__btn-col'>
                          <a className={`groups__follow-btn`} 
                            onClick={handleFollow}
                          >
                            {
                              item.follow ?
                              'Followed' :
                              'Follow'
                            }
                            
                            </a>
                          </div>
                        </div>
                      )
                    }
                      )
                    }
                  </div>
                </Box>
    )
}

export default UserInfo