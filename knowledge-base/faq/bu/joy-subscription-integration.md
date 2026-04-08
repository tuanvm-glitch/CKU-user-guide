# Joy subscription integration

⚠️ Problem/ Request:

  - Khi integrate Volume discount với app Avada Joy Subscription, thì discount của 2 app sẽ hoạt động chung với nhau như thế nào? 
🎗️ Bối cảnh: 

  - Product A có giá = $50
  - App AOV.ai Bundle - Volume discount campaign - Trigger product là A: 
    - Tier 1: Buy 1 giảm 20% 
    - Tier 2: Buy 2 giảm 25%
    - Tier 3: Buy 4 giảm 30% 
  - App Avada Joy Subscription - Trigger product là A: 
    - One-time purchase: Không discount 
    - Subscription purchase: 
      - Frequently: once a week → discount 10%
      - Frequently: Every 2 months → discount 5%
➡️ Support flow:

  - Customer buys Tier 2 + Frequently: once a week → discount 10% thì họ sẽ được giảm bao nhiêu tiền? 
  - Công thức tính như sau: 
    - 1 - Discount subscription work trước: Giảm 10% của 50$ = $45
    - 2 - Discount của volume work sau = (Giá sau discount của subscription * quantity chọn ở volume) * discount của volume = 45 * 2 * 25% = $22.5
    - 3 - Tổng trước discount: $50 × 2 = $100 → Subscription giảm: $5 × 2 = $10 → còn $90 → Volume giảm: $90 × 25% = $22.5 → KH trả: $90 - $22.5 = $67.5
🗒️ References:

  - Mỗi lần giảm tính trên số tiền còn lại, không phải giá gốc.
✅ Tips & Tricks:
