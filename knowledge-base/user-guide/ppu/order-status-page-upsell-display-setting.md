# Display setting

---
description: >-
  Customize how your Order Status Page Upsell looks so your upsell feels
  on-brand and compelling.
---

# Display setting

{% embed url="https://d2798l25hiaz3h.cloudfront.net/KDbzC62rIoqr.webp" %}

### How to set up

#### Step 1: Add app block placement

{% stepper %}
{% step %}
Click **Add app block**.

* You need to add the **AOV Order Status Page Upsell** app block in your Shopify Theme Editor.
* This defines where the upsell widget will display on the Order Status Page.
{% endstep %}

{% step %}
Open your **Theme Settings** page in Shopify.
{% endstep %}

{% step %}
Select your preferred placement for the OSP upsell block.
{% endstep %}

{% step %}
Save your theme changes.
{% endstep %}
{% endstepper %}

#### Step 2: Set up upsell details

{% stepper %}
{% step %}
Edit header text

* Enter a custom header that appears above the upsell.
* Example: _"You may also like"_ or _"Complete your order with these"_.
* Optional: Use **Add variable** to insert dynamic values.
{% endstep %}

{% step %}
Set display duration

* Define how long the upsell offer should remain visible.
* Enter the number of minutes in **Display duration**.
* Example: _5 minutes_.
{% endstep %}

{% step %}
Add urgency with countdown (optional)

* Toggle **Show remaining offer time** to enable a countdown timer.
* Customize the message that appears with the timer.
* Example: _"This offer is available for the next few minutes."_
{% endstep %}

{% step %}
Highlight with Free Shipping badge (optional)

* Toggle **Free shipping** if you want the upsell product to show a Free Shipping badge.
* This helps customers feel more incentivized to accept the offer.
{% endstep %}

{% step %}
Enable scrollable layout (optional)

* Toggle **Scrollable product layout** if you have more than 3 products.
* Customers can scroll horizontally to view all offers without cluttering the page.
{% endstep %}

{% step %}
Save your settings

* Review your widget preview on the right side of the screen.
* Click **Save** to apply changes.
{% endstep %}
{% endstepper %}

You've now completed **Widget content setup.** By customizing the layout, text, timers, and badges, your upsell can look and feel perfectly aligned with your brand.

***

## Templates

Order Status Page upsell offers two layout templates.

### Split Grid

A two-column layout with the product image on one side and offer text and actions on the other. Best for single-product upsells where visual and persuasive copy share equal emphasis.

### Vertical Stack

Stacks all elements — image, title, price, buttons — in a single column from top to bottom. Clean and compact. Recommended for a simple, focused presentation or when fitting into a narrower page section.

***

## Core Widgets

### Header

Displays the main offer headline at the top of the widget.

* **Text content**: Enter your headline. Recommended max 60 characters.
* **Variables**: Click **Add variable** to insert dynamic values.

| Variable         | What it inserts       |
| ---------------- | --------------------- |
| `{{first_name}}` | Customer's first name |
| `{{last_name}}`  | Customer's last name  |

* **Text size**: Extra small, Small, Base, Medium, Large, Extra large
* **Text color**: Base, Critical, Warning, Success, Accent, Subdued, Emphasized
* **Text style**: Normal, Bold, Italic
* **Text alignment**: Left, Center, Right

### Countdown Timer

Shows a live countdown to drive urgency. The offer closes when the timer expires.

* **Timer text**: Customize the label shown above the countdown. Default: "THIS OFFER IS AVAILABLE FOR"
* **Expiration time**: Set in minutes. Recommended 5 minutes for Order Status Page upsell.

### Product Information

Displays the product image and key details pulled automatically from Shopify.

### Product Title

Shows the product name with full text formatting options (size, color, style, alignment).

### Product Description

Shows the product's description text.

* **Show / Hide**: Toggle visibility.
* **Metafield override**: Set `aov_ppu.product_description` on the product in Shopify to show a custom description for this upsell, rather than the default product description.

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
  * **Single dropdown**: All variant options combined into one selector.
  * **Multiple dropdowns**: Separate dropdowns for each option (e.g., Size and Color as two dropdowns).
* **Hide unavailable variants**: Hides out-of-stock or unavailable variants so customers only see purchasable options.

### Quantity Selector

Allows customers to select a quantity.

* **Show / Hide**: Toggle visibility.
* **Minimum quantity**: Set the lowest quantity the customer can enter.

### Free Shipping Badge

Displays a "Free Shipping" badge on the product card to make the offer more attractive.

* **Show / Hide**: Toggle visibility.
* This widget corresponds to the **Free shipping** toggle in the setup steps above.

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
* **Button style**: Link (plain text, minimal visual weight), Secondary (more prominent)

### Per-Product Decline Button

For multi-product offers, adds a separate decline button on each product card. Allows customers to accept some products and decline others individually.

***

## Scrollable Product Layout

When you have more than 3 products in your offer, enable the **Scrollable product layout** toggle. This allows customers to scroll horizontally through the product cards without the page becoming cluttered or requiring vertical scrolling to see all offers. Recommended for any offer containing 4 or more products.

***

## Addable Content Sections

These optional content blocks can be added to any offer to provide extra context, social proof, or structured information alongside the core widgets.

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

