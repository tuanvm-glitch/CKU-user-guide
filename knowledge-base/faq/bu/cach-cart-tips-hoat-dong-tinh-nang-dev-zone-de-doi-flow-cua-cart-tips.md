# Cách Cart Tips hoạt động: Tính năng dev_zone để đổi flow của Cart Tips

⚠️ Problem/ Request:

  - Hiện tại, cart tips chỉ đang work với “default option” feature trong campaign Volume discount.
  - Ví dụ: 
    - Settings campaign như ảnh, Default đang được set ở Tier 2. 
      - Tier 1: Product quantity = 1 → Được discount $5
      - Tier 2: Product quantity = 2 → Được discount $10
      - Tier 3: Product quantity = 3 → Được tặng 1 sản phẩm Free
    - Trong trường hợp khách hàng add Tier 1 → Cart tips hiện và thông báo → Add 1 more to save …%.
    - Tuy nhiên, nếu add Tier 2 → Cart tips sẽ KHÔNG hiển thị → Add one more để đạt Tier 3 nữa. Mà chỉ dừng hoạt động ở Tier được set là default. 
  - MC request: 
    - MC muốn add bất kỳ số lượng nào vào cart thì Cart Tips đều hiện báo “Add more to save discount” của next tier, cho đến last tier. 
➡️ Support flow:

  - CS vào Dev_zone bật tính năng “Show cart tip until last option” → app sẽ work như MC request. 
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_9975bb2c-c7b2-49ba-9821-fb307cdf5d03/
