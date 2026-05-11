# Samudera Cargo Cargo Client API

Postman collection generated from Samudera Cargo Cargo Client service wrappers.

## Environment Variables

- `baseUrl`: API base URL, e.g. `http://localhost:8000/api/v1`
- `authToken`: JWT token for authenticated requests

## Authentication & User Routes

### login [POST]

- Method: **POST**
- URL: `{{baseUrl}}/login`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### googleLogin [POST]

- Method: **POST**
- URL: `{{baseUrl}}/auth/google`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### registerCustomer [POST]

- Method: **POST**
- URL: `{{baseUrl}}/customer/register`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### verifyOTP [POST]

- Method: **POST**
- URL: `{{baseUrl}}/customer/verify-otp`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### resendOTP [POST]

- Method: **POST**
- URL: `{{baseUrl}}/customer/resend-otp`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### forgotPassword [POST]

- Method: **POST**
- URL: `{{baseUrl}}/forgot-password`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### resetPassword [POST]

- Method: **POST**
- URL: `{{baseUrl}}/users/reset-password`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### verifyResetOTP [POST]

- Method: **POST**
- URL: `{{baseUrl}}/verify-reset-otp`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### resendResetOTP [POST]

- Method: **POST**
- URL: `{{baseUrl}}/resend-reset-otp`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getUserProfile [GET]

- Method: **GET**
- URL: `{{baseUrl}}/users/profile`

### updateProfile [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/users/profile`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### changePassword [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/users/change-password`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### createAdmin [POST]

- Method: **POST**
- URL: `{{baseUrl}}/users/admin/setup`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### createStaff [POST]

- Method: **POST**
- URL: `{{baseUrl}}/users/staff`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getAllUsers [GET]

- Method: **GET**
- URL: `{{baseUrl}}/users`

### getUserById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/users/${userId}`

### updateUser [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/users/${userId}`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### deleteUser [DELETE]

- Method: **DELETE**
- URL: `{{baseUrl}}/users/${userId}`

### getUsersByRole [GET]

- Method: **GET**
- URL: `{{baseUrl}}/users/role/${role}`

## Booking Routes

### createBooking [POST]

