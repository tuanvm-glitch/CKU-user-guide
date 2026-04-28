# CKU — Quick Reference

## FAQ

# App không work thì cần xin quyền gì? 

⚠️ Problem/ Request:

  - Với tất cả feature có trong app, nếu không work trên store front. CS cần xin quyền gì trước khi forward case cho TS/Dev? 
🎗️ Possible causes:

➡️ Support flow:

  - Các access cần xin: 
    - Manage app (để ấn được Share logs)
    - Checkout
    - Discount (nếu issue liên quan đến Discount feature) 
    - Product (nếu Checkout upsell campaign không work)
🗒️ References:

✅ Tips & Tricks:


---

# Hide all payment method

⚠️ Problem/ Request:

  Ở Checkout Customizations feature, MC confused, nếu hide all payment methods thì customer sẽ thanh toán kiểu gì? 

🎗️ Possible causes:

➡️ Support flow:

  - Location: Checkout customizations → Hide payment method campaign → Rule action → Hide all payment methods.
  - Hiện tại, nếu MC sử dụng feature này, thì app sẽ ẩn tất cả payment methods available trên store front ngoại trừ cái mặc định (Ví dụ: Shopify Payment). 
  - CS giải thích lại với MC để họ không nhầm lẫn rằng app sẽ ẩn hết các loại payment method. 
🗒️ References:

✅ Tips & Tricks:


---

# Discount apply hoạt động như thế nào?

⚠️ Problem/ Request:

  - Trong Checkout upsell campaign, nếu:
    - Offer products được set discount. 
    - Tính năng “Show quantity selector” được bật → cho phép customer tăng quantity của sản phẩm offer trước khi add vào order. 
  - Thì discount cho offer products có được apply nếu quantity tăng lên không? 
🎗️ Possible causes:

➡️ Support flow:

  - Câu trả lời là có. Khi tăng quantity, thì discount cũng sẽ được apply tương ứng. 
  - Ví dụ - Upsell product là A, discount là 10%: 
    - 1x A → Giảm 10% trên tổng 
    - 2x A → Giảm 10% trên tổng
    - 3x A → Giamr 10% trên tổng 
    - …
🗒️ References:

✅ Tips & Tricks:


---

# Discount list có work với discount của app thứ 3 không? 

⚠️ Problem/ Request:

  - Feature: Discount list trong Extra widget. 
    - Hiện tại, feature này sẽ được sử dụng ở trang checkout, customer có thể lựa chọn những discount code đang available với giỏ hàng của họ. 
  - Discount list có hiển thị tất cả discount code có ở trong mục Discount của Shopify hoặc những discount được tạo từ app thứ 3 không? 
🎗️ Possible causes:

➡️ Support flow:

  - Câu trả lời là không. Hiện tại, Discount list chỉ hiển thị những discount mà MC tạo trực tiếp từ Shopify admin → Discounts. 
🗒️ References:

✅ Tips & Tricks:


---

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


---

# Menu navigation không hiển thị full danh sách feature

⚠️ Problem/ Request:

  - Dropdown menu của app ở Shopify Admin không hiển thị đầy đủ danh sách những feature có trong app như trên User Guide. 
🎗️ Possible causes:

  - App tự động nhận diện Shopify plan của merchant (Plus / non-Plus) và điều chỉnh toàn bộ giao diện phù hợp: menu navigation, dashboard, setup guide và route protection. Merchant non-Plus chỉ thấy các tính năng họ có thể sử dụng.
🗒️ Internal note cho CS - Do not mention to MC: 

  - CS access Dev_zone → Đổi Shopify Plan của store mình sang “Plus” để test full tính năng.


---

# Ko tìm thấy feature “Cart Editor” trong checkout page

⚠️ Problem/ Request:

  - Feature Cart Editor không hiển thị ở Checkout upsell 
  - Khi ấn “add block” → Không tìm thấy tính năng “Cart Editor” để add vào trang checkout page.
🎗️ Possible causes:

  - Khả năng do CS add nhầm ra section khác ngoài section “Order summary”
➡️ Support flow:

  - Hiện tại, tính năng “Cart Editor” cho phép customer thay đổi product’s variant ở trang checkout. Nên nó chỉ add được bên trong section “Order summary” (vì trong section này hiển thị list các sản phẩm customer checkout). 
  - CS hướng dẫn MC add vào đúng section “Order summary”. 
  - Nếu đã add đúng section “Order summary” mà vẫn không tìm thấy các feature của app → CS báo trực tiếp lên Dev.


---

## Dev_zone

# Dev_zone — CKU

## Làm thế nào để access được dev_zone page? 

- Sau khi mở store khách qua CRM, từ link của Dashboard thêm /dev_zone và enter để mở page: https://ibb.co/hxBzD3pB 
- Mật khẩu chung để access dev_zone tất cả các app là: admin_avada_!@#
Lưu ý: Contact leader hoặc CS member cùng team để hỏi nếu vẫn chưa hiểu rõ tính năng nào đó trong dev_zone. Ko tự ý ấn linh tinh ở store khách. 

## Cách sử dụng dev_zone cho app AOV Checkout Upsell

| Tính năng | Tooltip |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


## User Guide (danh sách — đọc file cụ thể nếu cần)

(Chưa có User Guide)
