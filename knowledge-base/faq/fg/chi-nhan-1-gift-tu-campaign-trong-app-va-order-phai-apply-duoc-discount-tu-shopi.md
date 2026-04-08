# Chỉ nhận 1 Gift từ campaign trong app và Order phải apply được discount từ Shopify

⚠️ Problem/ Request:

  - Khách muốn customer chỉ nhận được gift từ 1 campaign và order phải sử dụng được discount code từ Shopify. 
  - Bật combination: Khách nhận được gift từ tất cả các campaigns, chỉ cần thỏa mãn điều kiện trigger → Order đó sẽ apply được cả Shopify discount code.
  - Ko bật combination: Khách chỉ nhận được gift từ 1 campaign (Campaign này sẽ là campaign add gift vào sau cùng, gift add vào sau sẽ remove gift add vào trước) và order đó sẽ không apply được discount code từ Shopify.
➡️ Support flow:

  - Bật combination trong app để campaign của app có thể combine được với discount của Shopify.
  - Vào dev_zone, bật “Auto remove gift” ở Dev_zone - tính năng này sẽ đảm bảo customer chỉ nhận được gift từ 1 campaign. 
  - Ví dụ: user có 2 campaign gift with cart value $20 và $50. User có thêm 1 discount khác ngoài Shopify có tên là SUMMER, nên họ muốn bật combination. Nhưng user muốn khi đạt điều kiện $50, chỉ nhận gift của $50 và discount SUMMER thôi, không nhận discount của campaign $20 nữa.
