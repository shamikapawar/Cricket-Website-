// // import React from 'react';
// // import './Footer.css';
// // import { Button } from '../Button/Button';
// // import {Link} from 'react-router-dom';

// // const Footer = () => {
// //   return (
// //     <div className='footer-container'>
// //         <section className='footer-subscription'>
// //           <p className='footer-subscrtoiption-heading'>
// //             Join the Adventure newsletter to recieve our best vacation deals
// //           </p>
// //           <p className='footer-subscription-text'>
// //             You can also unsubscribe at any time.
// //           </p>
// //           <div className='input-areas'>
// //           <form>
// //             <input
// //               className='footer-input'
// //               name='email'
// //               type='email'
// //               placeholder='Your Email'
// //             />
// //             <Button buttonStyle='btn--outline'>Subscribe</Button>
// //           </form>
// //         </div>
// //       </section>

// //        <div class='footer-links'>
// //         <div className='footer-link-wrapper'>
// //           <div class='footer-link-items'>
// //             <h2>About Us</h2>
// //             <Link to='/sign-up'>How it works</Link>
// //             <Link to='/'>Testimonials</Link>
// //             <Link to='/'>Careers</Link>
// //             <Link to='/'>Investors</Link>
// //             <Link to='/'>Terms of Service</Link>
// //           </div>
// //           <div class='footer-link-items'>
// //             <h2>Contact Us</h2>
// //             <Link to='/'>Contact</Link>
// //             <Link to='/'>Support</Link>
// //             <Link to='/'>Destinations</Link>
// //             <Link to='/'>Sponsorships</Link>
// //           </div>
// //         </div>
// //         <div className='footer-link-wrapper'>
// //           <div class='footer-link-items'>
// //             <h2>Videos</h2>
// //             <Link to='/'>Submit Video</Link>
// //             <Link to='/'>Ambassadors</Link>
// //             <Link to='/'>Agency</Link>
// //             <Link to='/'>Influencer</Link>
// //           </div>
// //           <div class='footer-link-items'>
// //             <h2>Social Media</h2>
// //             <Link to='/'>Instagram</Link>
// //             <Link to='/'>Facebook</Link>
// //             <Link to='/'>Youtube</Link>
// //             <Link to='/'>Twitter</Link>
// //           </div>
// //         </div>
// //       </div>
// //       <section class='social-media'>
// //         <div class='social-media-wrap'>
// //           <div class='footer-logo'>
// //             <Link to='/' className='social-logo'>
// //               TRVL
// //               <i class='fab fa-typo3' />
// //             </Link>
// //           </div>
// //           <small class='website-rights'>TRVL © 2020</small>
// //           <div class='social-icons'>
// //             <Link
// //               class='social-icon-link facebook'
// //               to='/'
// //               target='_blank'
// //               aria-label='Facebook'
// //             >
// //               <i class='fab fa-facebook-f' />
// //             </Link>
// //             <Link
// //               class='social-icon-link instagram'
// //               to='/'
// //               target='_blank'
// //               aria-label='Instagram'
// //             >
// //               <i class='fab fa-instagram' />
// //             </Link>
// //             <Link
// //               class='social-icon-link youtube'
// //               to='/'
// //               target='_blank'
// //               aria-label='Youtube'
// //             >
// //               <i class='fab fa-youtube' />
// //             </Link>
// //             <Link
// //               class='social-icon-link twitter'
// //               to='/'
// //               target='_blank'
// //               aria-label='Twitter'
// //             >
// //               <i class='fab fa-twitter' />
// //             </Link>
// //             <Link
// //               class='social-icon-link twitter'
// //               to='/'
// //               target='_blank'
// //               aria-label='LinkedIn'
// //             >
// //               <i class='fab fa-linkedin' />
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // } 



// // export default Footer;


// import React from 'react';
// import './Footer.css';
// import { Button } from '../Button/Button';
// import { Link } from 'react-router-dom';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// const Footer = () => {
//   return (
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join the Wicket Watchers newsletter to receive our latest cricket updates
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form>
//             <input
//               className='footer-input'
//               name='email'
//               type='email'
//               placeholder='Your Email'
//             />
//             <Button buttonStyle='btn--outline'>Subscribe</Button>
//           </form>
//         </div>
//       </section>

