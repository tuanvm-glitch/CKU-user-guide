# Shopify Discount Combinations — Kiến thức nền tảng

## 3 loại Discount trên Shopify

| Loại | Áp dụng cho | Ví dụ |
|------|-------------|-------|
| **Product discount** | Sản phẩm/collection cụ thể | Giảm 20% cho áo, BXGY, Free Gift (100% off) |
| **Order discount** | Tổng đơn hàng (subtotal) | Giảm 15% toàn đơn, giảm $10 cho đơn >$100 |
| **Shipping discount** | Phí vận chuyển | Free shipping cho đơn >$50 |

## Quy tắc combine (QUAN TRỌNG)

### Cùng loại → KHÔNG combine được
- **Product + Product (cùng sản phẩm)** → CHỈ 1 cái apply (best discount wins)
- **Shipping + Shipping** → CHỈ 1 cái apply

### Khác loại → CÓ THỂ combine
- **Product + Order** → OK (nếu cả 2 discount bật "Combination")
- **Product + Shipping** → OK
- **Order + Shipping** → OK
- **Order + Order** → OK (store phải dùng Checkout Extensibility, không dùng checkout.liquid)

### Cả 2 discount PHẢI bật Combination
Discount KHÔNG tự động combine. Phải vào Settings của **mỗi** discount → bật "Combines with" cho loại tương ứng.

## Thứ tự áp dụng

1. **Product discounts** áp dụng TRƯỚC → giảm giá từng sản phẩm
2. **Order discounts** áp dụng SAU → tính trên subtotal đã giảm
3. **Shipping discounts** áp dụng CUỐI

## Cách tính khi stack nhiều discount (COMPOUND — QUAN TRỌNG)

**Nguyên tắc:** Discount stack theo kiểu **nối tiếp (compound)**, KHÔNG PHẢI cộng dồn (additive).

Mỗi discount tính trên **giá đã giảm** của discount trước đó, KHÔNG tính trên giá gốc.

**Công thức:**
```
Giá cuối = Giá gốc × (1 - %discount1) × (1 - %discount2)
```

**Ví dụ: Sản phẩm RON 69, mua 3, có Subscription 15% + Volume 20%**

Bước 1: Subscription 15% trước → 69 × 0.85 = 58.65/sản phẩm
Bước 2: Nhân số lượng → 58.65 × 3 = 175.95
Bước 3: Volume 20% trên tổng → 175.95 × 0.80 = 140.76 ✅

Khách tưởng: 15% + 20% = 35% → 207 × 65% = 134.55 ❌

**Tại sao không phải 35%?**
Sale 15% rồi sale thêm 20% ≠ sale 35%. Mỗi lần giảm tính trên số tiền CÒN LẠI, không phải giá gốc. Thực tế giảm ~32%, không phải 35%.

**ĐÂY LÀ INTENDED BEHAVIOR, KHÔNG PHẢI LỖI.** Đây là cách Shopify (và hầu hết ecommerce platform) xử lý discount stacking. Không cần escalate dev.

## Giới hạn

- Tối đa **25 automatic discounts** active (bao gồm discount từ app)
- Tối đa **5 product/order discount codes** mỗi đơn
- Tối đa **1 shipping discount code** mỗi đơn

---

## Các case thường gặp với AOV.AI apps

### Case 1: Free Gift + Product Discount Code (HAY GẶP NHẤT)

**Tình huống:** Merchant dùng Free Gift app (FG) + có discount code giảm giá sản phẩm (ví dụ: EASTER15 giảm 15%).

**Vấn đề:** Free gift bị charge full giá, không free nữa.

**Nguyên nhân:** Free Gift app tạo **product discount** (100% off cho gift). Discount code 15% cũng là **product discount**. Cùng loại → Shopify chỉ apply 1 cái. Nếu discount code tạo sau → nó "đè" luôn discount free gift → gift bị charge full giá.

**Cách xử lý:**
1. Kiểm tra setting **Combination** trong campaign Free Gift → bật combine với product discount
2. Nếu đã bật mà vẫn không work → do cùng loại (product discount), Shopify chỉ apply 1 cái thôi

**Workaround:** Merchant nên đổi discount code từ **Product discount** sang **Order discount** (giảm 15% cho tổng đơn). Khác loại → có thể combine với free gift discount.

### Case 2: Volume Savings + Store Product Discount

**Tình huống:** Store dùng Volume Savings (CKU) + có product discount khác cho cùng sản phẩm.

**Vấn đề:** Volume Savings tạo **product discount** (automatic). Nếu store cũng có product discount code cho cùng sản phẩm → cùng loại + cùng sản phẩm → best discount wins.

**Cách xử lý:** Giải thích cho merchant rằng đây là giới hạn của Shopify. Nếu cần cả 2 → đổi 1 trong 2 sang Order discount.

### Case 3: Checkout Upsell + Existing Discounts

**Tình huống:** Upsell offer thêm sản phẩm vào cart khi đã có discount code active.

**Lưu ý:** Sản phẩm upsell có thể bị ảnh hưởng bởi discount code nếu discount áp dụng cho toàn store hoặc collection chứa sản phẩm upsell.

### Case 4: Buy X Get Y + Product Discount Code

**Tình huống:** Store có BXGY promotion + khách nhập product discount code.

**Vấn đề:** Sản phẩm trong BXGY **không eligible** cho product discount khác. Nếu khách nhập product discount code cho sản phẩm BXGY → BXGY bị REMOVE, chỉ code apply.

**Cách xử lý:** Giải thích cho merchant đây là logic Shopify. Workaround: dùng Order discount thay Product discount.
