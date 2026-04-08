# PPU campaign và SHOPIFY_PAY wallet

⚠️ Problem/ Request: 

- PPU offer no show, check order tracker hiện no reason
- MC báo dùng Shop Pay, offer đã activate nhưng vẫn không thấy offer
🎗️ Possible causes:

- Hiện tại mình vẫn báo là PPU chỉ work với 3 payments: 
  - Credit Card
  - PayPal
  - Shop Pay
- MC có thể nhầm lẫn Shop Pay và SHOPIFY_PAY wallet
- Riêng với SHOPIFY_PAY wallet, PPU offer work không ổn định, lúc work, lúc không, nên dev chưa cho vào unsupported payment method list, nên trong order tracker không hiện rõ lý do.
➡️ Support flow (Nội bộ): 

- Step 1: CS xin quyền vào order detail check và báo MC test lại với 1 trong 3 payments supported: Credit Card, PayPal, Shoppay. 
- Step 2: Có thể ping dev, BA check lại kỹ hơn để thêm thông tin. 
🗒️ References:

https://avadaio.slack.com/archives/C083YAETLEP/p1765380994369889
https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_793e5ad9-979b-4d3c-9107-88f26097eb15/

✅ Tips & Tricks:
