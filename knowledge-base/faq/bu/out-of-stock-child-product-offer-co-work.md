# Out Of Stock child product - Offer có work?

⚠️ Problem/ Request:

  - MC thắc mắc: khi tạo offer xong chạy ổn một thời gian, có sản phẩm trong bundle product out of stock thì offer có tự động ngừng hay vẫn work?
🎗️ Possible causes:

  - Liên quan logic app: CS có thể nhầm lẫn giữa 2 offer: FBT và Volume Discount
➡️ Support flow:

  - Frequently Bought Together (FBT) Offer:
    - If the trigger product is out of stock, the offer will not work.
    - If an offer product is out of stock, the offer will still work and display the trigger product along with any other in-stock offer products.
  - Volume Discount Offer:
    - In this type of offer, the trigger and the offer product are the same (for example, "Buy 2 of Product A, get 10% off") ⇒ Therefore, if the product is out of stock, the offer will not work since there is no available product to trigger the discount.
