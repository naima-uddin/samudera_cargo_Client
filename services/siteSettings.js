// services/siteSettings.js
import axiosInstance from '@/lib/axiosInstance';

// Public fetch of site-wide logo/contact info.
export const getSiteSettings = async () => {
  try {
    const response = await axiosInstance.get('/site-settings');
    if (response.data.success) {
      return { success: true, data: response.data.data };
    }
    throw new Error(response.data.message || 'Failed to fetch site settings');
  } catch (error) {
    console.error('Get site settings error:', error);
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to fetch site settings',
    };
  }
};
