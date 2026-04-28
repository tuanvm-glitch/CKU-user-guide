# BU — Quick Reference

## FAQ

# Hiển thị FBT widget trong Cart Drawer 

⚠️ Problem/ Request:

  - MC muốn hiển thị FBT widget trong cart drawer.
🎗️ Sum up:

  - Hiện thì app mới chỉ add được FBT vào cart drawer → Sau khi add thì widget FBT sẽ chỉ hiện ở trigger product page → cart drawer.
  - KHÔNG add đc FBT vào Cart page. 
➡️ Support flow:

  - CS xin MC quyền Theme → Edit code → Báo TS add hộ. Ảnh mẫu: 
🗒️ References:

Case study: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_ed1ab91e-1cf8-47bc-9399-c7a94caddf21/ 

✅ Tips & Tricks:

  - Case này CS có thể dựa vào ảnh mẫu ở trên để add code (chỗ mũi tên) vào file cart-drawer.liquid để test thử trên store test của CS. 
  - Cần đảm bảo là app Cart drawer đang được bật ở theme → App embeds.


---

# Out Of Stock child product - Offer có work?

⚠️ Problem/ Request:

  - MC thắc mắc: khi tạo offer xong chạy ổn một thời gian, có sản phẩm trong bundle product out of stock thì offer có tự động ngừng hay vẫn work?
🎗️ Possible causes:

  - Liên quan logic app: CS có thể nhầm lẫn giữa 2 offer: FBT và Volume Discount
➡️ Support flow:

  - Frequently Bought Together (FBT) Offer:
    - If the trigger product is out of stock, the offer will not work.
    - If an offer product is out of stock, the offer will still work and display the trigger product along with any other in-stock offer products.
  - Volume Discount Offer:
    - In this type of offer, the trigger and the offer product are the same (for example, "Buy 2 of Product A, get 10% off") ⇒ Therefore, if the product is out of stock, the offer will not work since there is no available product to trigger the discount.


---

# MC ko muốn offer products được auto select ở FBT table

⚠️ Problem/ Request:

  - MC ko muốn product được auto select ở FBT table:
➡️ Support flow:

  - CS enable option "Allow untick FBT" trong dev_zone. 
  - Sau khi enable, MC có thể chủ động bật/tắt auto-select offered items ở FBT setting → Step 2. 
  - Sau khi disable tính năng trên, những offer items trên front store sẽ tự động bị untick.


---

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


---

# Volume discount có được tự động tăng “Discount value” theo số lượng của Product quantity ko?

⚠️ Problem/ Request:

  - Volume discount có được tự động apply “Discount code” theo số lượng của Product quantity ko? 
➡️ Support flow:

  1. Trường hợp 1 - Không bật feature: Apply discount for exact quantity only 
    - Setting mẫu: 
      - Tier 1: Buy 1 → Giảm 5% 
      - Tier 2: Buy 5 → Giảm 10% 
    - Với setting này: 
      - Customer mua từ 2 đến 4 → Vẫn được giảm 5% 
      - Customer mua từ 5 trở lên: 6, 7, 8,… thì vẫn sẽ được giảm 10%
  1. Trường hợp 2 - Có bật feature: Apply discount for exact quantity only 
    - Vẫn với setting trên: 
      - Customer từ mua từ 2 đến 4 hoặc mua từ 5 trở lên sẽ KHÔNG nhận được discount. 
      - Họ phải mua exact 1 sản phẩm hoặc 5 sản phẩm như settings thì mới được áp dụng discount tương ứng.


---

# Đổi vị trí hiển thị của Currency

⚠️ Problem/ Request:

  - Khách muốn đổi đơn vị tiền trong ảnh thành ký hiệu:
    - Ký hiệu là: R 
    - Tên đầy đủ là: ZAR 
  - Giống kiểu ký hiệu là $ và tên đầy đủ là dollar. Chỗ này MC muốn hiện ký hiệu thay vì tên đầy đủ.
➡️ Support flow:

  - CS vào dev_zone → bật tính năng “Enable Shopify-style price formatting” xong reload lại app page để check lại. 
  - Sau đó app sẽ tự động chuyển “tên đầy đủ” của currency về dạng “ký tự”.
🗒️ References:

https://avadaio.slack.com/archives/C08S4EP6W02/p1751617852847179 

✅ Một vài trường hợp khác: 

  - 1 vài trường hợp, MC muốn hiện cả “ký hiệu” và “tên đầy đủ” thì CS bật feature “Use currency code with price format” trong dev_zone.
  - Ví dụ: $1000 CAD instead of $1000


---

# Display compare-at price trong Volume discount

⚠️ Problem/ Request:

  - Volume discount bundle - MC tạo 3 tiers: 
    - Tier 1: Buy 1 → Ko giảm
    - Tier 2: Buy 2 Get 1 Free
    - Tier 3: Buy 3 Get 2 Free
  - Compare-at price không show với Tier 2 và 3, dù không bật feautre Hide compare-at price trong settings. 
🎗️ Explanation: 

  - Ở đây, các tier dùng loại offer khác nhau, Tier 1 đang là volume discount nên có compare-at price, còn tier 2 với tier 3 là BXGY nên ko có compare-at price.
🗒️ References: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_aef1e277-6592-434e-9840-378b68c68ae7/

✅ Tips & Tricks:


---

# Lưu ý khi tạo template cho Bundle Builder 

⚠️ Problem/ Request:

  - Khách confirm là đã tạo template và add block nhưng campaign Bundle Builder không work. 
🎗️ Possible causes:

  - Đặt sai tên template. 
  - Lưu ý: Bắt buộc phải tạo exact name “aov” cho product template thì app mới detect được và work. 
➡️ Support flow:

  - CS xin quyền theme → check product template xem có template nào đặt sai tên không? 
  - Nếu MC đặt bất cứ 1 cái tên nào ngoài aov → thì app sẽ ko work. Những tên sai, ví dụ như: aov-test, aov-bundle,… 
    > NOTE: 

      - Trong trường hợp đặt tên sai, bắt buộc phải xóa cái template có tên sai đó đi, và tạo lại template mới từ đầu với exact name là “aov”. 
      - CS có thể xin MC quyền theme → Edit code và nhờ TS xoá hộ. Vì khi tạo 1 template trong theme thì phải xoá trong code. Chứ Shopify không có option cho xoá template ở “Theme Customization”.
🗒️ References:

https://avadaio.slack.com/archives/C08S4EP6W02/p1752463099006699

https://docs.avada.io/aov-bundle-upsell/bundle-builder/how-to-set-up

✅ Tips & Tricks:

Contact leader nếu cần demo lại tính năng này.


---

# Trigger 1 sản phẩm trong 2 campaigns FBT và Volume discount 

⚠️ Problem/ Request:

  - Ví dụ, MC tạo 2 campaigns FBT và Volume discount. Trong trường hợp MC trigger cùng 1 product A cho cả 2 campaigns thì app sẽ work như thế nào?
➡️ Support flow:

  - Nếu trigger cùng 1 sản phẩm A cho cả 2 campaigns, thì: 
    - Widget của cả 2 campaigns vẫn hiện ở product page A đó. 
    - Tuy nhiên, nếu customer add offer của cả 2 campaigns vào cart, thì duy nhất campaign Volume discount work. Còn campaign FBT sẽ không work. 
  - Nguyên nhân: 
    - Do cả 2 cam đều cùng áp dụng “Product discount” cho sản phẩm trigger, theo discount logic của Shopify thì KHÔNG thể áp dụng cả 2 “Product discount” cho cùng 1 line item. Vậy nên chỉ có duy nhất 1 campaign work (là cam Volume discount).


---

# Các issue thường gặp ở Mix-match và Fixed bundle

### ⚠️ Problem/ Request:

- Mix-match Bundle: 
  - Add vào cart giá = 0đ thì cần query selector của button ATC → sẽ hiển thị được giá của sản phẩm mix-match ở trong cart (Forward cho TS nếu thấy giá sản phẩm Bundle hiện thị = 0đ). 
  - Khi add sản phẩm mix match mà hiển thị thông báo error → lý do là MC sửa sản phẩm con (Child product trong Bundle đó) và sản phẩm mix-match → lưu lại offer mix-match là hoạt động được
- Fixed bundle:
  - Không hiển thị widget, lý do MC sửa sản phẩm fixed bundle đó thành sản phẩm khác → giải pháp là tạo lại offer fixed bundle cho MC
- Lưu ý: đối với offer Fixed và mix-match thì CS thông báo với MC là không update sản phẩm con và sản phẩm offer để tránh xảy ra lỗi. 
### ✅ Tips & Tricks:

- Contact Lâm nếu có câu hỏi liên quan đến Bundle. 
- Case study: https://avadagroupcom.slack.com/archives/C083YAETLEP/p1756196558795389


---

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


---

# Cách Cart Tips hoạt động: Tính năng dev_zone để đổi flow của Cart Tips

⚠️ Problem/ Request:

  - Hiện tại, cart tips chỉ đang work với “default option” feature trong campaign Volume discount.
  - Ví dụ: 
    - Settings campaign như ảnh, Default đang được set ở Tier 2. 
      - Tier 1: Product quantity = 1 → Được discount $5
      - Tier 2: Product quantity = 2 → Được discount $10
      - Tier 3: Product quantity = 3 → Được tặng 1 sản phẩm Free
    - Trong trường hợp khách hàng add Tier 1 → Cart tips hiện và thông báo → Add 1 more to save …%.
    - Tuy nhiên, nếu add Tier 2 → Cart tips sẽ KHÔNG hiển thị → Add one more để đạt Tier 3 nữa. Mà chỉ dừng hoạt động ở Tier được set là default. 
  - MC request: 
    - MC muốn add bất kỳ số lượng nào vào cart thì Cart Tips đều hiện báo “Add more to save discount” của next tier, cho đến last tier. 
➡️ Support flow:

  - CS vào Dev_zone bật tính năng “Show cart tip until last option” → app sẽ work như MC request. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_9975bb2c-c7b2-49ba-9821-fb307cdf5d03/


---

# Lỗi JSON khi ấn add to cart từ volume discount widget

⚠️ Problem/ Request:

  - Khi ấn add to cart từ volume discount thì hiện lỗi này: “Cannot read properties of undefined (reading ‘json’): undefined 
➡️ Support flow:

  - CS vào Dev_zone bật “Allow Json return for request add to cart: For Dev” để fix lỗi. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_4702e64b-520d-4c65-bb2d-8adb0c595654/

> Chỉ áp dụng cho những lỗi báo tương tự. Lỗi nào ko báo giống như ảnh thì CS xin theme và tạo card cho TS.


---

# Hiển thị “Compare at price” của từng sản phẩm trong FBT thay vì chỉ hiện mỗi ở Final total

⚠️ Problem/ Request:

  - Hiện tại, Frequently Bought Together (FBT) chỉ show discount price ở total dưới cùng, không show discount price cho từng sản phẩm con → như ảnh. 
  - MC muốn từng sản phẩm con cũng sẽ hiển thị giá giảm. 
➡️ Support flow:

  - CS vào dev_zone bật tính năng “Show discount offer products in FBT” để show discount per product cho FBT widget. 
  - Kết quả:


---

# Discount combination của bundle với voucher/ point

⚠️ Problem/ Request:  

  - MC muốn combine discount của bundle với các event promotion/ voucher khác mà có tích điểm với loyalty 
🎗️ Example: 

  - Ví dụ: có 100 điểm = voucher $1 (tạo ra code để áp dụng ở checkout) và có cả điểm cộng dồn từ member vouchers.
  - Nói cách khác, họ muốn có quyền chọn loại voucher/discount nào được phép combine với Bundle discount.
