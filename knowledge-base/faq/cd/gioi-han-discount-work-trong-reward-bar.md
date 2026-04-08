# Giới hạn Discount work trong Reward Bar

⚠️ Problem/ Request:

- Discount code của MC trong Shopify admin → Discounts có những settings đặc biệt. Ví dụ:
  - Filter customer segment 
  - Filter applied to the product or excluded the product
- MC muốn là discount này sẽ work đúng với settings của Reward bar trong app. 
🎗️ Possible causes:

- Mặc dù app lấy discount code từ Shopify Admin → Discounts, tuy nhiên, app không detect được những settings đặc biệt của discount code đó trong Shopify Admin. 
- Vậy, app work kiểu gì? 
  - App chỉ hiển thị discount code của Shopify, còn reward bar sẽ work theo “Total cart value” và “Product quantity” settings của app. 
- Ví dụ: 
  - Discount có settings là: Discount 10% khi mua sản phẩm A. 
  - App có settings là: Product quantity = 2 thì được nhận discount trên. 
  - Với 2 settings trên, nếu customer add 1 sản phẩm B vào cart với số lượng ≥ 2 thì “Reward bar” vẫn work như bình thường và thông báo customer nhận được discount. Tuy nhiên, discount code khi ra màn checkout có thể bị remove do discount đó có settings cụ thể là chỉ áp dụng cho sp A. 
➡️ Support flow:

- CS đọc hiểu kỹ phần giải thích phía trên. 
- Tham khảo câu trả lời mẫu: 
  > 

    - Our app's Reward Bar can only detect and display progress based on universal metrics like the Total cart value or Total quantity purchased (which must apply to all products). The app cannot read or integrate with discount settings that include or exclude specific collections or products. 
    - While your specific discount codes from Shopify will still work correctly at checkout, the Reward Bar itself cannot detect those complex rules and will not display the progress properly in the cart drawer.
  - The discount from your Shopify will work fine; however, our app can't detect and display it properly in the cart drawer since the app Reward Bar and Shopify discount code will work separately.
> Note: discount dạng auto hay manual đều có thể work, nhưng khi vào app sẽ thành auto hết, ko cần nhập code

🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_8ec10049-621e-4feb-b5eb-379f0c72ad84/

✅ Tips & Tricks:

Contact CSL hoặc Susan nếu ko hiểu.
