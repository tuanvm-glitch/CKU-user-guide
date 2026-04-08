# Display setting

---
description: >-
  Learn how to set up widget content for your Post-purchase upsell offer in
  AOV.ai Post Purchase.
---

# Display setting

This step ensures your offers look polished, persuasive, and customer-friendly, helping you maximize additional revenue right after checkout.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/UkvQwwdNW1Bm.webp" %}

### How to set up

#### Step 1: Customize Upsell #1 display

{% stepper %}
{% step %}
**Select a template**

* Choose from available layouts (e.g., _PPU – Split grid_).
* Use a layout that fits both product image and persuasive text.
{% endstep %}

{% step %}
**Add a header text**

* Keep it concise (max 60 characters).
* Example: _"Hold on! You're about to miss a fantastic deal from us."_
* Use **Add variable** to personalize with the customer's first name.
{% endstep %}

{% step %}
**Set display duration**

* Define how long the offer shows (recommended: 3–5 minutes).
* Shorter times create urgency; longer times give room for decision-making.
{% endstep %}

{% step %}
**Show remaining offer time** _(optional)_

* Contact AOV.ai support to enable a native-friendly timer.
* A timer adds urgency without conflicting with store themes.
{% endstep %}
{% endstepper %}

#### Step 2: Configure Upsell #2 display _(optional)_

Upsell #2 appears only if enabled.

Setup is the same as Upsell #1: select a template, add header text, and set a display duration.

#### Step 3. Configure Downsell display _(optional)_

A downsell appears if customers decline both Upsell #1 and Upsell #2.

Follow the same steps: Select a template, add concise header text (e.g., _"Wait—here's a smaller deal you'll love."_), set display duration (2–3 minutes recommended).

#### Step 4: Set Claim Confirmation

**Enable confirmation** to notify customers when their claimed offer is added to their order. This avoids confusion and improves trust.

Click **Add confirmation** and we will assist you with the set up.

#### Step 5: Preview your widget and save

* On the right-hand **Summary** panel, review the offer details.
* Select **Preview offer** to check exactly how it looks to customers.
* Once satisfying with the setting, hit Save button.

Widget content is the final step that makes your post-purchase upsell compelling and trustworthy. By configuring upsells, downsells, and clear confirmations, you create a seamless experience that not only boosts your revenue but also strengthens customer confidence in your store.

***

## Templates

Post-Purchase upsell offers three layout templates. Choose the one that best suits your product and brand style.

### Focus Offer (Split Grid)

A two-column layout with the product image on one side and offer details on the other. Best for highlighting a single product with a strong visual.

### Side-by-Side

Places the product image and offer text horizontally next to each other. Works well for products with clean imagery where both visuals and copy carry equal weight.

### Combo Stack (Vertical Stack)

Stacks elements vertically in a single column. Ideal for multi-product offers or when you want a compact, scrollable presentation.

***

## Core Widgets

Each offer is built from individual widgets that you can configure or reorder. Below is the full list of widgets available for Post-Purchase upsell.

### Header

Displays the main offer title at the top of the widget.

* **Text content**: Enter your headline. Recommended max 60 characters.
* **Variables**: Click **Add variable** to insert dynamic values into the text.

| Variable              | What it inserts                    |
| --------------------- | ---------------------------------- |
| `{{first_name}}`      | Customer's first name              |
| `{{last_name}}`       | Customer's last name               |
| `{{discount_value}}`  | Discount percentage (e.g., 20%)    |
| `{{discount_amount}}` | Discount in currency (e.g., $5.00) |
| `{{included_taxes}}`  | Tax amount included in the price   |

* **Text size**: Extra Small, Small, Base, Medium, Large, X-Large, Extra Large
* **Text color**: Base, Critical (red), Warning (yellow), Success (green), Accent (blue), Subdued (grey), Emphasized (bold)
* **Text style**: Normal, Bold, Italic
* **Text alignment**: Left, Center, Right

### Countdown Timer

Shows a live countdown to create urgency. When the timer expires, the offer closes.

* **Timer text**: Customize the label shown above the countdown. Default: "THIS OFFER IS AVAILABLE FOR"
* **Expiration time**: Set in minutes. Recommended 3–5 minutes for Post-Purchase upsell.
* The timer is visible to the customer and counts down in real time.

### Product Information

Displays the product image and key details pulled automatically from Shopify.

### Product Title

Shows the product name. You can adjust text size, color, style, and alignment using the standard text options.

### Product Description

Shows the product description below the product title.

* **Show / Hide**: Toggle whether the description appears at all.
* **Metafield override**: If you want to show a custom description specific to this upsell offer (instead of the default Shopify product description), set the metafield `aov_ppu.product_description` on the product.

### Price & Discount

Shows the original price crossed out alongside the discounted price.

* **Show exact discounted price**: When enabled, the widget calculates and displays the exact price after the discount is applied, rather than just the percentage.
* **Compare discount text**: Customize the label that appears next to the compare-at price (e.g., "You save", "Regular price").

### Star Rating

Displays a star rating below the product title to add social proof.

* **Show / Hide**: Toggle visibility.
* **Color options**: Yellow, Blue, Pink, Black
* **Size options**: Small, Medium

### Variant Picker

