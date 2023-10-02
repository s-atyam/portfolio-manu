import React from 'react'
import './body.css'
import github_dp from './images/github.png'
import insta_dp from './images/instagram.png'
import twitter_dp from './images/twitter.png'
import linkedin_dp from './images/linkedin.png'

const Body = () => {
  return (
    <div className='main-body'>
        <div className='body-left'>
            <img className='left-icons' src={linkedin_dp} alt='' />
            <img className='left-icons' src={twitter_dp} alt='' />
            <img className='left-icons' src={insta_dp} alt='' />
            <img className='left-icons' src={github_dp} alt='' />
        </div>
        <div className='body-right'>
            <div className='body-right-content'>
                <h5>Hi, my name is</h5>
                <h1>Satyajeet Gaurav</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec</p>
                <button className='right-content-btn'>Check out my item</button>
            </div>
        </div>
    </div>
  )
}

export default Body;