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
