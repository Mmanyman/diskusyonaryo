import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bookImage from './book.jpg'; // Import the image

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
  },
  imageSection: {
    flex: '1 1 50%',
    position: 'relative',
    backgroundImage: `url(${bookImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  loginSection: {
    flex: '1 1 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  siteName: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  welcomeText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'rgb(176, 241, 255)',
    border: 'none',
    color: '#000',
    padding: '0.8rem',
    width: '100%',
    maxWidth: '300px',
    margin: '0.5rem auto',
    borderRadius: '25px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
  },
  divider: {
    textAlign: 'center',
    margin: '1.5rem 0',
    fontSize: '1.2rem',
    color: '#666',
  },
};

const HomePage = () => {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = 'rgb(155, 235, 255)';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = 'rgb(176, 241, 255)';
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageSection} />
      <div style={styles.loginSection}>
        <div style={styles.contentWrapper}>
          <h2 style={styles.siteName}>
            Diskusyonaryo.com
          </h2>
          <h1 style={styles.welcomeText}>
            WELCOME
          </h1>
          <Link
            to="/signup"
            style={styles.button}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Log in / Sign up
          </Link>
          <div style={styles.divider}>
            or
          </div>
          <Link
            to="/home"
            style={styles.button}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Continue as guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
