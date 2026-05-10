import axiosInstance from '@/lib/axiosInstance';

// ==================== MANUAL SHIPMENT API SERVICES ====================

/**
 * Get all manual shipments with pagination and filters
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number (default: 1)
 * @param {number} params.limit - Items per page (default: 20)
 * @param {string} params.status - Filter by status
 * @param {string} params.search - Search by tracking number or customer name
 * @returns {Promise<Object>} Shipments data with pagination
 */
export const getMyManualShipments = async (params = {}) => {
  try {
    return {
      success: true,
      data: [],
      summary: {
        total: 0,
        active: 0,
        delivered: 0,
        cancelled: 0,
        pending: 0,
        inTransit: 0
      },
      pagination: { total: 0, page: params.page || 1, limit: params.limit || 20, pages: 0 },
      message: 'Manual shipments endpoint is not available yet'
    };
  } catch (error) {
    console.error('❌ Get my manual shipments error:', error);
    return {
      success: true,
      data: [],
      summary: {
        total: 0,
        active: 0,
        delivered: 0,
        cancelled: 0,
        pending: 0,
        inTransit: 0
      },
      pagination: { total: 0, page: params.page || 1, limit: params.limit || 20, pages: 0 },
      message: 'Manual shipments endpoint is not available yet'
    };
  }
};

/**
 * Get single manual shipment by ID
 * @param {string} shipmentId - Shipment ID
 * @returns {Promise<Object>} Shipment data
 */
export const getMyManualShipmentById = async (shipmentId) => {
  try {
    const response = await axiosInstance.get(`/my-manual-shipments/${shipmentId}`);

    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }

    throw new Error(response.data.message || 'Failed to fetch shipment');
  } catch (error) {
    console.error('❌ Get manual shipment by ID error:', error);

    if (error.response?.status === 404) {
      return {
        success: true,
        data: null,
        message: 'No manual shipment available'
      };
    }

    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to fetch shipment',
      data: null
    };
  }
}

/**
 * Get manual shipment timeline
 * @param {string} shipmentId - Shipment ID
 * @returns {Promise<Object>} Timeline data
 */
export const getMyManualShipmentTimeline = async (shipmentId) => {
  try {
    const response = await axiosInstance.get(`/my-manual-shipments/${shipmentId}/timeline`);
    
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

/**
 * Get manual shipment tracking info
 * @param {string} shipmentId - Shipment ID
 * @returns {Promise<Object>} Tracking info
 */
export const getMyManualShipmentTracking = async (shipmentId) => {
  try {
    const response = await axiosInstance.get(`/my-manual-shipments/${shipmentId}/tracking`);
    
    if (response.data.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }
    
    throw new Error(response.data.message || 'Failed to fetch tracking info');
    
  } catch (error) {
    console.error('❌ Get tracking error:', error);
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to fetch tracking info',
      data: null
    };
  }
};

/**
 * Delete manual shipment by ID
 * @param {string} shipmentId - Shipment ID
 * @returns {Promise<Object>} Delete status
 */
export const deleteMyManualShipment = async (shipmentId) => {
  try {
    const response = await axiosInstance.delete(`/my-manual-shipments/${shipmentId}`);
    
    if (response.data.success) {
      return {
        success: true,
        message: response.data.message || 'Shipment deleted successfully'
      };
    }
    
    throw new Error(response.data.message || 'Failed to delete shipment');
    
  } catch (error) {
    console.error('❌ Delete manual shipment error:', error);
    return {
      success: false,
      message: error.response?.data?.error || error.message || 'Failed to delete shipment',
      error: error.response?.data
    };
  }
};
