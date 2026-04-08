# By pass rule nhưng vẫn nhận được gift

⚠️ Problem/ Request:

  - Order không đủ điều kiện để trigger nhưng vẫn nhận được gift. 
🎗️ Possible causes:

  - Khách checkout nhanh để bypass rule và nhận gift. 
➡️ Support flow:

  - CS vào dev_zone và bật 2 features để fix lỗi trên. 
    - Custom Checkout
    - Remove Gift On Checkout (for milestone campaign) 
  - Mục đích: disable nút checkout đi để hệ thống kiểm tra giỏ hàng, nếu không thỏa mãn thì xóa gift rồi mới cho active nút checkout. 
🗒️ References:

✅ Tips & Tricks:
