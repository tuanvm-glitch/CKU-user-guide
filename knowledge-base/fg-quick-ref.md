# FG — Quick Reference

## FAQ

# Popup ko hiện

⚠️ Problem/ Request:

  - Popup ko hiện
🎗️ Possible causes:

  - MC chưa enable app trong App embeds
  - Cart value chưa đủ điều kiện nhận quà
➡️ Support flow:

  - Kiểm tra xem MC đã, activate app trong embed chưa, nếu chưa thì hướng dẫn MC activate và test lại
  - Kiểm tra rule của campaign MC đang test, thử test lại từ phía CS sau khi đảm bảo là setting đã đúng.
  - Nếu các setting cần thiết đã đúng và pop-up vẫn chưa hiện, tạo card cho TS investigate.


---

# Lựa chọn loại campaign phù hợp cho yêu cầu setup của MC

⚠️ Problem/ Request:

  - Lựa chọn loại campaign phù hợp cho yêu cầu setup của KH
  - Merchant chưa rõ về các loại campaign mà Free Gift app cung cấp.
  - Merchant không chắc campaign nào phù hợp với mục tiêu kinh doanh hoặc loại sản phẩm của họ.
➡️ Support flow:

  - Hiểu nhu cầu của Merchant:
  - Hỏi Merchant về mục tiêu của họ:
    - Họ muốn tăng AOV (Average Order Value), thu hút khách hàng mới, hay giải phóng hàng tồn kho?
    - Hỏi thêm về sản phẩm hoặc ngành hàng của Merchant để đảm bảo campaign được cá nhân hóa:
    - Loại sản phẩm họ muốn áp dụng (bán chạy, hàng tồn kho, v.v.).
  - Giới thiệu các loại campaign phù hợp:
    - Buy X Get Y Free: Khách hàng mua một sản phẩm sẽ nhận được sản phẩm miễn phí. Phù hợp cho: Tăng doanh số của sản phẩm cụ thể, đẩy mạnh bán combo sản phẩm. Ví dụ: "Mua 1 áo thun, tặng 1 nón."
    - Spend X Get Y Free: Khách hàng đạt mức chi tiêu cụ thể sẽ nhận được sản phẩm miễn phí. Phù hợp cho: Tăng AOV. Ví dụ: "Chi tiêu $50, tặng miễn phí 1 chai nước hoa mini."
      - Free Gift with Purchase: Khách hàng mua bất kỳ sản phẩm nào sẽ nhận được quà tặng. Phù hợp cho: thu hút khách hàng mới, tăng tỷ lệ chuyển đổi. Ví dụ: "Tặng quà miễn phí cho mọi đơn hàng."...
  - Hướng dẫn tạo campaign:
    - Hướng dẫn Merchant vào app → chọn loại campaign → điền thông tin cụ thể.
    - Gửi tài liệu chi tiết hoặc video hướng dẫn nếu cần.
🗒️ References:

https://help.aov.ai/knowledge-hub/understand-aov

✅ Tips & Tricks:

- Gợi ý Merchant chạy thử campaign với một nhóm nhỏ sản phẩm trước khi áp dụng cho toàn cửa hàng.
- Khuyến khích Merchant theo dõi hiệu quả campaign bằng cách sử dụng báo cáo trong app.
- Tham khảo thêm với PM/BA để cung cấp giải pháp tốt nhất cho MC


---

# Page bị reload sau khi add reward

⚠️ Problem/ Request:

  - Khi add reward vào cart, trang sẽ tự động bị reload lại một lần. 
🎗️ Possible causes:

  - Có thể do app chưa được integrate với theme mà merchant đang sử dụng. 
➡️ Support flow:

  - CS Turn off tính năng “Auto reload” ở dev_zone: 
- Trong TH tắt đi nhưng store vẫn bị reload sau khi add gift từ offer vào cart. CS cần xin quyền “Theme” và forward case thẳng cho team dev.


---

# Ẩn congrat bar cho 1 vài campaign cụ thể

⚠️ Problem/ Request:

  - Ẩn congrat bar cho 1 vài campaign cụ thể. 
➡️ Support flow - Nội bộ: 

  - Tìm campaign ID bằng cách mở app → Vào mục campaigns → Mở campaign cần ẩn congrat bar.
  - Campaign ID là một dãy số  xuất hiện ở đường link của campaign đó → Copy lại (có thể hỏi thêm colleague hoặc TS nếu không tìm thấy). 
  - Mở Dev_zone → CS paste Campaign ID vừa copy được vào mục “Enable/discount cỏngatulation bars” → Ấn “save”.


---

# MC không muốn cho customer thay đổi được số lượng Gift ở cart page hoặc cart drawer

⚠️ Problem/ Request:

  - MC ko muốn khách hàng edit được nút tăng hoặc giảm quantity của sản phẩm là gift ở cart drawer hoặc cart page. 
➡️ Support flow:

  - Hiện tính năng này đã có trong app settings. CS hướng dẫn MC bật ở App Settings → Lock gift quantity in cart → bật feature “Disable adjustment of gift quantity”. 
  - Video demo: https://www.loom.com/share/e0f9c96d668b4664b09f3b4ee2535266
🗒️ References:

Case study: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_25d7f814-a160-4c10-86a7-01477b881fb9/


---

# Campaign không work do hết lượt Use

⚠️ Problem/ Request:

  Khách hàng không nhận được gift product sau khi đã thỏa mãn điều kiện trigger của campaign. 

🎗️ Possible causes:

  - TH1: Chưa bật campaign/ Chưa bật app embeds/ Chưa add widget của campaign đó vào theme.
  - TH2: Hoặc có thể MC có set “Limit number of times this discount can be used in total” cho campaign đó. 
