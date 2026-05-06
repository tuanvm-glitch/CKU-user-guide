# FG — Quick Reference

## FAQ

(Chưa có FAQ)

## Dev_zone

# Dev_zone — FG

## Làm thế nào để access được dev_zone page? 

- Sau khi mở store khách qua CRM, từ link của Dashboard thêm /dev_zone và enter để mở page: https://ibb.co/hxBzD3pB 
- Mật khẩu chung để access dev_zone tất cả các app là: admin_avada_!@#
Lưu ý: Contact leader hoặc CS member cùng team để hỏi nếu vẫn chưa hiểu rõ tính năng nào đó trong dev_zone. Ko tự ý ấn linh tinh ở store khách. 

## Cách sử dụng dev_zone cho app AOV Free Gift:  

| Tính năng | Tooltip |
| Remove branding | Hỗ trợ xóa App branding: Powered by AOV.ai ở widget của app. |
| More gifts | Ở bản Free người dùng chọn được tối đa 3 gift ở trong 1 campaigns ⇒ Bật lên thì được chọn hơn |
| Edit Discount Code | Cho phép edit discount code https://ibb.co/b94vLv5 - bình thường tính năng này sẽ bị khóa lại. |
| Show Discount Code | App ẩn edit discount đối với các store Shopify staff, Ấn Độ… bật cái này để show edit discount code |
| Auto Theme Match | Cho phép sử dụng button “Apply to match” ở widget editor: https://ibb.co/s9jFZYh9 - bình thường tính năng này sẽ bị khóa. |
| Disable Badge Limit | Remove character limit restrictions from deal badges - Đã bị deactivate. |
| Allow setting 0 | Cho phép MC set value = 0. Ví dụ: discount percentage field. |
| [TS] Check gift zero price | chỉ dành cho product team, TS/CS vui lòng ko sử dụng  |
| [TS] Can edit quantity for cart value campaign | chỉ dành cho product team, TS/CS vui lòng ko sử dụng  |
| Gift as trigger | Chỉ áp dụng cho cam GWQP (Lowest priced gift). Nếu user có 1 cam lowest và một số cam khác. Ví dụ cụ thể mua 2 dc nhận 1 lowest price, mua 4 nhận dc discount 25%, thì khi buyer mua 4 và bật cái này lên thì hệ thống sẽ coi lowest price gift là 1 trigger product ⇒ suy ra có 4 trigger product, nếu ko bật thì chỉ tính là 3 trigger product  |
| Show congrats bar with percent or fixed discount | Bình thường:
Gift dạng % discount hoặc fixed amount không thể auto-add vào cart. Merchant bắt buộc phải dùng pop-up hoặc floating button để cho khách tự chọn. 

Khi bật tính năng này:
→ Cho phép auto-add gift ngay cả khi gift là dạng giảm giá % hoặc số tiền cố định. |
| Use milestone post achieved message | Bình thường:
Khi khách đạt mốc, ví dụ milestone 2, hệ thống sẽ hiện:
“Chúc mừng! Bạn đã đạt milestone 2, nhận quà XYZ!”Một số merchant không muốn vậy, họ muốn luôn thúc đẩy khách tới mốc cao hơn.
Ví dụ: mốc 3 cần $100 nữa → họ muốn show:
 “Bạn còn $100 nữa để nhận tất cả quà ở mốc 3!”

Khi bật tính năng này:
→ Không show lời chúc mừng đạt mốc
→ Thay bằng lời nhắc “Bạn còn bao nhiêu để đạt mốc tiếp theo”. |
| Enable use apply code | Bật để mở tính năng Apply code to get gift at cart page/cart drawer - đã có tính năng trong app.  |
| Unlock alll features | (Cần confirm lại với leader trước khi mở No limit access cho bất cứ store nào). 
- Mở unlimited revenue và tất cả tính năng trả phí (cho phép MC dùng all features for free mà ko cần upgrade). 
- Chỉ sử dụng cho store dev, cần phải check kỹ có phải store dev ko bằng cách check shopify plan, total order (nếu ít total order thì có khả năng cao là store dev) |
| Excluded free shipping tier milestone | https://avadaio.slack.com/archives/C083YAETLEP/p1765162685750509
Bật lên thì thì milestone chỉ display free shipping, còn logic sẽ theo Shipping profile mà MC set up  |
| Use subtotal in shipping goal | - Sử dụng subtotal để calculate shipping goal. 
- Subtotal là giá trước khi order value được apply discount từ bên ngoài vào.  |
| Show congrats bar with percent or fixed discount | Khách muốn dùng congrats bar khi discount ko phài free |
| Show milestone trigger value | Khi bật lên thì sẽ hiện thêm value trên từng tier của milestone bar như này: https://capture.avada.io/i/066R7rno3vbf |
|  |  |
|  |  |
|  |  |
| Tính năng | Tooltip |
| Auto Remove Gift | User có các campaign cùng loại, và buộc phải bật combination. Nhưng user muốn rằng khi đạt điều kiện có quà giá trị cao thì thôi ko apply quà giá trị thấp nữa. ⇒ cần bật chức năng này. 

