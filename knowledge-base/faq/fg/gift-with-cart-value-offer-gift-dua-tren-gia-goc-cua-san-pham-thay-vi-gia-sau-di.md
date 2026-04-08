# Gift with cart value offer gift dựa trên giá gốc của sản phẩm thay vì giá sau discount.

⚠️ Problem/ Request:

  - Hiện tại, campaign này sẽ tính cart value dựa trên giá gốc của sản phẩm. Không tính giá sau khi sản phẩm đó đã được áp discount. 
🎗️ Possible causes:

  Ví dụ: 

  - Sản phẩm có giá là 45$. Campaign setting là: mua 45$ thì sẽ được free gift.
  - Customer add sản phẩm này vào cart. Sản phẩm này được giảm giá còn $30, nhưng app vẫn tính theo giá gốc là $45 và offer gift cho customer. 
➡️ Support flow:

  - Vào dev_zone bật tính năng: Final price.
  - Sau khi bật feature, hệ thống sẽ check lại subtotal sau khi áp dụng discount từ app bên thứ ba → customer không nhận được Free gift bởi vì giá sau giảm là $30 (không thỏa mãn điều kiện tối thiểu $45 mới được nhận gift).
