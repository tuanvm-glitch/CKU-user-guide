# Issue Duplidated Gift trong cart drawer khi dùng reward bar

### ⚠️ Problem/ Request:


Khi Reward Bar được MC thiết lập từ 2 tier trở lên có Free Gift, và trigger condition thỏa mãn cả 2 gifts ở 2 tiers, thì theo logic của Shopify, khách hàng chỉ có thể nhận được 1 gift. Vì vậy, khi khách đạt đến tier free gift thứ 2, có thể xảy ra các vấn đề như: 

- Quà bị duplicate. 
- Quà không được thêm vào giỏ hàng.
- Quà được thêm vào nhưng lại bị tính phí.


---

### ➡️ Support flow:

- Đây là do Shopify rule, mình có 2 workarounds chứ không có cách fix:

1️⃣ Workaround 1: 
  - Tier gift 1 không đổi, tier gift 2 đổi setup thành gift 1+2, để khi add tới tier gift 2 thì sẽ nhảy thêm 2 gifts vào cart cho đủ. 
  - Nhưng còn 1 vấn đề là Shopify có thể đá nhầm gift 2 ra khỏi cart thay vì đá gift 1 (dẫn tới cart bị duplicate gift 1) ⇒ giải quyết hơi phức tạp là cần đổi giá gift 2 lên cao nhất để Shopify không đá nhầm gift 2 nữa, chỉ đá gift 1 ra khỏi cart thôi. 
  - Để tránh ảnh hưởng đến live store của MC thì chỉ cần duplicate product gift 2, set cái mới tạo ra giá cao nhất và set unlisted, set vào camp làm gift.
  
2️⃣ Workaround 2 - Recommended: 

  - Sử dụng app AOV.ai Free Gift bên mình và sử dụng milestone feature để thay Reward bar trong app CD. 

---

### 🗒️ References:

https://avadaio.slack.com/archives/C083YAETLEP/p1765841594279869

https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_96e14188-50b3-464a-acec-4bbb6ddb7692/

> CS Trainee đọc đến FAQ này có thể tự test lại ở store mình với Workaround 2 (skip Workaround 1 - sau khi join chat gặp phải case tương tự mà khách không chịu cài app FG thì check lại FAQ và hướng dẫn MC).
