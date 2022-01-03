import React from "react";
import {
    IconButton
} from '@mui/material'
import marker from '../../assets/images/location.svg'
import job from '../../assets/images/job1.png'
import eye from '../../assets/images/views.svg'

const JobCard = () => {
    return (
    <div className="job-card">
        <div className="job-card__type">
        💼️ Job
        </div>
        <div className="job-card__role">
            <span>Software Developer</span>
            <IconButton>
                <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" 
                    fill="black"
                    />
                </svg>
            </IconButton>
        </div>

        <div className="job-card__info">
            <div className="job-card__info-item">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z" fill="black"/>
                </svg>
                <span>Innovaccer Analytics Private Ltd.</span>
            </div>

            <div className="job-card__info-item">
                <img src={marker} alt='location'/>
                <span>Noida, India</span>
            </div>

            
        </div>
        <div>
            <a className='border-btn'>Apply on Timesjobs</a>
        </div>
        <div className="article-card__post job-card__post event-post">
                    <div className="article-card__author">
                        <img src={job} alt="author_img"/>
                        <span className="article-card__author-name">Joseph Gray</span>
                    </div>

                    <div className="article-card__stats">
                        <img src={eye} alt="views"/>
                        <span className="article-card__stats-views">1.4k views</span>

                        <IconButton className="share-button-card">
                        <span className="article-card__share-button">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
                        </svg>
                        </span>
                        </IconButton>
                    </div>
            </div>
    </div>
    )
}

export default JobCard