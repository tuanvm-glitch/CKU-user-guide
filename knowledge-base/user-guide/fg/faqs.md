# FAQs

# FAQs

<details>

<summary>Pop-up does not show even after meeting conditions</summary>

**Possible causes & solutions:**

* **Case 1:**\
  The campaign is not activated / app embeds are not enabled / the campaign widget is not added to the theme.\
  Solution: Go to **Shopify Admin > Online Store > App embeds** and enable the app. Also ensure the campaign widget is added to your theme.
*   **Case 2:**\
    The campaign has special conditions that prevent it from triggering:

    * Discount set with **Specific link** only
    * Discount usage limit reached (set up with “Limit number of times this discount can be used in total”)
    * Campaign limited by **Customer segment**
    * Campaign is outside of its **Schedule**

    Solution: Double-check your campaign settings to ensure conditions are met.
* **Case 3:**\
  Conflict with another app offering similar features.\
  Solution: Disable the other app or contact CS team for assistance.
* **Case 4:**\
  Theme incompatibility.\
  Solution: Contact CS team for support with theme integration.

</details>

<details>

<summary>Page reloads automatically when adding gift to cart</summary>

This usually happens when the store theme is not integrated properly with the app. Please contact CS team for assistance.

</details>

<details>

<summary>Gift adding speed is too slow</summary>

**Solution:**

* Reach out to CS team for support.
* Our system will check and optimize processing speed for your store.

</details>

<details>

<summary>Activated Milestone campaign and added progress bar block but it does not display</summary>

Some older Shopify themes do not support this block. Please contact CS team for integration support.

</details>

<details>

<summary>When multiple campaigns of the same type are enabled with “All combination,” why does the customer only receive the higher-value gift and not the lower-value ones?</summary>

**Explanation:**\
When a customer reaches a higher threshold (e.g., spending more or meeting a larger condition), the system prioritizes the **higher-value gift**. By default, lower-value gifts from the same campaign type are skipped once the higher tier is unlocked.

**Solution**: If you want customers to receive both lower and higher-value gifts, please contact the Customer Support team to enable a configuration update for your store.

</details>

<details>

<summary>I don't not want gift checkbox to be checked automatically on pop-up</summary>

Contact CS team to update configuration so the gift option will not be pre-checked.

</details>

<details>

<summary>I do not want product info in widget to redirect to product page</summary>

Contact CS team to disable the redirect link from the widget.

</details>

<details>

<summary>I do not want customers to change the gift quantity on the cart page or cart drawer</summary>

**Explanation:**\
By default, free gifts are added to the cart like regular products, which means customers may be able to increase or decrease their quantity. Some merchants prefer to lock the gift quantity so it cannot be changed by the customer.

**Solution:**\
Go to **App Settings** and enable:\
👉 **“Disable increase/decrease item quantity in cart”**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FajoDMN0PO3GfvZk1WNzj%2Fimage.png?alt=media&#x26;token=bbd8d7bd-87fa-4e4b-919f-985e6d840d2e" alt=""><figcaption></figcaption></figure>

This will prevent customers from adjusting the gift quantity in the cart page or cart drawer.

</details>

<details>

<summary>I want to set up a discount with value = 0</summary>

**Explanation:**\
By default, the system does not allow merchants to configure a discount with value **0** (zero). This is a safeguard to prevent misconfiguration or unintended pricing errors.

**Solution:**\
If you need to set up a discount at **0**, please contact the **Customer Support team**.\
👉 Our team can update the system settings for your store to enable this configuration.

</details>

<details>

<summary>Why does the app calculate campaign conditions based on the original product price instead of the discounted price?</summary>

**Explanation:**\
Currently, the system calculates campaign eligibility using the **original product price**, not the discounted price.\
For example:

* A product has an original price of $45.
* Campaign setting: _Spend $45 to receive a free gift_.
* Customer adds the product to cart → with a discount applied, the product price is reduced to $30.
* The app still considers the original price ($45) and offers the free gift.

**Solution**:

* Default behavior: Campaign conditions are calculated based on the original price.
* If you want campaign conditions to be calculated based on the discounted price, please contact Customer Support.\
  👉 Our team can update the system for your store to support this logic.

</details>

<details>

<summary>I want to hide the congrats bar</summary>

**Explanation:**\
The congrats bar is shown by default when a campaign is active, displaying a progress message to the customer. Some merchants may prefer to hide it for a cleaner storefront experience.

**Solution:**

1. Go to **Edit campaign** you want to adjust.
2. Navigate to **Display settings**.
3. Uncheck the option **“Enable congrats bar.”**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FRCQURb32gdFfkSeY3i88%2Fimage.png?alt=media&#x26;token=58b299fd-cc12-4bd2-9c7c-d02686c6becf" alt=""><figcaption></figcaption></figure>

