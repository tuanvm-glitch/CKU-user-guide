# Display setting

---
description: >-
  Set up Widget Content that defines how your upsell looks and behaves on the
  Thank You Page.
---

# Display setting

The final step in creating a Thank You Page upsell is customizing the widget content. This is what your customers will actually see — the text, style, and display settings. A well-set widget makes your offer more attractive and easier to accept.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/3i9pi3FKKXqO.webp" %}

### How to set up

#### Step 1: Add app block placement

{% stepper %}
{% step %}
Click **Add app block**.

* You need to add the **AOV Thank You Page Upsell** app block in your Shopify Theme Editor.
* This defines where the upsell widget will display on the Order Status Page.
{% endstep %}

{% step %}
Open your **Theme Settings** page in Shopify.
{% endstep %}

{% step %}
Select your preferred placement for the TYP upsell block.
{% endstep %}

{% step %}
Save your theme changes.
{% endstep %}
{% endstepper %}

#### Step 2: Set up upsell details

{% stepper %}
{% step %}
Header text

* Enter a short, attention-grabbing message.
* Example: "🔥 You may also like" or "🎁 \{{discount\_value\}} OFF on your next order."
{% endstep %}

{% step %}
Use **Add variable** to insert dynamic values like discounts.

* `{{discount_value}}` automatically pulls the discount value you set in Step 2.
{% endstep %}

{% step %}
Add a subtitle (optional)

* Enter supporting text to explain the offer.
* Example: "Copy and enter the code at checkout" for a coupon, or "Complete your look with these picks" for product upsells.
{% endstep %}

{% step %}
Set display duration

* Choose how long the upsell should stay visible.
* Default is **5 minutes**.
* Shorter durations (2–3 minutes) create urgency. Longer durations (5–10 minutes) allow more consideration.
{% endstep %}

{% step %}
Show remaining offer time (optional)

* Contact support to enable a **native countdown timer**.
* This adds a clear urgency effect without clashing with your theme.
{% endstep %}

{% step %}
Preview your widget and save

* On the right-hand **Summary** panel, review the offer details.
* Select **Preview offer** to check exactly how it looks to customers.
* Once satisfying with the setting, hit Save button.
{% endstep %}
{% endstepper %}

That's it. Now, your Thank You Page displays a polished upsell widget with clear messaging. Customers immediately understand the offer and have limited time to act, making them more likely to accept.

***

## Templates

Thank You Page upsell offers three layout templates. Choose the one that fits your offer type and visual style.

### Split Grid

A two-column layout with the product image on one side and offer text and actions on the other. Works well for single-product upsells where the visual and the call-to-action share equal emphasis.

### Vertical Stack

Stacks all elements — image, title, price, and buttons — in a single column from top to bottom. Clean and compact. Recommended when screen width is limited or you want a straightforward, focused presentation.

### Offer Coupon

A specialized template for coupon-based offers. Instead of a product upsell, this template presents a discount code that the customer can copy and use on their next order. Displays a coupon code block with dedicated coupon widgets (Coupon Title, Coupon Subtitle, Coupon Accept Button).

***

## Core Widgets

### Header

Displays the main offer headline at the top of the widget.

* **Text content**: Enter your headline. Recommended max 60 characters.
* **Variables**: Click **Add variable** to insert dynamic values.

| Variable              | What it inserts                    |
| --------------------- | ---------------------------------- |
| `{{first_name}}`      | Customer's first name              |
| `{{last_name}}`       | Customer's last name               |
| `{{discount_value}}`  | Discount percentage (e.g., 20%)    |
| `{{discount_amount}}` | Discount in currency (e.g., $5.00) |
| `{{included_taxes}}`  | Tax amount included in the price   |

* **Text size**: Extra Small, Small, Base, Medium, Large, X-Large, Extra Large
* **Text color**: Base, Critical, Warning, Success, Accent, Subdued, Emphasized
* **Text style**: Normal, Bold, Italic
* **Text alignment**: Left, Center, Right

### Countdown Timer

Shows a live countdown to drive urgency. The offer closes when the timer expires.

* **Timer text**: Customize the label shown above the countdown. Default: "THIS OFFER IS AVAILABLE FOR"
* **Expiration time**: Set in minutes. Recommended 5 minutes for Thank You Page upsell.

### Product Information

Displays the product image and key details pulled automatically from Shopify.

### Product Title

Shows the product name with full text formatting options (size, color, style, alignment).

### Product Description

Shows the product's description text.

* **Show / Hide**: Toggle visibility.
* **Metafield override**: Set `aov_ppu.product_description` on the product in Shopify to show a custom description specific to this upsell, rather than the default product description.

### Price & Discount

Shows the original price crossed out next to the discounted offer price.

* **Show exact discounted price**: Toggle on to display the final calculated price instead of just the discount percentage.
* **Compare discount text**: Customize the label next to the compare-at price (e.g., "You save", "Regular price").

### Star Rating

