# Multiply gift

---
description: >-
  The Multiply feature allows customers to receive additional gifts when they
  buy or spend more than the base condition.
---

# Multiply gift

Instead of receiving only one gift, the system multiplies the reward based on the quantity purchased or the total cart value.

This motivates customers to add more items or increase their spending in order to unlock more gifts.

### Applicable Campaign Types

* **BXGY (Buy X Get Y)**
* **Gift with cart value**

***

### BXGY Campaigns (Multiply Formula)

When enabled, the system multiplies the number of gifts (Y) based on the number of trigger products (X) in the cart.

**Example:**

* Campaign rule: Buy 2, get 1 free.
* With Multiply enabled:
  * Buy 2 → Get 1 gift
  * Buy 4 → Get 2 gifts
  * Buy 6 → Get 3 gifts

Formula:\
**Gift Quantity = (Trigger Quantity ÷ Base Requirement) × Gift Offer**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FbIvK3wIQCa6ZPmZ5Nvt5%2Fimage.png?alt=media&#x26;token=56369267-4702-4ecf-8888-acf02cc90ec1" alt=""><figcaption></figcaption></figure>

***

### Gift with Cart Value Campaigns (Multiply Gift)

When enabled, the system multiplies the number of gifts based on how much the customer spends.

**Example:**

* Campaign rule: Spend $100 → Get 1 gift.
* With Multiply enabled:
  * Spend $100 → Get 1 gift
  * Spend $200 → Get 2 gifts
  * Spend $300 → Get 3 gifts

Formula:\
**Gift Quantity = (Cart Value ÷ Base Threshold) × Gift Offer**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FGmcIeneEnCfOBoOdv8yc%2Fimage.png?alt=media&#x26;token=bafdf022-5e1a-4b41-853f-fe6b678216f4" alt=""><figcaption></figcaption></figure>

***

### Setup Instructions

1. Create or edit a campaign (**BXGY** or **Gift with cart value**).
2. Scroll to **Advanced settings**.
3. Toggle on **Multiply formula** (for BXGY) or **Multiply gift** (for cart value).
4. Save and activate the campaign.

***

### Customer Experience

* Customers see that the more they buy or spend, the more gifts they qualify for.
* Gifts are automatically calculated and added to the cart based on campaign rules.
* Example: A customer spending $250 in a “Spend $100 → Get 1 gift” campaign will receive **2 gifts** automatically.

