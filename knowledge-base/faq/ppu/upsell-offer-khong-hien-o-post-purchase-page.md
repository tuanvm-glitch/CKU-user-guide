# Upsell offer không hiện ở Post Purchase page

⚠️ Problem/ Request:

Upsell offer không hiện ở Post Purchase page

➡️ Support flow:

Step 1: Check nhanh settings để hiển thị app cơ bản

- Với campaign này, chỉ cần đảm bảo “Post-purchase page” đã được bật cho app PPU. CS hướng dẫn MC check ở Shopify Admin Settings → Checkout → Post-purchase page → Chọn app “AOV.ai Post Purchase”. 
- Lưu ý với case Post Purchase page:
  - Cần hỏi MC xem họ dùng payment method nào để hoàn thành giao dịch.
  - Nếu MC sử dụng những payment method dưới đây thì sẽ ko có Post-purchase page → campaign “Post-purchase” upsell của app cũng sẽ ko work:
'paypal_express',
'amazon_payments',
'manual',
'authorize_net',
'mollie',
'worldpay',
'2checkout',
'klarna',
'sezzle',
'affirm',
'quadpay',
'afterpay',
'Adyen'
    > ⇒ Ngoài ra thì bên mình cũng đã liệt kê đầy đủ những hạn chế của Post-purchase page ở đây nếu mọi người cần xem lại: https://docs.avada.io/aov-post-purchase-upsell/campaign-offers/shopify-limitations-and-considerations-for-post-purchase-checkout-extensions

⇒ Tham khảo thêm FAQ này: Campaign Post Purchase Upsell có hỗ trợ Paypal và Paypal Express không? 

- Nếu MC sử dụng AI recommendation ở campaign settings:
  - Với những store có ít data (ít orders) thì AI sẽ không generate ra được sản phẩm. Chỉ khuyên MC sử dụng tính năng này với những store có lịch sử bán hàng đều đặn.
  - Sử dụng shortcut: !ai-product-recommendation
Step 2: Sau khi rà qua các bước căn bản ở trên mà app vẫn không work, thì CS cần làm gì tiếp theo?

  1/ Các access cần xin: 

    - Theme editor
    - Checkout
    - Manage app
    - Order → Create Order
    - Product
    - Discount → Create discount
  2/ Cách test lại flow: 

    - Tạo 1 discount code để order chỉ còn giá trị khoảng $1 để test. CS có thể forward case cho BA/Dev từ bước này.
    - Đảm bảo total bill của order ở checkout page ≥ $1 thì PPU mới work. 
    - Test order: Lưu ý không dùng COD (Cash on Delivery).
