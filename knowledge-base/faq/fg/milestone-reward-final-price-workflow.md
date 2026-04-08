# Milestone reward - final price workflow 

⚠️ Problem/ Request:

  Lưu ý: Đã hỗ trợ “Final Price” trong Milestone Reward

➡️ Support flow - Giải thích chi tiết kèm ví dụ:

  ✅ 1. Order Discount 

  - Điều kiện: Chi tiêu $200 để được giảm 10% toàn bộ đơn hàng.
  - Trường hợp:
    - Khách thêm đủ $200 vào giỏ.
    - Sau đó họ dùng thêm mã giảm giá 20% khác.
    - Giá trị giỏ hàng sau giảm không còn đủ $200.
    → Khách ko nhận được discount 10% từ milestone sau khi sử dụng mã giảm giá 20% khác. 

  ✅ 2. Free Shipping 

  - Điều kiện: Chi tiêu $400 để được miễn phí vận chuyển.
  - Trường hợp tương tự:
    - Khách add đủ $400 vào giỏ.
    - Áp mã giảm giá khác 20%.
    → Cart value giảm xuống dưới $400, khách ko nhận được miễn phí vận chuyển nữa. 

  ✅ 3. Free Gift 

  - Điều kiện: Chi tiêu $600 để nhận quà tặng.
  - Trường hợp:
    - Khách đạt đủ $600 → được tặng Free Gift.
    - Sau đó họ áp mã giảm giá 20%.
  - Giá trị giỏ hàng sau giảm < $600 → Free Gift sẽ tự bị remove hoặc bị tính phí, vì app tính theo giá sau discount (Final price).
