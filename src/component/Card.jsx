import React, { Component } from 'react';

import github from '../img/github-logo.png';
import twitter from '../img/twitter-logo-01.png';
import linkedin from '../img/social-linkedin.png';
import profileImg from '../img/my-pic.JPG';
import './style.scss';

import img1 from '../img/sunrise.jpg';

class Card extends Component {
  render() {
    return (
      <div className='card-container'>
        <section className='img-card-section'>
          <div className='img-card-square'>
            <img className='img-card-style' src={img1} alt='img1' />
          </div>
        </section>
        <section className='name-card-section'>Enjoyable Programmer</section>
        <section className='title-card-section'>
          Front-End Web Developer
        </section>
        <section className='desc-card-section'>
          I'm a self-taught front-end web developer. My hobbies are playing
          video games, cooking , reading books and making a lot of creative
          design stuffs&nbsp;
          <span role='img' aria-label='emoji'>
            😍
          </span>
        </section>
        <section className='social-card-section'>
          <a
            href='https://www.linkedin.com/in/t-sriya-b4234510a/'
            target='blank'
          >
            <img className='social-card-style' src={linkedin} alt={linkedin} />
          </a>
          <a href='https://github.com/sriyaT' target='blank'>
            <img className='social-card-style' src={github} alt={github} />
          </a>
          <a href='https://twitter.com/t_sriya94' target='blank'>
            <img className='social-card-style' src={twitter} alt={twitter} />
          </a>
        </section>
        <img className='profile-img-card' alt='profile-img' src={profileImg} />
      </div>
    );
  }
}

export default Card;