Ví dụ: user có 2 Cam cart value $20, $50. và user có 1 discount ngoài Shopify admin khác tên SUMMER, nên họ muốn bật combination. Nhưng user muốn khi đạt điều kiện $50 chỉ nhận gift của $50 và discount SUMMER thôi, ko nhận discount của cam $20 
⇒ thì bật chức năng này lên |
| ATC Trigger
(dùng cho promotion card) | Trigger promotion card khi click vào nút ATC. . Bất kỳ lỗi nào liên quan đến promotion card thì thử button này trước. |
| Keep Gift No Discount | Giữ gift nếu discount ko được set combine > Gift product sẽ được giữ lại trong cart, tuy nhiên sẽ bị charge full price. |
| [TS] API Delay | delay API 1s đối với những store add gift chậm |
| Auto Reload | - Tự động reload lại trang sau khi add gift vào cart. - Tính năng này support cho 1 vài theme cần reload lại trang để update cart. |
| Block Checkout | Khóa nút “Checkout” khi trigger condition chưa đạt đủ điều kiện. |
| BXGX V2 | • Logic khi chưa bật tính năng trong dev_zone: App chỉ cho phép nhận quà 1 lần. Ví dụ, KH add to cart sản sp A trước và add gift vào cart > thì họ sẽ ko nhận được thêm Gift khi add sản phẩm B vào cart nữa.
• Logic sau khi bật tính nắng trong dev_zone: App cho phép nhận quà nhiều lần. Ví dụ: Với mỗi lần add sp A hoặc B vào cart > nhận gift tương ứng. Nếu add cả sp A và B thì sẽ nhận được cả Gift A và Gift B.

Check chi tiết ở flow này: Buy X Get X - Cho phép nhận nhiều Gifts theo từng trigger  |
| [TS] Badge After Image | 1 vài store ảnh sản phẩm đè lên trước (front) cái promotion badge của app ⇒ bật cái này lên và đồng thời query vào ô class của promotion badge trong dev_zone

Về back end:
Cái này là khi add block promotion_card trong dev_zone ⇒ thì nó sẽ chèn vào sau cái querySelector đấy, nếu không bật thì chèn vào trước  |
| [TS] Position Before Progress Bar | 1 vài store theme ko hỗ trợ thay đổi vị trí của progress bar
⇒ bật cái này lên và đồng thời query vào button đứng trên progress bar rồi input vào ô class của progress bar trong dev_zone |
| [TS] Custom Checkout | dành cho TS/dev dành cho các case mà khi click vào button checkout thì parameter có chứa ?discount= nên gift bị charge ⇒ bật chức năng này lên + đồng thời query checkout button là resolve |
| Final Price | Check chi tiết ở flow này: Gift with cart value offer gift dựa trên giá gốc của sp thay vì giá sau discount. |
| [TS] Fetch cart when show gift | dành cho dev dùng Mặc định: Mỗi lần add gift xong thì ko fetch lại cart → bật lên thì Mỗi lần add gift thì hệ thống fetch lại cart để cập nhật lại giỏ hàng |
| Stackable gifts for CA or CO
(Gift With Cart Value) | Hiện tại Nếu khách có nhiều cam cart value mà các cam đều combine, khách mà add thẳng lên cam Cart value cao nhất thì chỉ nhất được gift cam cao nhất→ Bật chức năng này lên thì: ăn hết toàn bộ gift thay vì chỉ ăn gift gần nhất |
| Hide click product new tab | Lúc click vào product trong pop-up ra tab mới của product đấy→ bật lên thì unclick |
| Uncheck gift | - By default thì tính năng này mặc định sẽ là được tick sẵn https://ibb.co/F4tQQ1kK - Có MC request uncheck những chỗ này > CS vào dev_zone bật "Uncheck gift" lên nhé. |
| Allow reducing gift | - MC muốn chỉ cho phép khách hàng giảm số lượng gift, chứ không được click tăng số lượng gift.- CS cần bật đồng thời cả tính năng "Disable adjustment of gift quantity" ở app settings và "Allow reducing gift" ở dev_zone. |
| Check duplicate request | Store có 2 sự kiện add gift thì gift bị add 2 lần → bật lên thì chỉ còn add gift 1 lần |
| Optimize remove gift | Remove gift and trigger (update cart) at the same time. |
| Optimize add gift | Tối ưu tốc độ Add gift, nhanh hơn trước rất nhiều (bằng cách apply code trước product sau) |
| [TS] Auto apply discount code | dành cho dev dùng: Xử lý trường hợp: gift bị charge → thì khi bật lên cứ mỗi lần reload sẽ apply code 1 lần |
| No show cart | Với theme Horizon, nếu enable thì ko hiển thị cart drawer khi add gift |
| [TS] Hide quantity input in cart
 | dành cho TS dùng:
- Ẩn ô quantity trong cart của sp gift
- Cách dùng: vừa enable vừa query “Quantity input in cart” |
| Auto open explanation of milestone | Bình thường:
Khách phải hover/nhấn vào icon hoặc tooltip để xem hình quà tặng và mô tả milestone.

Khi bật tính năng này:
→ Ảnh và mô tả gift luôn mở sẵn, nằm dưới progress bar.
→ Không cần hover chuột, không cần click. |
| Hide gift not add in tiered box | Bình thường:
Tiered box sẽ hiển thị tất cả quà trong toàn bộ các mốc, kể cả mốc chưa đạt.

Khi bật tính năng này:
→ Chỉ hiển thị gift của các milestone đã đạt.
→ Những gift ở mốc chưa đạt sẽ không hiện trong box. |
| Skip add product implicitly | Bật cái này nếu store nào dùng app và bị tự động mở cart drawer ⇒ thì bật cái này |
| [TS] Check copy product handle
 | dành cho TS/dev
để check với mấy cái product copy => khi copy thì trong handle của nó có dạng copy-of-.... || ...-copy => cái này có thể sẽ khác với đường dẫn của nó trên url (ảnh dưới) => mình bật dev_zone này để so sánh phần handle không chứa từ copy  |
| [TS] Use Fetch API | Dùng Fetch API hiện đại thay vì XMLHttpRequest. Ví dụ: Fix compatibility với theme mới, hoặc tận dụng abort signal |
| Redirect checkout after add gift | Redirect customer to cart page sau khi sp gift được add vào cart tự động.  |
| [TS] Insert all components | Render toàn bộ widget component trên storefront, không filter. Ví dụ: Debug: hiện hết tất cả widget để kiểm tra |
| No apply code milestone reward | - Khi bật lên thì reward ở từng tier trong milestone reward sẽ ko được apply. 
- Sử dụng khi MC chỉ muốn dùng reward bar với mục đích hiển thị. MC sẽ sử dụng phương thức khác để offer gift. 
- Tuy nhiên, nếu tier có sp gift thì gift vẫn sẽ bị add vào cart và bị charge full giá. Nếu muốn sp gift ko bị add vào cart → bật tính năng ở dưới: Skip adding product tier milestone  |
| [TS] Delay query selector cart drawer | For theme when cart drawer selector loads late |
| Skip adding product tier milestone | - Khi bật, thì sản phẩm gift trong milestone reward sẽ ko bị add vào cart nữa. 
- Dùng chung với tính năng ở trên: No apply code milestone reward  |
| [TS] Use Shopify Cart API for discount codes | Apply discount code qua Shopify Cart API (frontend) thay vì backend. Ví dụ: Shop dùng theme Dawn → bật để apply nhanh hơn, không cần backend call |
| Show all promotion cards |   • Use case: https://capture.avada.io/i/eX6vT320HJUp 
  • Cho phép show nhiều promotion card trên cùng 1 product page. |
| Show all gift in explanation of milestone | Hiện tất cả gift có sẵn trong popup milestone. Ví dụ: Tier có 5 gift → hiện cả 5, không ẩn gift chưa chọn |
| Receive maximum gifts  |   • Bắt buộc khách hàng chọn full available gifts trên pop-up thì mới click add to cart được. Bình thường thì chọn 1/2 gift, 2/3 gifts... vẫn add vào cart được
  • Reference case: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_51a85b6c-e6e6-4bd8-9ada-32a625e04efb/ |
