import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Typography, IconButton, Box } from '@mui/material';

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(/download.jpeg)', // Adjust the path according to your project structure
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    padding: '20px',
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a semi-transparent background for readability
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    marginLeft: '150px',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={contentStyle}>
        <Typography variant="h2" sx={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
          Get in Touch
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          We love hearing from our readers! Whether you have feedback, suggestions, or just want to chat about the latest in Sports, feel free to reach out to us.
          You can contact us via email at <a href="mailto:info@wicketwatchers.in" style={{ color: '#fff' }}>info@wicketwatchers.in</a> or connect with us on our social media channels.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#fff' }}>
          Address: 518, Global Business Hub, Opposite Eon IT Park, Kharadi, Pune 411014
        </Typography>

        <Box>
          <IconButton aria-label="email" href="mailto:info@wicketwatchers.in" sx={{ color: '#fff', marginRight: '10px' }}>
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="facebook" href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', marginRight: '10px' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter" href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', marginRight: '10px' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="linkedin" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', marginRight: '10px' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px', color: '#fff' }}>
          Thank you for being a part of the Wicket Watchers community. We look forward to sharing our passion for technology with you!
        </Typography>
      </div>
    </div>
  );
};

export default Contact;


