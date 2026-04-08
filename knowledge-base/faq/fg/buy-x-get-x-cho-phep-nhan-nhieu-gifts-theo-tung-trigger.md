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
