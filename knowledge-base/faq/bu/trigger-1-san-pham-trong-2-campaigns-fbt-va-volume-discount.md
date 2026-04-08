# Trigger 1 sản phẩm trong 2 campaigns FBT và Volume discount 

⚠️ Problem/ Request:

  - Ví dụ, MC tạo 2 campaigns FBT và Volume discount. Trong trường hợp MC trigger cùng 1 product A cho cả 2 campaigns thì app sẽ work như thế nào?
➡️ Support flow:

  - Nếu trigger cùng 1 sản phẩm A cho cả 2 campaigns, thì: 
    - Widget của cả 2 campaigns vẫn hiện ở product page A đó. 
    - Tuy nhiên, nếu customer add offer của cả 2 campaigns vào cart, thì duy nhất campaign Volume discount work. Còn campaign FBT sẽ không work. 
  - Nguyên nhân: 
    - Do cả 2 cam đều cùng áp dụng “Product discount” cho sản phẩm trigger, theo discount logic của Shopify thì KHÔNG thể áp dụng cả 2 “Product discount” cho cùng 1 line item. Vậy nên chỉ có duy nhất 1 campaign work (là cam Volume discount).
