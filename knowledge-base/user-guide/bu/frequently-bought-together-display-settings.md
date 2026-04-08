# Display settings

---
description: >-
  This section controls how the Frequently Bought Together (FBT) bundle looks
  and behaves on your storefront.
---

# Display settings

### How to set up&#x20;

#### Step 1: Display settings

{% embed url="https://app.canvid.com/share/fi_01K3NJC4KRC9VYKZFJ9KT5762D" %}

{% stepper %}
{% step %}
**Choose widget layout**

* **Horizontal** – products are shown in a row.
* **Vertical** – products are stacked in a column.

{% hint style="success" %}
Tip: Horizontal works well for desktop, vertical fits better on mobile.
{% endhint %}
{% endstep %}

{% step %}
**Edit content text**

* **Title**: the main headline above the widget. Example: “Frequently Bought Together.”
* **Description**: a short explanation under the title. Example: “Buy these items together and save 10%.”
* **Completed selection text**: message shown when all bundle items are selected. Example: “Bundle complete! Discount applied.”
* **Incomplete selection text**: message shown when some items are not selected. Example: “Select all to unlock your discount.”
* **Translation**:
  * Click the **Translation** button to add text in other languages.
  * Select the target language from the dropdown.
  * Enter translations for Title, Description, and both selection texts.
  * Use variables such as `{{value_discount}}` or `{{remaining_item}}` in translations to keep discount values and product counts dynamic.
  * Click **Add** to save the translation.
{% endstep %}

{% step %}
Set add-to-cart behavior

* Stay on current page: the customer remains on the product page after adding the bundle.
* Redirect to cart: the customer is taken to their shopping cart immediatel
{% endstep %}
{% endstepper %}

#### Step 2: Theme and content settings

To adjust the widget design and text, click **Edit widget** at the top of the Display settings section. Inside the editor, you can switch between two tabs: **Theme setting** and **Content setting**.

{% embed url="https://app.canvid.com/share/fi_01K3Q61WS1VRXPNCHTKKSM0ESG" %}

#### Theme setting

This tab lets you control the **visual style** of the Frequently Bought Together widget.

{% stepper %}
{% step %}
**Select layout widget**

* Horizontal or Vertical (already chosen earlier, but adjustable here).
{% endstep %}

{% step %}
**Themes**

* Choose a preset color theme from the swatches.
* If the widget colors do not match your Shopify theme, you will see a notice: _“Widget color doesn’t match your theme.”_
* Click **Sync theme color** (if available) to match automatically.
* If syncing is disabled due to a theme conflict, click **Check my theme** to request a quick review.
{% endstep %}

{% step %}
Styles – Background

* Enable **Gradient background** (optional).
* **Background color**: set the main widget background.
* **Text color on button**: set the text color for CTA buttons.
{% endstep %}

{% step %}
Styles – General

* **Header color**: color of the widget title (e.g., “BUY IT WITH”).
* **Background product selected**: background for products that are checked/selected.
* **Icon color**: color of icons (checkboxes, indicators).
{% endstep %}

{% step %}
Styles – Border color

* **Border product selected**: border color of selected products.
* **Divider color**: divider lines between products.
{% endstep %}

{% step %}
Styles – Gift

* **Icon, price color**: color of gift icons and pricing labels.
* **Background product**: background color for free gifts.
{% endstep %}
{% endstepper %}

#### Content setting&#x20;

This tab lets you control the **text and wording** inside the widget.

{% embed url="https://app.canvid.com/share/fi_01K3Q69S24QYMVAB91XB7JFW97" %}

{% stepper %}
{% step %}
**Widget text**

* “Total” label. Example: _Total for \{{total\_items\}} items_.
* “Confirm” button label. Example: _Confirm_.
* “Add to cart” button label. Example: _Add to cart_.
* “Item added to your cart” button label. Example: _Item added to your cart_.
* “Total for items” label. Example: _Total for \{{total\_items\}} items_.
* “You save” label. Example: _You save \{{discounted\_amount\}}_.
* “Gift” label. Example: _Gift_.

Variables such as `{{total_items}}` or `{{discounted_amount}}` update automatically with the customer’s cart details.
{% endstep %}

{% step %}
**Translations**

* Click **Translation** at the bottom of the Content setting tab.
* Select a language, enter translations for each text field, and keep variables intact.
* Example: German translation of “You save \{{discounted\_amount\}}” → _Sie sparen \{{discounted\_amount\}}_.
{% endstep %}
{% endstepper %}

#### Step 3: **Preview and save**

Look at the **live preview panel on the right** to see how the widget appears on desktop and mobile.

Make adjustments in Theme or Content tabs until the widget matches your store’s design and language.

When satisfied, click **Save** to apply your settings.

