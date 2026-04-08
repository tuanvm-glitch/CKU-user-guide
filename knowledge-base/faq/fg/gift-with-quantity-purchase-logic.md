# Gift with Quantity Purchase logic 

⚠️ Problem/ Request:

- Đặt vấn đề: Với setting như trên, add 3 sản phẩm vào cart thì sản phẩm rẻ nhất được free. 
  - Quantity: 3
  - Apply for: All products 
  - Customer gets: Gift with the lowest price 
- Câu hỏi của MC: Vậy mua nhiều hơn 3 (mua 4, 5, 6,…) thì app có detect sản phẩm rẻ nhất và offer nó Free không? 
➡️ Support flow:

- Với setting như trên, mua nhiều hơn 3 thì app sẽ load 1 lúc và detect lại sản phẩm rẻ nhất như bình thường → Vẫn Work. 
- Hiểu đơn giản, setting quantity ở campaign này sẽ có nghĩa là lớn hơn hoặc bằng 3.
- Với setting này thì mua ít hơn 3, cụ thể là 2 → thì app sẽ ko work.