Adds a star rating display for social proof.

* **Show / Hide**: Toggle visibility.
* **Color options**: Yellow, Blue, Pink, Black
* **Size options**: Small, Medium

### Variant Picker

Lets customers choose product variants inside the widget.

* **Appearance**:
  * **Single dropdown**: All variant options in one combined selector.
  * **Multiple dropdowns**: Separate dropdowns for each option (e.g., Size and Color as two dropdowns).
* **Hide unavailable variants**: Hides out-of-stock or unavailable variants so customers only see purchasable options.

### Quantity Selector

Allows customers to select a quantity.

* **Show / Hide**: Toggle visibility.
* **Minimum quantity**: Set the lowest quantity the customer can enter.

### Free Shipping Badge

Displays a "Free Shipping" badge on the product to make the offer more attractive.

* **Show / Hide**: Toggle visibility.

### Note

A text input for customers to leave a note with their order item (e.g., gift message or instructions).

### Price Breakdown

Shows an itemized cost summary before the customer accepts.

* **Show / Hide**: Toggle visibility.
* **Breakdown lines**: Subtotal, Discount, Shipping, Taxes, Total

### Accept Button

The primary action button to add the upsell to the order.

* **Button text options**:
  * ADD NOW
  * PAY NOW
  * BUY NOW
  * Take the deal
  * Get this deal
  * Add to order
  * Yes please
* **Button style**: Primary (filled), Secondary (outlined)

### Decline Button

The button to skip the offer.

* **Button text options**:
  * Decline this offer
  * DECLINE
  * No thanks
  * Skip this offer
  * Not now
  * Maybe later
* **Button style**: Link (plain text, minimal weight), Secondary (more prominent)

### Per-Product Decline Button

For multi-product offers, adds a separate decline button on each product card. Allows customers to accept some products and decline others individually.

***

## Coupon-Specific Widgets

These widgets are only available when using the **Offer Coupon** template. They replace the standard product widgets and are purpose-built for discount code delivery.

### Coupon Title

The main headline displayed above the coupon code block.

* Example: "Here's your exclusive discount code"
* Supports full text formatting options (size, color, style, alignment).

### Coupon Subtitle

Supporting text shown below the coupon title to provide additional context.

* Example: "Copy and enter the code at checkout to save on your next purchase"
* Supports full text formatting options.

### Coupon Accept Button

The call-to-action button for the coupon offer. When clicked, it copies the discount code to the customer's clipboard.

* **Button text options**:
  * Copy discount code
  * Apply discount now
  * Get my discount
  * Claim offer
  * Redeem code
  * Use discount

***

## Addable Content Sections

These optional content blocks can be added to any offer to provide extra context, social proof, or structured information. They appear in the widget body alongside the core widgets.

### Rich Text

A freeform block with a heading and a rich HTML body.

* **Heading**: Short section title.
* **Body**: Supports bold, italic, bullet lists, numbered lists, and links.
* Use for additional product details, promotional copy, or terms.

### Text & Image

Combines an image and text side by side.

* **Layout**:
  * **Image left**: Image on the left, text on the right.
  * **Image right**: Text on the left, image on the right.
* Use for lifestyle photos paired with benefit-focused copy.

### Callout Block Banner

A visually distinct highlighted banner for key messages.

* **Background color options**:
  * **Blue** (Info): Neutral informational message.
  * **Green** (Success): Positive reinforcement, e.g., "Free shipping included."
  * **Yellow** (Warning): Soft alert, e.g., "Limited stock available."
  * **Red** (Critical): Urgent message, e.g., "Only 2 left at this price."

### FAQ Section

A set of collapsible question-and-answer items.

* Add as many Q\&A pairs as needed.
* Each item expands when clicked.
* Use to address common customer objections before the decision point.

### Testimonial / Review Widget

Pulls real customer reviews from your connected review app and shows them in the widget.

* **Supported review apps**: Judge.me, Air Reviews
* **Review filter**: 5 stars only, 4+ stars, All reviews
* **Sort order**: Recent, Highest rated
* **Layout**: Vertical (stacked), Horizontal (side-by-side or scrollable)

***

## Design Options Reference

These formatting options are available on most text-based widgets.

### Text Size

| Option      | Description              |
| ----------- | ------------------------ |
| Extra Small | Smallest available size  |
| Small       | Slightly below body text |
| Base        | Default body text size   |
| Medium      | Slightly above body text |
| Large       | Prominent heading size   |
| X-Large     | Large display text       |
| Extra Large | Largest available size   |

### Text Color

| Option     | Appearance                          |
| ---------- | ----------------------------------- |
| Base       | Default color (inherits theme)      |
| Critical   | Red — urgency or warnings           |
| Warning    | Yellow — caution or attention       |
| Success    | Green — positive messages           |
| Accent     | Blue — highlights or links          |
| Subdued    | Grey — secondary or supporting text |
| Emphasized | Bold weight on the current color    |

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

