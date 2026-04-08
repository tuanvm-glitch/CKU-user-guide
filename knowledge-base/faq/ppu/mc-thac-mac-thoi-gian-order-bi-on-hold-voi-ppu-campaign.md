# MC thắc mắc thời gian Order bị on hold với PPU campaign

⚠️ Problem/ Request

MC thắc mắc order của khách sẽ bị hold bao lâu mới complete khi dùng offer Post-purchase upsell campaign? 

🎗️ Possible causes:

➡️ Support flow:

- Khi MC có thắc mắc, CS trả lời:
  - If the customer doesn’t take any action, Shopify will automatically finalize the order after 1 hour (60 minutes). This is a default behavior controlled by Shopify, not by the app. 
  - Shopify puts the order “On hold” to give the customer time to:
    - View the post-purchase offer
    - Decide whether to accept or decline
    - Allow the upsell to be appended to the original order if accepted
  - After the timeout:
    - If no action was taken, the order will move to “Paid” or “Unfulfilled”, depending on your fulfillment settings
    - The upsell offer will be skipped
- Đã tạo shortcut : !on-hold-ppu
🗒️ References:

https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_a63612ec-fb49-45ef-89f1-e87c8251977a/
