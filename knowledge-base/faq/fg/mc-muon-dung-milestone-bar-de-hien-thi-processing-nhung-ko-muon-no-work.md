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
