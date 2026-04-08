# Checkout- Progress bar

# Checkout- Progress bar

Show a progress bar at checkout to motivate customers to spend more. Once they reach a defined threshold, they unlock **free shipping**.

* Unlocks free shipping at checkout when conditions are met
* Only available to Shopify Plus merchants
* Only supports free shipping

***

### **1. Where to find it in the app**

* Go to **Campaign list → Create new campaign**
* Click **Create** under **Checkout – Progress Bar**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FgpCTic1yVBsUUnRLSgoL%2FDesktop%20-%20One%20page%20-%20Loading%20(1).png?alt=media&#x26;token=9ad08420-2915-404d-a637-5b1e5a5bf7f0" alt=""><figcaption></figcaption></figure>

***

### **2. How to set up in Admin**

*   **Step 1: Start a new campaign**

    Click **Create campaign**, choose **Checkout – Progress Bar**

    <figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FncLXACEbwTNqKKPKJZmL%2FContent%20(2).png?alt=media&#x26;token=9dbec394-9516-4af8-9564-27e6d3081396" alt=""><figcaption></figcaption></figure>
*   **Step 2: Set condition**

    Choose either:

    * **Total Cart Value**
    * **Product Quantity**

    Input threshold (e.g., $100 or 3 items)

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FdAW2kLhaYYIwSGP6FzXF%2Fcu.png?alt=media&#x26;token=d62ddc94-3c54-4467-a462-ac4343152f23" alt=""><figcaption></figcaption></figure>

*   **Step 3: Save campaign**

    → Click to **Save**

    Make sure saving campaign before you go to next step "Add block to theme". Because once you save campaign successfully, the checkout block would appear on Shopify theme settings for you to add
*   **Step 4: Add Checkout block to theme (Required\*)**

    To use this feature, adding block to your theme is quired,

    * Click **Add to theme** in campaign settings
    * Click **"+" button of block "AOV Free Shipping Bar"** and choose **Add to Checkout**
    * **Save** on your theme

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FTBzNtZVTMrpsFKhKSrFO%2F%E1%BA%A2nh%20ch%E1%BB%A5p%20m%C3%A0n%20h%C3%ACnh%202025-06-19%20092512.png?alt=media&#x26;token=2a324a0b-fbf2-42c4-9af6-e6ac464a4e65" alt=""><figcaption></figcaption></figure>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FkrUvxUO8ZyUbCWvIwlGL%2Fimage.png?alt=media&#x26;token=d56cb7d4-e021-4243-a6e6-afa884b36ef4" alt=""><figcaption></figcaption></figure>

*   **Step 5: Customize progress bar content**

    Set messages:

    * _Before milestone:_\
      \&#xNAN;_“You’re \{{item\_left\}} items away from getting FREE SHIPPING”_
    * _After milestone:_\
      \&#xNAN;_“🎉 Congratulations! You’ve unlocked FREE SHIPPING”_

    <figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FnlJSiFidiwS5m0NMZgJw%2FCard.png?alt=media&#x26;token=5146ba75-0a85-422e-9782-b64b435c12e0" alt=""><figcaption></figcaption></figure>
*   **Step 6: Enable quantity editing (optional)**

    If you want customer can increase/decrease the quantity off items on checkout, Click checbox **Allow editing product quantity**\
    <br>

    <figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FIp9DxJSf2E4kYitG1dRN%2Forder%20summary%20column%20(2).png?alt=media&#x26;token=a21ae412-af72-4f28-bc75-b5e7c68dcf5e" alt=""><figcaption></figcaption></figure>

***

### **5. How it works on Storefront**

> How it looks and behaves for your customers.

*   **Step 1: Progress bar shows at checkout**

    Progress bar appears automatically\
    Real-time updates as shopper adds items

    <figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FfvvdSoYs7e5S4ojNvUkD%2Fimage.png?alt=media&#x26;token=b53e0502-dfa8-412e-9a27-6511c40953e8" alt=""><figcaption></figcaption></figure>
*   **Step 2: Free shipping unlocked**

    When customer reaches the milestone, a success message appears\
    Shopify applies **free shipping** automatically

    <figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FUoe1BWTZ1uGrtq5NQ3JW%2Fimage.png?alt=media&#x26;token=875c3097-46e1-49ca-9949-efb95bc63363" alt=""><figcaption></figcaption></figure>
*   **Step 3: Cart drops below threshold**

    → If the customer removes products and no longer qualifies:

    * Free shipping is **removed automatically**
    * Progress bar returns to previous state

***

### **6. FAQs & Troubleshooting**

**Q1. Why isn’t the progress bar showing on the checkout page?**

* Ensure you're on a **Shopify Plus** plan
* Make sure the **AOV Checkout Block** has been added in theme customization

**Q2. Can I offer a gift product or discount instead of free shipping?**

* No, this feature currently supports **free shipping**

**Q3. Why can’t shoppers edit item quantities in checkout?**

* You must add the **‘AOV Edit Product Quantity’** block in the checkout theme

**Q4. Why don't I can see the AOV block to add to Shopify theme settings**

* You must save campaign successfully to see and add AOV block to theme

***

### **7. Need help?**

* **Live chat support**: Click the chat icon inside the app
* **Email**: support@avada.io\
  Response time: within 24 hours on business days

