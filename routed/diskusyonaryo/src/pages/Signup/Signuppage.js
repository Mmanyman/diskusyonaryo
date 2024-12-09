import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
  },
  leftSide: {
    flex: '1 1 50%',
    backgroundImage: 'url("book.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  rightSide: {
    flex: '1 1 50%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    fontWeight: '500',
    marginBottom: '2rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    fontSize: '14pt',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14pt',
  },
  divider: {
    textAlign: 'center',
    margin: '1rem 0',
    color: '#666',
  },
  loginLink: {
    textDecoration: 'underline',
    color: 'blue',
    fontSize: '20px',
    textAlign: 'center',
    display: 'block',
  },
  '@media (max-width: 768px)': {
    leftSide: {
      display: 'none',
    },
    mainContent: {
      flexDirection: 'column',
    },
    rightSide: {
      padding: '20px',
    },
  },
};

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <div style={styles.leftSide} />
        <div style={styles.rightSide}>
          <div style={styles.formContainer}>
            <h1 style={styles.heading}>Get Started</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                style={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}> 
                Login 
              </button>
            </form>
            <h2 style={styles.divider}>or</h2>
            <Link to="/Signup1" style={styles.loginLink}>
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
