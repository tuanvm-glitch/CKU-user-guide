# Trigger condition của campaign

⚠️ Problem/ Request:

  - MC request tạo một Checkout validation với điều kiện: Mua ít nhất $100 thì mới checkout được. Case này sẽ dễ bị hiểu lầm khi set Trigger condition là mua lớn hơn hoặc bằng $100. 
➡️ Support flow:

  - CS giải thích lại với MC về Trigger condition như sau: 
    - Trigger condition trong app là trigger để disable checkout 
    - Nó cũng là trigger để display error message 
  - Vậy với settings như ảnh dưới: 
    - Trigger condition: Subtotal value Less (<) $100 → Thì sẽ bị block checkout và error message sẽ display ở trang checkout page. 
🗒️ References:

✅ Tips & Tricks:
