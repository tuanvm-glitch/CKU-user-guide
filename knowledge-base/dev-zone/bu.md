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
