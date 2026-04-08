# Fixed Bundle: Làm thế nào để xác định được Bundled Products, Options và Variants trong campaign settings?

## Internal FAQ: 

⚠️ Problem/ Request:

  - App calculate 3 tính năng: Bundle Products, Option và Variants như thế nào?
➡️ Support flow:

  - Bundled products: 
    - Là số lượng sản phẩm MC có thể add vào bundle này.
    - Maximum có thể add được 30 sản phẩm.
  - Options: 
    - Là số sản phẩm được phép có nhiều hơn 1 variant. 
    - Maximum chỉ được 3 sản phẩm có trên 1 variant được add on vào campaign settings.
    - Ví dụ: 
      - Sản phẩm A: có 3 màu (3 variants)
      - Sản phẩm B: có 4 màu (4 variants) 
      - Sản phẩm C: có 2 màu (2 variants) 
      - Sản phẩm D: có 10 màu (10 variants) - Tính sản phẩm D là sản phẩm thứ 4 trở đi 
      - Giải thích: 
  - Variants: 
    - Tổng số trường hợp có thể xảy ra khi chọn từng variant của từng sản phẩm và match chúng lại với nhau. 
    - Cách tính: nhân số lượng variant của từng product lại với nhau. 
    - Ví dụ:
      - Sản phẩm A có 1 variant
      - Sản phẩm B có 2 variant 
      - Sản phẩm C có 3 variant
      - Sản phẩm D có 2 variant
    - Note: Sản phẩm A có 3 variants nhưng chỉ chọn 1 variant để show do giới hạn ở “Options” phía trên. Vậy, variants trong trường này này sẽ = 1x2x3x2 = 12 ⇒ Hiển thị trong campaign settings: 12/100 Variants.
    - Maximum variants sẽ bằng 100. 
🗒️ References:

Case này khá khó hiểu, trong trường hợp trainee đọc rồi vẫn ko hiểu thì sẽ được giải thích kỹ lại ở buổi review 1-1 sau khi học xong app Bundle. 

✅ Tips & Tricks:

Demo Video: https://www.loom.com/share/79697924d24f40bb842577439d3aa06b?sid=be8ac822-3ebb-4ad0-8edd-1a8329a03adb
