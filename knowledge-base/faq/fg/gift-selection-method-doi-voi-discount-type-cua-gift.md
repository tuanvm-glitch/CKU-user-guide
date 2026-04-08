# Gift selection method đối với discount type của gift

⚠️ Problem/ Request: 

  - Bình thường, có các sự lựa chọn cho Gift selection method như là pop-up, floating button, automatic. Tuy nhiên, khi đổi discount type sang các dạng khác, ko để là “FREE” thì phần Gift selection method ko có mục automatically add
🎗️ Possible causes: 

  - Vì Shopify ko cho phép các app tự động add sản phẩm có giá vào cart, nó ko có consent của người mua.
  - App must display full costs and obtain explicit buyer consent before adding optional paid items to Storefront, Cart, or Checkout. This applies to both the app’s default features and any merchant customization options the app provides. 
  - Tuy nhiên, có nhiều MC đã request tính năng tự động add sản phẩm Y vào cart kể cả sản phẩm đó chỉ được discount 1 số % nhất định. 
  - CS vào dev_zone, bật tính năng “Show congrats bar with percent or fixed discount” để app work như MC muốn. 
🗒️ References: https://app.crisp.chat/website/af3eac71-f176-46a3-9ec4-37cff9ad09c3/inbox/session_706bb166-e718-409e-b6cc-98f79a181ca4/