➡️ Support flow:

  - Với TH1 thì CS chỉ cần check qua các bước căn bản trên, test thử. Nếu vẫn ko work thì báo lại cho TS. 
  - Với TH2: 
    - CS cần check nhanh xem họ có đang bật “Limit number of times this discount can be used in total” hay không. Và nếu có bật, thì limit họ đang set là bao nhiêu? 

    - Nếu đang bật và set = 2 thì nếu có 2 khách hàng place order theo trigger của campaign này rồi, campaign sẽ tự động bị expired (không ai sử dụng được campaign này nữa). 
    - CS check số lượt sử dụng campaign ở đây để biết campaign này còn lượt sử dụng không. 
      - Campaign list → Used. 
- ⇒ Báo TS nếu đã check theo các bước trên nhưng campaign vẫn chưa hoạt động. 
🗒️ References:

https://trello.com/c/za65bDaN/94902-fg-free-gìt-ko-work


---

# Chỉ nhận 1 Gift từ campaign trong app và Order phải apply được discount từ Shopify

⚠️ Problem/ Request:

  - Khách muốn customer chỉ nhận được gift từ 1 campaign và order phải sử dụng được discount code từ Shopify. 
  - Bật combination: Khách nhận được gift từ tất cả các campaigns, chỉ cần thỏa mãn điều kiện trigger → Order đó sẽ apply được cả Shopify discount code.
  - Ko bật combination: Khách chỉ nhận được gift từ 1 campaign (Campaign này sẽ là campaign add gift vào sau cùng, gift add vào sau sẽ remove gift add vào trước) và order đó sẽ không apply được discount code từ Shopify.
➡️ Support flow:

  - Bật combination trong app để campaign của app có thể combine được với discount của Shopify.
  - Vào dev_zone, bật “Auto remove gift” ở Dev_zone - tính năng này sẽ đảm bảo customer chỉ nhận được gift từ 1 campaign. 
  - Ví dụ: user có 2 campaign gift with cart value $20 và $50. User có thêm 1 discount khác ngoài Shopify có tên là SUMMER, nên họ muốn bật combination. Nhưng user muốn khi đạt điều kiện $50, chỉ nhận gift của $50 và discount SUMMER thôi, không nhận discount của campaign $20 nữa.


---

# Buy X Get X - Cho phép nhận nhiều Gifts theo từng trigger    

⚠️ Problem/ Request:

- MC muốn BXGX campaign cho phép Customer nhận nhiều gift cùng lúc.
🎗️ Possible causes:

  Ex: Campaign BXGX có sản phẩm trigger là A và B

  - Logic khi chưa bật tính năng trong dev_zone: App chỉ cho phép nhận quà 1 lần. Ví dụ, khách hàng add to cart sản phẩm A trước và add gift vào cart thì họ sẽ không nhận được thêm Gift khi add sản phẩm B vào cart nữa. 
  - Logic sau khi bật tính năng trong dev_zone: App cho phép nhận quà nhiều lần. Ví dụ: Với mỗi lần add sản phẩm A hoặc B vào cart, nhận gift tương ứng. Nếu add cả sản phẩm A và B thì sẽ nhận được cả Gift A và Gift B. 
➡️ Support flow:

  - CS nhận request của MC → Vào dev_zone, bật tính năng “Enable logic “gift by gift” for campaign Buy X get X”.
  - Giải thích với MC về cách hoạt động của campaign BXGX sau khi bật tính năng. 
🗒️ References:

- Link Demo cho tính năng “Enable logic ‘gift by gift’ for campaign Buy X Get X”: https://www.loom.com/share/8dddf72db1e1436188a21a13ecc89d7d?sid=3b0c06d5-3aeb-43f5-abe5-1a57aef215ba
- Case Study: https://avadaio.slack.com/archives/C083YAETLEP/p1742227747888429
✅ Tips & Tricks:


---

# MC muốn offer discount cho khách hàng mua lần đầu 

⚠️ Problem/ Request:

  - MC muốn offer discount 20% cho những khách hàng mua lần đầu.
➡️ Support flow:

  - Step 1: Ở Shopify Admin → Customers → Segment, Shopify đã tạo sẵn 1 segment cho những KH chưa có order nào.
  - Step 2: Tạo campaign “Order Goal” trong app. Set minimum = $1 (mức thấp nhất), discount = 20% và customer eligibility = Customers who haven't purchased.
🗒️ References:

https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_02388885-f2df-45a9-8fc9-07c9694f3f45/

✅ Tips & Tricks:

  - Với workflow này, customer buộc phải log in member account thì app mới trigger được.
  - Nếu campaign không work, có thể tạo một campaign mới với trigger tương tự để test lại (do nếu campaign này được tạo từ lâu về trước, campaign sẽ bị dính trigger cũ trước khi update app → cần tạo campaign mới để test lại trước khi báo TS).


---

# Promotion card: MC muốn nút “unlock your gift” work như nút “add to cart” default của theme. 

⚠️ Problem/ Request:

  - Default setting: khi click vào nút “Unlock your gift”, app sẽ tự động add variant mặc định của trigger product vào cart thay vì selected variant. 
  - Ví dụ như ảnh dưới: Variant của trigger product chọn màu hồng → sau đó ấn nút “Unlock your gift” thì chỉ có cái variant “silver” được add vào cart + gift product thay vì variant “màu hồng”.
  - MC muốn là khi customer chọn variant nào ở “theme variant selector feature” thì lúc ấn nút “Unlock your gift” thì variant đó sẽ được add vào cart page thay vì default variant “Silver”. 
  - In short, họ muốn nút “Unlock your gift” của promotion cart work như nút “add to cart” của theme. 
➡️ Support flow:

  - CS nhận request của MC → Giải thích để confirm lại xem có phải họ muốn nút “Unlock your gift” work như nút “add to cart” của theme không.
  - MC confirm yes → CS access dev_zone, bật tính năng: ATC Trigger.
  - Sau đó test lại thì nút “Unlock your gift” sẽ work đúng như nút “add to cart” của theme. Nó sẽ add đúng variant mà customer đang chọn cho trigger product ở product page.
🗒️ References:

  Case study: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_52dff439-da4b-4ca0-8b82-1815d84dad66/ 

✅ Tips & Tricks:


---

# (For CS test store) Làm thế nào để hiện “Local Currency” trong Gift With Cart Value (GWCA) setting? 

⚠️ Problem/ Request:

  - Ở campaign GWCA sẽ có 1 tính năng ẩn là “Local currency conversion”. 
🎗️ Possible causes:

  - Tính năng này sẽ tự động hiển thị trong campaign setting nếu store của MC có nhiều hơn 1 country trong Market setting. 
  - Vậy CS cần làm gì để hiện tính năng này cho mục đích testing? 
➡️ Support flow:

  - CS cần có nhiều hơn 1 country active trong 1 market ở Shopify Admin Settings. 
  - CS cần enable “Use local currencies” ở trong Markets’ settings.
🗒️ References:

  CS follow guide ở trên để bật tính năng này và test trên store.


---

# Gift được set discount, nhưng vẫn bị charge full giá (Campaign GWCA).

⚠️ Problem/ Request:

  - Cam “Gift With Cart Value”: Gift đã được set discount nhưng ở cart page hoặc check out page nó vẫn bị tính full giá gốc. 
🎗️ Possible causes:

  - Trường hợp 1: Như những case bình thường, nếu settings không có vấn đề gì, xin quyền theme (edit code) + quyền vào discounts ở Shopify Admin của MC và forward lại case cho Dev/TS. 
  - Trường hợp 2: Lỗi ở setting do MC set quá nhiều Excluded products ở campaign “Gift with Cart Value”. 
➡️ Support flow cho trường hợp 2:

  - CS check xem campaign của MC có đang được sử dụng excluded product ko? 
  - Nếu có, thì giới hạn sẽ là 100-150 products. Nếu MC add nhiều hơn 100-150 products thì app sẽ hiện warning. 
  ⇒ Dev giải thích là: do thêm nhiều exclude product quá nên bị chết function => CS báo khách add tối đa 100 exclude product thì app mới work. 

  - CS giải trình lại với MC trước > có thể nói là giới hạn của Shopify. Team đang tìm cách tối ưu hóa.
  - Vậy workaround ở đây sẽ là gì? 
    - CS recommend MC group những products KHÔNG nằm trong excluded list này vào 1 hoặc nhiều collection. 
    - Sau đó, chuyển qua dùng campaign “Gift With Collection Value”.
🗒️ References:

  Case study 1: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_f138016f-3e6d-4cba-a97c-d4a846a852b0/

  Case study 2: https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_65998c62-f9d4-4055-b939-7bbbac9e9da0/

✅ Tips & Tricks:

  Internal note: Hiện dev đang nghiên cứu để tối ưu hóa chỗ này. CSL sẽ update lại FAQ sau khi có chỉnh sửa mới từ dev.


---

# Gift with cart value offer gift dựa trên giá gốc của sản phẩm thay vì giá sau discount.

⚠️ Problem/ Request:

  - Hiện tại, campaign này sẽ tính cart value dựa trên giá gốc của sản phẩm. Không tính giá sau khi sản phẩm đó đã được áp discount. 
🎗️ Possible causes:

  Ví dụ: 

  - Sản phẩm có giá là 45$. Campaign setting là: mua 45$ thì sẽ được free gift.
  - Customer add sản phẩm này vào cart. Sản phẩm này được giảm giá còn $30, nhưng app vẫn tính theo giá gốc là $45 và offer gift cho customer. 
➡️ Support flow:

  - Vào dev_zone bật tính năng: Final price.
  - Sau khi bật feature, hệ thống sẽ check lại subtotal sau khi áp dụng discount từ app bên thứ ba → customer không nhận được Free gift bởi vì giá sau giảm là $30 (không thỏa mãn điều kiện tối thiểu $45 mới được nhận gift).


---

# Các trường hợp xảy ra khi tạo nhiều campaign Gift With Cart Value (GWCA) với các mốc threshold khác nhau thì app sẽ work như thế nào? 

⚠️ Problem/ Request:

  - Trong TH MC set 2 campaign GWCA với 2 mốc threshold khác nhau thì app sẽ work như thế nào? 
  - Thread này sẽ giải đáp cả 2 trường hợp: bật combination và không bật combination.
🎗️Tình huống giả định: 

  - Campaign 1: Mua 100$ để nhận quà A.
  - Campaign 2: Mua 200$ để nhận quà B. 
➡️ Support flow:

  Trường hợp 1: Không bật combination.

  - Nếu add đủ 100$ → nhận quà A, và tiếp tục tăng cart value lên 200$ thì pop up quà B sẽ hiện. Nếu customer chọn add quà B vào cart thì quà A sẽ tự động bị remove. 
  - Tương tự, nếu ngược lại: add đủ 200$ vào cart → nhận quà B, sau đó reduce cart value xuống còn 100$ thì quà B sẽ giữ nguyên và bị charge full giá. Đồng thời, quà A sẽ pop up để customer add to cart. 
  Trường hợp 2: Bật combination.

  - Nếu add đủ 100$ vô cart trước → sẽ hiện pop up quà A → add quà A vào cart. Sau đó, nếu tăng cart value lên 200$, quà B sẽ pop up tiếp → add tiếp quà B vào cart. Customer sẽ nhận được cả 2 gifts.
  > 

    - Tuy nhiên, nếu ngay từ đầu add sản phẩm vào cart mà đạt 200$ luôn thì chỉ quà B hiện và quà A sẽ bị skip (Vì nó chỉ ăn gift gần nhất). 
      - CS vào dev_zone bật feature “Stackable gifts for CA or CO” → ăn hết toàn bộ gift thay vì chỉ ăn gift gần nhất. 
      - Có nghĩa là nếu add trực tiếp 200$ vào cart → Customer sẽ nhận luôn cả Gift A và Gift B cùng lúc. 
🗒️ References:

Dev-zone guide link: Hướng dẫn sử dụng Dev_zone 

✅ Tips & Tricks:


---

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


---

# Gift with Quantity Purchase logic 

⚠️ Problem/ Request:

- Đặt vấn đề: Với setting như trên, add 3 sản phẩm vào cart thì sản phẩm rẻ nhất được free. 
  - Quantity: 3
  - Apply for: All products 
  - Customer gets: Gift with the lowest price 
- Câu hỏi của MC: Vậy mua nhiều hơn 3 (mua 4, 5, 6,…) thì app có detect sản phẩm rẻ nhất và offer nó Free không? 
➡️ Support flow:

- Với setting như trên, mua nhiều hơn 3 thì app sẽ load 1 lúc và detect lại sản phẩm rẻ nhất như bình thường → Vẫn Work. 
- Hiểu đơn giản, setting quantity ở campaign này sẽ có nghĩa là lớn hơn hoặc bằng 3.
- Với setting này thì mua ít hơn 3, cụ thể là 2 → thì app sẽ ko work.


---

# Bản chất của campaign Buy X get Y - Phân biệt BXGY với GWQa

⚠️ Problem/ Request:

- Bản chất của campaign Buy X get Y - Phân biệt BXGY với Gift with quantity purchase campai
- Với setting sau, CS đang hiểu nhầm là mua 2 sản phẩm bất kỳ trong list 8 sản phẩm X1, X2, X3,…, X8 thì được tặng sản phẩm Y miễn phí. 
  - Trigger condition: 
    - Quantity: 2
    - Trigger product: X1, X2, X3,…, X8. 
  - Offer list: 
    - Offer product: Y
- Tuy nhiên, cách hiểu trên là hoàn toàn SAI. 
✅ Cách hiểu đúng: 

- Bản chất campaign Buy X get Y có nghĩa là bạn mua sản phẩm X, thì bạn được tặng sản phẩm Y → Mua X thì mới được Y. 
- Khi set quantity bằng 2, thì có nghĩa là mua 2 sản phẩm X1 hoặc X2,…. Chứ không phải mua 1 sản phẩm X1 kèm 1 sản phẩm X2 thì được Y. (Nhầm với campaign gift with quantity purchase). 
  > Ví dụ: 

    - Như campaign mẫu ở trên. Mua 2 cái áo đen thì mới được tặng cái quần bò.
    - Nếu mua 1 cái áo đen + 1 cái áo nâu → sẽ KHÔNG được tặng cái quần bò. 
- Khi MC request campaign mua 2 sản phẩm bất kỳ trong list trigger product → recommend MC sử dụng Gift with Quantity Purchase. 
> Note: 

  - Hỏi lại leader nếu ko hiểu và cần ví dụ thực tiễn.  
  - BXGY sử dụng điều kiện OR. 
  - Gift with quantity purchase sử dụng điều kiện AND.


---

# Work Flow của BXGY và Gift W Quantity Purchase

⚠️ Problem/ Request:

  - Issue: Khi MC tạo 2 campaign BXGY và Gift W Quantity Purchase hoạt động cùng lúc và có trigger và gift tương tự nhau, thì campaigns sẽ không work như expect, sẽ có gift add vào nhưng bị charge
🎗️ Possible causes:

  - Việc gift nhảy vào nhưng bị charge làm MC hiểu rằng có lỗi app, 
➡️ Support flow:

  - Giải thích rõ do 2 campaigns set up cùng trigger/gift, nên logic 2 campaign giống hệt nhau → sẽ tạo ra luồng ko mong muốn như gift bị charge
  - Cần hỏi lại MC xem mong muốn chính xác của họ khi tạo 2 campaign đó là gì → đưa ra solution phù hợp nhất
  - Giải pháp tức thời là chỉ sử dụng 1 campaign (GWQP sẽ bao quát rộng hơn phạm vi work của BXGY nên suggest dùng GWQP).
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_ca4baa4b-ec76-45b2-9f4e-eb09a5921b59/

✅ Tips & Tricks:


---

# Milestone Reward campaign Combination 

⚠️ Problem/ Request:

- Hiện tại trong milestone campaign check không có phần boxes combination như các campaigns khác. 
- MC muốn tắt combination của Milestone thì làm thế nào?
🎗️ Possible causes:

➡️ Support flow:

- Phương án duy nhất là tắt combination ở discount khác để nó không work chung với milestone.
- Nhưng trong trường hợp MC muốn các discount khác work với nhau. Chỉ trừ mỗi milestone thì sao?
⇒ Giải thích: do Milestone works with many different discount workflows, using code workbase, MC chỉ cần tắt ít nhất 1 option discount trong 3 options là dc, ko quan trọng là type nào
- Nếu trong trường hợp cần cả 3 discount combination turn on thì không có giải pháp, cần tạo các campaigns mới thay cho Milestone. (cân nhắc Gift with quantity purchase). 
> Explanation message: 

  The Milestone Reward campaign works with many different discount workflows, which is why it does not have the combination on itself. If you do not want it to work with any other discount, the only way is to turn off the combination of those discount settings. 

  
The Milestone Reward does not fall under any specific discount type, so you can turn off one of the three discount types—Product Discount, Order Discount, or Free Shipping Discount—in other discount settings to prevent it from being combined with the Milestone Reward campaign.

🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_434b2f9f-0d89-44a8-9f50-6faa0712d99b/

✅ Tips & Tricks:


---

# Các access cần xin khi campaign không work

⚠️ Problem/ Request:

- Khi gặp các issue liên quan đến app. Bất kể là issue gì, thì mọi người cần xin những quyền nào trước khi forward cho dev? 
➡️ Support flow:

  1/ Lỗi liên quan đến sản sản phẩm hoặc ko add được gift: 

  - Theme
  - Discount
  - Product
  2/ Lỗi liên quan đến order (Gift bị charge full giá): 

  - Theme 
  - Discount
  - Product 
  - Order


---

# Gift selection method đối với discount type của gift

⚠️ Problem/ Request: 

  - Bình thường, có các sự lựa chọn cho Gift selection method như là pop-up, floating button, automatic. Tuy nhiên, khi đổi discount type sang các dạng khác, ko để là “FREE” thì phần Gift selection method ko có mục automatically add
🎗️ Possible causes: 

  - Vì Shopify ko cho phép các app tự động add sản phẩm có giá vào cart, nó ko có consent của người mua.
  - App must display full costs and obtain explicit buyer consent before adding optional paid items to Storefront, Cart, or Checkout. This applies to both the app’s default features and any merchant customization options the app provides. 
  - Tuy nhiên, có nhiều MC đã request tính năng tự động add sản phẩm Y vào cart kể cả sản phẩm đó chỉ được discount 1 số % nhất định. 
  - CS vào dev_zone, bật tính năng “Show congrats bar with percent or fixed discount” để app work như MC muốn. 
🗒️ References: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_706bb166-e718-409e-b6cc-98f79a181ca4/


---

# Milestone reward - final price workflow 

⚠️ Problem/ Request:

  Lưu ý: Đã hỗ trợ “Final Price” trong Milestone Reward

➡️ Support flow - Giải thích chi tiết kèm ví dụ:

  ✅ 1. Order Discount 

  - Điều kiện: Chi tiêu $200 để được giảm 10% toàn bộ đơn hàng.
  - Trường hợp:
    - Khách thêm đủ $200 vào giỏ.
    - Sau đó họ dùng thêm mã giảm giá 20% khác.
    - Giá trị giỏ hàng sau giảm không còn đủ $200.
    → Khách ko nhận được discount 10% từ milestone sau khi sử dụng mã giảm giá 20% khác. 

  ✅ 2. Free Shipping 

  - Điều kiện: Chi tiêu $400 để được miễn phí vận chuyển.
  - Trường hợp tương tự:
    - Khách add đủ $400 vào giỏ.
    - Áp mã giảm giá khác 20%.
    → Cart value giảm xuống dưới $400, khách ko nhận được miễn phí vận chuyển nữa. 

  ✅ 3. Free Gift 

  - Điều kiện: Chi tiêu $600 để nhận quà tặng.
  - Trường hợp:
    - Khách đạt đủ $600 → được tặng Free Gift.
    - Sau đó họ áp mã giảm giá 20%.
  - Giá trị giỏ hàng sau giảm < $600 → Free Gift sẽ tự bị remove hoặc bị tính phí, vì app tính theo giá sau discount (Final price).


---

# Gift with Quantity Purchase workflow 

⚠️ Problem/ Request:

  - Tình huống giả định - Combination discount đang được bật ở tất cả 3 campaigns. 
    - Mua 3 được quà A 
    - Mua 6 được quà B
    - Mua 9 được quà C 
  - Có 2 trường hợp xảy ra: 
    - Trường hợp 1: Nếu add 3 > quà A hiện > add tiếp 3 sp nữa > quà B hiện. Tổng có 6 sản phẩm trong cart và nhận được cả quà A và B. 
    - Trường hợp 2: Nhưng nếu add thẳng 6 vào cart > Chỉ quà B hiện > quà A sẽ bị skip. 
  - Trong trường hợp MC muốn khách nhận cả A và B nếu add như trường hợp 2 là add thẳng 6 thì làm như thế nào?
➡️ Support flow:

- CS vào dev_zone bật tính năng này để thay đổi flow của app. 
  - Tính năng: Has add multiply gift (QU)
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_2f3b4071-c470-4195-b33c-e7b85d264036/


---

# Auto remove gift on Checkout and Prevent expired campaign gifts from being checked out (Shopify Plus only) 

⚠️ Request:

  - Tính năng “Auto-remove Gift on Checkout”:
    - Cho phép hệ thống tự động xóa quà tặng khỏi checkout khi khách hàng áp dụng discount code khiến giá trị đơn hàng (NET order price) không còn đủ điều kiện nhận quà.
    - Điều này giúp đảm bảo tính chính xác của campaign và tránh tình trạng khách hàng nhận quà dù không còn đạt điều kiện.
  - Prevent expired campaign gifts from being checked out: 
    - Một số khách hàng đã thêm free gift vào giỏ hàng khi campaign còn active nhưng chưa checkout ngay. 
    - Khi họ quay lại sau vài ngày — chiến dịch đã hết hạn (expired), nhưng quà tặng vẫn còn trong giỏ và vẫn được checkout miễn phí.
🗒️ References:

  - Nhiều merchant (đặc biệt Shopify Plus) có nhu cầu đảm bảo giá trị đơn hàng cuối cùng (final price) sau khi áp dụng code vẫn hợp lệ.
  - Trước đây, hệ thống chỉ kiểm tra điều kiện ở cart → dẫn đến trường hợp gift vẫn hiển thị trong checkout dù đơn hàng đã giảm giá.
  - Để đảm bảo quà tặng chỉ được giữ lại khi campaign còn hiệu lực, hệ thống đã hỗ trợ tính năng tự động kiểm tra và xóa quà hết hạn tại trang checkout.
  - Điều kiện: Chỉ khả dụng cho Shopify Plus.
    - Bước 1: Truy cập Shopify Admin → Settings → Checkout
    - Bước 2: Nhấn nút Customize
    - Bước 3: Tại thanh Add block → chọn “AOV Checkout Add-on”
    - Bước 4: Nhấn Save để hoàn tất
> Video Demo: https://drive.google.com/file/d/1Ve0niXdHtBtOl_gcqRyBMHI_Uru1NXc1/view?usp=sharing


---

# Phân biệt “Multiplying Gift Limit” và “Multiplying formula” 

⚠️ Problem/ Request:

- Phân biệt “Multiplying Gift Limit” và “Multiplying formula” 
- Location: 
  - Multiplying Gift limit nằm trong Gift limit feature → Bật “Gift limit” feature lên thì sẽ hiện.
  - Multiplying formula nằm trong “Advance settings”. 
🎗️ Phân biệt - Lấy bối cảnh là campaign Buy X get Y: 

- Multiplying Gift limit:
- Ảnh bao gồm: 
  - 2 Trigger products: Quần xanh và áo nâu. 
  - 3 Offer products: X, Y, Z. 
- Với settings như ảnh - Coi 3 sản phẩm Gift là X, Y, Z. 
  - Mua 1 quần xanh → Được chọn 1 trong 3 XYZ. 
  - Mua 2 quần xanh → Được chọn 2 trong 3 XYZ. 
  - Mua 3 quần xanh → Được chọn cả 3 sp XYZ làm gift. 
  - Lưu ý thêm: 
→ Nếu mua từ 3 sp quần xanh trở lên ⇒ Customer vẫn chỉ nhận được maximum là 3 sản phẩm XYZ. Ko thể chọn 4 từ list 3 sản phẩm XYZ này. 
2/ Multiplying Formula:

- Settings tương tự như trên: 
  - Vẫn để “Gift Limit” = 1. 
  - Bật “Multiplying Formula”. 
- Với settings này: 
  - Mua 1 quần xanh → Được 1X hoặc 1Y hoặc 1Z. 
  - Mua 2 quần xanh → Được 2X hoặc 2Y hoặc 2Z. 
  - Mua 3 quần xanh → Được 3X hoặc 3Y hoặc 3Z. 
  - Mua 4 quần xanh → Được 4X hoặc 4Y hoặc 4Z. 
  - ….
> 

  - Tính năng “Multiplying Gift Limit” cho phép customer chọn 1X + 1Y + 1Z. 
  - Tính năng “Multiplying Formula” chỉ cho phép customer chọn 3X hoặc 3Y hoặc 3Z. 
> Vậy trong TH MC muốn vừa chọn được nhiều Gift, vừa được multiplying nhiều hơn số sản phẩm trong list Y thì làm sao? (hạn chế của Multiplying Gift limit). 

  - Bật Multiplying Gift Limit: 
  - Bật Gift Quantity Selector: 
  - Bật 2 features trên cùng 1 lúc → thì sẽ offer được nhiều Gift hơn số lượng sản phẩm trong list sản phẩm Y. Ví dụ như ảnh dưới, list sản phẩm Y chỉ có 2, tuy nhiên, mua 3 sản phẩm X, vẫn tùy chọn được 3 sản phẩm Y. 
✅ Tips & Tricks:

Request leader demo lại tính năng nếu không hiểu. 

Reference: https://trello.com/c/obOkUn1W


---

# MC muốn dùng Milestone bar để hiển thị processing nhưng ko muốn nó work 

⚠️ Problem/ Request:

  - MC (merchant) muốn dùng widget của milestone reward campaign để hiển thị processing nhưng lại không muốn app work.
  - Thay vào đó, MC sẽ dùng app khác hoặc discount của Shopify để offer gift/discount tương ứng với setting. 
➡️ Support flow:

  - CS vào dev_zone, bật 2 tính năng dưới đây cho MC: 
    - No apply code milestone reward.
    - Skip adding product tier milestone.
  - Khi bật lên, reward ở từng tier trong milestone reward sẽ không được áp dụng. Sử dụng khi MC chỉ muốn dùng reward bar với mục đích hiển thị. MC sẽ sử dụng phương thức khác để offer gift. 
  - Tuy nhiên, nếu tier có sản phẩm gift thì gift vẫn sẽ bị add vào cart và bị charge full giá. Nếu muốn sản phẩm gift ko bị add vào cart → bật tính năng ở dưới: Skip adding product tier milestone 
  - Khi bật, sản phẩm gift trong milestone reward sẽ không bị add vào cart nữa. 
  - Dùng chung với tính năng ở trên: No apply code milestone reward 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_f5ce75f8-609c-4e91-ad05-ca6335161677/


---

# Phân biệt campaign GWCA (Gift with cart value) và GWCV (Gift with collection value)

⚠️ Problem/ Request:

Phân biệt campaign GWCA (Gift with cart value) và GWCV (Gift with collection value). Nếu settings của chúng trong app như nhau

➡️ Support flow:

  Campaign GWCA với điều kiện như sau: 

  - Mua $200 + include trigger product là A → thì nhận được quà B. 
  - Case này có nghĩa là để nhận được quà B, customer bắt buộc phải thỏa mãn 2 điều kiện:
    - Điều kiện 1: Cart value = $200 (có thể đạt được cart value = 200 với nhiều sản phẩm, chứ không nhất thiết là chỉ mua sản phẩm A). 
    - Điều kiện 2: Trong cart phải có sự xuất hiện của sản phẩm A.
    → Thì campaign mới trigger và tặng quà B.

  Campaign GWCV với điều kiện như sau: 

  - Mua $200 ở TRONG collection “Top” → Customer sẽ nhận được quà C. 
  - Case này có nghĩa là, để nhận được quà C, customer bắt buộc phải thỏa mãn điều kiện: 
    - Điều kiện 1: Cart value phải đủ $200 trong phạm vi của tất cả các sản phẩm nằm trong collection “Top”. 
    - Điều kiện 2: Nếu customer chỉ mua $150 tiền sản phẩm trong collection “Top” và $50 tiền sản phẩm nằm ngoài collection này, thì customer đó chưa thỏa mãn điều kiện. 
🗒️ References:

  Contact CSL nếu chưa hiểu để được giải thích kỹ hơn. 

✅ Tips & Tricks:


---

# By pass rule nhưng vẫn nhận được gift

⚠️ Problem/ Request:

  - Order không đủ điều kiện để trigger nhưng vẫn nhận được gift. 
🎗️ Possible causes:

  - Khách checkout nhanh để bypass rule và nhận gift. 
➡️ Support flow:

  - CS vào dev_zone và bật 2 features để fix lỗi trên. 
    - Custom Checkout
    - Remove Gift On Checkout (for milestone campaign) 
  - Mục đích: disable nút checkout đi để hệ thống kiểm tra giỏ hàng, nếu không thỏa mãn thì xóa gift rồi mới cho active nút checkout. 
🗒️ References:

✅ Tips & Tricks:


---

# MC muốn customer tuỳ chọn gift với settings Multiplying

⚠️ Problem/ Request:

  - MC muốn dùng multiply formula hoặc multiply gift limit và shopper có thể chọn lựa các variant thoải mái trong pop-up hoặc floating button. 
  - Ví dụ: 2A - 1B - 1C/ hoặc 1A - 1B - 2C…
➡️ Support flow:

  - MC cần bật 2 features Multiply gift limit và Gift quantity selector cùng lúc.
  - Hệ thống chưa support bật cùng lúc Multiply formula và Gift quantity selector, nên MC cần chuyển sang dùng “Multiply gift limit” và “Gift quantity selector”.


---

# Failed to apply promotion 

⚠️ Problem/ Request:

  - Sau khi tạo campaign và test ở Shopify POS. Khi Staff/MC add gift vào cart thì báo lỗi “Failed to apply promotion” như ảnh dưới. 
🎗️ Possible causes:

  - Có 2 nguyên nhân chính: 
    - Lỗi do phía Shopify POS: CS báo MC ấn nút “Add to cart” vài lần. Hoặc thoát app ra và vào lại. 
    - Lỗi ở Products settings → Locations. 
➡️ Support flow:

  - CS xin quyền Products và Locations. 
  - CS bốc random 1 sản phẩm trong list offer product → Tìm sản phẩm đó trong Products từ Shopify Admin → Check setting Publishing xem “Point of Sale” đã được enable chưa. 
  - Sau khi update xong thì app sẽ work lại bình thường ở Shopify POS. 
🗒️ References:

✅ Tips & Tricks:


---

# Không add được app vào Shopify POS

⚠️ Problem/ Request:

  - Ở POS integration guide sẽ có phần yêu cầu MC add Title → chọn Apps option → add app “AOV.ai Free Gift” vào Homescreen. Nếu MC không tìm thấy app ở mục app list để add vào thì làm như thế nào?  
  - Case này thường sẽ lỗi nếu MC access vào Shopify POS từ tablet hoặc điện thoại. 
➡️ Support flow:

  - CS guide MC add trực tiếp từ trên máy tính của họ → Shopify Admin. 
  - Các steps cần follow: 
    - Mở app Point of Sale → Mở settings app → Ở General chọn POS apps → Mở AOV.ai Free Gift app → Chọn “Add”. 
  - Sau khi add app vào từ Shopify Admin, CS báo MC reload lại Shopify POS ở điện thoại hoặc tablet và check lại. Sau khi thành công, app sẽ hiển thị ở POS Home như ảnh: 
🗒️ References:

  https://help.aov.ai/advanced-settings/pos-integration

✅ Tips & Tricks:


---

# Free Gift billing

⚠️ Billing overview - How billing works:

  - App charges are based on the merchant's (MC) current Shopify plan.
  - Each billing cycle lasts 30 days, starting after the 7-day free trial. Example: trial activated on March 25 → billing starts April 1 → first cycle is April 1–30.
  - Monthly plans have a revenue threshold. If app-generated revenue exceeds this threshold, a usage fee applies: Total = Monthly price + Usage fee
  - Yearly plans on all tiers include unlimited revenue — no usage fees.
| Shopify Plan  | Monthly | Yearly | Revenue threshold | Unit Price (Usage fee) | Max cap |
| Free | $0 | $0 | $500 | - | - |
| Basic | $19.99 | $191.90 (save 20%) | Unlimited | - | - |
| Grow/Professional | $29.99 | $287.90 (save 20%) | Unlimited | - | - |
| Advanced | $49.99 | $479.90 (save 20%) | $10,000 | $10 / $1,000 over | $200 |
| Plus | $99.99 | $959.90 (save 20%) | $30,000 | $10 / $1,000 over | $300 |
🎗️ Usage fee example

  Scenario: Merchant on Shopify Advanced plan ($49.99/mo), app revenue this month = $20,000

  - Over threshold: $10,000 = $20k - $10k cap
  - Calculated fee: $249.99 = $49.99 + ($10 x 20)
  - Actual charge: $200 - Max cap applies
  The usage fee would be $249.99, but the Advanced plan has a $200 max cap — so the merchant is only charged $200 for that month.

🗒️ Refund policy for CS team:

  I/ When is a merchant eligible for a refund?

    1 - MC mới sử dụng app trong vòng 30 ngày đầu kể từ khi lên bản trả phí.

    2 - MC quá thời hạn 7 ngày trial mà không cancel (7 days < x < 30 days).

    3 - MC không hài lòng khi sử dụng app → cần escalate lên CSL.

  II/ Quy trình xử lý refund

    Step 1 — Clarify billing for MC

      - Giải thích rõ cho MC: chu kỳ charge, cách app tính phí, và lý do họ bị charge. Đảm bảo MC hiểu trước khi tiến hành forward case cho CSL. 
    Step 2 — Thu thập thông tin

      - Xin billing screenshot bao gồm:
      - Hỏi MC lý do cancel subscription và request refund.
    Step 3 — Tạo card & chờ duyệt

      - Tạo card Billing cho CSL, hẹn khách 2–3 working days, team billing sẽ check và phản hồi.
  III/ Nguyên tắc tuyệt đối

    > KHÔNG tự ý approve refund cho MC — dù ở bất kỳ case nào, kể cả case Urgent.

    > KHÔNG trả treo, nói lý nếu MC bực mình và đe dọa cho bad review.

    > Lưu ý: Refund chỉ được approve khi có xác nhận từ CSL — không có ngoại lệ.

  IV/ Case high-risk

    > Thu thập đầy đủ thông tin theo quy trình trên, sau đó escalate urgent cho CSL / BA / anh Huy. Giữ thái độ bình tĩnh và chuyên nghiệp với MC — không tranh cãi, không tự ý approve refund.


---

# Milestone hiển thị trong cart nhưng không apply discount ở checkout

⚠️ Problem/ Request:

  Trong cart vẫn có giảm giá nhưng khi đi đến bước trả tiền thì sản phẩm/quà tặng trở về giá đầy đủ và discount biến mất.

