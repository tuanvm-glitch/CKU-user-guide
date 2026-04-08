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
| Check gift zero price | chỉ dành cho product team, TS/CS vui lòng ko sử dụng  |
| Can edit quantity for cart value campaign | chỉ dành cho product team, TS/CS vui lòng ko sử dụng  |
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
| API Delay | delay API 1s đối với những store add gift chậm |
| Auto Reload | - Tự động reload lại trang sau khi add gift vào cart. - Tính năng này support cho 1 vài theme cần reload lại trang để update cart. |
| Block Checkout | Khóa nút “Checkout” khi trigger condition chưa đạt đủ điều kiện. |
| BXGX V2 | • Logic khi chưa bật tính năng trong dev_zone: App chỉ cho phép nhận quà 1 lần. Ví dụ, KH add to cart sản sp A trước và add gift vào cart > thì họ sẽ ko nhận được thêm Gift khi add sản phẩm B vào cart nữa.
• Logic sau khi bật tính nắng trong dev_zone: App cho phép nhận quà nhiều lần. Ví dụ: Với mỗi lần add sp A hoặc B vào cart > nhận gift tương ứng. Nếu add cả sp A và B thì sẽ nhận được cả Gift A và Gift B.

Check chi tiết ở flow này: Buy X Get X - Cho phép nhận nhiều Gifts theo từng trigger  |
| Badge After Image | 1 vài store ảnh sản phẩm đè lên trước( front) cái promotion badge của app ⇒ ⇒ bật cái này lên và đồng thời query vào ô class của promotion badge trong dev_zone

Về back end:
Cái này là khi add block promotion_card trong dev_zone ⇒ thì nó sẽ chèn vào sau cái querySelector đấy, nếu không bật thì chèn vào trước  |
| Position Before Progress Bar | 1 vài store theme ko hỗ trợ thay đổi vị trí của progress bar
⇒ bật cái này lên và đồng thời query vào button đứng trên progress bar rồi input vào ô class của progress bar trong dev_zone |
| Custom Checkout | dành cho TS/dev dành cho các case mà khi click vào button checkout thì parameter có chứa ?discount= nên gift bị charge ⇒ bật chức năng này lên + đồng thời query checkout button là resolve |
| Final Price | Check chi tiết ở flow này: Gift with cart value offer gift dựa trên giá gốc của sp thay vì giá sau discount. |
| Fetch cart when show gift | dành cho dev dùng Mặc định: Mỗi lần add gift xong thì ko fetch lại cart → bật lên thì Mỗi lần add gift thì hệ thống fetch lại cart để cập nhật lại giỏ hàng |
| Stackable gifts for CA or CO
(Gift With Cart Value) | Hiện tại Nếu khách có nhiều cam cart value mà các cam đều combine, khách mà add thẳng lên cam Cart value cao nhất thì chỉ nhất được gift cam cao nhất→ Bật chức năng này lên thì: ăn hết toàn bộ gift thay vì chỉ ăn gift gần nhất |
| Hide click product new tab | Lúc click vào product trong pop-up ra tab mới của product đấy→ bật lên thì unclick |
| Uncheck gift | - By default thì tính năng này mặc định sẽ là được tick sẵn https://ibb.co/F4tQQ1kK - Có MC request uncheck những chỗ này > CS vào dev_zone bật "Uncheck gift" lên nhé. |
| Allow reducing gift | - MC muốn chỉ cho phép khách hàng giảm số lượng gift, chứ không được click tăng số lượng gift.- CS cần bật đồng thời cả tính năng "Disable adjustment of gift quantity" ở app settings và "Allow reducing gift" ở dev_zone. |
| Check duplicate request | Store có 2 sự kiện add gift thì gift bị add 2 lần → bật lên thì chỉ còn add gift 1 lần |
| Optimize remove gift | Remove gift and trigger (update cart) at the same time. |
| Optimize add gift | Tối ưu tốc độ Add gift, nhanh hơn trước rất nhiều (bằng cách apply code trước product sau) |
| Auto apply discount code | dành cho dev dùng: Xử lý trường hợp: gift bị charge → thì khi bật lên cứ mỗi lần reload sẽ apply code 1 lần |
| No show cart | Với theme Horizon, nếu enable thì ko hiển thị cart drawer khi add gift |
| Hide quantity input in cart
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
| Check copy product handle
 | dành cho TS/dev
để check với mấy cái product copy => khi copy thì trong handle của nó có dạng copy-of-.... || ...-copy => cái này có thể sẽ khác với đường dẫn của nó trên url (ảnh dưới) => mình bật dev_zone này để so sánh phần handle không chứa từ copy  |
| Use Fetch API |  |
| Redirect checkout after add gift | Redirect customer to cart page sau khi sp gift được add vào cart tự động.  |
| Insert all components |  |
| No apply code milestone reward | - Khi bật lên thì reward ở từng tier trong milestone reward sẽ ko được apply. 
- Sử dụng khi MC chỉ muốn dùng reward bar với mục đích hiển thị. MC sẽ sử dụng phương thức khác để offer gift. 
- Tuy nhiên, nếu tier có sp gift thì gift vẫn sẽ bị add vào cart và bị charge full giá. Nếu muốn sp gift ko bị add vào cart → bật tính năng ở dưới: Skip adding product tier milestone  |
| Delay query selector cart drawer | For theme when cart drawer selector loads late |
| Skip adding product tier milestone | - Khi bật, thì sản phẩm gift trong milestone reward sẽ ko bị add vào cart nữa. 
- Dùng chung với tính năng ở trên: No apply code milestone reward  |
| Use Shopify Cart API for discount codes |  |
| Show all promotion cards |   • Use case: https://capture.avada.io/i/eX6vT320HJUp 
  • Cho phép show nhiều promotion card trên cùng 1 product page. |
| Show all gift in explanation of milestone |  |
| Receive maximum gifts  |   • Bắt buộc khách hàng chọn full available gifts trên pop-up thì mới click add to cart được. Bình thường thì chọn 1/2 gift, 2/3 gifts... vẫn add vào cart được
  • Reference case: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_51a85b6c-e6e6-4bd8-9ada-32a625e04efb/ |
| Prevent Re-Adding Expired |   • Sau khi bật tính năng, sẽ có option để add time cụ thể. Cho phép tuỳ chỉnh thời gian gift sẽ được tự động trigger sau bao lâu kể từ khi MC xoá gift product ra khỏi giỏ hàng:  https://capture.avada.io/i/31PZlzbjwp3p 
  • Sau khi customer xoá gift đi (trigger Prevent readding gift đang bật), CS điền time vào dev_zone như ảnh mẫu ở trên. Ví dụ điền là 5p → Thì sau khi xoá gift đi, thì 5p sau trigger add gift đó mới work lại.  |
| Enable max gift quantity |  |
| Only load on product & cart page |  |
| Exclude gift bundle |  |
| Skip apply discount code to cart |  |
| Skip refresh selection after add gift |  |
| Enable add parent line key |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
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
