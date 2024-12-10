import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';

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
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Hook to redirect after Login

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await handleSignIn();
  };

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then(() => {
      window.alert("login success")
      navigate('/home');
    })
  }

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <div style={styles.leftSide} />
        <div style={styles.rightSide}>
          <div style={styles.formContainer}>
            <h1 style={styles.heading}>Log In</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
