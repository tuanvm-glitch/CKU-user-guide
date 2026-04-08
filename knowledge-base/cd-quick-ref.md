# CD — Quick Reference

## FAQ

# Display reward bar khi cart rỗng (Cart ko có sản phẩm nào) 

⚠️ Problem/ Request:

- Mặc định, nếu cart rỗng (không có sản phẩm nào), thì app sẽ ko hiển thị process bar. Ảnh minh họa: 
➡️ Support flow:

- Nếu khách có request hiện process bar ngay cả khi cart rỗng → CS vào devzone bật “Display rewards bar on EMTY CART”. 
- Sau đó, process bar sẽ hiển thị cả khi cart rỗng. CS chủ động test lại phía mình trước khi báo lại MC check.
🗒️ References:


---

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


---

# Disable auto add gift

⚠️ Problem/ Request:

- Logic cũ: Khi đủ điều kiện nhận gift, gift sẽ luôn tự động được add vào trong cart. Ngay cả khi xóa free gift đi thì app vẫn sẽ tự động add lại gift.
- Logic mới: Khi đủ điều kiện nhận gift, gift sẽ tự động được add vào trong cart và nếu free gift bị xóa khỏi cart thì sẽ không tự động add lại trong phiên truy cập cửa hàng đó nữa.
✅ Tips & Tricks:

- Nếu còn store nào vẫn gặp lỗi như logic cũ → CS báo thẳng lên Dev + tạo card follow up.


---

# Fix lỗi Auto open cart drawer

⚠️ Problem/ Request:

- Với trường hợp MC contact về việc cart drawer tự động hiển thị ra khi truy cập cửa hàng mà không phải thông qua hành động add to cart hoặc click cart icon.
🎗️ Possible causes:

- Lỗi này thường là do Theme ko compatible với app. 
➡️ Support flow:

- CS double-check lại xem lỗi có đúng như MC report lên ko. 
- Nếu đúng, CS vào Dev-zone → Bật tính năng “Fix: Auto open cart drawer” và test lại xem còn lỗi ko. 
🗒️ References:

> CS sẽ vào bật tính năng này trong devzone và check lại, nếu vẫn còn lỗi thì báo cho Dev, chứ không báo cho TS. 

✅ Tips & Tricks:


---

# Shopify-style price formatting

⚠️ Problem/ Request:

- Với trường hợp cart drawer ngoài storefront hiển thị khác định dạng currency với định dạng currency của theme. Ví dụ: 
  - Product page hiển thị là: 5$
  - CD của app hiển thị là: $5
➡️ Support flow:

- CS vào dev_zone bật tính năng “Shopify-style price formatting”.
- Vào cart drawer ngoài storefront, check xem định dạng currency đã giống với định dạng currency của theme chưa. 
- Sau khi đã giống, CS giụp ảnh và báo MC kiểm tra lại phía họ.


---

# Shipping protection sau khi add vào cart, ra checkout page ko thấy show

⚠️ Problem/ Request:

- Với những stores có multi-locations: Khi bật Shipping Protection trên storefront, sản phẩm có thể không hiển thị ở checkout do bị out of stock tại location đó.
➡️ Support flow:

- Step 1 — Update inventory locations for Shipping Protection
  - Go to Shopify Admin → Products → Find the product "Shipping Protection" → Inventory → Edit Locations → Select all locations → Save
- Step 2 — Verify the fix
  - CS tests again after MC has completed the setup.
  - Ask MC to double-check on their end as well.
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_2a412c87-671d-4279-a8fe-b8e09beeb0f9/

https://avadaio.slack.com/archives/C083YAETLEP/p1758787216533449


---

# Làm tròn giá trị của pricing trong Reward Bar

⚠️ Problem/ Request:

- Với trường hợp Reward bar tính giá trị còn lại để đạt tier tiếp theo thành số thập phân (Pricing), MC có mong muốn làm tròn giá trị này. Ví dụ:
  - You are $50.13 away from getting Free Gift
