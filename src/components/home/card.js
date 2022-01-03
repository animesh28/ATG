import React from "react";
import article1 from '../../assets/images/article1.png'
import education1 from '../../assets/images/education1.png'
import event1 from '../../assets/images/event1.png'
import sarah from '../../assets/images/sarah.png'
import sarthak from '../../assets/images/sarthak.png'
import ronal from '../../assets/images/ronal.png'
import eye from '../../assets/images/views.svg'
import marker from '../../assets/images/location.svg'
import {
    IconButton
} from '@mui/material'

const ArticleCard = () => {
    const articles = [
        {
            type: '✍️ Article',
            title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            excerpt: `I’ve worked in UX for the better part of a decade. From now on, I plan to rei…`,
            author: 'Sarthak Kamra',
            views: '1.4k views',
            image: article1,
            author_img: sarthak
        },
        {
            type: '🔬️ Education',
            title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            excerpt: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            author: 'Sarah West',
            views: '1.4k views',
            image: education1,
            author_img: sarah
        },
        {
            type: '🗓️ Meetup',
            title: 'Finance & Investment Elite Social Mixer @Lujiazui',
            excerpt: '',
            author: 'Ronal Jones',
            views: '1.4k views',
            image: event1,
            author_img: ronal
        }
    ]

    return (
            articles.map((item,i) => (
            <div className="article-card">
                <img src={item.image} alt="" className="head-image"/>

                <div className="article-card__type">
                    {item.type}
                </div>

                <div className="article-card__title">
                    <h2 className="article-card__title-item">
                        {item.title}
                    </h2>
                    <div>
                    <IconButton>
                    <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" 
                        fill="black"
                        />
                    </svg>
                    </IconButton>
                    </div>
                </div>
                
                {
                    item.type != '🗓️ Meetup' ?
                    <div className="article-card__excerpt">
                        {item.excerpt}
                    </div>
                    :
                    <>
                    <div className="job-card__info event-info">
                        <div className="job-card__info-item">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black"/>
                        </svg>
                            <span>Innovaccer Analytics Private Ltd.</span>
                        </div>

                        <div className="job-card__info-item">
                            <img src={marker} alt='location'/>
                            <span>Noida, India</span>
                        </div>

                        
                    </div>
                    <div>
                        <a className='border-btn' style={{margin: '16px 20px 0px 20px'}}>Apply on Timesjobs</a>
                    </div>
                    </>
                }
                

                {
                    item.type != '🗓️ Meetup' ?
                    <div className="article-card__post">
                    <div className="article-card__author">
                        <img src={item.author_img} alt="author_img"/>
                        <span className="article-card__author-name">{item.author}</span>
                    </div>

                    <div className="article-card__stats">
                        <img src={eye} alt="views"/>
                        <span className="article-card__stats-views">{item.views}</span>

                        <IconButton className="share-button-card">
                        <span className="article-card__share-button">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
                        </svg>
                        </span>
                        </IconButton>
                    </div>
                </div> :
                <div className="article-card__post event-post">
                <div className="article-card__author">
                    <img src={item.author_img} alt="author_img"/>
                    <span className="article-card__author-name">{item.author}</span>
                </div>

                <div className="article-card__stats">
                    <img src={eye} alt="views"/>
                    <span className="article-card__stats-views">{item.views}</span>

                    <IconButton className="share-button-card">
                    <span className="article-card__share-button">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
                    </svg>
                    </span>
                    </IconButton>
                </div>
            </div>
                }
            </div>
            ))
    )
}

export default ArticleCard