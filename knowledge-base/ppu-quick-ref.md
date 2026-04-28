# PPU — Quick Reference

## FAQ

# PPU campaign: Trong trường hợp MC dùng những Gateway ko được hỗ trợ, thì CS cần xử lý như thế nào?  

⚠️ Problem/ Request:

Trong trường hợp MC dùng những gateway payment không được hỗ trợ, Upsell offer sẽ không hiển thị. 

➡️ Support flow:

- Offer MC sử dụng qua campaign Thank you page upsell → Giảm tỷ lệ uninstall.
- 2 campaign này chỉ khác nhau ở chỗ:
  - PPU campaign: Là edit order, họ bấm paynow là sẽ trừ tiền luôn trong card. Upsell product sẽ được thêm vào original order. 
  - TKU campaign: Là tạo 1 order mới, phải nhập lại thông tin thanh toán.
    - Hiện, Thank you Upsell offer campaign cũng đã có settings cho phép sản phẩm upsell được add trực tiếp vào order gốc thay vì tạo 1 order mới. 
    - CS guide MC vào app settings → Thank you page offer → Bật “Add to Original order”. 
    - Hạn chế của feature này: “Due to Shopify’s limitations, bundle products can’t be added directly into the original order after checkout. Therefore, this product type will not be supported on the Thank You Page with this option.”


---

# Upsell offer không hiện ở Thank you page

⚠️ Problem/ Request:

Upsell offer không hiện ở Thank you page

➡️ Support flow:

Step 1: Check nhanh các settings chung để hiển thị app

- Check xem campaign status là “Active” chưa.
- Check checkout settings trong Shopify admin → và check xem app đã được add trong “Thank you page” settings chưa: 
- Nếu MC sử dụng AI recommendation ở campaign settings:
  - Với những store có ít data (ít orders) thì AI sẽ không generate ra được sản phẩm. Chỉ khuyên MC sử dụng tính năng này với những store có lịch sử bán hàng đều đặn.
  - Sử dụng shortcut: !ai-product-recommendation
Step 2: Sau khi rà qua các bước căn bản ở trên mà app vẫn không work, thì CS cần làm gì tiếp theo?

  1/ Các access cần xin: 

    - Theme editor
    - Checkout
    - Manage app
    - Order
    - Product
    - Discount → Create discount
  2/ Test flow: 

    - CS xin khách cho phép tạo discount code 100% cho order để test thử.
    - Test order: Lưu ý không dùng COD (Cash on Delivery).


---

# Đổi màu nút của offer widget

⚠️ Problem/ Request:

- Đổi màu nút của offer widget.
- Hiện nút này ăn theo màu của theme, và vì nó thuộc checkout page nên không thể đổi màu trong app được, do đó là Shopify restriction. 
- Preview trong app sẽ hiển thị mặc định nút màu xanh. CS có thể bảo MC check lại bằng cách place 1 order thật và tự chỉnh lại màu trong theme editor. 
➡️ Support flow:

- Đổi màu của button ở đây: Theme customization → Settings → Color → Button → Select color. 
🗒️ References:

Lưu ý: sau khi đổi màu button ở checkout page settings, nó sẽ ăn cho toàn bộ các page như: Order status page, Thank you page và Post Purchase Upsell page. 

✅ Tips & Tricks:


---

# Upsell offer không hiện ở Order Status page

⚠️ Problem/ Request:

Upsell offer không hiện ở Order Status page

➡️ Support flow:

- Step 1: Check tất cả các bước cơ bản để campaign hoạt động: 
  - Check xem campaign status là “Active” chưa.
  - Check checkout settings trong Shopify Admin → Đảm bảo là app đã được add vào “Order status” page editor.
  - Tạo member account → Tạo order cho member account này → Sau đó ra front store → Log in member account để check thử. 
- Step 2: Nếu MC sử dụng AI recommendation ở campaign settings:
  - Với những store có ít data (ít orders) thì AI sẽ không generate ra được sản phẩm. Chỉ khuyên MC sử dụng tính năng này với những store có lịch sử bán hàng đều đặn.
  - Sử dụng shortcut: !ai-product-recommendation
✅ Tips & Tricks:

Khi check issue ở campaign này, CS cần xin các access sau: 

  - Theme
  - Checkout
  - Discount 
  - Order → Create order


---

# Upsell offer không hiện ở Post Purchase page

⚠️ Problem/ Request:

Upsell offer không hiện ở Post Purchase page

➡️ Support flow:

Step 1: Check nhanh settings để hiển thị app cơ bản

- Với campaign này, chỉ cần đảm bảo “Post-purchase page” đã được bật cho app PPU. CS hướng dẫn MC check ở Shopify Admin Settings → Checkout → Post-purchase page → Chọn app “AOV.ai Post Purchase”. 
- Lưu ý với case Post Purchase page:
  - Cần hỏi MC xem họ dùng payment method nào để hoàn thành giao dịch.
  - Nếu MC sử dụng những payment method dưới đây thì sẽ ko có Post-purchase page → campaign “Post-purchase” upsell của app cũng sẽ ko work:
'paypal_express',
'amazon_payments',
'manual',
'authorize_net',
'mollie',
'worldpay',
'2checkout',
'klarna',
'sezzle',
'affirm',
'quadpay',
'afterpay',
'Adyen'
    > ⇒ Ngoài ra thì bên mình cũng đã liệt kê đầy đủ những hạn chế của Post-purchase page ở đây nếu mọi người cần xem lại: https://docs.avada.io/aov-post-purchase-upsell/campaign-offers/shopify-limitations-and-considerations-for-post-purchase-checkout-extensions

⇒ Tham khảo thêm FAQ này: Campaign Post Purchase Upsell có hỗ trợ Paypal và Paypal Express không? 

- Nếu MC sử dụng AI recommendation ở campaign settings:
  - Với những store có ít data (ít orders) thì AI sẽ không generate ra được sản phẩm. Chỉ khuyên MC sử dụng tính năng này với những store có lịch sử bán hàng đều đặn.
  - Sử dụng shortcut: !ai-product-recommendation
Step 2: Sau khi rà qua các bước căn bản ở trên mà app vẫn không work, thì CS cần làm gì tiếp theo?

  1/ Các access cần xin: 

    - Theme editor
    - Checkout
    - Manage app
    - Order → Create Order
    - Product
    - Discount → Create discount
  2/ Cách test lại flow: 

    - Tạo 1 discount code để order chỉ còn giá trị khoảng $1 để test. CS có thể forward case cho BA/Dev từ bước này.
    - Đảm bảo total bill của order ở checkout page ≥ $1 thì PPU mới work. 
    - Test order: Lưu ý không dùng COD (Cash on Delivery).


---

# MC thắc mắc thời gian Order bị on hold với PPU campaign

⚠️ Problem/ Request

MC thắc mắc order của khách sẽ bị hold bao lâu mới complete khi dùng offer Post-purchase upsell campaign? 

🎗️ Possible causes:

➡️ Support flow:

- Khi MC có thắc mắc, CS trả lời:
  - If the customer doesn’t take any action, Shopify will automatically finalize the order after 1 hour (60 minutes). This is a default behavior controlled by Shopify, not by the app. 
  - Shopify puts the order “On hold” to give the customer time to:
    - View the post-purchase offer
    - Decide whether to accept or decline
    - Allow the upsell to be appended to the original order if accepted
  - After the timeout:
    - If no action was taken, the order will move to “Paid” or “Unfulfilled”, depending on your fulfillment settings
    - The upsell offer will be skipped
- Đã tạo shortcut : !on-hold-ppu
🗒️ References:

https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_a63612ec-fb49-45ef-89f1-e87c8251977a/


---

# PPU campaign ko work do ko hiện ở checkout (Shopify settings)

⚠️ Problem/ Request:

- Khi set up campaign “Post Purchase Upsell”, MC không tìm thấy app ở Shopify Admin Settings → Checkout → Post-purchase page. 
🎗️ Possible causes:

- Nguyên nhân: Không có quyền Apps. 
- Có 2 khả năng: 
  - Nếu app không hiện phía khách. Có thể khách là partner/staff → account của họ không có quyền Apps.
  - Nếu app không hiện phía mình, tương tự → do CS xin thiếu quyền Apps. 
- TH đặc biệt: 
  - Store owner sử dụng account tạo ra store nhưng cũng không thấy app hiện ở “Post-purchase page” trong “Checkout” settings → CS bảo khách gỡ app đi cài lại. 
    > TH đặc biệt rất hiếm khi xảy ra. Đa phần là do CS chưa xin quyền Apps. CS lưu ý xin đủ quyền để check như các FAQ check lý do 3 loại campaign không work. Chứ không vội vàng yêu cầu MC gỡ app đi cài lại.


---

# Show product meta field thay cho product description trong trường hợp Product description quá dài → ảnh hưởng đến layout của upsell pop up

⚠️ Problem/ Request:

Post này giải đáp thắc mắc về release mới của app PPU: Improve feature: Show product metafield instead of Product description

🎗️ Possible causes:

- Có 1 vài store, MC sẽ để Description rất dài → ảnh hưởng đến layout của Upsell widget trong app. Nếu product description quá dài thì mục này sẽ hiển thị rất xấu ở trang checkout. 
- Thay vì hiển thị Product description (trong trường hợp nó quá dài) → thì app sẽ hỗ trợ hiển thị Product Metafields instead. 
✅ Tips & Tricks:

Phân biệt Category metafields và Product metafields

- 2 mục này nằm ở Products setting trong Shopify Admin như ảnh.
- Category metafields: 
  - Bao gồm các field liên quan đến sản phẩm (được cung cấp mặc định bởi Shopify). 
  - Ví dụ: Color, size, fabric,… 
- Product metafields: (lưu ý: hiện tại DEV mới chỉ support cho 2 types của Metafield là Line và Multi-line text) 
  - Một vài sản phẩm đặc biệt sẽ không được chia thành variant theo size hoặc color. 
  - Ví dụ: 1 cửa hàng bán rượu > họ sẽ chia sp của họ ra theo các loại variant kiểu như: 10 lít, 20 lít, 30 lít,…
  - Với ví dụ trên, thì CS sẽ thấy không có “Category metafields” nào phù hợp. Nên trong TH này, MC phải sử dụng “Product metafields”.
  - Hiểu đơn giản thì “Product metafields” giúp MC tự customize their own variant, hoặc những field nào đó mà Shopify không có sẵn cho product. 
➡️ Support flow:

Step 1: 

- Khi MC bấm Contact us ⇒ trigger chat trong Crisp với nội dung: “I want to Show product metafields instead of Product description in Upsell #1/ Upsell#2/ Downsell in PPU/ OSU/ TYU”.
Step 2: 

- CS hỏi thêm thông tin chi tiết về request. 
- CS có thể nhắn khách theo mẫu bên dưới: 
Shortcut: !meta-request

> Let me help you replace the product description with a product metafield on the offer widget. To get this set up for you, we suggest that we create a metafield with namespace and key aov_ppu.product_description. 

  Then, we just need a few quick details:

  1/ The type of metafield? (eg, single-line text, multi-line text, …)

  2/ This metafield would be applied to which categories? Or apply to all products?

Step 3: 

- Sau khi có thông tin chi tiết > CS cần xin đầy đủ quyền trước khi forward cho bên Dev. 
- Các access cần xin: 
  - Theme (edit code): https://prnt.sc/da7oJqqyuZhM
  - Products: https://prnt.sc/ti2LeNLNKbv8
  - Metafields: https://prnt.sc/rsNU58vvJ83o 
- Shortcut xin access cho dev: !meta-access
Step 4: 

- MC cung cấp các thông tin cần thiết ở Step 3, CS đọc kỹ, có thể tự setup cho Khách nếu muốn theo guide ở dưới hoặc nhờ dev support 
- Nếu dev support, Nhớ tạo card follow-up. 
Step 5: 

- Update xong, enable features trong Dev Zone, thông báo cho khách để khách test lại:Ba
  - B1: Khách điền description mong muốn của họ vào trong phần Metafield tương ứng ở trong Product page: https://prnt.sc/kDOGdX3gW1jo
  - B2: Các sản phẩm muốn thay thế product description bằng metafield, khách xóa đi và add lại trong phần offer https://prnt.sc/oaRC2EtaFxsg
-  Phần card được update thành toggle như này để KH có thể bật tắt hiển thị theo nhu cầu
  - Screenshort Dev Zone: https://prnt.sc/E1N2OwDnal-p
  - Screenshort toggle sau khi enable: https://prnt.sc/dp21EgFq-JQ0
  - Screenshort offer sau khi đã thay = metafield: https://prnt.sc/pkccyrWEEocJ
