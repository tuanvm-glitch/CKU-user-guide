# Logic Upsell offer (sản phẩm rẻ nhất/đắt nhất)

⚠️ Problem/ Request:

- Feature: Logic upsell offer (sản phẩm rẻ nhất/đắt nhất) trong giỏ hàng.
- Location: Campaign editor → Step 2: Upsell offer → Add products → Specific product: 
  - Most expensive in cart.
  - Least expensive in cart. 
🗒️ References:

Logic upsell sản phẩm đắt nhất/ rẻ nhất trong giỏ hàng: 

- Trong TH sản phẩm upsell được discount: 
  - Thì sẽ lấy giá gốc của sản phẩm để so sánh, chứ không phải lấy giá compare at price, đồng thời cũng áp dụng logic đó khi sản phẩm đó có discount.
    - Ví dụ trong giỏ hàng có sản phẩm A giá 1000$, sản phẩm B giá 900$, sau khi sang trang checkout, sản phẩm A được discount xuống còn 500$ → với logic display sản phẩm đắt nhất thì trang upsell vẫn hiển thị sản phẩm A do (1000 > 900) : 
- Trong TH sản phẩm có giá bằng nhau: 
  - Nếu trong original order có nhiều hơn 1 sản phẩm có giá bằng nhau thì sẽ random 1 trong những sản phẩm đó.
Note: 

- Link release: https://avadaio.slack.com/archives/C08S4EP6W02/p1762398245207589
