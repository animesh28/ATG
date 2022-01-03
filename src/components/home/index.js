import React, { useState, useEffect } from 'react'

import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    Select,
    InputLabel
} from '@mui/material'

import ArticleCard from './card';
import JobCard from './jobCard';
import UserInfo from './user-info';
import PostNav from './postNav';
import PropTypes from 'prop-types';

const Home = () => {

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  
  //post filter tabs
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const [value, setValue] = React.useState(0);

    

    

    return (
        <main>
          
            <div className='cover'>
                <h1 className='cover__head'>Computer Engineering</h1>
                <p className='cover__text'>142,765 Computer Engineers follow this</p>
            </div>

            <div className='body_wrapper'>
              <PostNav/>
                
              <div className='mobile-postNav'>
                <span class="mobile-postNav__head">Posts(386)</span>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={filter}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='All'>All</MenuItem>
                  <MenuItem value='Article'>Article</MenuItem>
                  <MenuItem value='Event'>Event</MenuItem>
                  <MenuItem value='Education'>Education</MenuItem>
                  <MenuItem value='Job'>Job</MenuItem>
                </Select>
              </FormControl>
              </div>

                <div className='article_wrap'>
                <Box>
                    <TabPanel value={value} index={0}>
                        <ArticleCard/>
                        <JobCard/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                </Box>


                <UserInfo/>
                </div>
                
            
            </div>

            
            
        </main>
        
    )
}

export default Home
