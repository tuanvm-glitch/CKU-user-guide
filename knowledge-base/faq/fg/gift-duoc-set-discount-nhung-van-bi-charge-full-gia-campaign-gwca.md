# Gift được set discount, nhưng vẫn bị charge full giá (Campaign GWCA).

⚠️ Problem/ Request:

  - Cam “Gift With Cart Value”: Gift đã được set discount nhưng ở cart page hoặc check out page nó vẫn bị tính full giá gốc. 
🎗️ Possible causes:

  - Trường hợp 1: Như những case bình thường, nếu settings không có vấn đề gì, xin quyền theme (edit code) + quyền vào discounts ở Shopify Admin của MC và forward lại case cho Dev/TS. 
  - Trường hợp 2: Lỗi ở setting do MC set quá nhiều Excluded products ở campaign “Gift with Cart Value”. 
➡️ Support flow cho trường hợp 2:

  - CS check xem campaign của MC có đang được sử dụng excluded product ko? 
  - Nếu có, thì giới hạn sẽ là 100-150 products. Nếu MC add nhiều hơn 100-150 products thì app sẽ hiện warning. 
  ⇒ Dev giải thích là: do thêm nhiều exclude product quá nên bị chết function => CS báo khách add tối đa 100 exclude product thì app mới work. 

  - CS giải trình lại với MC trước > có thể nói là giới hạn của Shopify. Team đang tìm cách tối ưu hóa.
  - Vậy workaround ở đây sẽ là gì? 
    - CS recommend MC group những products KHÔNG nằm trong excluded list này vào 1 hoặc nhiều collection. 
    - Sau đó, chuyển qua dùng campaign “Gift With Collection Value”.
🗒️ References:

  Case study 1: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_f138016f-3e6d-4cba-a97c-d4a846a852b0/

  Case study 2: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_65998c62-f9d4-4055-b939-7bbbac9e9da0/

✅ Tips & Tricks:

  Internal note: Hiện dev đang nghiên cứu để tối ưu hóa chỗ này. CSL sẽ update lại FAQ sau khi có chỉnh sửa mới từ dev.