| Prevent Re-Adding Expired |   • Sau khi bật tính năng, sẽ có option để add time cụ thể. Cho phép tuỳ chỉnh thời gian gift sẽ được tự động trigger sau bao lâu kể từ khi MC xoá gift product ra khỏi giỏ hàng:  https://capture.avada.io/i/31PZlzbjwp3p 
  • Sau khi customer xoá gift đi (trigger Prevent readding gift đang bật), CS điền time vào dev_zone như ảnh mẫu ở trên. Ví dụ điền là 5p → Thì sau khi xoá gift đi, thì 5p sau trigger add gift đó mới work lại.  |
| Enable max gift quantity | Cho phép set max gift quantity riêng cho từng campaign. Ví dụ: Campaign A max 2 gift, Campaign B max 5 gift |
| Only load on product & cart page | Chỉ load script trên trang product & cart, không chạy ở collection/home/blog. Ví dụ: Tối ưu performance cho shop lưu lượng cao |
| Exclude gift bundle | Gift được tặng trong campaign bundle không được tính làm trigger cho campaign khác. Ví dụ: Campaign A tặng Gift X → Gift X không được tính là trigger cho Campaign B |
| Skip apply discount code to cart | Không tự apply discount code vào cart khi page load. Ví dụ: Shop có 20 discount code → không muốn auto apply gây conflict |
| Skip refresh selection after add gift | Không reset selection sau khi add 1 gift trong stack. Ví dụ: Customer đang chọn 3 gift → add xong 1 vẫn giữ selection của 2 còn lại |
| Enable add parent line key | Gắn gift với trigger product bằng parent line key. Ví dụ: Remove trigger product thì gift cũng bị remove theo |
| Custom product image | Cho phép merchant upload ảnh tùy chỉnh cho sản phẩm gift thay vì ảnh gốc từ Shopify. Ví dụ: Merchant muốn dùng 1 ảnh banner lạ mắt cho gift |
| [TS] Use first node | Dùng element đầu tiên match CSS selector thay vì element visible đầu tiên. Ví dụ: Theme có 2 node .product (1 hidden cho SEO, 1 visible) → bật để chọn node hidden |
| Only auto campaigns | Chỉ check campaign auto-grab-gift khi tính eligibility, bỏ qua campaign manual. Ví dụ: Shop có 5 campaign auto + 3 manual → chỉ 5 cái auto được check điều kiện |
| [TS] Reset cart URLs to default | Bỏ qua custom cart URLs, dùng endpoint mặc định của Shopify. Ví dụ: Merchant config cart URL sai → bật để reset về mặc định |
| Skip campaign check on load | Không tính eligibility campaign khi page vừa load. Ví dụ: Shop có 50 campaign → bỏ qua tính lúc load để tránh lag |
| Skip cart data on load | Không fetch cart data từ integration khi page load. Ví dụ: Shop dùng Shopify Markets → bỏ fetch cart Markets để giảm request |
| Single item mode | Quick add gift chỉ trả về 1 item trong response. Ví dụ: Theme cần response đơn giản, không handle array |
| Sync storage before ATC | Đồng bộ localStorage (campaign state) trước khi Add-to-Cart. Ví dụ: Fix race condition: state chưa kịp update → ATC nhầm |
| Add trigger before gift | Add trigger product trước rồi mới add gift, không add song song. Ví dụ: Theme không cho add nhiều item cùng lúc → phải tuần tự |
| Delay after removing gift | Thời gian chờ (ms) trước khi add gift mới sau khi vừa remove. Ví dụ: Tránh conflict với theme chưa kịp refresh cart |
| [TS] Skip theme update | Không gọi API update theme khi có thay đổi. Ví dụ: Tránh gọi Shopify Admin API khi preview |
| Remove gifts before adding | Remove hết gift cũ rồi mới add gift mới (flow mới). Ví dụ: Fix bug: gift cũ và mới cùng tồn tại, sai logic |
| Enable stackable gifts | Cho phép stack gift nhiều campaign (CA, CO, QU cùng lúc). Ví dụ: Mua $100 + 2 items → nhận cả gift cart-value lẫn gift qty |
| No delay for stacked gifts | Bỏ delay giữa các lần add gift khi stack. Ví dụ: Nhanh hơn nhưng dễ conflict với theme chậm |
| Keep excess gifts | Giữ gift dư trong cart khi customer add nhiều hơn allowed. Ví dụ: Campaign cho 1 gift, customer bấm add 3 → bật thì giữ cả 3 |
| Show highest price product | Hiển thị product có giá cao nhất trong GWQU campaign. Ví dụ: Mua 3 chai nước → gift ghi tặng sản phẩm $50 (giá cao nhất) |
| Keep gift on campaign switch | Giữ gift khi switch giữa 2 campaign cùng trigger qty. Ví dụ: Campaign A và B đều trigger khi qty=3 → không bị reset gift khi chuyển A→B |
| Remove gift on checkout | Xoá gift milestone không đủ điều kiện trước khi redirect checkout. Ví dụ: Customer qua tier 2 rồi lùi về tier 1 → xoá gift tier 2 trước khi checkout |
| Congrats bar duration | Thời gian (ms) congrats bar tồn tại trước khi tự ẩn. Ví dụ: Set 5000ms → bar hiện 5s rồi tự ẩn |
| Product image redirect | Click ảnh gift → mở trang product. Ví dụ: Customer muốn xem chi tiết trước khi chọn |
| Disable auto-select variant | Không auto chọn variant đầu tiên, bắt customer tự chọn. Ví dụ: Gift áo có size S/M/L → customer phải click chọn |
| Design settings fields | Config màu, spacing, button style của gift on cart. Ví dụ: Đổi màu primary, padding, rounded corner |
| Delay badge display | Chờ 1s rồi mới hiện deal badge. Ví dụ: Theme lazy load image → đợi image load rồi mới gắn badge |
| Skip image size check | Hiện deal badge ngay cả khi ảnh product nhỏ hơn mức bình thường. Ví dụ: Ảnh product 50x50px → vẫn hiện badge (mặc định cần 100+px) |
| Open cart after gift | Auto mở cart drawer sau khi add gift thành công. Ví dụ: Customer add gift → drawer trượt ra để confirm |
| Auto-close cart drawer | Tự đóng drawer sau khi hiện xong. Ví dụ: Hiện 2s rồi tự ẩn |
| Auto Theme Fit | Auto khớp style widget với theme shop. Ví dụ: Theme dark → widget tự đổi màu dark |
| [TS] Unlock locked widgets | Unlock Deal of the day và Gifts on Slide cart cho shop. Ví dụ: Shop free tier → bật để dùng widget premium |
| [TS] Unlock all features | Unlock toàn bộ feature premium cho shop (master switch). Ví dụ: Demo shop / CS test → bật để thấy hết feature |
| [TS] customTitleSelectItem input | Custom CSS selector cho tiêu đề sản phẩm trong popup. Ví dụ: Theme custom → selector .custom-product-title |
| [TS] CSS/JS textarea | Inject custom CSS/JS vào shop để fix edge case. Ví dụ: Theme có .cart-foot conflict → inject CSS override |
| [TS] Shopify cart URLs input | Danh sách URL cart page custom. Ví dụ: Theme có cart ở /basket thay vì /cart |
| [TS] Exclude cart URLs input | URL cart cần loại trừ không chạy script. Ví dụ: Trang /cart/embedded dùng cho iframe → exclude |
| Priority campaign select | Campaign nào được ưu tiên khi nhiều campaign cùng match. Ví dụ: 2 campaign cùng eligible → chọn highest discount |
| [TS] Republish | Re-publish scripttag/theme-extension ra storefront. Ví dụ: Debug: widget không hiện → republish để fix |
| [TS] Create storefront access token | Tạo token truy cập Storefront API. Ví dụ: Lấy token để fetch product từ frontend |
| [TS] Update webhook | Update toàn bộ webhook (topic, URL) cho shop. Ví dụ: Đổi backend URL → update webhook trỏ về URL mới |
| [TS] Fetch webhook | Fetch danh sách webhook đang đăng ký từ Shopify. Ví dụ: CS check: shop có những webhook gì |
| [TS] Remove metafield giftCampaigns | Xoá metafield giftCampaigns khỏi shop. Ví dụ: Reset data campaign bị lỗi, sync lại từ đầu |
| [TS] Remove plan discount code | Set planDiscountCode = null cho shop. Ví dụ: Shop downgrade plan → xoá mã discount của plan cũ |
| [TS] Show onboarding | Bật lại onboarding flow cho shop. Ví dụ: QA test: force shop mới setup lại |
| [TS] Sync iana timezone to metafield | Đồng bộ timezone IANA vào metafield shop. Ví dụ: Shop có timezone UTC-7 → ghi vào metafield cho scripttag đọc |
| [TS] Remove webhook | Xoá 1 webhook theo ID. Ví dụ: Nhập ID 1234567890 → gỡ webhook đó |
| [TS] Update revenue limit reset interval | Set chu kỳ reset revenue limit (số ngày). Ví dụ: Set 30 → cứ 30 ngày reset counter revenue |
| [TS] Plan buttons (Free/Pro/Growth) | Force set plan name cho shop (không qua Shopify billing). Ví dụ: QA test Pro plan: click Pro |
| Skip used trial days | Bỏ qua số ngày trial đã dùng, reset lại. Ví dụ: Shop dùng hết 14 ngày trial → reset về 0 |
| [TS] App version select (V1/V2/V3/V4) | Force shop dùng phiên bản app cụ thể. Ví dụ: Test shop trên V3 trước khi migrate lên V4 |
| [TS] Test installed at | Fake ngày cài app cho shop. Ví dụ: Test logic khuyến mãi cho user mới: set installedAt = 1 ngày trước |
| [TS] Test revenue limit | Test revenue limit với value cụ thể. Ví dụ: Set $10000 → check xem có block đúng ở $10k không |
| [TS] Extend trial days | Kéo dài trial X ngày. Ví dụ: Customer xin extend 7 ngày nữa |
| [TS] Enable Order Assistant | Bật Order Assistant (AI suggest) cho Yodeyma. Ví dụ: AI gợi ý thêm sản phẩm khi customer gần trigger |
| Enable custom checkout gift prompt | Hiện prompt gift custom ở checkout. Ví dụ: Prompt bạn có 3 gift đang chờ trên trang checkout |
| [TS] Force Yodeyma plan (for testing) | Force shop dùng rule đặc thù của Yodeyma. Ví dụ: QA test feature riêng cho Yodeyma |
| [TS] Enable B2B Inventory | Check inventory theo customer segment + location (B2B). Ví dụ: Customer VIP ở HN → check kho HN đủ hàng |
| [TS] Check metafield us_oc_instock | Check metafield us_oc_instock để quyết định show product. Ví dụ: Product có us_oc_instock: false → ẩn khỏi gift list |
Dev & Test tools - Có một vài tính năng CSS riêng theo yêu cầu của từng store - https://capture.avada.io/i/twsBcNlVQHSQ 
- ACE check qua, có khách nào hỏi tính năng tương tự thì mn cứ double-check lại với bên Dev + BA/PO cho chắc nhé. 