➡️ Support flow:

- CS vào dev_zone bật tính năng “Round reward bar left value to integer”. 
- MC reload app và check lại ở store front xem số đã được làm tròn chưa. Lúc này ví dụ bên trên sẽ hiển thị: 
  - You are $50.00 away from getting Free Gift


---

# Cho phép chuyển đổi tiền tệ ở reward bar

⚠️ Problem/ Request:

- MC mong muốn hiển thị giá và currency của reward bar khác nhau cho các market có trong store. Ví dụ: 
  - Khi ở Pháp thì hiển thị mua 70 euro nhận free shipping và khi ở Anh thì hiển thị mua 100 bảng cho free shipping.
➡️ Support flow:

- CS vào dev_zone bật tính năng “Enable multiple currencies in reward bar”. 
- CS nhắn MC reload app để hiển thị ra Local currency conversion settings trong Cart Editor → Body → Reward Bar → Campaign setting.


---

# MC muốn dùng reward bar để hiện thị processing widget nhưng ko muốn nó work và dùng app khác offer gift

⚠️ Problem/ Request:

- MC chỉ muốn dùng bar của mình ở đây để hiển thị thông tin về gift khách hàng nhận được ở mỗi Tier. Chỉ hiển thị, chứ KHÔNG work, KHÔNG add gift khi đạt Tier. 
- MC sẽ sử dụng app khác để offer gift tương ứng → Dùng app mình để hiển thị widget only.
➡️ Support flow:

- CS vào dev_zone bật tính năng này, sau đó báo MC test lại phía họ.
- Nếu có vấn đề gì về workflow thì báo lại cho TS/Dev. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_f1e204bd-e6ec-41bb-8b83-bed38ed4398b/ - https://trello.com/c/ixNjYRvw 

✅ Tips & Tricks:


---

# Issue Duplidated Gift trong cart drawer khi dùng reward bar

### ⚠️ Problem/ Request:


Khi Reward Bar được MC thiết lập từ 2 tier trở lên có Free Gift, và trigger condition thỏa mãn cả 2 gifts ở 2 tiers, thì theo logic của Shopify, khách hàng chỉ có thể nhận được 1 gift. Vì vậy, khi khách đạt đến tier free gift thứ 2, có thể xảy ra các vấn đề như: 

- Quà bị duplicate. 
- Quà không được thêm vào giỏ hàng.
- Quà được thêm vào nhưng lại bị tính phí.


---

### ➡️ Support flow:

- Đây là do Shopify rule, mình có 2 workarounds chứ không có cách fix:

1️⃣ Workaround 1: 
  - Tier gift 1 không đổi, tier gift 2 đổi setup thành gift 1+2, để khi add tới tier gift 2 thì sẽ nhảy thêm 2 gifts vào cart cho đủ. 
  - Nhưng còn 1 vấn đề là Shopify có thể đá nhầm gift 2 ra khỏi cart thay vì đá gift 1 (dẫn tới cart bị duplicate gift 1) ⇒ giải quyết hơi phức tạp là cần đổi giá gift 2 lên cao nhất để Shopify không đá nhầm gift 2 nữa, chỉ đá gift 1 ra khỏi cart thôi. 
  - Để tránh ảnh hưởng đến live store của MC thì chỉ cần duplicate product gift 2, set cái mới tạo ra giá cao nhất và set unlisted, set vào camp làm gift.
  
2️⃣ Workaround 2 - Recommended: 

  - Sử dụng app AOV.ai Free Gift bên mình và sử dụng milestone feature để thay Reward bar trong app CD. 

---

### 🗒️ References:

https://avadaio.slack.com/archives/C083YAETLEP/p1765841594279869

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_96e14188-50b3-464a-acec-4bbb6ddb7692/

