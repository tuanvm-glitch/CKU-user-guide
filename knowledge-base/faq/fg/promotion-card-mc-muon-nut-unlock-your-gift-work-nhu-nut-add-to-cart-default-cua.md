# Promotion card: MC muốn nút “unlock your gift” work như nút “add to cart” default của theme. 

⚠️ Problem/ Request:

  - Default setting: khi click vào nút “Unlock your gift”, app sẽ tự động add variant mặc định của trigger product vào cart thay vì selected variant. 
  - Ví dụ như ảnh dưới: Variant của trigger product chọn màu hồng → sau đó ấn nút “Unlock your gift” thì chỉ có cái variant “silver” được add vào cart + gift product thay vì variant “màu hồng”.
  - MC muốn là khi customer chọn variant nào ở “theme variant selector feature” thì lúc ấn nút “Unlock your gift” thì variant đó sẽ được add vào cart page thay vì default variant “Silver”. 
  - In short, họ muốn nút “Unlock your gift” của promotion cart work như nút “add to cart” của theme. 
➡️ Support flow:

  - CS nhận request của MC → Giải thích để confirm lại xem có phải họ muốn nút “Unlock your gift” work như nút “add to cart” của theme không.
  - MC confirm yes → CS access dev_zone, bật tính năng: ATC Trigger.
  - Sau đó test lại thì nút “Unlock your gift” sẽ work đúng như nút “add to cart” của theme. Nó sẽ add đúng variant mà customer đang chọn cho trigger product ở product page.
🗒️ References:

  Case study: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_52dff439-da4b-4ca0-8b82-1815d84dad66/ 

✅ Tips & Tricks:
