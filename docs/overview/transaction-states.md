### Initial States

| Enum | Status Text | Context | Action Required |
| ---- | ---- | ---- | ---- |
|UnderReview | Under Review | The buyer is being screened by the fraud process | Hold tickets if available in POS |
|ConfirmSale | Confirm Sales | The order is awaiting confirmation. | Autoconfirm order if tickets are available in POS |
|Issue |	Issue | There is a problem with the order | Reach out to customer service if unsure what problem is | 

### Happy Path States

| Enum | Status Text | Context | Action Required |
| ---- | ---- | ---- | ---- |
|ShipTickets_DeliveryAPI | Ship Tickets | 
|UploadETickets | Upload E-Tickets |
|UploadTicketsLinks |Upload Ticket Links |
|TransferTDT | Upload Transfer Receipts |
|UploadQRCodes | Upload QR Codes | 
|UploadBarcodes | Enter Ticket Barcodes |
|WaitForCourierPickup |	Wait for Courier Pickup |
|PrintShippingLabels | Print Shipping Label |
|EnterTrackingNumbers | Enter Tracking Number |
|WaitingForBuyerPickup | Wait for Buyer Pickup | 
|OnTheWay | On the Way |
|ProcessingTransfer | Processing Transfer | 
|GetPaid | Get Paid |
|Complete |	Complete | 



|Cancelled |	Cancelled | 



|ShipToViagogo | Ship to viagogo | 
|WaitForShippingDetails | Wait for Buyer Address Update | 
|WaitUntil2DaysBeforeTheEvent | Wait until 3 days before the event |
|DropOffTickets | Deliver by Hand |
|UploadReservationCode | Upload Reservation Code | 
