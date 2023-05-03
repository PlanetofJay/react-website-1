import React from 'react';
import { Button } from '../Button';
import './styles.css';
import { Link } from 'react-router-dom';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input 
              type='email' 
              name='email' 
              placeholder='Your Email' 
              className='footer-input' 
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='sicial-media-logo'>
              GO travel
            </Link>
          </div>
          <small className='website-rights'>&copy;2023 GO travel, all rights reserved.</small>
          <div className='social-icons'>
            <a href='https://github.com/PlanetofJay' target='_blank' rel="noreferrer">
              <GithubIcon />
            </a>
            <a href='mailto:jae44dv@gmail.com'>
              <EmailIcon />
            </a>
            <a href='https://linkedin.com/in/planetofjay/' target='_blank' rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href='https://www.facebook.com/jae4f/' target='_blank' rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/ofjaylee/' target='_blank' rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}