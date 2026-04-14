# PO — Quick Reference

## App Overview

AOV.ai Pre-Order — Bán pre-order trên Shopify store. Customers đặt hàng trước khi sản phẩm available, merchant quản lý payment và delivery.

**Trang chính trong app:**
- **Dashboard**: Setup Guide + Campaign List + Help Center
- **Preorders** (Campaign List): Quản lý tất cả campaigns — tạo, sửa, pause, delete, bulk actions
- **Reports** (Orders & Reports): Xem orders, revenue, payment status, collect remaining balance

## Key Features

### Campaign Settings (Step 1)
- **Campaign name**: internal label, customer không thấy
- **Pre-order trigger**: "Out of stock" (chỉ khi hết hàng) hoặc "Always" (luôn luôn) — KHÔNG đổi được khi campaign active
- **Continue Selling**: Automatic (app tự bật/tắt) hoặc Manual (tự quản lý trong Shopify Admin)
- **Products**: chọn products qua Shopify picker — nếu product nằm trong nhiều campaign, campaign MỚI NHẤT ưu tiên
- **Campaign total limit**: giới hạn tổng số pre-orders cho campaign
- **Delivery type**: Exact date, Date range, Relative period, Relative interval, Custom text

### Payment Settings (Step 2)
- **Full payment**: charge toàn bộ khi checkout
- **Partial payment (Deposit)**: charge deposit trước, thu remaining balance sau
  - Deposit type: Percentage hoặc Fixed amount
  - Remaining balance schedule: On a specific date hoặc Days after checkout
- **Order tags**: tự động gắn tags cho Shopify orders

### Display Settings (Step 3)
- **Button text**: thay thế "Add to Cart" (default: "Pre-Order Now")
- **Button colors**: background + text color
- **Pre-Order Badge**: hiển thị trên product cards trong collection — badge text + colors
- **Delivery message**: template với `{{delivery_date}}`, `{{product_title}}`
- **Payment message**: template với `{{deposit_amount}}`, `{{remaining_amount}}`, `{{charge_date}}`
- **Cart message**: label + message với variables

### Orders & Reports
- **Summary metrics**: Total Orders, Total Revenue, Pending Payment, Fulfilled
- **Filter**: All, Paid, Pending Payment, Failed, Fulfilled
- **Export CSV**: chọn orders → Export
- **Sync from Shopify**: pull latest order updates manually
- **Collect Payment**: bulk collect remaining balance cho Partial payment orders
  - Auto send invoice nếu charge fail
  - Results: Collected / Invoices sent / Failed / Skipped

## Common Troubleshooting

### Pre-order button không hiển thị
→ Kiểm tra:
1. App embed đã bật chưa? **Online Store > Themes > Customize > App embeds > AOV.ai Pre-Order**
2. Campaign đang Active chưa?
3. Trigger = "Out of stock" nhưng product còn hàng → button chỉ hiện khi hết hàng
4. Manual mode + chưa bật "Continue selling when out of stock" → customer thấy "Sold out" thay vì "Pre-Order"

### Product nằm trong nhiều campaign
→ Campaign tạo SAU (mới nhất) sẽ ưu tiên hiển thị trên storefront

### Trigger không đổi được
→ Pre-order trigger KHÔNG thể thay đổi khi campaign Active. Cần Pause campaign hoặc Duplicate sang campaign mới.

### Partial payment — collect remaining balance
→ Vào Reports > chọn orders Pending Payment > Click "Collect payments" > Confirm
→ Nếu charge fail, auto gửi invoice email cho customer (nếu toggle bật)

## Variables Reference

| Variable | Dùng ở đâu | Mô tả |
|---|---|---|
| `{{delivery_date}}` | Delivery msg, Cart msg | Ngày giao hàng từ Step 1 |
| `{{product_title}}` | Delivery msg | Tên sản phẩm |
| `{{deposit_amount}}` | Payment msg, Cart msg | Số tiền deposit |
| `{{remaining_amount}}` | Payment msg | Số tiền còn lại |
| `{{charge_date}}` | Payment msg | Ngày thu remaining balance |

## Payment Status

| Status | Nghĩa |
|---|---|
| Paid | Đã thanh toán đủ |
| Partially paid | Đã trả deposit, còn nợ remaining |
| Processing | Đang xử lý |
| Failed | Thanh toán thất bại |
| Collected | Đã thu remaining balance |

## User Guide
📚 Nguồn chi tiết: `knowledge-base/user-guide/po/`
