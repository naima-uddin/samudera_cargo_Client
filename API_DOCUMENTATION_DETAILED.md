# Samudera Cargo Cargo Client Detailed API Documentation

## Overview
This document describes every API route used by `B2B_Cargo_Client`.
All requests use the configured base URL from `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

The client uses `B2B_Cargo_Client/lib/axiosInstance.js` for most calls, so authentication tokens are automatically attached.

---

# 1. Authentication APIs (`services/Authentication.js`)

## `POST /login`
- Auth: No
- Description: Login with email and password
- Request body:
  ```json
  {
    "email": "customer@example.com",
    "password": "Password123"
  }
  ```
- Response:
  - `success`: boolean
  - `token`: JWT
  - `data`: user object
- Usage: `login(email, password)`

## `POST /auth/google`
- Auth: No
- Description: Login using Google SSO
- Request body:
  ```json
  {
    "idToken": "GOOGLE_ID_TOKEN",
    "email": "customer@example.com",
    "name": "John Doe",
    "photoURL": "https://...",
    "uid": "google-uid"
  }
  ```
- Usage: `googleLogin(idToken, email, name, photoURL, uid)`

## `POST /customer/register`
- Auth: No
- Description: Register customer and send OTP
- Request body is application-specific and may include name, email, phone, password, address.
- Usage: `registerCustomer(userData)`

## `POST /customer/verify-otp`
- Auth: No
- Description: Verify registration OTP
- Request body:
  ```json
  {
    "email": "customer@example.com",
    "otp": "123456"
  }
  ```
- Usage: `verifyOTP(email, otp)`

## `POST /customer/resend-otp`
- Auth: No
- Description: Resend OTP to the customer
- Request body:
  ```json
  {
    "email": "customer@example.com"
  }
  ```
- Usage: `resendOTP(email)`

## `POST /forgot-password`
- Auth: No
- Description: Request password reset OTP
- Request body:
  ```json
  {
    "email": "customer@example.com"
  }
  ```
- Usage: `forgotPassword(email)`

## `POST /reset-password`
- Auth: No
- Description: Reset password after OTP
- Request body:
  ```json
  {
    "email": "customer@example.com",
    "otp": "654321",
    "newPassword": "NewPassword123"
  }
  ```
- Usage: `resetPassword(email, otp, newPassword)`

## `POST /verify-reset-otp`
- Auth: No
- Description: Verify reset password OTP
- Request body:
  ```json
  {
    "email": "customer@example.com",
    "otp": "654321"
  }
  ```
- Usage: `verifyResetOTP(email, otp)`

## `POST /resend-reset-otp`
- Auth: No
- Description: Resend reset password OTP
- Request body:
  ```json
  {
    "email": "customer@example.com"
  }
  ```
- Usage: `resendResetOTP(email)`

## `GET /users/profile`
- Auth: Yes
- Description: Get authenticated user profile
- Usage: `getUserProfile()`

# 2. Booking APIs (`services/booking.js`)

## `POST /createBooking`
- Auth: Yes
- Description: Customer creates a new booking
- Request body example:
  ```json
  {
    "origin": "Chennai",
    "destination": "Toronto",
    "freightType": "Air Freight",
    "weight": 250,
    "dimensions": "2x2x2",
    "senderName": "Acme Ltd",
    "receiverName": "Global Importers",
    "notes": "Handle carefully"
  }
  ```
- Usage: `createBooking(bookingData)`

## `GET /getAllBooking`
- Auth: Yes
- Description: Fetch booking list (admin/staff)
- Query params:
  - `page`
  - `limit`
  - `status`
  - `search`
  - `startDate`
  - `endDate`
  - `sort`
  - `sortBy`
  - `sortOrder`
- Usage: `getAllBookings(params)`

## `GET /bookings/:bookingId`
- Auth: Yes
- Description: Get booking details by ID
- Usage: `getBookingById(bookingId)`

## `PUT /booking/:bookingId/price-quote`
- Auth: Yes
- Description: Admin updates booking quote
- Request body example:
  ```json
  {
    "price": 1200,
    "currency": "USD",
    "notes": "Updated quote"
  }
  ```
- Usage: `updatePriceQuote(bookingId, quoteData)`

## `PUT /booking/:bookingId/accept`
- Auth: Yes
- Description: Customer accepts quote
- Request body example:
  ```json
  {
    "notes": "Accepting quote"
  }
  ```
- Usage: `acceptQuote(bookingId, notes)`

## `POST /bookings/:bookingId/reject-quote`
- Auth: Yes
- Description: Customer rejects quote
- Request body example:
  ```json
  {
    "reason": "Price too high"
  }
  ```
- Usage: `rejectQuote(bookingId, reason)`

## `POST /bookings/:bookingId/cancel`
- Auth: Yes
- Description: Cancel booking
- Request body example:
  ```json
  {
    "reason": "Changed plans"
  }
  ```
- Usage: `cancelBooking(bookingId, reason)`

## `GET /my-bookings`
- Auth: Yes
- Description: Get bookings for currently logged-in customer
- Query params:
  - `page`
  - `limit`
  - `status`
  - `sort`
- Usage: `getMyBookings(params)`

## `GET /my-bookings/:bookingId`
- Auth: Yes
- Description: Get customer booking details
- Usage: `getMyBookingById(bookingId)`

## `GET /my-bookings/:bookingId/timeline`
- Auth: Yes
- Description: Get booking timeline events
- Usage: `getMyBookingTimeline(bookingId)`

## `GET /my-bookings/:bookingId/invoice`
- Auth: Yes
- Description: Get invoice associated with booking
- Usage: `getMyBookingInvoice(bookingId)`

## `GET /my-bookings/:bookingId/quote`
- Auth: Yes
- Description: Get quote for booking
- Usage: `getMyBookingQuote(bookingId)`

## `GET /my-bookings/invoiceSummary`
- Auth: Yes
- Description: Get summary of customer invoices
- Usage: `getMyBookingsSummary()`

## `GET /getMyInvoices/:customerId`
- Auth: Yes
- Description: Get invoices by customer ID
- Usage: `getInvoicesByCustomer(customerId, params)`

# 3. Shipment APIs (`services/shipping.js`)

## `GET /shipments/track/:trackingNumber`
- Auth: Yes
- Description: Track a shipment by tracking number
- Example response fields:
  - `status`
  - `timeline`
  - `sender`
  - `receiver`
- Usage: `trackShipmentByNumber(trackingNumber)`

## `GET /getAllShipment`
- Auth: Yes
- Description: List all shipments
- Query params:
  - `page`, `limit`, `status`, `mode`, `search`, `startDate`, `endDate`, `sortBy`, `sortOrder`
- Usage: `getAllShipments(params)`

## `GET /shipments/:shipmentId`
- Auth: Yes
- Description: Get shipment details by ID
- Usage: `getShipmentById(shipmentId)`

## `PATCH /shipments/:shipmentId/status`
- Auth: Yes
- Description: Update shipment status
- Request body example:
  ```json
  {
    "status": "in_transit"
  }
  ```
- Usage: `updateShipmentStatus(shipmentId, statusData)`

## `GET /my-shipments`
- Auth: Yes
- Description: Get logged-in user shipments
- Query params:
  - `page`, `limit`, `status`, `sort`
- Usage: `getMyShipments(params)`

## `GET /shipments/my-shipments/:shipmentId`
- Auth: Yes
- Description: Get one customer shipment
- Usage: `getMyShipmentById(shipmentId)`

## `GET /shipments/my-shipments/:shipmentId/timeline`
- Auth: Yes
- Description: Get shipment timeline
- Usage: `getMyShipmentTimeline(shipmentId)`

## `POST /shipments/create`
- Auth: Yes
- Description: Create a shipment record
- Request body: shipment details
- Usage: `createShipment(shipmentData)`

## `PUT /shipments/:shipmentId`
- Auth: Yes
- Description: Update a shipment record
- Usage: `updateShipment(shipmentId, updateData)`

## `DELETE /shipments/:shipmentId`
- Auth: Yes
- Description: Delete a shipment
- Usage: `deleteShipment(shipmentId)`

## `POST /shipments/:shipmentId/assign`
- Auth: Yes
- Description: Assign shipment to route or handler
- Request body example:
  ```json
  {
    "assignedTo": "agentId",
    "assignmentNote": "Deliver by Monday"
  }
  ```
- Usage: `assignShipment(shipmentId, assignmentData)`

## `POST /shipments/:shipmentId/tracking`
- Auth: Yes
- Description: Add a tracking update
- Request body example:
  ```json
  {
    "location": "Port of Shanghai",
    "status": "departed",
    "timestamp": "2026-04-16T10:00:00Z"
  }
  ```
- Usage: `addTrackingUpdate(shipmentId, trackingData)`

## `GET /shipments/:shipmentId/timeline`
- Auth: Yes
- Description: Get full shipment timeline
- Usage: `getShipmentTimeline(shipmentId)`

## `POST /shipments/:shipmentId/transport`
- Auth: Yes
- Description: Add transport details
- Request body example:
  ```json
  {
    "carrier": "Oceanic Transport",
    "voyageNo": "VT1234",
    "departureDate": "2026-04-20"
  }
  ```
- Usage: `updateTransportDetails(shipmentId, transportData)`

## `POST /shipments/:shipmentId/documents`
- Auth: Yes
- Description: Upload document metadata
- Request body example:
  ```json
  {
    "documentType": "Invoice",
    "url": "https://..."
  }
  ```
- Usage: `addShipmentDocument(shipmentId, documentData)`

## `POST /shipments/:shipmentId/notes/internal`
- Auth: Yes
- Description: Add internal note for shipment
- Request body example:
  ```json
  {
    "note": "Call customer before delivery"
  }
  ```
- Usage: `addInternalNote(shipmentId, noteData)`

## `POST /shipments/:shipmentId/notes/customer`
- Auth: Yes
- Description: Add customer-facing note
- Usage: `addCustomerNote(shipmentId, noteData)`

## `POST /shipments/:shipmentId/cancel`
- Auth: Yes
- Description: Cancel shipment
- Usage: `cancelShipment(shipmentId, cancelData)`

## `POST /shipments/:shipmentId/costs`
- Auth: Yes
- Description: Add shipment cost line
- Request body example:
  ```json
  {
    "type": "Insurance",
    "amount": 150,
    "currency": "USD"
  }
  ```
- Usage: `addShipmentCost(shipmentId, costData)`

## `GET /shipments/:shipmentId/costs`
- Auth: Yes
- Description: Get costs for a shipment
- Usage: `getShipmentCosts(shipmentId)`

## `PUT /shipments/:shipmentId/costs/:costId`
- Auth: Yes
- Description: Update shipment cost item
- Usage: `updateShipmentCost(shipmentId, costId, updateData)`

## `DELETE /shipments/:shipmentId/costs/:costId`
- Auth: Yes
- Description: Delete shipment cost item
- Usage: `deleteShipmentCost(shipmentId, costId)`

## `GET /shipments/warehouse/pending`
- Auth: Yes
- Description: Get pending warehouse shipments
- Usage: `getPendingWarehouseShipments()`

## `PATCH /shipments/:shipmentId/warehouse/receive`
- Auth: Yes
- Description: Mark shipment received in warehouse
- Usage: `receiveAtWarehouse(shipmentId, receiveData)`

## `PATCH /shipments/:shipmentId/warehouse/process`
- Auth: Yes
- Description: Process shipment in warehouse
- Usage: `processWarehouse(shipmentId, processData)`

# 4. Customer shipments & return APIs (`services/newShipping.js`)

## `GET /my-new-shipments`
- Auth: Yes
- Description: Get new-style shipments for logged-in customer
- Query params: `page`, `limit`, `search`, `status`, `startDate`, `endDate`, `sortBy`, `sortOrder`
- Usage: `getMyNewShipments(params)`

## `GET /shipments/my-shipments/:shipmentId`
- Auth: Yes
- Description: Get one customer shipment
- Usage: `getMyShipmentById(shipmentId)`

## `GET /shipments/my-shipments/:shipmentId/tracking`
- Auth: Yes
- Description: Get tracking info for a customer shipment
- Usage: `getMyShipmentTracking(shipmentId)`

## `GET /shipments/my-shipments/summary`
- Auth: Yes
- Description: Get shipment summary for customer
- Usage: `getMyShipmentSummary()`

## `POST /shipments/my-shipments/:shipmentId/return-request`
- Auth: Yes
- Description: Customer requests return
- Request body format depends on return form
- Usage: `requestReturn(shipmentId, returnData)`

## `PUT /shipments/return-requests/:returnRequestId/cancel`
- Auth: Yes
- Description: Cancel a return request
- Usage: `cancelReturnRequest(returnRequestId)`

# 5. Return APIs (`services/returnApi.js`)

## `POST /shipments/:shipmentId/return-request`
- Auth: Yes
- Description: Customer return request endpoint
- Usage: `requestReturn(shipmentId, returnData)`

## `GET /shipments/:shipmentId/return-status`
- Auth: Yes
- Description: Check return request status
- Usage: `getReturnRequestStatus(shipmentId)`

## `PUT /shipments/:shipmentId/return-confirm`
- Auth: Yes
- Description: Confirm return and accept cost
- Request body example:
  ```json
  {
    "notes": "OK to return",
    "acceptCost": true
  }
  ```
- Usage: `customerConfirmReturn(shipmentId, confirmData)`

## `PUT /shipments/:shipmentId/return-reject-customer`
- Auth: Yes
- Description: Customer rejects return or return cost
- Usage: `customerRejectReturn(shipmentId, rejectData)`

## `GET /admin/return-requests`
- Auth: Yes
- Description: Admin view all return requests
- Query params: `page`, `limit`, `status`
- Usage: `getAllReturnRequests(params)`

## `PUT /admin/return-requests/:id/approve`
- Auth: Yes
- Description: Admin approves return request
- Usage: `approveReturnRequest(returnId, data)`

## `PUT /admin/return-requests/:id/reject`
- Auth: Yes
- Description: Admin rejects return request
- Usage: `rejectReturnRequest(returnId, rejectionReason)`

## `GET /admin/return-requests/stats`
- Auth: Yes
- Description: Get return request stats
- Usage: `getReturnStats()`

# 6. Invoice APIs (`services/invoice.js`)

## `GET /getAllInvoices`
- Auth: Yes
- Description: Get invoice list
- Query params: `page`, `limit`, `status`, `paymentStatus`, `customerId`, `startDate`, `endDate`, `sort`
- Usage: `getAllInvoices(params)`

## `GET /getInvoiceById/:invoiceId`
- Auth: Yes
- Description: Get invoice details
- Usage: `getInvoiceById(invoiceId)`

## `GET /invoices/customer/:customerId`
- Auth: Yes
- Description: Get customer invoices by customer ID
- Usage: `getInvoicesByCustomer(customerId, params)`

## `PUT /invoices/:invoiceId`
- Auth: Yes
- Description: Update invoice record
- Usage: `updateInvoice(invoiceId, updateData)`

## `DELETE /invoices/:invoiceId`
- Auth: Yes
- Description: Delete invoice
- Usage: `deleteInvoice(invoiceId)`

## `PUT /invoices/:invoiceId/mark-paid`
- Auth: Yes
- Description: Mark invoice as paid
- Usage: `markInvoiceAsPaid(invoiceId, paymentData)`

## `POST /invoices/:invoiceId/send-email`
- Auth: Yes
- Description: Send invoice email
- Usage: `sendInvoiceEmail(invoiceId, emailData)`

## `GET /getInvoiceStats`
- Auth: Yes
- Description: Get invoice dashboard stats
- Usage: `getInvoiceStats()`

## `POST /invoices/:invoiceId/generate-pdf`
- Auth: Yes
- Description: Generate invoice PDF
- Usage: `generateInvoicePDF(invoiceId)`

## `PUT /invoices/bulk/update`
- Auth: Yes
- Description: Bulk update multiple invoices
- Usage: `bulkUpdateInvoices(invoiceIds, updateData)`

## `GET /invoices/admin/recent`
- Auth: Yes
- Description: Get recent invoices for admin
- Usage: `getRecentInvoices(limit)`

## `GET /invoices/booking/:bookingId`
- Auth: Yes
- Description: Get invoice by booking
- Usage: `getInvoiceByBooking(bookingId)`

## `GET /invoices/shipment/:shipmentId`
- Auth: Yes
- Description: Get invoice by shipment
- Usage: `getInvoiceByShipment(shipmentId)`

## `GET /invoices/:invoiceId/download`
- Auth: Yes
- Description: Download invoice PDF
- Response type: `blob`
- Usage: `downloadInvoicePDF(invoiceId)`

## `GET /invoices/summary`
- Auth: Yes
- Description: Get invoice summary stats
- Usage: `getInvoiceSummary()`

# 7. Manual Invoice APIs (`services/manualIvnoice.js`)

## `GET /getAllmanualInvoices`
- Auth: Yes
- Description: Get manual invoices with pagination and filters
- Usage: `getManualInvoices(params)`

## `GET /invoices/:invoiceId`
- Auth: Yes
- Description: Get manual invoice by ID
- Usage: `getInvoiceById(invoiceId)`

## `DELETE /deletemanualInvoice/:invoiceId`
- Auth: Yes
- Description: Delete manual invoice
- Usage: `ManualdeleteInvoice(invoiceId)`

## `GET /invoices/:invoiceId/download`
- Auth: Yes
- Description: Download manual invoice PDF
- Response type: `blob`
- Usage: `downloadInvoicePDF(invoiceId)`

# 8. Examples

### Login
```bash
curl -X POST http://localhost:8000/api/v1/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"customer@example.com","password":"Password123"}'
```

### Get customer bookings
```bash
curl -X GET "http://localhost:8000/api/v1/my-bookings?page=1&limit=10" \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN'
```

### Track a shipment
```bash
curl -X GET http://localhost:8000/api/v1/shipments/track/TRACK123456 \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN'
```

### Create a return request
```bash
curl -X POST http://localhost:8000/api/v1/shipments/SHIPMENT_ID/return-request \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_JWT_TOKEN' \
  -d '{"reason":"Item damaged","description":"Package arrived broken"}'
```

---

## Notes
- All routes are relative to `NEXT_PUBLIC_API_URL` in the frontend.
- Most routes require auth; the token is attached automatically by `axiosInstance`.
- Use the HTTP verb listed for correct request type.