//       <div className='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>About Us</h2>

//             <Link to='/aboutUs'>About Us</Link>

//             <Link to='/Terms-and-Conditions'>Terms of Service</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/contactUs'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Partnerships</Link>
//             <Link to='/'>Advertising</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div className='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Cricket Vlogs</Link>
//             <Link to='/'>Match Highlights</Link>
//             <Link to='/'>Interviews</Link>
//           </div>
//           <div className='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>YouTube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       {/* <section className='social-media'>
//         <div className='social-media-wrap'>
//           <div className='footer-logo'>
//             <Link to='/' className='social-logo'>
//               Wicket Watchers
//               <i className='fab fa-cricket' /> 
//             </Link>
//           </div>
//           <small className='website-rights'>Wicket Watchers © 2024</small>
//           <div className='social-icons'>
//             <Link
//               className='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <i className='fab fa-facebook-f' />
//             </Link>
//             <Link
//               className='social-icon-link instagram'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i className='fab fa-instagram' />
//             </Link>
//             <Link
//               className='social-icon-link youtube'
//               to='/'
//               target='_blank'
//               aria-label='YouTube'
//             >
//               <i className='fab fa-youtube' />
//             </Link>
//             <Link
//               className='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i className='fab fa-twitter' />
//             </Link>
//             <Link
//               className='social-icon-link linkedin'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i className='fab fa-linkedin' />
//             </Link>
//           </div>
//         </div>
//       </section> */}
//       <section className='social-media' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         {/* <div className='social-media-wrap'> */}
//         <div className='footer-logo'>
//           <Link to='/' className='social-logo'>
//             Wicket Watchers
//             <i className='fab fa-cricket' /> {/* Change the icon as per your need */}
//           </Link>
//         </div>
//         <small className='website-rights'>Wicket Watchers © 2024</small>
//         <div className='social-icons'>
//           <Link
//             className='social-icon-link facebook'
//             to='/'
//             target='_blank'
//             aria-label='Facebook'
//           >
//             {/* <i className='fab fa-facebook-f' /> */}
//             <FacebookIcon />

//           </Link>
//           <Link
//             className='social-icon-link instagram'
//             to='/'
//             target='_blank'
//             aria-label='Instagram'
//           >
//             {/* <i className='fab fa-instagram' /> */}
//             <InstagramIcon />
//           </Link>
//           <Link
//             className='social-icon-link youtube'
//             to='/'
//             target='_blank'
//             aria-label='YouTube'
//           >
//             {/* <i className='fab fa-youtube' /> */}
//             <YouTubeIcon />
//           </Link>
//           <Link
//             className='social-icon-link twitter'
//             to='/'
//             target='_blank'
//             aria-label='Twitter'
//           >
//             {/* <i className='fab fa-twitter' /> */}
//             <TwitterIcon />
//           </Link>
//           <Link
//             className='social-icon-link linkedin'
//             to='/'
//             target='_blank'
//             aria-label='LinkedIn'
//           >
//             {/* <i className='fab fa-linkedin' /> */}
//             <LinkedInIcon />
//           </Link>
//         </div>
//         {/* </div> */}
//       </section>
//     </div>
//   );
// }

// export default Footer;




import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>

        <div className='footer-heading'>
          <p style={{ fontSize: "25px" }}>Read Wicket Watchers blogs for latest Cricket updates</p>
          {/* <p style={{fontSize:"25px"}}>Tech Transformations</p> */}
        </div>
        <div className='footer-navlink'>
          <p>Quick Links</p>
          <ul>
            <li><Link to="/">BLOG</Link> </li>
            <li><Link to="/aboutUs">ABOUT US</Link> </li>
            <li><Link to="/contactUs">CONTACT US</Link> </li>
            <li><Link to="/PrivacyPolicy">PRIVACY POLICY</Link></li>
            <li><Link to="/Terms-and-Conditions">TERMS AND CONDITIONS</Link> </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p style={{ fontSize: "25px" }}> Wicket Watchers</p>
        <small>Wicket Watchers © 2024</small>
      </div>
    </div>
  );
}
export default Footer