➡️ Support flow: 

  - CS hỏi xem họ có dùng app Loyalty gì để đổi ra point, có setting nào cho discount combination không. Chỉ cần bên app đó có setting đó, thì bundle của mình sẽ có thể combine discount.
🗒️ References: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_e07ec144-372b-47c2-bdde-e2fd1858295c/

✅ Tips & Tricks:


---

# MC muốn hiển thị widget của bundle ở Trigger product page (product page của sản phẩm con) 

⚠️ Problem/ Request:

  - Thông thường, campaign Fixed bundle, Mix-match bundle và Bundle Builder sẽ tạo ra 1 trang sản phẩm riêng. 
  - Trang sản phẩm riêng này sẽ bao gồm các sản phẩm con mà MC chọn trong Trigger condition ở campaign setting. 
  - MC muốn ở mỗi trang của từng child product sẽ có widget thông báo về việc product này đang nằm trong bundle nào.
🎗️ Support flow: 

  - Widget của từng campaign để adjust vào product page của sản phẩm con lần lượt là: 
    - Fixed bundle: 
      - Dùng widget → Child product list. 
    - Mix-match bundle: 
      - Dùng widget: Mix-match bundle.
      - Bật tính năng trong campaign: “Show products included in bundle”. 
    - Bundle Builder: 
      - Dùng widget: Bundle Builder.
      - Với campaign Bundle Buidler: Nếu add widget vào product template riêng tên “aov” sẽ hiển thị widget của campaign → bao gồm các sản phẩm con. Check thêm FAQ này: Lưu ý khi tạo template cho Bundle Builder  
      - Nếu add widget vào product template (default) cho tất cả products → Nó sẽ hiển thị widget cho sản phẩm con để thông báo về việc sản phẩm này đang nằm trong bundle nào. 
➡️ Support flow:

  - CS chủ động xem MC sử dụng campaign nào và hướng dẫn họ add tương ứng. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_4fd7af2f-10c0-4988-8644-d4855952c444/

✅ Tips & Tricks:

https://avadaio.slack.com/archives/C08S4EP6W02/p1768213235150979


---

# Bundle Builder ko hiển thị child products trong checkout page và order

⚠️ Problem/ Request:

  - MC báo CS về vấn đề trong trang checkout page hoặc trong 1 order có xuất hiện bundle builder product nhưng không có child products được list ở dưới.
  - Customer ko biết là mình đã chọn sản phẩm gì trong bundle đó. 
🎗️ Possible causes:

  - Là do MC sử dụng nút quick add to cart ở collection page hoặc Home page. Ví dụ: 
➡️ Support flow:

  - Giải thích với MC nguyên nhân ở trên. 
  - Hướng dẫn MC workaround: Do customer buộc phải ấn add to cart từ trong trang Bundle product page thì child product list mới hiển thị ở trang checkout, MC có thể cân nhắc ẩn nút add to cart ở trang Home page hoặc Collection. Ngoài ra thì hiện chưa có solution nào khác. 
  - Thì ra checkout page hoặc Orders section ở Shopify admin mới hiện đầy đủ thông tin sản phẩm con trong Bundle như ảnh dưới:
🗒️ References:

Crisp chat: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_c7613f0b-f850-4abe-9cad-83cc11d04fde/

Recording: https://www.loom.com/share/c90d2032df2440acaee1ec5bd99ba6d9

✅ Additional note: 

  - Hiện child products sẽ chỉ hiển thị ở Checkout page hoặc Orders feature ở Shopify admin. 
  - Child products sẽ KHÔNG hiển thị ở cart page hoặc cart drawer.
    - Cart drawer: 
    - Cart page:


---

# MC hỏi về phần Overview và cách tính revenue như thế nào

⚠️ Problem/ Request:

  MC hỏi về cách app tính “Additional revenue” và “Revenue generated by AOV” ở app Dashboard. 

🎗️ Explanation: 

  - Additional revenue: Data này được tính dựa trên doanh thu bổ sung kiếm được từ Bundle. Nếu một sản phẩm có giá $50 và khách hàng đặt mua một gói 2 sản phẩm với giá $65, thì additional revenue là $15.
    - Ex: FBT có 1 trigger product và nhiều upsell products, thì giá trị của các upsell sẽ được tính vào phần additional revenue.
  - Revenue generated by AOV: Data này được tính dựa trên giá trị sản phẩm của Bundle trong order. 
    - Ex: Order $100, có 3 items A, B, C. Item C = $50 nằm trong bất cứ bundle nào được tạo bởi app, thì $50 này sẽ được tính vào mục Revenue generated by AOV.
➡️ Sự khác biệt giữa 2 features: 

  - Additional revenue loại bỏ trigger product và tier ko có discount
  - Revenue generated by AOV tính tất cả giá trị sản phẩm được tạo ra từ app.

🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_acf33d23-26d8-4b47-be7a-c8be45a62391/

https://avadaio.slack.com/archives/C083YAETLEP/p1774531214019939


---

# Joy subscription integration

⚠️ Problem/ Request:

  - Khi integrate Volume discount với app Avada Joy Subscription, thì discount của 2 app sẽ hoạt động chung với nhau như thế nào? 
🎗️ Bối cảnh: 

  - Product A có giá = $50
  - App AOV.ai Bundle - Volume discount campaign - Trigger product là A: 
    - Tier 1: Buy 1 giảm 20% 
    - Tier 2: Buy 2 giảm 25%
    - Tier 3: Buy 4 giảm 30% 
  - App Avada Joy Subscription - Trigger product là A: 
    - One-time purchase: Không discount 
    - Subscription purchase: 
      - Frequently: once a week → discount 10%
      - Frequently: Every 2 months → discount 5%
➡️ Support flow:

  - Customer buys Tier 2 + Frequently: once a week → discount 10% thì họ sẽ được giảm bao nhiêu tiền? 
  - Công thức tính như sau: 
    - 1 - Discount subscription work trước: Giảm 10% của 50$ = $45
    - 2 - Discount của volume work sau = (Giá sau discount của subscription * quantity chọn ở volume) * discount của volume = 45 * 2 * 25% = $22.5
    - 3 - Tổng trước discount: $50 × 2 = $100 → Subscription giảm: $5 × 2 = $10 → còn $90 → Volume giảm: $90 × 25% = $22.5 → KH trả: $90 - $22.5 = $67.5
🗒️ References:

  - Mỗi lần giảm tính trên số tiền còn lại, không phải giá gốc.
✅ Tips & Tricks:


---

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


---

## Dev_zone

# Dev_zone — BU

## Làm thế nào để access được dev_zone page? 

- Sau khi mở store khách qua CRM, từ link của Dashboard thêm /dev_zone và enter để mở page: https://ibb.co/hxBzD3pB 
- Mật khẩu chung để access dev_zone tất cả các app là: admin_avada_!@#
Lưu ý: Contact leader hoặc CS member cùng team để hỏi nếu vẫn chưa hiểu rõ tính năng nào đó trong dev_zone. Ko tự ý ấn linh tinh ở store khách. 

## Cách sử dụng dev_zone cho app AOV Bundle Upsell: 