🎗️ Possible causes:

  Ấn checkout thì url có "discount=", bị thiếu thông tin discount

➡️ Support flow:

  Bật setting custom discount trong dev_zone

🗒️ References:

  https://www.notion.so/avadagroup/H-ng-d-n-s-d-ng-Dev_zone-1b6b0da449f1804284f6c7a7fcd8a6d6?source=copy_link

✅ Tips & Tricks:


---

# Add Milestone widget vào cart page

⚠️ Problem/ Request:

  - MC muốn display milestone widget trong cart page 
➡️ Support flow:

  - Hiện tại, nếu chỉ dùng tính năng “add block” hoặc “add section” trong theme, CS chỉ add được vào trang product page. 
  - Nếu muốn add vào Cart page, cần add bằng Feature Selector trong Dev_zone. 
  - CS hỏi vị trí MC muốn add trong cart page, và forward request cho TS add.


---

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


## User Guide (danh sách — đọc file cụ thể nếu cần)

- `user-guide/fg/getting-started.md` — Getting started
- `user-guide/fg/welcome.md` — Welcome
- `user-guide/fg/promotion-campaign.md` — Promotion campaign
- `user-guide/fg/buy-x-get-y.md` — Buy X Get Y
- `user-guide/fg/gift-with-cart-value.md` — Gift with Cart Value
- `user-guide/fg/gift-with-collection-value.md` — Gift with Collection Value
- `user-guide/fg/gift-with-quantity-purchase.md` — Gift with Quantity Purchase
- `user-guide/fg/milestone-rewards.md` — Milestone Rewards
- `user-guide/fg/milestone-rewards-1.md` — Milestone Rewards
- `user-guide/fg/checkout-upsell.md` — Checkout Upsell
- `user-guide/fg/checkout-progress-bar.md` — Checkout- Progress bar
- `user-guide/fg/order-goal.md` — Order Goal
- `user-guide/fg/how-to-set-up-order-goal-campaign.md` — How to set up Order Goal campaign
- `user-guide/fg/promote-order-goal-with-announcement-bar.md` — Promote Order Goal with Announcement Bar
- `user-guide/fg/shipping-goal.md` — Shipping Goal
- `user-guide/fg/widgets.md` — Widgets
- `user-guide/fg/set-up-gift-receiving-method.md` — Set up gift receiving method
- `user-guide/fg/floating-button.md` — Floating button
- `user-guide/fg/congrats-bar-auto-add-gift.md` — Congrats Bar - Auto add gift
- `user-guide/fg/pop-up.md` — Pop-up
- `user-guide/fg/promote-your-campaign.md` — Promote your campaign
- `user-guide/fg/promotion-bar.md` — Promotion bar
- `user-guide/fg/promotion-card.md` — Promotion Card
- `user-guide/fg/deal-of-the-day.md` — Deal of the Day
- `user-guide/fg/tiered-reward-box.md` — Tiered Reward Box
- `user-guide/fg/how-does-the-tiered-reward-box-help-boost-your-stores-aov.md` — How Does the Tiered Reward Box Help Boost Your Store's AOV?
- `user-guide/fg/deal-badge.md` — Deal Badge
- `user-guide/fg/milestone-bar.md` — Milestone bar
- `user-guide/fg/advanced-settings.md` — ADVANCED SETTINGS
- `user-guide/fg/subscription-integration.md` — Subscription integration
- `user-guide/fg/pos-integration.md` — POS integration
- `user-guide/fg/gift-limit.md` — Gift limit
- `user-guide/fg/multiply-gift.md` — Multiply gift
- `user-guide/fg/lowest-priced-gift.md` — Lowest priced gift
- `user-guide/fg/translation.md` — Translation
- `user-guide/fg/specific-link.md` — Specific Link
- `user-guide/fg/a-b-testing.md` — A/B testing
- `user-guide/fg/customer-segment.md` — Customer segment
- `user-guide/fg/customer-location.md` — Customer location
- `user-guide/fg/apply-code-to-get-gift.md` — Apply code to get gift
- `user-guide/fg/pop-up-hidden-time.md` — Pop-up hidden time
- `user-guide/fg/gift-quantity-selector.md` — Gift quantity selector
- `user-guide/fg/knowledge-hub.md` — Knowledge Hub
- `user-guide/fg/faqs.md` — FAQs
- `user-guide/fg/test-without-going-live.md` — Test without going live
- `user-guide/fg/understand-aov.md` — Understand AOV
- `user-guide/fg/privacy-policy.md` — Privacy Policy
- `user-guide/fg/combine-multiple-campaigns.md` — Combine multiple campaigns
- `user-guide/fg/gift-with-quantity-purchase-volume-discount.md` — Gift With Quantity Purchase + Volume Discount
- `user-guide/fg/gift-with-collection-value-volume-discount.md` — Gift with Collection Value + Volume Discount
- `user-guide/fg/gift-with-quantity-purchase-buy-x-get-y.md` — Gift with Quantity Purchase + Buy X Get Y
- `user-guide/fg/buy-x-get-y-volume-discount.md` — Buy X Get Y + Volume Discount
- `user-guide/fg/gift-with-cart-value-buy-x-get-y-bxgy.md` — Gift with Cart Value + Buy X Get Y (BXGY)
- `user-guide/fg/volume-discount.md` — Volume Discount
- `user-guide/fg/feature-updates-q3-q4-2025.md` — Feature updates: Q3/Q4 2025
- `user-guide/fg/affiliate-program.md` — Affiliate program
- `user-guide/fg/subscription-restrictions.md` — Subscription restrictions
- `user-guide/fg/pricing-info.md` — PRICING INFO
- `user-guide/fg/quota-usage-for-free-plan.md` — Quota usage for Free plan
- `user-guide/fg/definition-of-revenue-by-app.md` — Definition of Revenue by App
- `user-guide/fg/monthly-charge-calculation.md` — Monthly charge calculation