> CS Trainee đọc đến FAQ này có thể tự test lại ở store mình với Workaround 2 (skip Workaround 1 - sau khi join chat gặp phải case tương tự mà khách không chịu cài app FG thì check lại FAQ và hướng dẫn MC).


---

# MC muốn integrate app Joy Loyalty (redeem point feature) vào Cart Drawer 

⚠️ Problem/ Request:

- MC muốn hiển thị widget redeem điểm của app Joy vào app Cart Drawer.
- Một vài thông tin về app Joy Loyalty: 
  - Giúp khách hàng kiếm điểm thành viên từ các hoạt động như: sign up, place order,… 
  - Customer dùng điểm để redeem discount code. 
➡️ Support flow:

- CS vào dev_zone bật feature “Allow using Redeeminline (Joy) in CD” là nó hiện tool redeem điểm của Joy ở trong CD. 
- Nếu có vấn đề/ lỗi → CS báo MC contact CS bên Joy. Bên mình chỉ cho hiển thị nhờ widget chứ ko can thiệp vào workflow của bên đó.
🗒️ References:

https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_919419ae-6749-4545-8038-c0da796cd749/

✅ Tips & Tricks:


---

# MC muốn customize hiển thị của properties dưới tên sản phẩm trong CD

⚠️ Problem/ Request:

- Hiện tại, properties của sản phẩm đang hiển thị theo dạng như sau:
  - Upload your pet’s photo > Background: Willow > Style: Poster > Size: 8”x10” > Pet name: Mike.
- MC muốn custom phần properties hiện như này "Willow / Poster / 8x10 / Mike” - Hiển thị ngắn gọn hơn. 
🎗️ Support flow:

- CS vào Dev_zone để chỉnh sửa theo format như sau: 
  - Mục Inline Properties điền: Style,Background,Size,Pet Name. 
- Lưu ý: điền đúng format như trên, không space lung tung để app detect được đúng properties format và hiển thị. 
- Nếu có Properties nào khác nằm ngoài những properties đang có trong ảnh, có thể hỏi thêm TS/BA điền gì vào để hiển thị cho đúng ý MC. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_4761d85f-04df-4bbc-b69d-20e9e6c87182/

✅ Note:

- Product báo sẽ làm thành tính năng ra bên ngoài cho MC sử dụng sau.


---

# Integrate với các app Product Options

### ⚠️ Problem/ Request:

- Integrate với các app Product Options để hiển thị widget của các app này trong cart drawer của mình. 
- Hiện tại, bên mình đã work với các app sau: 
  - King Product Options
  - Hulk Product Options
  - APO Product Options
  - Easify Options
### 🎗️ Possible causes:

### ➡️ Support flow:

- Khi MC muốn hiển thị widget của các app Product Option phía trên trong Cart Drawer, chỉ cần bật feature “Show product Properties”. 
- Access Cart Editor → Body → Product Card → Settings → Show product properties.
### 🗒️ References:

### ✅ Tips & Tricks:


---

## Dev_zone

# Dev_zone — CD

## Làm thế nào để access được dev_zone page? 

- Sau khi mở store khách qua CRM, từ link của Dashboard thêm /dev_zone và enter để mở page: https://ibb.co/hxBzD3pB 
- Mật khẩu chung để access dev_zone tất cả các app là: admin_avada_!@#
Lưu ý: Contact leader hoặc CS member cùng team để hỏi nếu vẫn chưa hiểu rõ tính năng nào đó trong dev_zone. Ko tự ý ấn linh tinh ở store khách. 

## Cách sử dụng dev_zone cho app AOV Cart Drawer: 

| Feature  | Tooltips |
| Allow auto fit theme | - Unlock tính năng này: https://prnt.sc/U1WucI5UFxAq - MC có thể sử dụng bộ màu của theme để đổi màu widget tự động mỗi lần ấn nút. 
- Check flow: Untitled  |
| Allow auto translate | - Dịch tự động toàn bộ text trên cart drawer theo những ngôn ngữ được set sẵn ở store của MC. 
- Check chi tiết ở đây: Untitled  |
| Remove rewards bar tier limit | - Limit tier trong tính năng reward bar = 1 > MC cần contact CS để được unlock. 
- Check chi tiết ở đây: Untitled  |
| Remove reward bar animation limit | - Khóa tính năng animation ở đây: https://prnt.sc/ubtYUhHd6c-0 > MC cần contact CS để được unlock. 
- Check chi tiết ở đây: Untitled  |
| Remove upsell quantity limit | - Limit upsell product trong tính năng Upsell product = 2 - https://prnt.sc/dkAlh796qhbg 
- Check chi tiết ở đây: Untitled  |
| Display rewards bar on EMPTY CART | - By default > nếu cart ko có sp nào thì reward bar sẽ ko hiện. Nếu MC muốn hiển thị ngay cả khi cart rỗng thì bật tính năng này lên. 
- Check chi tiết ở FAQ: Untitled  |
| Always show reward bar animation | - Animation ở reward bar bình thường chỉ hiển thị 1 lần đầu tiên trong phiên truy cập (session) của customer khi reward bar đạt đủ toàn bộ tier, để tránh spam customer
- Khi bật option này thì animation sẽ hiển thị mỗi lần mà reward bar đạt tier cao nhất (không giới hạn số lần trong 1 session) |
| Enable animation upon each tier | - Feature này cho phép hiển thị animation mỗi tier khi khách reach threshold. |
| Round reward bar left value to integer | - MC muốn làm tròn giá trị cần đạt đển nhận được gift ở reward bar > CS bật tính năng này. 
- Check chi tiết ở FAQ: Untitled  |
| Remove prevent automatically adding gift to cart (Rewards bar) | - Check chi tiết ở FAQ: Untitled  |
| Lock scroll when cart drawer is open | Khi scroll ở đt, nhiều theme sẽ bị scroll trang phía sau cart drawer thay vì scroll trong CD. Bật option này để fix lỗi.  
Untitled  |
| Enable multiple currencies in reward bar | - Bật option này để hiển thị thêm phần setting Local currency conversion trong admin tính năng reward bar cho phép MC thiết lập mức buy at least khác nhau đối với các currency.
- Check chi tiết ở đây: Untitled  |
| Shopify-style price formatting | - Bật option này để định dạng currency trong cart drawer ngoài storefront hiển thị theo định dạng currency mà store đang sử dụng.
- Check chi tiết ở đây: Untitled  |
| Fix: Auto open cart drawer | - Thi thoảng với 1 vài theme, ngay khi vừa mở trang thì cart drawer tự động bật ra mà ko có action add to cart 1 sản phẩm nào đó > bật tính năng này để fix. 
- Trong TH bật lên vẫn lỗi > xin quyền theme > báo lên TS/Dev. |
| New trust badges image | - MC muốn add thêm icon riêng của store vào trust badges feature > CS xin ảnh MC muốn upload và upload ở field này.  |
| Rewards bar max tiers | - MC muốn có nhiều hơn 3 tiers > CS adjust số tier họ muốn vào đây và ấn save: https://avada-image.pages.dev/i/_KaQONmy- 
- Để dùng đc tính năng này, thì cần bật “Remove reward bar limit” trong dev_zone: https://avada-image.pages.dev/i/uD-PilDSF |
| Max products in upsell  | - MC muốn add được nhiều hơn 5 products ở Upsell feature → CS chỉnh ở đây trong Dev_zone https://capture.avada.io/i/gn40O2xpY
- Để dùng được tính năng này, thì cần bật thêm “Remove upsell quantity limit”: https://capture.avada.io/i/8WNxlq17q  |
| Removed Reward Bar’s gift-adding logic (so stores can use gift logic from other apps) | - Với những store có app thứ 3 để xử lí free gift thì có thể bật option này để CD chỉ chạy logic hiển thị gift (bỏ qua logic add, remove gift, apply discount Buy X get Y) tuy nhiên trong admin người dùng vẫn cần chọn đủ thông tin gift + discount để save (chọn có đủ thôi chứ ko dùng). 

