# TYP upsell không work với sản phẩm upsell là bundle 

⚠️ Problem/ Request:

- Nhiều MC setup upsell product trong campaign là sản phẩm bundle. Hiện tại, theo Shopify rule thì không cho phép bundle product tham gia vào post-purchase flows.
  - Tham khảo FAQ: Tất cả các campaign trong app PPU có work với sản phẩm Bundle không?  
- Với Thank you page upsell (TYP), dùng bundle product trong upsell list sẽ work, nhưng có nhiều case bị báo lỗi khi click claim upsell offer. Nguyên nhân là gì? 
  - Lỗi hiển thị: {"data":{},"success":false} 
➡️ Explain (Nội bộ): 

Trường hợp 1 - Lỗi settings:

- CS check thử Settings → General → Thank you page offer feature có đang bật “Add to the original order” hay không? 
  - Nếu đang bật, sản phẩm upsell được include vào trong order gốc → Workflow lúc này sẽ giống với PPU campaign → Dẫn đến lỗi campaign không work với bundle product. 
Trường hợp 2 - Các lỗi khác: 

- Nếu feature ở Trường hợp 1 KHÔNG bật, CS xin MC discount code 100% cho order để test lại hoặc xin quyền tạo discount để tự check. Nếu gặp lỗi tương tự, CS báo dev/TS để check thêm. 
🗒️ Solution cho trường hợp 1:

- Phương án 1: 
  - Nếu mục đích chính của MC là offer bundle product ở upsell thì báo MC tắt feature “Add to the original order”. 
  - Nếu MC lo lắng về việc customer sẽ bị charge 2 lần phí ship. CS giải thích mặc định TYU campaign là Free Shipping. CS hướng dẫn MC bật badges Free Ship cho upsell product ở đây: Access campaign TYU editor → Step 2: Upsell offer → Open “Edit layout & content” → Enable “Free Shipping”. 
- Phương án 2: Nếu MC muốn gộp order là mục đích chính thì bắt buộc phải đổi upsell product từ sản phẩm bundle sang sản phẩm bình thường.

🗒️ References:

- Link chat: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_12b0229a-6c23-4a59-ae61-40c40874d207/
- https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_b8b71afb-1fe4-4391-905a-16d396f4a7fe/
