import axios from './axios';

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get('/dashboard'); // Mengambil data dashboard dari backend
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch dashboard data');
  }
};
