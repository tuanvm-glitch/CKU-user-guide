# Bundle product không hiển thị khi Preview / Lead to 404 page

⚠️ Problem/ Request:

  - Khi merchant bấm Preview trong app, bundle product không hiển thị dù đã hoàn tất đầy đủ 3 bước cấu hình.
🎗️ Possible causes:

  - Nguyên nhân có thể do store đang sử dụng Shopify Markets với nhiều market, và bundle product chưa được thêm vào catalog của market tương ứng → product không hiển thị ở preview/frontend.
➡️ Support flow:

  - CS cần xin các quyền sau:
    - Market
    - Product
    - Theme
  - Kiểm tra và thêm product vào Market catalog → Thực hiện các bước sau trong Shopify Admin:
    1. Vào Settings → Markets
    1. Chọn Catalog
    1. Trong mục Products and pricing, chọn Manage → Manage products and pricing
    1. Chuyển sang tab Excluded (các sản phẩm chưa được thêm vào catalog)
    1. Chọn các bundle product cần hiển thị
    1. Nhấn Include in catalog → Include products
    1. Nhấn Save
  - Kết quả mong đợi → Sau khi thêm product vào đúng market catalog:
    - Bundle product sẽ hiển thị lại khi preview
    - Hoạt động bình thường trên storefront
