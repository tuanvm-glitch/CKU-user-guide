# Đổi vị trí hiển thị của Currency

⚠️ Problem/ Request:

  - Khách muốn đổi đơn vị tiền trong ảnh thành ký hiệu:
    - Ký hiệu là: R 
    - Tên đầy đủ là: ZAR 
  - Giống kiểu ký hiệu là $ và tên đầy đủ là dollar. Chỗ này MC muốn hiện ký hiệu thay vì tên đầy đủ.
➡️ Support flow:

  - CS vào dev_zone → bật tính năng “Enable Shopify-style price formatting” xong reload lại app page để check lại. 
  - Sau đó app sẽ tự động chuyển “tên đầy đủ” của currency về dạng “ký tự”.
🗒️ References:

https://avadaio.slack.com/archives/C08S4EP6W02/p1751617852847179 

✅ Một vài trường hợp khác: 

  - 1 vài trường hợp, MC muốn hiện cả “ký hiệu” và “tên đầy đủ” thì CS bật feature “Use currency code with price format” trong dev_zone.
  - Ví dụ: $1000 CAD instead of $1000
