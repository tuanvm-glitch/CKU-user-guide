# MC muốn offer discount cho khách hàng mua lần đầu 

⚠️ Problem/ Request:

  - MC muốn offer discount 20% cho những khách hàng mua lần đầu.
➡️ Support flow:

  - Step 1: Ở Shopify Admin → Customers → Segment, Shopify đã tạo sẵn 1 segment cho những KH chưa có order nào.
  - Step 2: Tạo campaign “Order Goal” trong app. Set minimum = $1 (mức thấp nhất), discount = 20% và customer eligibility = Customers who haven't purchased.
🗒️ References:

https://app.crisp.chat/website/72a663b0-4cda-4e3b-8878-426bdd79364c/inbox/session_02388885-f2df-45a9-8fc9-07c9694f3f45/

✅ Tips & Tricks:

  - Với workflow này, customer buộc phải log in member account thì app mới trigger được.
  - Nếu campaign không work, có thể tạo một campaign mới với trigger tương tự để test lại (do nếu campaign này được tạo từ lâu về trước, campaign sẽ bị dính trigger cũ trước khi update app → cần tạo campaign mới để test lại trước khi báo TS).
