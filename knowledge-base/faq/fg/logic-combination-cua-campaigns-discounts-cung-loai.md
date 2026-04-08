# Logic combination của campaigns/discounts cùng loại

⚠️ Problem/ Request:

  - MC set up nhiều discounts có trigger products trùng nhau và bật combination, mong muốn khách hàng sẽ nhận được nhiều gift/discount.
🎗️ Possible causes:

  - Hiện tại thì logic hoạt động của discount không cho phép điều đó: với các discount cùng loại mà cùng thỏa mãn 1 giỏ hàng thì discount nào có giá trị lớn hơn sẽ được áp dụng. 
    - Ví dụ: tạo 2 BXGY campaigns cho cùng 1 sản phẩm X, thì khi mua sp X, sản phẩm Y ở campaign nào được discount nhiều hơn thì sẽ được add vào cart.
  - Với các discount khác loại + không bật combination: logic sẽ ưu tiên discount được tạo gần nhất
    - Ví dụ: tạo 1 Product discount ngày 1/6  và 1 Order discount ngày 3/6, ngày 5/6 khách mua sản phẩm thoả mãn cả 2 discounts thì chỉ có duy nhất Order discount ngày 3/6 sẽ được apply 
  - Logic áp dụng cho tất cả discount từ AOV apps và Shopify Discount.
➡️ Support flow:

  - MC thắc mắc campaigns không work dù đã bật combination: check lại xem là campaign cùng loại thì sẽ không works chung được, giải thích cho khách theo logic bên trên, là quy tắc chung cũng như Shopify Discount
  - Discount khác loại thì bật combination, bật rồi nhưng không works thì tạo card TS
🗒️ References:

CS có thể tự tạo campaigns để test và hiểu chính xác logic, thấy chat liên quan thì bổ sung vào đây ạ.