- Chỗ step 5 này đang chưa clear là đưa cho dev làm rồi thì cái hiện ở Dev-zone và ở phía front end bên khách là sao? ACE gặp case tương tự thì cứ hỏi dev xem nhé. 
🗒️ References:

- MC có thể tùy chọn bật tắt toggle việc show product metafield thay vì product description.
https://avadaio.slack.com/archives/C08S4EP6W02/p1753175592302659

FLOW ĐỂ CHO CS/ TS CHỦ ĐỘNG TRONG VIỆC SUPPORT KHÁCH TẠO METAFIELD

- Step-by-step guide to configure the metafield:
  1. Go to Settings → Metafields and objects → Product: screenshot
  1. Click “Add definition”: screenshot
  1. Create a metafield with namespace/key: aov_ppu.product_description and type: single-line or multi-line text: screenshot
  1. Assign the metafield to the desired product category: screenshot
  1. Go to the product page of a product with that category and update the metafield: screenshot (phần này có thể bảo khách tự add nếu muốn) 
- In the offer editor, remove and re-add the target product(s), then save the offer. The offer will now display the metafield instead of the default product description: screenshot
  1. Storefront preview: screenshot


---

# Campaign Post Purchase Upsell có hỗ trợ Paypal và Paypal Express không?

⚠️ Problem/ Request:

Hiện tại campaign PPU support cả 2 Gateway: Paypal và Paypal Express. 

Tuy nhiên có 1 vài lưu ý: 

- Cổng thanh toán “Paypal” thì luôn work bình thường. Upsell offer hiển thị nếu customer dùng cổng này để thanh toán. 
- Cổng thanh toán “Paypal Express” sẽ chia ra làm 2 trường hợp: 
  - Gateway là: Paypal Express Checkout → Upsell offer work và hiển thị. 
  - Gateway là: Paypal → Upsell Offer sẽ KHÔNG work và KHÔNG hiển thị. 
➡️ Support flow (Nội bộ): 

- Để check được cái này, CS phải xin access vào order của MC để check. 
- Nếu không rõ thì cứ xin quyền order rồi nhờ PO @Tuấn Vũ check tiếp. 
Reference: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_f2aa4c07-8e54-497d-82e8-9a17890ecdc1/


---

# Ẩn các variant không available với style dropdown là Multiple dropdown ở Variant picker

⚠️ Problem/ Request:

- Ở widget, các store muốn có thêm lựa chọn ẩn các variant không available for sale đối với style là Multiple dropdown. App hiện tại chỉ đang tạm làm mờ các variant đó.
- Khách request ẩn hết những variant không available khỏi variant selector (một vài store có nhiều variant, điều này sẽ gây phiền toái nếu hiện hết cả những variant không available).
➡️ Support flow:

- Nếu MC có nhu cầu ẩn đi → CS nhận request → vào dev_zone bật feature: "Hide unavailable options in multiple dropdowns”.
- CS báo MC reload lại app page để check lại ở preview → hoặc place thử 1 order để test. 
🗒️ References:

https://avadaio.slack.com/archives/C08S4EP6W02/p1758858080652399


---

# TYP upsell không work với sản phẩm upsell là bundle 

⚠️ Problem/ Request:

- Nhiều MC setup upsell product trong campaign là sản phẩm bundle. Hiện tại, theo Shopify rule thì không cho phép bundle product tham gia vào post-purchase flows.
  - Tham khảo FAQ: Tất cả các campaign trong app PPU có work với sản phẩm Bundle không?  
- Với Thank you page upsell (TYP), dùng bundle product trong upsell list sẽ work, nhưng có nhiều case bị báo lỗi khi click claim upsell offer. Nguyên nhân là gì? 
  - Lỗi hiển thị: {"data":{},"success":false} 
➡️ Explain (Nội bộ): 

Trường hợp 1 - Lỗi settings:

- CS check thử Settings → General → Thank you page offer feature có đang bật “Add to the original order” hay không? 
  - Nếu đang bật, sản phẩm upsell được include vào trong order gốc → Workflow lúc này sẽ giống với PPU campaign → Dẫn đến lỗi campaign không work với bundle product. 
Trường hợp 2 - Các lỗi khác: 

- Nếu feature ở Trường hợp 1 KHÔNG bật, CS xin MC discount code 100% cho order để test lại hoặc xin quyền tạo discount để tự check. Nếu gặp lỗi tương tự, CS báo dev/TS để check thêm. 
🗒️ Solution cho trường hợp 1:

- Phương án 1: 
  - Nếu mục đích chính của MC là offer bundle product ở upsell thì báo MC tắt feature “Add to the original order”. 
  - Nếu MC lo lắng về việc customer sẽ bị charge 2 lần phí ship. CS giải thích mặc định TYU campaign là Free Shipping. CS hướng dẫn MC bật badges Free Ship cho upsell product ở đây: Access campaign TYU editor → Step 2: Upsell offer → Open “Edit layout & content” → Enable “Free Shipping”. 
- Phương án 2: Nếu MC muốn gộp order là mục đích chính thì bắt buộc phải đổi upsell product từ sản phẩm bundle sang sản phẩm bình thường.

🗒️ References:

- Link chat: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_12b0229a-6c23-4a59-ae61-40c40874d207/
- https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_b8b71afb-1fe4-4391-905a-16d396f4a7fe/


---

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


---

# PPU campaign và SHOPIFY_PAY wallet

⚠️ Problem/ Request: 

- PPU offer no show, check order tracker hiện no reason
- MC báo dùng Shop Pay, offer đã activate nhưng vẫn không thấy offer
🎗️ Possible causes:

- Hiện tại mình vẫn báo là PPU chỉ work với 3 payments: 
  - Credit Card
  - PayPal
  - Shop Pay
- MC có thể nhầm lẫn Shop Pay và SHOPIFY_PAY wallet
- Riêng với SHOPIFY_PAY wallet, PPU offer work không ổn định, lúc work, lúc không, nên dev chưa cho vào unsupported payment method list, nên trong order tracker không hiện rõ lý do.
➡️ Support flow (Nội bộ): 

- Step 1: CS xin quyền vào order detail check và báo MC test lại với 1 trong 3 payments supported: Credit Card, PayPal, Shoppay. 
- Step 2: Có thể ping dev, BA check lại kỹ hơn để thêm thông tin. 
🗒️ References:

https://avadaio.slack.com/archives/C083YAETLEP/p1765380994369889
https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_793e5ad9-979b-4d3c-9107-88f26097eb15/

✅ Tips & Tricks:


---

# Tất cả các campaign trong app PPU có work với sản phẩm Bundle không? 

Explanation: 

- Có thể set up Bundle product làm trigger products trong tất cả các campaigns, nhưng KHÔNG support làm upsell products.
- Trong trường hợp bundle product làm trigger thì Shopify detect trigger theo các sản phẩm con nằm trong sản phẩm Bundle, chứ không phải Bundle products nói chung.


---

# Thêm 1 Upsell/Downsell Level trong campaign PPU

⚠️ Problem/ Request:

- Hiện tại app chỉ hỗ trợ 2 cấp:
  - Level 1: Upsell.
  - Level 2: After Level 1, if: 
    - Reject Upsell Level 1 → Hiển thị offer của Downsell. 
    - Approve Upsell Level 1 → Hiển thị offer của Upsell #2. 
- Shopify Plus merchants có chiến lược upsell phức tạp, cần thêm cấp để tối ưu conversion.
- Tăng AOV bằng funnel linh hoạt hơn (thêm 1 cấp upsell/downsell trong checkout flow).
🎗️ Possible causes:

➡️ Support flow (Nội bộ):

- Tính năng nằm ẩn trong Dev Zone → CS vào dev_zone bật “Enable Level 3 Upsell/Downsell”. 
  Bước 1: Vào App AOV.ai → Chọn offer có Upsell #2

  Bước 2: Tại card Upsell #2:

    - If Accepted → click "Add offer" → tạo Upsell #3
    - If Declined → click "Add offer" → tạo Downsell #2
    - Cấu hình product, discount, template như các cấp trước:
  Bước 3: Offers cấp 3 mặc định OFF → bật toggle ON → Save

> Sau khi bật feature trong dev_zone, cấu trúc sẽ có dạng: 

  - Level 1: Upsell.
  - Level 2: After Level 1, if: 
    - Reject Upsell Level 1 → Hiển thị offer của Downsell. 
    - Approve Upsell Level 1 → Hiển thị offer của Upsell #2. 
  - Level 3: After Upsell #2, If: 
    - Reject Upsell #2 → Hiển thị offer của Downsell #2. 
    - Approve Upsell #2 → Hiển thị offer của Upsell #3. 
🗒️ References:

✅ Tips & Tricks:


---

# Billing policy for PPU app

⚠️ Billing overview - How billing works:

  📌 General Rules

    - The app charges based on the total number of orders in the Shopify Admin → Orders section within a 30-day billing cycle.
    - To access the app dashboard and use the app, MC must approve the 14-day trial plan upon installation.
    - During the 14-day trial, no charges apply.
    - After the trial ends, MC will automatically move to a paid plan based on usage (see pricing table below).
  📌 Free Plan Condition

    - Even if MC wants to use the Free plan, they are still required to approve the app charge during onboarding.
    - If MC has fewer than 100 orders within a billing cycle (30 days), they can use the app for free during that period.
| Monthly orders | Monthly price |
| 0 - 100 orders | Free |
| 101 - 200 orders | $9.99 |
| 201 - 500 orders | $29.99 |
| 501 - 1000 orders | $49.99 |
| 1000+ orders | $99.99 |
🎗️ Example:

  Scenario: Billing cycle runs from April 1 → April 30

    - April 2: MC reaches 190 orders → Charged $9.99
    - April 10: MC reaches 300 orders → Charged $29.99
    ⇒ However, since MC has already been charged $9.99 on April 2, they will only be charged the difference: $29.99 - $9.99 = $20

  Total charge for the month (if not exceeding 500 orders):

    - $9.99 (April 2) + $20 (April 10) = $29.99
📍Question: Why does the app charge based on all Shopify orders, including those that do not generate upsell value?

  💡 Answer:  

  Currently, the app requires system resources to run on the checkout page in order to scan each order and determine whether it meets the trigger conditions to display upsell offers.

  We appreciate your understanding regarding this.

  Additionally, we offer a 14-day free trial, allowing you to fully test the app and evaluate whether it meets your needs.

  If you are not satisfied, you may request a refund within the first 30 days of using the app for that billing cycle.

🗒️ Refund policy for CS team:

  I/ When is a merchant eligible for a refund?

    - MC has used the app within the first 30 days after upgrading to the paid plan.
    - MC has passed the 7-day trial period without canceling (7 days < x < 30 days).
    - MC is not satisfied with the app → the case must be escalated to CSL.
  II/ Refund Handling Process

    Step 1 — Clarify billing with MC

      - Clearly explain:
      - Ensure MC fully understands before escalating the case to CSL.
    Step 2 — Collect required information

      - Request a billing screenshot, including:
      - Ask for the reason for canceling the subscription and requesting a refund.
    Step 3 — Create card & wait for review

      - Create a Billing card for CSL
      - Inform MC that the Billing Team will review and respond within 2–3 working days
  III/ Strict Principles

    ❌ DO NOT approve refunds on your own under any circumstances — even urgent cases.

    ❌ DO NOT argue or justify excessively if MC is upset or threatens to leave a bad review.

    👉 Note: Refunds can only be approved with CSL confirmation — no exceptions.

  IV/ Case high-risk

    > Thu thập đầy đủ thông tin theo quy trình trên, sau đó escalate urgent cho CSL / BA / PM. Giữ thái độ bình tĩnh và chuyên nghiệp với MC — không tranh cãi, không tự ý approve refund.


---

## Dev_zone

# Dev_zone — PPU

## Làm thế nào để access được dev_zone page? 

- Sau khi mở store khách qua CRM, từ link của Dashboard thêm /dev_zone và enter để mở page: https://ibb.co/hxBzD3pB 
- Mật khẩu chung để access dev_zone tất cả các app là: admin_avada_!@#
Lưu ý: Contact leader hoặc CS member cùng team để hỏi nếu vẫn chưa hiểu rõ tính năng nào đó trong dev_zone. Ko tự ý ấn linh tinh ở store khách. 

## Cách sử dụng dev_zone cho app Post Purchase Upsell:

| Feature | Tooltip |
| Unlock unlimited offered products | App giới hạn số lượng Upsell offer ở các store mới cài xuống 2 products https://prnt.sc/PoYO4jKhEwih > bật để MC có thể add Upsell offer products ko giới hạn. |
| Unlock edit discount code | CS bật để mở khóa cho MC edit discount code: https://prnt.sc/kSGMREFrb1Xc  |
| Allow no discount | Cho phéo MC set discount ở sản phẩm upsell = 0.  |
| Unlock countdown timer | • Cho phép hiện timer ở upsell offer: https://prnt.sc/xSbfdY5wHJat
• MC có thể tùy chỉnh time ở trong campaign editor: https://prnt.sc/jUo0hzFvq7FA |
| Allow edit note | Unlock để cho phép MC edit note trong widget displaying: https://prnt.sc/yVk8uyeUG_Z7 |
| Enable edit accept/decline button | - Cho phép edit text ở 2 nút này: https://prnt.sc/i1TSa5W8EH3G  |
| Show exactly discounted price | - Cho phép hiển thị giá discount chính xác (ví dụ, ngoài việc giảm 10% ra thì có thể display giảm $20)  |
| Show pricing | For PO and Leader only - CS/TS ko được sử dụng: Display pricing plan, dùng cho các trường hợp offer free cho khách (cần thông qua PO, leader trước)  |
| Create new order in PPU | - Thông thường theo Shopify, thì order upsell của PPU sẽ được gộp hẳn vào original order
- Bật option này lên, các order được upsell từ PPU sẽ được tính là order mới |
| Hide unavailable options in multiple dropdowns | Check FAQ: Untitled  |
| Unlock edit text | Enable để MC có thể edit được text của widget: https://prnt.sc/F0-zvoFWUuPI |
| Unlock view all orders | Hiện chỉ xem đc 1 order ở “Order tracker” > Muốn xem toàn bộ thông tin chi tiết của all orders thì CS mở trong dev_zone cho MC: https://prnt.sc/K4o4b3Im4QZx |
| Offer same collection | - hiện đang chỉ cho upsell 1 sản phẩm trong 1 collection
- bật option này lên thì sẽ upsell được add >1 sản phẩm trong 1 collection |
| Show claim confirmation | • Cho phép MC edit phần này trong campaign editor > Step 3
• Check chi tiết hacking flow ở đây: I want to add claim confirmation |
| Enable scrollable product layout | Áp dụng cho TYP
Khi sản phẩm được upsell >3 sản phẩm, sẽ dễ bị vỡ layout
Bật cái này lên thì buyer có thể scroll để nhìn thấy upsell
- Before bật: https://prnt.sc/3czluh_0g51C
- after bật: https://prnt.sc/naGUMYO9xZVr |
| Extend header text limit | hiện tại header text đang limit ở 60 characters, enable thì MC sẽ được >60 characters ở header text |
| Show product metafields instead of product description | Check FAQ: Untitled  |
| Unlock edit free shipping badge | Check Hacking: Untitled  |
| Enable new offer trigger conditions | Customize request cho 1 store - PO dùng, CS/TS ko sử dụng: 
Task này là custom cho khách: 
- Tạo thêm trigger condition riêng biệt: shipping method, shipping states, include/ exclude tags |
| Offer product image fit (cover) | - Enable để ảnh ở các offer của khách sẽ ở dưới dạng cover: https://prnt.sc/ZaEbKQy7fZtj ; cover là dạng zoom ảnh, phần ảnh sẽ bị cắt đầu đuôi |
| Edit currency format | • Hiển thị label currency phía sau giá trị
      Ví dụ: $30 -> 30$
• Thêm dấu cách giữa currency và giá trị
      Ví dụ: $30 -> $ 30 |
| Price breakdown settings | Ẩn 2 dòng này ở Upsell offer: https://prnt.sc/yk51SQyZ9CtE 
- Hide shipping line
- Hide taxes line |
| Enable Level 3 Upsell/Downsell | Ở cam PPU, cho phép MC set up Upsell/Downsell đến tầng thứ 3: https://capture.avada.io/i/oysBXm2KRAuX  |
| Allow exclude tags in AI Recommendation | Set up để loại trừ các sản phẩm có tag cụ thể, để không được show trong upsell offer khi dùng AI recommendation
https://capture.avada.io/i/fEnU6zJ2SMEt
https://capture.avada.io/i/I1wLKLborluw |
|  |  |


## User Guide (danh sách — đọc file cụ thể nếu cần)

(Chưa có User Guide)
