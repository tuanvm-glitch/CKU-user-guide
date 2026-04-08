# Các trường hợp xảy ra khi tạo nhiều campaign Gift With Cart Value (GWCA) với các mốc threshold khác nhau thì app sẽ work như thế nào? 

⚠️ Problem/ Request:

  - Trong TH MC set 2 campaign GWCA với 2 mốc threshold khác nhau thì app sẽ work như thế nào? 
  - Thread này sẽ giải đáp cả 2 trường hợp: bật combination và không bật combination.
🎗️Tình huống giả định: 

  - Campaign 1: Mua 100$ để nhận quà A.
  - Campaign 2: Mua 200$ để nhận quà B. 
➡️ Support flow:

  Trường hợp 1: Không bật combination.

  - Nếu add đủ 100$ → nhận quà A, và tiếp tục tăng cart value lên 200$ thì pop up quà B sẽ hiện. Nếu customer chọn add quà B vào cart thì quà A sẽ tự động bị remove. 
  - Tương tự, nếu ngược lại: add đủ 200$ vào cart → nhận quà B, sau đó reduce cart value xuống còn 100$ thì quà B sẽ giữ nguyên và bị charge full giá. Đồng thời, quà A sẽ pop up để customer add to cart. 
  Trường hợp 2: Bật combination.

  - Nếu add đủ 100$ vô cart trước → sẽ hiện pop up quà A → add quà A vào cart. Sau đó, nếu tăng cart value lên 200$, quà B sẽ pop up tiếp → add tiếp quà B vào cart. Customer sẽ nhận được cả 2 gifts.
  > 

    - Tuy nhiên, nếu ngay từ đầu add sản phẩm vào cart mà đạt 200$ luôn thì chỉ quà B hiện và quà A sẽ bị skip (Vì nó chỉ ăn gift gần nhất). 
      - CS vào dev_zone bật feature “Stackable gifts for CA or CO” → ăn hết toàn bộ gift thay vì chỉ ăn gift gần nhất. 
      - Có nghĩa là nếu add trực tiếp 200$ vào cart → Customer sẽ nhận luôn cả Gift A và Gift B cùng lúc. 
🗒️ References:

Dev-zone guide link: Hướng dẫn sử dụng Dev_zone 

✅ Tips & Tricks:
