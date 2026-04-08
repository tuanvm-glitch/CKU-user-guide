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
