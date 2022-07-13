import React from 'react'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/amy-nikitas-134701179/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://github.com/amysfiles'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>
                
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Amy</span>
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}