This will remove the congrats bar from the storefront.

</details>

<details>

<summary>Can your app work well with all Shopify themes?</summary>

**Yes**, our app is compatible with all Shopify themes.\
\
However, some specific themes may require a page reload after adding a gift.\
This is due to the theme's logic, which necessitates reloading the page to refresh the cart.\
\
We are actively working on improving our integration with these themes to resolve this issue."

</details>

<details>

<summary>How does the combination logic work when a product is part of multiple campaign types?</summary>

If a product is eligible for multiple campaign types simultaneously, the app follows a priority logic to determine which campaign's gift is applied first. The priority order is as follows:

1. Buy X Get Y
2. Gift With Collection Value
3. Gift With Cart Value
4. Gift With Quantity Purchase

</details>

<details>

<summary>How does your app handle multiple campaigns applied to the cart at the same time?</summary>

By default, only one campaign can be applied at a time to prevent loss for the merchant.\
\
For example:\
\- Adding a t-shirt triggers a BXGY campaign, resulting in a free hat.\
\- Adding $500 triggers a Gift With Cart Value (GWCA) campaign, resulting in free pants.

If a customer adds a t-shirt first, they receive a free hat. If they adjust their cart to reach $500, the hat will be removed and replaced with free pants.<br>

However, we offer the option to allow customers to receive gifts from multiple campaigns by enabling the product discount option in the campaign settings.

![](https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2Fox1kLAjmm6KM0Ho2jIze%2FScreenshot%202024-08-06%20at%2010.34.44.png?alt=media\&token=562da039-f399-4a5d-8334-8719d022222b)\
\
Here’s how it works:

* **Case 1:** If both BXGY and GWCA enable product discount combinations, the customer can receive both the free hat and free pants.
* **Case 2:** If any campaign does not enable product discount combinations, it works as the default logic.<br>

</details>

<details>

<summary>Can your app combine with Shopify discount codes?</summary>

**Yes.** You have the flexibility to decide which campaigns can be combined with Shopify discouns. By default, all promotion campaigns cannot be combined with Shopify discounts.\
\
To allow combinations, simply select the option for discount combination in the campaign settings.

<img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2Frg6gldFnWXVfbkaSs5Nx%2FScreenshot%202024-08-06%20at%2010.02.46.png?alt=media&#x26;token=bc809fd6-e4ad-4b4b-a3aa-c05d9e3e5093" alt="" data-size="original">\
\
You can choose to combine product, order, and shipping discounts.\
\
The combination logic follows the same rules as Shopify discounts. For more information, visit: [Shopify Discount Combinations](https://help.shopify.com/en/manual/discounts/combining-discounts/discount-combinations).

</details>

<details>

<summary>Can I offer different gifts for different cart values?</summary>

**Yes.** You can create multiple Gift With Cart Value campaigns:\
For example:\
\- **Campaign 1:** Spend $100 to get a free sock\
\- **Campaign 2:** Spend $300 to get a free hat\
\- **Campaign 3:** Spend $500 to get a free shirt\
\
Note: Customers can only receive one gift based on the highest cart value to prevent loss for the merchant.

</details>

<details>

<summary>Can I create a "free gift for every order" or "free gift with any purchase"?</summary>

**Yes.** Simply create a Gift With Cart Value campaign and set the minimum cart value to $1 to offer a free gift with any purchase.

</details>

<details>

<summary>What is the difference between a Gift With Quantity Purchase and a Buy X Get Y campaign?</summary>

Both campaign strategies involve rewarding customers based on their purchases, but they operate on a different logic.

**Buy X Get Y:**

* Works with **OR** logic.
* For example, if you have a shirt collection with red, blue, and yellow shirts, and you create a BXGY campaign where customers can buy 3 items from the collection to get a gift, the offer will apply if the customer buys 3 red shirts, **OR** 3 blue shirts, **OR** 3 yellow shirts.

**Gift With Quantity Purchase (GWQU):**

* Works with **AND** logic.
* Using the same shirt collection (red, blue, and yellow), if you create a GWQU campaign when the customer buys 3 items from the collection, the offer will apply if the customer buys a total of 3 items from the collection, regardless of the color combination (e.g., 1 red **AND** 1 blue **AND** 1 yellow shirt)

</details>

<details>

<summary>Does your app support multiple languages?</summary>

Yes, the app supports 13 languages: English, Chinese (Simplified), Chinese (Traditional), Hindi, French, German, Italian, Dutch, Spanish, Turkish, Polish, Portuguese (Brazil), and Portuguese (Portugal)

</details>

