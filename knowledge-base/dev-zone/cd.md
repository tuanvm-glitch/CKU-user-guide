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
