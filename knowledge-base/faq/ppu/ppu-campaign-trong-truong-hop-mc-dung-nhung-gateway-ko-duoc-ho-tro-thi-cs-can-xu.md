# PPU campaign: Trong trường hợp MC dùng những Gateway ko được hỗ trợ, thì CS cần xử lý như thế nào?  

⚠️ Problem/ Request:

Trong trường hợp MC dùng những gateway payment không được hỗ trợ, Upsell offer sẽ không hiển thị. 

➡️ Support flow:

- Offer MC sử dụng qua campaign Thank you page upsell → Giảm tỷ lệ uninstall.
- 2 campaign này chỉ khác nhau ở chỗ:
  - PPU campaign: Là edit order, họ bấm paynow là sẽ trừ tiền luôn trong card. Upsell product sẽ được thêm vào original order. 
  - TKU campaign: Là tạo 1 order mới, phải nhập lại thông tin thanh toán.
    - Hiện, Thank you Upsell offer campaign cũng đã có settings cho phép sản phẩm upsell được add trực tiếp vào order gốc thay vì tạo 1 order mới. 
    - CS guide MC vào app settings → Thank you page offer → Bật “Add to Original order”. 
    - Hạn chế của feature này: “Due to Shopify’s limitations, bundle products can’t be added directly into the original order after checkout. Therefore, this product type will not be supported on the Thank You Page with this option.”
