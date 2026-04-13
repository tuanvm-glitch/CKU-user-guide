# Checkout Upsell — How to Set Up

Increase your average order value by showing relevant product recommendations at checkout. Buyers see upsell offers and can add items to their order with one click — no page reload needed.

{% hint style="warning" %}
**Shopify Plus required.** Checkout Upsell uses Checkout UI Extensions, which require a Shopify Plus plan.
{% endhint %}

---

## What it does

Checkout Upsell displays a product recommendation block on your checkout page. You control:

- **Which buyers** see the offer (trigger conditions)
- **Which products** appear (manual selection or AI-powered recommendations)
- **Discounts** per product (percentage, fixed amount, or none)
- **Priority** when multiple offers match the same buyer

The block appears inline in your checkout layout. Buyers can browse products, select variants, adjust quantity, and add to their order — all without leaving checkout.

---

## Before you start: Add the app block

Before creating any offer, you must add the AOV.AI block to your checkout theme. This is a one-time setup.

### Step 1: Open the Theme Editor

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Edit theme"** (or **"Customize"**) on your active theme
3. In the Theme Editor, select the **"Checkout and customer accounts"** page from the page picker dropdown (top center)

This opens the checkout layout where you can add and arrange app blocks.

### Step 2: Add the AOV.AI block

1. In the left sidebar under **Main**, click **"Add block"**
2. In the block picker, scroll to the **AOV.ai Checkout Upsell** section
3. Click **"AOV Checkout upsell"**

The block appears in the sidebar under **Main** and in the checkout preview:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/PHpJ1ICX4ITt.webp" %}

You can drag it to reposition — common placements:

| Location | Description |
|----------|-------------|
| **Main column (left)** | Inline between checkout sections — maximum visibility |
| **Order summary sidebar (right)** | Alongside order summary — less intrusive |

Click **Save** in the Theme Editor to confirm.

{% hint style="info" %}
You only need to do this once. After the block is added, all your offers will display through it automatically.
{% endhint %}

---

## Step 1: Go to Offers

In the app sidebar, click **Offers** to see all your upsell offers.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/mKMTIOJobijJ.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Tabs** | Filter by status: All, Active, Scheduled, Expired |
| **Search** | Find offers by name |
| **Sort** | By Priority (asc/desc) or Date Created (oldest/newest) |
| **Actions** | Analytics, Edit, Delete for each offer |

---

## Step 2: Choose offer type

1. Click **Create offer** (top right)
2. Select **Checkout Upsell**
3. Click **Select**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/cwhG1K6rqSqW.webp" %}

---

## Step 3: Configure trigger conditions

The editor opens with two columns:
- **Left** — Step 1 (Triggers), Step 2 (Products), Step 3 (Advanced Settings)
- **Right** — Offer name, Status, App block status, Live preview

{% embed url="https://d2798l25hiaz3h.cloudfront.net/bdUww1NvD0oJ.webp" %}

### Expand Step 1 and choose a mode

Click the **Step 1** header to expand. Two options:

| Mode | Behavior |
|------|----------|
| **No condition** | Offer **always** shows to all buyers |
| **Set conditions** | Offer only shows when **all** conditions are satisfied (AND logic) |

### Set conditions

When you select **Set conditions**, a condition builder appears. You can add up to **4 conditions** (each type used only once). Click **"+ Add 'AND' condition"** to add rows.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/mBNcsqIRqLR9.webp" %}

### Available condition types

#### 1. Included Product

| Setting | Details |
|---------|---------|
| **UI** | Dropdown → click **Browse** to open product picker |
| **Logic** | Offer shows when buyer's cart **contains** any of the selected products |
| **Use case** | Show accessories when buyer has a specific main product |

#### 2. Excluded Product

| Setting | Details |
|---------|---------|
| **UI** | Dropdown → click **Browse** to open product picker |
| **Logic** | Offer shows when buyer's cart does **NOT** contain any of the selected products |
| **Use case** | Hide upsell when buyer already has the upsell product |

#### 3. Total Cart Value

| Setting | Details |
|---------|---------|
| **UI** | Operator dropdown (Greater than / Less than) + value field |
| **Logic** | Compares cart subtotal against the threshold |
| **Use case** | Only show premium upsells when cart value is above $100 |

#### 4. Customer Tag

| Setting | Details |
|---------|---------|
| **UI** | Operator dropdown (Has tag / Does not have tag) + tag field |
| **Logic** | Checks buyer's Shopify customer tags |
| **Use case** | Show VIP-only offers to tagged customers |

{% hint style="info" %}
All conditions use **AND logic** — every condition must be true for the offer to show. For example: "Cart contains Product A" AND "Cart value > $50" means both must be satisfied.
{% endhint %}

---

## Step 4: Add products and discounts

Click the **Step 2** header to expand the product section.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/tfUXlxWxsYww.webp" %}

### Add products

Click **Add product** to choose a source:

| Source | Description |
|--------|-------------|
| **AI Smart Pick** | AI recommends products based on buyer's cart. Default discount: 10%. |
| **Select Product** | Opens Shopify product picker — choose specific products and variants manually. |

After adding, products appear as draggable cards. Drag the handle (⋮⋮) to reorder.

### Statistics row

Above the product list, real-time performance data:

| Stat | Description |
|------|-------------|
| **Views** | Times the offer was displayed at checkout |
| **Orders** | Times a buyer added an upsell product |
| **Revenue** | Total revenue from upsell additions |
| **Conversion** | Orders ÷ Views as a percentage |

### Product card elements

Each product card shows:

| Element | Description |
|---------|-------------|
| **Drag handle** (⋮⋮) | Reorder products by dragging |
| **Product image + name** | The product being offered |
| **Variant count** | "1/1 variants" or "36/36 variants" — how many variants are included |
| **Discount badge** | Shows "10%" or "$5" — the discount for this product |
| **Edit icon** (pencil) | Opens product settings modal |
| **Delete icon** (trash) | Removes product from offer |

### Per-product settings

Click the **edit icon** (pencil) on any product card to open the settings modal:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/DOs5vJnrxiIL.webp" %}

#### Discount section

| Setting | Options | Default |
|---------|---------|---------|
| **Discount type** | Percentage / Fixed amount / No discount | No discount |
| **Discount value** | Number field (visible when type selected) | — |

{% hint style="info" %}
Discounts are applied at checkout as automatic line-item discounts. They appear in the order summary alongside any other discounts.
{% endhint %}

#### Display section

| Setting | Default | Description |
|---------|---------|-------------|
| **Custom product title** | (empty) | Override the product name shown at checkout. Leave empty to use original. |
| **Show variant picker** | On | Show a dropdown for variant selection. Turn off to show default variant only. |

#### Variant selection

| Setting | Description |
|---------|-------------|
| **Include / Exclude variants** | Choose which variants of this product to show at checkout. By default all are included. |

---

## Step 5: Customize style and settings

Click the **Step 3** header to expand. Two tabs: **Style** and **Settings**.

### Style tab

{% embed url="https://d2798l25hiaz3h.cloudfront.net/0e8NlfpqOfDe.webp" %}

#### Content section

| Setting | Type | Default |
|---------|------|---------|
| **Title** | Text field | "You may also like" |
| **Description** | Text field | "Recommended for you" |

#### Style section

| Setting | Default | Description |
|---------|---------|-------------|
| **Show border** | On | Adds a visible border around the upsell block |

#### Product section

| Setting | Default | Description |
|---------|---------|-------------|
| **Show quantity selector** | On | Adds +/- quantity stepper to each product card |
| **Button color** | (theme color) | Follows your Shopify checkout branding. Change in theme settings. |

{% hint style="info" %}
Button color follows your Shopify checkout branding — it cannot be changed from within the app. To change it: go to **Online Store → Themes → Edit theme → Checkout and customer accounts**, click the **Settings** icon (⚙️) in the top-left toolbar, scroll down to the **Color** section, and change the **Buttons** color.
{% endhint %}

### Settings tab

{% embed url="https://d2798l25hiaz3h.cloudfront.net/5r5Pqk9L2ogG.webp" %}

The Settings tab contains offer behavior and scheduling options.

#### Offer settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Hide items already in the order** | Off | Products already in the buyer's cart won't appear in the upsell block. The block still shows if other products remain. |

#### Discount combinations

Controls whether upsell discounts can stack with other discount types:

| Combination | Default | Description |
|-------------|---------|-------------|
| **Product discounts** | On | Allow upsell discount to combine with product-level discounts |
| **Order discounts** | On | Allow upsell discount to combine with order-level discounts |
| **Shipping discounts** | On | Allow upsell discount to combine with free shipping discounts |

{% hint style="warning" %}
If a combination is **off** and the buyer has that discount type applied, the upsell discount will **not** apply — the product is still added but at full price.
{% endhint %}

#### Scheduling

| Setting | Default | Description |
|---------|---------|-------------|
| **Start date** | (none) | When set, the offer only becomes active after this date/time |
| **End date** | (none) | When set, the offer expires after this date/time |

Leave both empty for an always-active offer (controlled only by the Status toggle).

---

## Step 6: Save and activate

1. Enter an **Offer name** (e.g., "Summer upsell bundle") — this is internal, not shown to buyers
2. Check the **Widget status**:
   - **"Added"** (green) — the checkout block is in your theme, offers will display
   - **"Not added"** — click **"Go to theme settings"** to add the block (see "Before you start" section above)
3. Review the **Preview** panel to see how the offer looks at checkout
4. Click **Save** in the top bar

The offer is live when:
- Status is **Active**
- Start date has passed (or no scheduling set)
- Checkout block is **Added** to your theme

---

## Manage offer priority

When multiple offers match the same buyer's cart, only **one** is shown — the one with the **highest priority** (lowest number = highest priority).

### How to set priority

1. Go to **Offers** in the sidebar
2. Click **Manage priority** (top of the page)
3. Select **Checkout upsell** from the dropdown
4. **Drag and drop** to reorder — top of list = priority 1 (highest)
5. Click **Save**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/u7BqmzXoW8Qd.webp" %}

{% hint style="info" %}
**Tip:** Put your highest-converting or time-sensitive offers at priority 1. You can safely schedule future offers at high priority without affecting current ones — scheduled/expired offers are automatically skipped.
{% endhint %}

### Priority and scheduling

Scheduled or expired offers are **skipped** — the next active match is shown:

| Scenario | Result |
|----------|--------|
| Priority 1 offer is **scheduled** (future start date) | Skipped → Priority 2 shows |
| Priority 1 offer is **expired** (past end date) | Skipped → Priority 2 shows |
| Priority 1 offer is **active** but conditions don't match | Skipped → Priority 2 shows |
| Priority 1 offer is **active** and conditions match | **Shown** |

---

## Buyer experience at checkout

When a matching offer is active, buyers see a product recommendation block at checkout:

| Element | Description |
|---------|-------------|
| **Title** | Block heading (e.g., "You may also like") |
| **Description** | Subtitle text (e.g., "Recommended for you") |
| **Product image** | Thumbnail of the upsell product |
| **Name** | Original name or custom title (if set by merchant) |
| **Price** | ~~Original~~ strikethrough + discounted price (if discount set), or regular price |
| **Variant selector** | Dropdown (if "Show variant picker" is on and product has multiple variants) |
| **Quantity stepper** | +/- buttons (if "Show quantity selector" is on) |
| **Add button** | In your store's brand color |

Multiple products appear in a vertical scrollable area (max ~480px height).

### Add to order flow

| Step | What happens |
|------|-------------|
| **Default** | Product card with "Add" button |
| **Select variant** | Price and image update instantly |
| **Change quantity** | Updates via +/- stepper (min 1) |
| **Click "Add"** | Product added to order, button changes to spinner then "Added" |
| **Order summary** | Updates immediately with the new line item + discount |

{% hint style="info" %}
The buyer **does not** leave the checkout page. The addition happens inline via Shopify's Cart API.
{% endhint %}

---

## Offer statuses

| Status | Badge | Meaning |
|--------|-------|---------|
| **Active** | Green | Live and can show at checkout (if conditions match) |
| **Expired** | Grey | Past end date or manually deactivated |
| **Scheduled** | Yellow | Future start date — will auto-activate when the date arrives |

### How status changes

| Action | Status change |
|--------|---------------|
| Create new offer | Defaults to **Active** (unless start date is set) |
| Set future start date | Changes to **Scheduled** |
| Start date passes | Auto-changes to **Active** |
| End date passes | Auto-changes to **Expired** |
| Toggle status to off | Changes to **Expired** |

---

## Edit and delete offers

### Edit an offer

1. Go to **Offers** → click the **edit icon** (pencil) in the Actions column, or click the offer name
2. Make changes
3. Click **Save**

