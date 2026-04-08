# Gift with Quantity Purchase workflow 

⚠️ Problem/ Request:

  - Tình huống giả định - Combination discount đang được bật ở tất cả 3 campaigns. 
    - Mua 3 được quà A 
    - Mua 6 được quà B
    - Mua 9 được quà C 
  - Có 2 trường hợp xảy ra: 
    - Trường hợp 1: Nếu add 3 > quà A hiện > add tiếp 3 sp nữa > quà B hiện. Tổng có 6 sản phẩm trong cart và nhận được cả quà A và B. 
    - Trường hợp 2: Nhưng nếu add thẳng 6 vào cart > Chỉ quà B hiện > quà A sẽ bị skip. 
  - Trong trường hợp MC muốn khách nhận cả A và B nếu add như trường hợp 2 là add thẳng 6 thì làm như thế nào?
➡️ Support flow:

- CS vào dev_zone bật tính năng này để thay đổi flow của app. 
  - Tính năng: Has add multiply gift (QU)
🗒️ References:

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_2f3b4071-c470-4195-b33c-e7b85d264036/