### I. Các tính năng trong bộ Growth Hack: 

  Note: 

  - Có thể tham khảo chi tiết về các GH mới của app ở đây: https://www.notion.so/avadagroup/Growth-hacks-354f3d24cd08437fa8317a03663c117d
  1. Allows update text: 
  - Giúp MC có thể edit được text của “Volume table widget”, “Frequently bought together widget” - MC sẽ reach out CS ở nút “Contact Support” bên dưới.
  - Sau khi bật thì màn edit text sẽ hiện: 
  1. Remove Trademark: (Remove branding) 
  - Bật lên để remove app branding ở widget. 
  1. Allows auto-match with theme:
  - Nó sẽ hiện ở đây phía MC (Trong widget setting): 
  - Sau khi CS bật tính năng trong dev_zone > MC có thể sử dụng tính năng này để app tự apply widget theme match với theme store của MC. Check chi tiết GH này ở đây: https://www.notion.so/avadagroup/Growth-hacks-354f3d24cd08437fa8317a03663c117d?p=8189b64694274bc6b6ba053e2065360f&pm=s
  1. Allow Untick FBT text: 
  - By default thì tính năng này sẽ bị tắt, và toàn bộ sp ở trong box FBT sẽ được tick như ảnh: https://prnt.sc/r4xVUzU8fJQJ
  - MC muốn mặc định thì cái này phải bị untick: https://prnt.sc/Vs2Tj1qs9AD8 → CS nhận request > vào dev_zone và bật tính năng này lên. 
    - Font family widget default là font monospace ( khác với font theme )
  1. Allows use theme font
  - Enable “Allows use theme font” để sửa font widget giống với font theme
  - sau khi enable thì font tại widget giống với font theme
  1. Enable Shopify-style price formatting and Use currency code with price format
  - 2 features này dùng để tùy chỉnh currency. 
  - Tham khảo chi tiết ở đây: Đổi vị trí hiển thị của Currency 
  1. Remove AI recommendations limitation
  Store muốn sử dụng nhiều offer AI hơn thì enable “Remove AI recommendations limitation”

### II. Các tính năng khác: 

  1. Widget position: 
  - Với những theme ko phải OS 2.0 hoặc với những store không hỗ trợ add block thì sẽ ko add những widget này bằng cách “add block” thông thường. 
  - CS hỏi vị trí muốn hiện widget > forward cho TS. TS sẽ tìm class cho vị trí tương ứng và save vào đây trong dev_zone để hiện widget trên front store.
  1. Mix-match bundle selectors:
  - Khi customer add sản phẩm mix-match vào cart nhưng price = 0 thì nhờ TS add selector button ATC thì sẽ hiển thị giá sản phẩm mix-match trong cart
  - Quantity input: ẩn quantity input của Mix match vì quantity input đó không work với mix match
  - Default price: ẩn price = 0 của mix match
  - 
  1. Custom CSS: 
  - Field này dành cho những customization request từ phía MC cho app. CS nhận request > forward cho TS. Trong TH ko có theme access, TS sẽ apply CSS code ở đây. 
  - Lưu ý: 1 vài TH paste code vào đây sẽ ko work > CS có thể xin quyền theme > edit code và forward cho TS nếu TS có yêu cầu. 
  1. Stop click cart icon after add to cart
  Với những store khi add sản phẩm từ volume, FBT mà tự động redirect đến cart page → bật option “Stop click cart icon after add to cart” thì sẽ không bị redirect đến cart page nữa 

  1. Allows "All products" option in collections FBT
  Với store yêu cầu chọn sản phẩm offer FBT là collection nhưng muốn show all sản phẩm collection đó trong FBT thì enable “Allows "All products" option in collections FBT” ( chỉ work được 13-15 sản phẩm) →show option all product trong collection đó 

  1. Allow reducing gift: 
    - MC muốn chỉ cho phép khách hàng giảm số lượng gift, chứ không được click tăng số lượng gift.
    - CS cần bật đồng thời cả tính năng "Disable adjustment of gift quantity" ở app settings và "Allow reducing gift" ở dev_zone.
  1. Uncheck Gift: 
    - By default thì tính năng này mặc định sẽ là được tick sẵn: https://prnt.sc/reV7oX4-nQPd
    - Có MC request uncheck những chỗ này > CS vào dev_zone bật "Uncheck gift" lên nhé: https://prnt.sc/lKU-zg2cO8NU
Quan trọng: Không bật tắt tính năng Disable review hacking và không được đổi shopify plan của store nhé mn https://prnt.sc/Zm6Is1CGSw_y

Có thắc mắc gì hỏi @Dương Ngọc Lâm 

|  | Tooltip |
| Edit discount code | Cho phép chỉnh sửa discount code |
| Use theme font | Sử dụng font chữ mặc định của theme để đồng bộ giao diện. |
| Auto-match with theme | Tự động áp dụng màu sắc và style từ theme. |
| Stop clicking on the cart icon | Ngăn khách hàng nhấp vào biểu tượng giỏ hàng sau khi thêm sản phẩm Bundle. |
| "All products" option in FBT collections | Bật tùy chọn “Tất cả sản phẩm” trong collection FBT. |
| Enable Meta Pixel AddToCart event tracking | Gửi sự kiện AddToCart đến Meta Pixel để theo dõi. |
| Buck Currency integration | Cho phép tích hợp với app Buck Currency. |
| Disable auto-select tier in volume discount | Ngừng tự động chọn tier mặc định trong volume discount( value: 100). |
| Max quantity per tier (default: 100) | Giới hạn số lượng tối đa cho mỗi tier volume discount. |
| Allows update text | Cho phép chỉnh sửa nội dung văn bản hiển thị. |
| Remove AI recommendation limit | Gỡ bỏ giới hạn số lượng gợi ý AI. |
| Remove trademark | Ẩn dòng chữ thương hiệu mặc định khỏi widget. |
| Show volume ATC button | Hiển button Add to Cart cho volume discount. |
| Redirect to product page in Bundle Builder | Chuyển hướng sang trang sản phẩm khi chọn sản phẩm thành phần trong Bundle Builder. |
| Allow unselect in FBT | Cho phép bỏ chọn sản phẩm trong từng offer FBT, vào trong từng offer để bật. |
| Allow unselect trigger product in FBT | Cho phép bỏ chọn sản phẩm trigger trong offer FBT. |
| Show discounted offer products in FBT | Hiển thị compare-at price tại widget FBT https://ibb.co/VWFrc4jN |
| Unselect offer products in FBT | Bỏ chọn tất cả offer product trong FBT. |
| Shopify-style price formatting | Định dạng giá theo chuẩn hiển thị của Shopify. |
| Use currency code in price format | Hiển thị mã tiền tệ kèm giá (VD: USD, EUR). |
| Custom currency code format | Tuỳ chỉnh cách hiển thị mã tiền tệ. |
| Fix bug: discount text not updating in FBT | Sửa lỗi không cập nhật text giảm giá trong FBT. |
| Show cart tip until last option | Add bất kỳ số lượng nào vào cart thì cart tip đều hiện báo add more to save discount của next tier, cho đến last tier. |
| Mix Match and Bundle Builder default collapsed | Collapse những option/category trong mix-match và bundle builder. |
| Prevent same product in trigger and offer in FBT | sản phẩm suggest trong FBT mà trùng thì bật cái này lên thì sẽ không hiển thị sản phẩm offer trùng với sản phẩm trigger nữa |
| Maximum number of products displayed per page in the Bundle Builder | hiện tại 1 page của bundle builder có 20 product → điền trường này bao nhiêu thì hiển thị bất nhiêu product trong 1 page ( tối đa 250 thôi nhé ) |
| Prevent page reload after add to cart | Fix cho những store add to cart mà bị reload lại trang.  |
| Mix Match Bundle default options to collapsed | Default thì mở sp mix-match, nó sẽ mở hết các option. Bật lên thì các option sẽ tự động đóng lại như ảnh cho gọn: https://ibb.co/SWQdvv8  |
| Show cart tip when discount is zero | Hiển thị cart tips kể cả khi “OFF” ko có giảm giá (Discount value = 0). |
| Shopify-style price formatting | Format giá tiền giống của store đó ở trên front store.  |
| Stop clicking on the cart icon | Ngăn khách hàng nhấp vào biểu tượng giỏ hàng sau khi thêm sp.  |
| Set default gift not checked (Volume discount) | Default không tick chọn gift cho gift của volume: https://capture.avada.io/i/wzzNqTp-W  |
| Webhook - Enable webhooks - products/update  | Bundle tự động update giá sản phẩm nếu bị edit trong Shopify admin ( Chỉ bật nếu store nào dùng nhiều bundle và nhiều sản phẩm k update tay được, vì tốn resource) |
| Offer Promotion default collapsed | Khi bật, tất cả offer trong Bundle Deal widget bao gồm Fixed Bundle, Bundle Builder, Mix Match Promotion sẽ bị thu gọn mặc định: https://capture.avada.io/i/GL82NNl4rDl1  |
|  |  |
|  |  |
Có thắc mắc gì hỏi @Dương Ngọc Lâm 

| Issue | Dev zone | Cách sử dụng |
| Cart tip không hiển thị tại CD và Cart Page | https://prnt.sc/BQ0kDZgrTiev | B1: Add class Cart item trong Cart
B2: Muốn hiển thị Cart Tip ở đâu thì tìm class trong cart item rồi add tại “Cart Tip Position Selector”  |
| Theme không hỗ trợ add block  | https://prnt.sc/OwJBxSXkRELH | Add selector để hiển thị widget phía dưới selector đó . note: mn add xong kiểm tra giao diện mobile giúp em nhé  |
| Theme 1.0 không tạo được template AOV và không add dc block cho Bundle Builder |  | TS add code theme tạo template AOV , ẩn product information và add Snippet code này vào là được <div class="Avada-Bundle-Offer__BundleBuilder"></div>  |
| Add sản phẩm bundle vào Cart có discount nhưng sang checkout bị mất discount code  | https://prnt.sc/kVygWx7KgdjQ | Add selector button checkout là ok |
| Add sản phẩm Mix-match mà giá trong cart = 0 | https://prnt.sc/ibzJ-jwDPuQw | Add selector ATC của theme |
| Ẩn button Buy it now, quantity input, Default price. vì các thông tin trên không sử dụng được với sản phẩm mix match | https://prnt.sc/GLCXTFoolKCb | Add selector từng trường vào là được |
| Hiển thị properties discount app tại CD và Cart page | https://prnt.sc/OaqCUV-VJjMe | - Mấy case hiển thị properties này thì vào check và tìm chỗ mà render ra properties đó ở trong theme ( có thể tìm bằng className cho dễ).
- Do các properties của bundle thường có prefix là _aov , nên có thể check nếu là _aov thì skip, k render nữa ( cái này mỗi theme sẽ có 1 cách xử lý khác nhau, nhưng cách xử lý chính là thấy key _aov sẽ không render property đó)
https://prnt.sc/bHQVPVY-8-FB |
|  |  |  |

## Aliases

remove trademark, remove branding, hide trademark, hide branding, without trademark, without branding, no trademark, no branding, remove watermark, hide watermark, no watermark, remove app logo, hide app logo, app brand, aov branding, remove aov brand
auto-match with theme, match theme, match my theme, match store theme, auto theme, theme color match, sync theme, use theme color
use theme font, match theme font, same font as theme, theme font
widget position, custom widget position, move widget, place widget, widget location, custom position
allow update text, edit widget text, change widget text, edit text widget, customize widget text
allow untick fbt, untick fbt, default untick, fbt unchecked by default, uncheck fbt default
allows all products in fbt, all products in collection fbt, show all collection products
remove ai recommendation limit, more ai offers, unlimited ai recommendation
stop click cart icon, disable cart redirect after add, no redirect to cart
allow reducing gift, reduce gift only, disable increase gift
uncheck gift, uncheck gift default, gift unchecked by default
custom css, add custom css, inject css, css customization
disable auto-select tier, stop auto select tier volume
max quantity per tier, tier limit, limit tier quantity
shopify price format, currency code with price, currency position
edit discount code, modify discount code
enable meta pixel addtocart, meta pixel tracking addtocart
buck currency integration
redirect to product page in bundle builder
show volume atc button, add to cart button volume


## User Guide (danh sách — đọc file cụ thể nếu cần)

(Chưa có User Guide)
