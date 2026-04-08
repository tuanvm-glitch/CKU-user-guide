# Auto remove gift on Checkout and Prevent expired campaign gifts from being checked out (Shopify Plus only) 

⚠️ Request:

  - Tính năng “Auto-remove Gift on Checkout”:
    - Cho phép hệ thống tự động xóa quà tặng khỏi checkout khi khách hàng áp dụng discount code khiến giá trị đơn hàng (NET order price) không còn đủ điều kiện nhận quà.
    - Điều này giúp đảm bảo tính chính xác của campaign và tránh tình trạng khách hàng nhận quà dù không còn đạt điều kiện.
  - Prevent expired campaign gifts from being checked out: 
    - Một số khách hàng đã thêm free gift vào giỏ hàng khi campaign còn active nhưng chưa checkout ngay. 
    - Khi họ quay lại sau vài ngày — chiến dịch đã hết hạn (expired), nhưng quà tặng vẫn còn trong giỏ và vẫn được checkout miễn phí.
🗒️ References:

  - Nhiều merchant (đặc biệt Shopify Plus) có nhu cầu đảm bảo giá trị đơn hàng cuối cùng (final price) sau khi áp dụng code vẫn hợp lệ.
  - Trước đây, hệ thống chỉ kiểm tra điều kiện ở cart → dẫn đến trường hợp gift vẫn hiển thị trong checkout dù đơn hàng đã giảm giá.
  - Để đảm bảo quà tặng chỉ được giữ lại khi campaign còn hiệu lực, hệ thống đã hỗ trợ tính năng tự động kiểm tra và xóa quà hết hạn tại trang checkout.
  - Điều kiện: Chỉ khả dụng cho Shopify Plus.
    - Bước 1: Truy cập Shopify Admin → Settings → Checkout
    - Bước 2: Nhấn nút Customize
    - Bước 3: Tại thanh Add block → chọn “AOV Checkout Add-on”
    - Bước 4: Nhấn Save để hoàn tất
> Video Demo: https://drive.google.com/file/d/1Ve0niXdHtBtOl_gcqRyBMHI_Uru1NXc1/view?usp=sharing
