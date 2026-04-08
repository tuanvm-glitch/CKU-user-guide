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
