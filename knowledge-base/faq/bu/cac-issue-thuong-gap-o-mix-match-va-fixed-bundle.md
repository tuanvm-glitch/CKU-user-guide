# Các issue thường gặp ở Mix-match và Fixed bundle

### ⚠️ Problem/ Request:

- Mix-match Bundle: 
  - Add vào cart giá = 0đ thì cần query selector của button ATC → sẽ hiển thị được giá của sản phẩm mix-match ở trong cart (Forward cho TS nếu thấy giá sản phẩm Bundle hiện thị = 0đ). 
  - Khi add sản phẩm mix match mà hiển thị thông báo error → lý do là MC sửa sản phẩm con (Child product trong Bundle đó) và sản phẩm mix-match → lưu lại offer mix-match là hoạt động được
- Fixed bundle:
  - Không hiển thị widget, lý do MC sửa sản phẩm fixed bundle đó thành sản phẩm khác → giải pháp là tạo lại offer fixed bundle cho MC
- Lưu ý: đối với offer Fixed và mix-match thì CS thông báo với MC là không update sản phẩm con và sản phẩm offer để tránh xảy ra lỗi. 
### ✅ Tips & Tricks:

- Contact Lâm nếu có câu hỏi liên quan đến Bundle. 
- Case study: https://avadagroupcom.slack.com/archives/C083YAETLEP/p1756196558795389
