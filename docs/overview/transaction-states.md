# Sale States

Your sales will move through various different states as the sale moves from your buyer attempting to purchase your tickets; to them receiving your tickets, going to the event and you getting paid. The state of your sale dictates the actions you should take to progress your sale, both of which are listed below. To know the state of your order, check the `status` property of your sale, or use the enum to filter your sales to a particular state.

### Initial States

| Enum | Status Text | Context | Action Required |
| ---- | ---- | ---- | ---- |
|UnderReview | Under Review | The buyer is being screened by the fraud process | Hold tickets if available in POS |
|ConfirmSale | Confirm Sales | The order is awaiting confirmation. | Autoconfirm order if tickets are available in POS |
|Issue |	Issue | There is a problem with the order | Reach out to customer service if unsure what problem is | 

### Happy Path States

| Enum | Status Text | Context | Action Required |
| ---- | ---- | ---- | ---- | 
|UploadETickets | Upload E-Tickets | The order is ready to have etickets uploaded against it | Upload your etickets |
|UploadTicketsLinks |Upload Ticket Links | The order is ready to have URLs where buyer can access their tickets uploaded |  `PATCH` sale with `eticket_urls` where the buyer can access their tickets - see [updating a sale][updating-a-sale]  |
|TransferTDT | Upload Transfer Receipts | The order is ready to have tickets transfered to the buyer| **First** transfer tickets to ticket holder - see [getting ticket holder information][getting-ticketholders]. **Then** record success by either: `PATCH` sale with `eticket_urls` where they can access their tickets - see [updating a sale][updating-a-sale] ; or `PATCH` sale with the `transfer_confirmation_number` - see [updating a sale][updating-a-sale]  ; or upload proof of transfer. - see [uploading etickets or proof of transfer][upload-eticket-or-transfer-proof] |
|UploadQRCodes | Upload QR Codes | The order is ready to have QA codes added | Upload QR codes - see [uploading etickets or proof of transfer][upload-eticket-or-transfer-proof] | 
|UploadBarcodes | Enter Ticket Barcodes | The order is ready to have barcodes added | Upload `barcodes` - see [updating a sale][updating-a-sale]  | 
|ReenterBarcodes |	Re-enter Barcodes | The barcodes initially allocated to the order could not be re-issued to the buyer. | Upload (new) `barcodes` - see [updating a sale][updating-a-sale] |
|PrintShippingLabels | Print Shipping Label | The shippingLabel/AirBill is ready to download for this order | Download airbill when ready to ship paper tickets - see [getting shipping label][getting-shipping-label] |
|WaitForCourierPickup |	Wait for Courier Pickup | The shippingLabel/Airbill has been downloaded, and the order is awaiting pickup by UPS/Fedex etc	| Give tickets + airbill to courier |
|OnTheWay | On the Way | The order is in transit to the buyer | No action needed |
|ProcessingTransfer | Processing Transfer | The tickets are being transfered to your customer | No action needed | 
|GetPaid | Get Paid | Order is complete, we are processing our payment to you for the tickets | No action needed | 
|Complete |	Complete | Order is complete and we have paid you | No action needed |  
|Cancelled |	Cancelled | Order has been cancelled | No action needed |

[upload-eticket-or-transfer-proof]:/api-reference/sales#tag/E-Tickets
[updating-a-sale]:/api-reference/sales#operation/Sales_Patch
[getting-ticketholders]:/api-reference/sales#tag/TicketHolders
[getting-shipping-label]:/api-reference/sales#operation/Shipments_PutOrGetSaleShipmentLabel

### Other States

Other states are possible. Below are the edge-case states and what you should do if you encounter them.

| Enum | Status Text | Context | Action Required |
| ---- | ---- | ---- | ---- |
|WaitingForBuyerPickup | Wait for Buyer Pickup | Tickets have been sent to a pickup point and are awaiting pickup from the seller | Wait for the buyer to pick up their tickets |
|EnterTrackingNumbers | Enter Tracking Number | You sent your tickets to the buyer by recorded delivery and need to enter the tracking number for the envelope you sent the tickets in | Upload the tracking number given to you by the shipment company |
|WaitForShippingDetails | Wait for Buyer Address Update | Tickets cannot currently be delivered to the buyer. Buyer must re-enter delivery information. | Wait for the buyer to update their delivery information | 
|WaitUntil2DaysBeforeTheEvent | Wait until 3 days before the event | Fulfilment must be done 2 days before the event | Wait until 2 days before the event then attempt fulfilment | 
|DropOffTickets | Deliver by Hand | You have opted to hand-deliver the tickets to the customer |  Deliver tickets to the buyer | 
|UploadReservationCode | Upload Reservation Code | The order is ready to have access codes uploaded |  Add access codes to the order (must be done via Seller Portal) | 
