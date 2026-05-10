import axiosInstance from '@/lib/axiosInstance';

// ==================== MANUAL BOOKING API SERVICES ====================

/**
 * Get all manual bookings with pagination and filters
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number (default: 1)
 * @param {number} params.limit - Items per page (default: 20)
 * @param {string} params.status - Filter by status
 * @param {string} params.search - Search by booking number or customer name
 * @returns {Promise<Object>} Bookings data with pagination
 */
export const getMyManualBookings = async (params = {}) => {
  try {
    return {
      success: true,
      data: [],
      summary: { total: 0, booking_requested: 0, price_quoted: 0, booking_confirmed: 0, in_transit: 0, delivered: 0, cancelled: 0 },
      pagination: { total: 0, page: params.page || 1, limit: params.limit || 20, pages: 0 },
      message: 'Manual bookings endpoint is not available yet'
    };
  } catch (error) {
    console.error('❌ Get my manual bookings error:', error);
    return {
      success: true,
      data: [],
      summary: { total: 0, booking_requested: 0, price_quoted: 0, booking_confirmed: 0, in_transit: 0, delivered: 0, cancelled: 0 },
      pagination: { total: 0, page: params.page || 1, limit: params.limit || 20, pages: 0 },
      message: 'Manual bookings endpoint is not available yet'
    };
  }
};

/**
 * Get single manual booking by ID
 * @param {string} bookingId - Booking ID
 * @returns {Promise<Object>} Booking data
 */
export const getMyManualBookingById = async (bookingId) => {
  try {
    const response = await axiosInstance.get(`/my-manual-bookings/${bookingId}`);
    
    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }
    
    throw new Error(response.data.message || 'Failed to fetch booking');
    
  } catch (error) {
    console.error('❌ Get manual booking by ID error:', error);
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to fetch booking',
      data: null
    };
  }
};

/**
 * Delete manual booking by ID
 * @param {string} bookingId - Booking ID
 * @returns {Promise<Object>} Delete status
 */
export const deleteMyManualBooking = async (bookingId) => {
  try {
    const response = await axiosInstance.delete(`/my-manual-bookings/${bookingId}`);
    
    if (response.data.success) {
      return {
        success: true,
        message: response.data.message || 'Booking deleted successfully'
      };
    }
    
    throw new Error(response.data.message || 'Failed to delete booking');
    
  } catch (error) {
    console.error('❌ Delete manual booking error:', error);
    return {
      success: false,
      message: error.response?.data?.error || error.message || 'Failed to delete booking',
      error: error.response?.data
    };
  }
};

/**
 * Get manual booking timeline
 * @param {string} bookingId - Booking ID
 * @returns {Promise<Object>} Timeline data
 */
export const getMyManualBookingTimeline = async (bookingId) => {
  try {
    const response = await axiosInstance.get(`/my-manual-bookings/${bookingId}/timeline`);
    
    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }
    
    throw new Error(response.data.message || 'Failed to fetch timeline');
    
  } catch (error) {
    console.error('❌ Get timeline error:', error);
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to fetch timeline',
      data: null
    };
  }
};