Lets customers select product variants (size, color, etc.) directly in the upsell widget.

* **Appearance**:
  * **Single dropdown**: All variant options combined into one dropdown selector.
  * **Multiple dropdowns**: Each variant option (e.g., Size, Color) shown as a separate dropdown.
* **Hide unavailable variants**: When enabled, variants that are out of stock or unavailable are hidden from the picker so customers only see what they can actually buy.

### Quantity Selector

Lets customers choose how many units to add.

* **Show / Hide**: Toggle visibility.
* **Minimum quantity**: Set the lowest quantity a customer can select (e.g., 2 for a bundle offer).

### Free Shipping Badge

Displays a "Free Shipping" badge on the offer to make it more attractive.

* **Show / Hide**: Toggle visibility.

### Note

An open text field where customers can leave a note with their upsell item (e.g., gift message, special instructions).

### Price Breakdown

Shows a detailed cost summary at the bottom of the offer before the customer accepts.

* **Show / Hide**: Toggle visibility.
* **Breakdown lines shown**:
  * Subtotal
  * Discount
  * Shipping
  * Taxes
  * Total

### Accept Button

The primary call-to-action button customers click to add the upsell to their order.

* **Button text options**:
  * ADD NOW
  * PAY NOW
  * BUY NOW
  * Take the deal
  * Get this deal
  * Add to order
  * Yes please
* **Button style**:
  * **Primary**: Filled button in your store's primary color. Highest visual emphasis.
  * **Secondary**: Outlined or muted button. Lower emphasis.

### Decline Button

The button customers click to skip the upsell and continue.

* **Button text options**:
  * Decline this offer
  * DECLINE
  * No thanks
  * Skip this offer
  * Not now
  * Maybe later
* **Button style**:
  * **Link**: Plain text link, minimal visual weight. Recommended to keep focus on the Accept button.
  * **Secondary**: More prominent outlined button.

### Per-Product Decline Button

For multi-product offers, each product card can have its own individual decline button instead of a single global decline.

* Useful when the customer might accept one product but decline another.

***

## Addable Content Sections

Beyond the core widgets, you can add supplementary content blocks to any offer. These are optional sections that appear in the widget body and help provide more context, social proof, or structured information.

### Rich Text

A freeform text block with a heading and body.

* **Heading**: Short section title.
* **Body**: Supports rich HTML formatting — bold, italic, lists, links.
* Use this for additional product details, promotional copy, or terms.

### Text & Image

A two-part block combining an image with accompanying text.

* **Layout**:
  * **Image left**: Image on the left, text on the right.
  * **Image right**: Text on the left, image on the right.
* Use this for lifestyle photography paired with benefit-focused copy.

### Callout Block Banner

A visually distinct highlighted banner for important information.

* **Background color options**:
  * **Blue** (Info): Neutral informational message.
  * **Green** (Success): Positive reinforcement, e.g., "Free shipping included."
  * **Yellow** (Warning): Soft alert, e.g., "Limited stock."
  * **Red** (Critical): Urgent message, e.g., "Only 2 left at this price."

### FAQ Section

A set of collapsible question-and-answer items.

* Add as many Q\&A pairs as needed.
* Each item is expandable by the customer.
* Use this to address common objections or questions before the accept/decline decision.

### Testimonial / Review Widget

Pulls real customer reviews from your review app and displays them inside the upsell widget.

* **Supported review apps**: Judge.me, Air Reviews
* **Review filter**:
  * 5 stars only
  * 4+ stars
  * All reviews
* **Sort order**: Recent, Highest rated
* **Layout**:
  * **Vertical**: Reviews stacked top to bottom.
  * **Horizontal**: Reviews displayed side by side or in a scrollable row.

***

## Design Options Reference

These formatting options are available on most text-based widgets (Header, Product Title, Product Description, Rich Text, etc.).

### Text Size

| Option      | Description                   |
| ----------- | ----------------------------- |
| Extra Small | Smallest available text size  |
| Small       | Slightly below body text size |
| Base        | Default body text size        |
| Medium      | Slightly above body text      |
| Large       | Prominent heading size        |
| X-Large     | Large display text            |
| Extra Large | Largest available text size   |

### Text Color

| Option     | Appearance                               |
| ---------- | ---------------------------------------- |
| Base       | Default text color (inherits theme)      |
| Critical   | Red — for urgency or warnings            |
| Warning    | Yellow — for caution or attention        |
| Success    | Green — for positive messages            |
| Accent     | Blue — for highlights or links           |
| Subdued    | Grey — for secondary or supporting text  |
| Emphasized | Bold weight applied to the current color |

### Text Style

| Option | Effect          |
| ------ | --------------- |
| Normal | Standard weight |
| Bold   | Heavy weight    |
| Italic | Slanted text    |

### Text Alignment

| Option | Effect                        |
| ------ | ----------------------------- |
| Left   | Aligns text to the left edge  |
| Center | Centers text horizontally     |
| Right  | Aligns text to the right edge |

### Background Colors (Section Blocks)

| Option               | Appearance                                  |
| -------------------- | ------------------------------------------- |
| Light grey (Subdued) | Subtle grey background to separate sections |
| Transparent          | No background, blends with the widget       |

