import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import axios from '../api/axios';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      Cookies.set('token', response.data.data.token);
      alert('Login successful!');
      window.location.href = '/profile'; // Redirect ke halaman profile
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(/path/to/your/background.jpg)', // Ganti dengan path gambar Anda
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 400,
          background: 'rgba(255, 255, 255, 0.85)', // Transparansi background putih
          borderRadius: 2,
          padding: 3,
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Tambah bayangan agar lebih menonjol
        }}
      >
        {/* Logo */}
        <img
          src="/path/to/logo.png" // Ganti dengan path logo Anda
          alt="Telkom Indonesia"
          style={{ marginBottom: '16px', maxWidth: '150px' }}
        />

        {/* Judul */}
        <Typography variant="h6" gutterBottom>
          Telkom Indonesia
        </Typography>
        <Typography variant="body2" gutterBottom>
          the world in your hand
        </Typography>

        {/* Alert Error */}
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}

        {/* Input Fields */}
        <TextField
          label="Username or Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />

        {/* Tombol Login */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginY: 2,
            paddingY: 1.5,
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#607d8b',
            '&:hover': {
              backgroundColor: '#455a64',
            },
          }}
        >
          LOGIN
        </Button>

        {/* Forgot Password */}
        <Typography variant="body2" color="textSecondary">
          <a href="/forgot-password" style={{ textDecoration: 'none', color: '#607d8b' }}>
            Forgot Username or Password?
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
