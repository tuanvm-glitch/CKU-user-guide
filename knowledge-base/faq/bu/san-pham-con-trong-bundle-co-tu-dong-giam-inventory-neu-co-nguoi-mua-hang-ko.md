# Sản phẩm con trong Bundle có tự động giảm inventory nếu có người mua hàng ko? 

⚠️ Problem/ Request:

  - Câu hỏi của MC: Sản phẩm con trong Bundle có tự động giảm inventory nếu có người mua hàng không? Hay sản phẩm Bundle sẽ có inventory riêng? 
🎗️ Possible causes:

  - Sản phẩm Bundle tạo bởi app (bao gồm nhiều sản phẩm con) sẽ được tạo thành 1 sản phẩm độc lập. 
  - Tuy nhiên, inventory của sản phẩm này sẽ ở dạng “Does not track”. Và sản phẩm này sẽ sử dụng inventory của các sản phẩm con. 
  - Ví dụ: 
    - Bundle bao gồm 2 sản phẩm A và B. 
      - A có inventory = 10. 
      - B có inventory = 20. 
  - Sau khi mua Bundle với A=2 và B=2. Thì inventory của sản phẩm con sẽ tự động giảm xuống còn A=8 và B=18.