- Method: **POST**
- URL: `{{baseUrl}}/createBooking`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getAllBookings [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getAllBooking?${queryParams}`

### getBookingById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/${bookingId}`

### updatePriceQuote [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/booking/${bookingId}/price-quote`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### acceptQuote [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/booking/${bookingId}/accept`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### rejectQuote [POST]

- Method: **POST**
- URL: `{{baseUrl}}/bookings/${bookingId}/reject-quote`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### cancelBooking [POST]

- Method: **POST**
- URL: `{{baseUrl}}/bookings/${bookingId}/cancel`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getMyBookings [GET]

- Method: **GET**
- URL: `{{baseUrl}}/my-bookings?${queryParams}&_=${timestamp}`

### getMyBookingById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/my-bookings/${bookingId}`

### getMyBookingTimeline [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/my-bookings/${bookingId}/timeline`

### getMyBookingInvoice [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/my-bookings/${bookingId}/invoice`

### getMyBookingQuote [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/my-bookings/${bookingId}/quote`

### getMyBookingsSummary [GET]

- Method: **GET**
- URL: `{{baseUrl}}/my-bookings/summary`

### trackByNumber [GET]

- Method: **GET**
- URL: `{{baseUrl}}/track/${trackingNumber}?_=${timestamp}`

### updateDeliveryStatus [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/bookings/${bookingId}/delivery-status`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### downloadBookingDocument [GET]

- Method: **GET**
- URL: `{{baseUrl}}/bookings/${bookingId}/documents/${documentId}/download`

### addDocument [POST]

- Method: **POST**
- URL: `{{baseUrl}}/bookings/${bookingId}/documents`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

## Invoice Routes

### getAllInvoices [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getAllInvoices?${queryParams}`

### getInvoiceById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getInvoiceById/${invoiceId}`

### getInvoicesByCustomer [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getMyInvoices/${customerId}?${queryParams}`

### updateInvoice [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/invoices/${invoiceId}`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### deleteInvoice [DELETE]

- Method: **DELETE**
- URL: `{{baseUrl}}/invoices/${invoiceId}`

### markInvoiceAsPaid [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/invoices/${invoiceId}/mark-paid`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### sendInvoiceEmail [POST]

- Method: **POST**
- URL: `{{baseUrl}}/invoices/${invoiceId}/send-email`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getInvoiceStats [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getInvoiceStats`

### generateInvoicePDF [POST]

- Method: **POST**
- URL: `{{baseUrl}}/invoices/${invoiceId}/generate-pdf`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### bulkUpdateInvoices [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/invoices/bulk/update`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getRecentInvoices [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/recent/list?limit=${limit}`

### getInvoiceByBooking [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/booking/${bookingId}`

### getInvoiceByShipment [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/shipment/${shipmentId}`

## Manual Invoice Routes

### getInvoiceById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/${invoiceId}`

### ManualdeleteInvoice [DELETE]

- Method: **DELETE**
- URL: `{{baseUrl}}/deletemanualInvoice/${invoiceId}`

### downloadInvoicePDF [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/${invoiceId}/download`

### getInvoiceSummary [GET]

- Method: **GET**
- URL: `{{baseUrl}}/invoices/summary`

## New Shipping Routes

### getMyNewShipments [GET]

- Method: **GET**
- URL: `{{baseUrl}}/my-new-shipments?${queryParams}`

### getMyShipmentById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/my-shipments/${shipmentId}`

### getMyShipmentTracking [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/my-shipments/${shipmentId}/tracking`

### getMyShipmentSummary [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/my-shipments/summary`

### requestReturn [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/my-shipments/${shipmentId}/return-request`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### cancelReturnRequest [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/return-requests/${returnRequestId}/cancel`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

## Return / Shipment Return Routes

### requestReturn [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-request`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getReturnRequestStatus [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-status`

### customerConfirmReturn [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-confirm`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### customerRejectReturn [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-reject-customer`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getAllReturnRequests [GET]

- Method: **GET**
- URL: `{{baseUrl}}/admin/return-requests?${queryParams}`

### approveReturnRequest [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/admin/return-requests/${returnId}/approve`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### rejectReturnRequest [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/admin/return-requests/${returnId}/reject`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getReturnStats [GET]

- Method: **GET**
- URL: `{{baseUrl}}/admin/return-requests/stats`

## Shipping Routes

### trackByNumber [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/track/${trackingNumber}?_=${timestamp}`

### getAllShipments [GET]

- Method: **GET**
- URL: `{{baseUrl}}/getAllShipment?${queryParams}`

### getShipmentById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}`

### updateShipmentStatus [PATCH]

- Method: **PATCH**
- URL: `{{baseUrl}}/shipments/${shipmentId}/status`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getMyShipments [GET]

- Method: **GET**
- URL: `{{baseUrl}}/my-shipments?${queryParams}`

### getMyShipmentById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/my-shipments/${shipmentId}`

### getMyShipmentTimeline [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/my-shipments/${shipmentId}/timeline`

### getShipmentById [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}`

### createShipment [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/create`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### updateShipment [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### deleteShipment [DELETE]

- Method: **DELETE**
- URL: `{{baseUrl}}/shipments/${shipmentId}`

### updateShipmentStatus [PATCH]

- Method: **PATCH**
- URL: `{{baseUrl}}/shipments/${shipmentId}/status`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### assignShipment [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/assign`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### addTrackingUpdate [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/tracking`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getShipmentTimeline [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}/timeline`

### updateTransportDetails [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/transport`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### addShipmentDocument [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/documents`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### addInternalNote [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/notes/internal`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### addCustomerNote [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/notes/customer`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### cancelShipment [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/cancel`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### addShipmentCost [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/costs`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getShipmentCosts [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}/costs`

### updateShipmentCost [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}/costs/${costId}`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### deleteShipmentCost [DELETE]

- Method: **DELETE**
- URL: `{{baseUrl}}/shipments/${shipmentId}/costs/${costId}`

### getPendingWarehouseShipments [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/warehouse/pending`

### receiveAtWarehouse [PATCH]

- Method: **PATCH**
- URL: `{{baseUrl}}/shipments/${shipmentId}/warehouse/receive`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### processWarehouse [PATCH]

- Method: **PATCH**
- URL: `{{baseUrl}}/shipments/${shipmentId}/warehouse/process`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getShipmentStatistics [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/stats/dashboard?${queryParams}`

### trackShipmentByNumber [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/track/${trackingNumber}`

### requestReturn [POST]

- Method: **POST**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-request`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getReturnRequestStatus [GET]

- Method: **GET**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-status`

### customerConfirmReturn [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-confirm`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### customerRejectReturn [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/shipments/${shipmentId}/return-reject-customer`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getAllReturnRequests [GET]

- Method: **GET**
- URL: `{{baseUrl}}/admin/return-requests?${queryParams}`

### approveReturnRequest [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/admin/return-requests/${returnId}/approve`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### rejectReturnRequest [PUT]

- Method: **PUT**
- URL: `{{baseUrl}}/admin/return-requests/${returnId}/reject`

**Headers:**

- Content-Type: application/json

**Request body:**

```json
{
  "sample": "data"
}
```

### getReturnStats [GET]

- Method: **GET**
- URL: `{{baseUrl}}/admin/return-requests/stats`