- Các goal khác ngoài freegift (order discount hoặc free shipping) logic giữ nguyên, vẫn tự động apply discount code bthg.  |
| Add unsupported countries for reward bar | - Ví dụ ở 1 vài quốc gia MC ko set shipping fee (Freeship). 
- Chọn quốc gia ko set shipping fee → Thì reward bar sẽ KHÔNG hiện ở những quốc gia đó.  |
| Remove logic auto apply discount Reward bar  | - Bật lên thì discount ở reward bar sẽ ko tự động apply khi cart đủ trigger condition. 
- Discount chỉ work khi khách hàng tự apply thủ công.  |
| Allow using RedeemInline (Joy) in CD  | - Bật lên thì feature redeem point của app Joy Loyalty sẽ hiển thị ở CD. 
- App CD ko can thiệp vào logic, chỉ cho hiển thị nhờ widget.  |
| Should not use intercept cart add form | Feature: https://capture.avada.io/i/1XqcHr3rT4rc 
Use case: https://capture.avada.io/i/Sv55vr9c43aI 
- Với theme Debut hoặc Shrine Pro thì sp khi add vào cart có thể bị duplicate → bật toggle này để fix lỗi duplicate sp.  |
| Reward bar animation color  | https://capture.avada.io/i/c8P9WAn1yzmw 
- Muốn nhiều màu thì viết liền các màu ko space. Ví dụ: #A5D6A7#FFFFF 
- Mẫu: https://capture.avada.io/i/EAiuPQWizfcq  |
| Show upsell product on empty cart | Khi cart empty, thay vì chỉ hiển thị no items found → thì app sẽ hiển thị Upsell products (chỉ với dạng manual). |
| Redirect to product ppage when click upsell button | - Khi bật lên thì nút add upsell sẽ đổi thành redirect sang product page.
- Use case: MC muốn add button của upsell redirect product page, không add thẳng vào cart, do sp của họ cần customize trên product page. |
| Turn on shipping protection as default | - Khi bật thì cart sẽ tự động bật phần shipping protection đồng thời add sản phẩm shipping protection vào khi trong cart có sản phẩm (thay vì đang mặc định tắt như hiện tại). |
| Inline properties | - Cho phép tùy chỉnh properties của product. 
- Check FAQ: Untitled  |
| Exclude the total compare-at price from the discount total  | Loại trừ compare at price trong total discount value ở đây: https://capture.avada.io/i/gpcwN8Bd7Ab0  |
| Allow using CD on Cart page | Cho phép sử dụng CD ở cart page. |
|  |  |
|  |  |


## User Guide (danh sách — đọc file cụ thể nếu cần)

- `user-guide/cd/readme.md` — Welcome
- `user-guide/cd/editor.md` — Cart Editor
- `user-guide/cd/design.md` — Design
- `user-guide/cd/general-settings.md` — General Settings
- `user-guide/cd/rewards-progress-bar-setup-guide.md` — Rewards Progress Bar - Setup Guide
- `user-guide/cd/cart-drawer-overview.md` — Cart Drawer Overview
- `user-guide/cd/translation.md` — Translation
- `user-guide/cd/header-header.md` — Header
- `user-guide/cd/body-announcements.md` — Announcements
- `user-guide/cd/rewards-bar.md` — Rewards bar
- `user-guide/cd/product-card.md` — Product card
- `user-guide/cd/addition-notes.md` — Addition notes
- `user-guide/cd/footer-discount-codes.md` — Discount codes
- `user-guide/cd/footer-subtotal.md` — Subtotal
- `user-guide/cd/footer-customized-text.md` — Customized text
- `user-guide/cd/footer-checkout-button.md` — Checkout button
- `user-guide/cd/footer-trust-badges.md` — Trust badges