| Tính năng | Tooltip |
| Bypass Quantity Requirement | - MC set mua at least 10 items nhận 1 gift giảm 10%. 
- Request: Họ muốn khi tăng gift Y lên → Discount vẫn giảm tương ứng. 
- Ví dụ: 
   + Mua 10X → Add 1Y vào cart → 1Y được giảm 10%. 
   + Mua 10X → Tăng số lương sp Y lên 2Y → 2Y vẫn được giảm 10%. 
   + Tương tự tăng quantity của Y lên 3,4,5,6,… thì tất cả Y vẫn được discount 10%. 
- Bật tính năng này lên là nó work như MC muốn.  |
|  |  |


## User Guide (danh sách — đọc file cụ thể nếu cần)

- `user-guide/fg/gettting-started-welcome.md` — Welcome
- `user-guide/fg/promotion-campaign-buy-x-get-y.md` — Buy X Get Y
- `user-guide/fg/promotion-campaign-gift-with-cart-value.md` — Gift with Cart Value
- `user-guide/fg/promotion-campaign-gift-with-collection-value.md` — Gift with Collection Value
- `user-guide/fg/promotion-campaign-gift-with-quantity-purchase.md` — Gift with Quantity Purchase
- `user-guide/fg/promotion-campaign-milestone-rewards.md` — Milestone Rewards
- `user-guide/fg/promotion-campaign-milestone-rewards-milestone-rewards-1.md` — Milestone Rewards - Cart Drawer
- `user-guide/fg/promotion-campaign-how-to-set-up-order-goal-campaign.md` — Order Goal
- `user-guide/fg/promotion-campaign-how-to-set-up-order-goal-campaign-promote-order-goal-with-ann.md` — Promote Order Goal with Announcement Bar
- `user-guide/fg/promotion-campaign-shipping-goal.md` — Shipping Goal
- `user-guide/fg/promotion-campaign-checkout-upsell.md` — Checkout Upsell
- `user-guide/fg/promotion-campaign-checkout-progress-bar.md` — Checkout - Progress bar
- `user-guide/fg/set-up-gift-recieving-method-congrats-bar-auto-add-gift.md` — Congrats Bar - Auto add gift
- `user-guide/fg/set-up-gift-recieving-method-pop-up.md` — Pop-up
- `user-guide/fg/set-up-gift-recieving-method-floating-button.md` — Floating button
- `user-guide/fg/promote-your-campaign-promotion-card.md` — Promotion Card
- `user-guide/fg/promote-your-campaign-deal-of-the-day.md` — Deal of the Day
- `user-guide/fg/promote-your-campaign-tiered-reward-box.md` — Tiered Reward Box
- `user-guide/fg/promote-your-campaign-tiered-reward-box-how-does-the-tiered-reward-box-help-boos.md` — How Does the Tiered Reward Box Help Boost Your Store's AOV?
- `user-guide/fg/promote-your-campaign-deal-badge.md` — Deal Badge
- `user-guide/fg/promote-your-campaign-milestone-bar.md` — Milestone bar
- `user-guide/fg/advanced-settings-subscription-integration.md` — Subscription integration
- `user-guide/fg/advanced-settings-pos-integration.md` — POS integration
- `user-guide/fg/advanced-settings-gift-limit.md` — Gift limit
- `user-guide/fg/advanced-settings-multiply-gift.md` — Multiply gift
- `user-guide/fg/advanced-settings-lowest-priced-gift.md` — Lowest priced gift
- `user-guide/fg/advanced-settings-translation.md` — Translation
- `user-guide/fg/advanced-settings-specific-link.md` — Specific Link
- `user-guide/fg/advanced-settings-a-b-testing.md` — A/B testing
- `user-guide/fg/advanced-settings-customer-segment.md` — Customer segment
- `user-guide/fg/advanced-settings-customer-location.md` — Customer location
- `user-guide/fg/advanced-settings-apply-code-to-get-gift.md` — Apply code to get gift
- `user-guide/fg/advanced-settings-pop-up-hidden-time.md` — Pop-up hidden time
- `user-guide/fg/advanced-settings-gift-quantity-selector.md` — Gift quantity selector
- `user-guide/fg/knowledge-hub-faqs.md` — FAQs
- `user-guide/fg/knowledge-hub-test-without-going-live.md` — Test without going live
- `user-guide/fg/knowledge-hub-understand-aov.md` — Understand AOV
- `user-guide/fg/knowledge-hub-privacy-policy.md` — Privacy Policy
- `user-guide/fg/knowledge-hub-combine-multiple-campaigns.md` — Combine multiple campaigns
- `user-guide/fg/knowledge-hub-gift-with-quantity-purchase-volume-discount.md` — Gift With Quantity Purchase + Volume Discount
- `user-guide/fg/knowledge-hub-gift-with-collection-value-volume-discount.md` — Gift with Collection Value + Volume Discount
- `user-guide/fg/knowledge-hub-gift-with-quantity-purchase-buy-x-get-y.md` — Gift with Quantity Purchase + Buy X Get Y
- `user-guide/fg/knowledge-hub-buy-x-get-y-volume-discount.md` — Buy X Get Y + Volume Discount
- `user-guide/fg/knowledge-hub-gift-with-cart-value-buy-x-get-y-bxgy.md` — Gift with Cart Value + Buy X Get Y (BXGY)
- `user-guide/fg/knowledge-hub-volume-discount.md` — Volume Discount
- `user-guide/fg/knowledge-hub-feature-updates-q3-q4-2025.md` — Feature updates: Q3/Q4 2025
- `user-guide/fg/knowledge-hub-affiliate-program.md` — Affiliate program
- `user-guide/fg/knowledge-hub-subscription-restrictions.md` — Subscription restrictions
- `user-guide/fg/pricing-info-quota-usage-for-free-plan.md` — Quota usage for Free plan
- `user-guide/fg/pricing-info-definition-of-revenue-by-app.md` — Definition of Revenue by App
- `user-guide/fg/pricing-info-monthly-charge-calculation.md` — Monthly charge calculation
