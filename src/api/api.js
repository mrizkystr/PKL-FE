import axios from './axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/auth/login', { username, password });
    Cookies.set('token', response.data.data.token); // Simpan token di cookie
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const logout = async () => {
  try {
    await axios.post('/auth/logout');
    Cookies.remove('token'); // Hapus token dari cookie
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};