Changes take effect immediately at checkout.

### Delete an offer

1. Go to **Offers** → click the **delete icon** (trash) in the Actions column
2. Confirm deletion

{% hint style="warning" %}
Deletion is permanent. The offer and its analytics data cannot be recovered.
{% endhint %}

---

## Validation errors

| Rule | Error message |
|------|---------------|
| Offer name is empty | "Offer name is required" |
| No products added | "At least one product is required" |
| Discount value is empty (when type selected) | "Discount value is required" |
| Discount percentage > 100 | "Discount cannot exceed 100%" |
| Start date is after end date | "Start date must be before end date" |

---

## FAQs

### General

**Q: Do I need Shopify Plus for Checkout Upsell?**
A: Yes. Checkout UI Extensions require a Shopify Plus plan.

**Q: Can I show multiple offers at the same time?**
A: No. Only one offer is shown per checkout — the highest-priority matching offer. Use the priority system to control which offer wins.

**Q: Does the upsell block slow down checkout?**
A: No. The block loads asynchronously and does not block the checkout rendering.

### Trigger conditions

**Q: What happens if I set no conditions?**
A: The offer shows to every buyer at checkout, regardless of their cart contents.

**Q: Can I combine multiple conditions?**
A: Yes, up to 4 conditions with AND logic. All must be true for the offer to show.

**Q: Can I target buyers by country or shipping method?**
A: Not directly. You can target by customer tag — tag customers by region in Shopify, then use the Customer Tag condition.

**Q: Does "Included Product" check variants or just products?**
A: It checks at the product level. If any variant of the selected product is in the cart, the condition is met.

### Products and discounts

**Q: How many products can I add to one offer?**
A: There is no hard limit, but we recommend 2-5 products for best conversion. Too many options can overwhelm buyers.

**Q: Can I use AI Smart Pick and manual selection together?**
A: Yes. You can add products from both sources to the same offer.

**Q: How does AI Smart Pick choose products?**
A: The AI analyzes purchase patterns and cart contents to recommend products that are frequently bought together. It applies a default 10% discount.

**Q: What discount types are supported?**
A: Percentage off (e.g., 10%), fixed amount off (e.g., $5), or no discount. Each product in the offer can have a different discount.

**Q: Can upsell discounts stack with discount codes?**
A: Yes, if you enable the corresponding discount combination in the Settings tab. By default, all combinations are enabled.

### Display and behavior

**Q: Can I change the "Add" button color?**
A: The button uses your Shopify checkout branding color. To change it: go to **Online Store → Themes → Edit theme → Checkout and customer accounts**, click the **Settings** icon (⚙️) in the top-left toolbar, scroll down to the **Color** section, and change the **Buttons** color.

**Q: What if a product is out of stock?**
A: Out-of-stock products are automatically hidden from the upsell block at checkout.

**Q: Can buyers add the same product twice?**
A: If the product is already in their cart and "Hide items already in order" is on, it won't appear. If the setting is off, they can add it again as a separate line item.

**Q: Where does the upsell block appear?**
A: You control placement in the Theme Editor. Common positions: main column (between checkout sections) or order summary sidebar.

### Priority and scheduling

**Q: What happens when multiple offers have the same priority?**
A: The most recently created offer takes precedence.

**Q: Can I schedule an offer for a future date?**
A: Yes. Set a start date in the Settings tab. The offer status changes to "Scheduled" and auto-activates when the date arrives.

**Q: What happens when a scheduled offer activates?**
A: It automatically changes to "Active" and starts competing with other active offers based on priority and conditions.

---

## Tips

- **Enable all discount combinations** — unless you have a specific reason not to. This ensures upsell discounts always apply, maximizing conversion.
- **Use "Hide items already in order"** — prevents buyers from seeing products they've already added, keeping the block clean.
- **Keep block title short** — "You may also like" or "Complete your order" works well. Buyers scan quickly at checkout.
- **Put your best offer at priority 1** — highest-converting or highest-margin products should get top priority.
- **Schedule seasonal offers in advance** — set start/end dates and priority. The system handles transitions automatically.
- **Test at checkout** — use a real test order to verify conditions, discounts, and block placement. The admin preview shows sample data, but the checkout shows real behavior.
- **Use AI Smart Pick** if you're unsure which products to recommend — the algorithm learns from purchase patterns.
