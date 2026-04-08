# Làm tròn giá trị của pricing trong Reward Bar

⚠️ Problem/ Request:

- Với trường hợp Reward bar tính giá trị còn lại để đạt tier tiếp theo thành số thập phân (Pricing), MC có mong muốn làm tròn giá trị này. Ví dụ:
  - You are $50.13 away from getting Free Gift
➡️ Support flow:

- CS vào dev_zone bật tính năng “Round reward bar left value to integer”. 
- MC reload app và check lại ở store front xem số đã được làm tròn chưa. Lúc này ví dụ bên trên sẽ hiển thị: 
  - You are $50.00 away from getting Free Gift
