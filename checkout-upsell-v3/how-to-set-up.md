# Checkout Upsell — How to Set Up

Display upsell product recommendations directly at checkout so buyers can add them to their order with one click — increasing your Average Order Value.

{% hint style="warning" %}
**Shopify Plus required.** Checkout Upsell uses Checkout UI Extensions, which are only available on Shopify Plus plans.
{% endhint %}

---

## What it does

Checkout Upsell shows product recommendations to buyers at the Shopify checkout page. Merchants create offers with specific products (or AI-picked products), optional discounts, and trigger conditions. When a buyer's cart matches the conditions, the upsell block appears with an "Add" button — one click adds the product to the order with the discount applied automatically.

Key highlights:

- **One-click add** — buyer adds upsell products without leaving checkout
- **Automatic discounts** — percentage or fixed amount, no coupon code needed
- **Smart targeting** — show offers based on cart contents, subtotal, or customer tags
- **Priority system** — only the highest-priority matching offer is shown
- **Scheduling** — auto-activate and auto-expire offers on specific dates

---

## Before you start: Add the App Block

The upsell block must be added to your checkout theme before any offer can display. This is a **one-time setup**.

### Step 1: Open the Checkout Theme Editor

Go to **Shopify Admin → Settings → Checkout → Customize** to open the Theme Editor for your checkout page.

Or navigate directly:

```
https://admin.shopify.com/store/{your-store}/settings/checkout/editor
```

{% embed url="https://d2798l25hiaz3h.cloudfront.net/6AFZGS52Zhtu.webp" %}

### Step 2: Add the AOV.AI block

1. In the left sidebar of the Theme Editor, click **"Add block"**
2. Scroll down in the block list to the **Apps** section
3. Find and click **"AOV.ai Checkout Upsell"**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/6BbwKRESPVdE.webp" %}

### Step 3: Verify the block

After clicking, the upsell block appears in the checkout preview. You can drag it to reposition — common placements:

| Location | Description |
|----------|-------------|
| **Main column (left)** | Inline between checkout sections — maximum visibility |
| **Order summary sidebar (right)** | Alongside order summary — less intrusive |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/njqfHwvbDKex.webp" %}

Click **Save** in the Theme Editor to confirm.

{% hint style="info" %}
You only need to do this once. After the block is added, all your offers will display through it automatically.
{% endhint %}

---

## Step 1: Go to Offers

In the app sidebar, click **Offers** to see all your upsell offers.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/f3FXXYp7qM1H.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Tabs** | Filter by status: All, Active, Scheduled, Expired |
| **Search** | Find offers by name |
| **Sort** | By Priority (asc/desc) or Date Created (oldest/newest) |
| **Bulk actions** | Select multiple → Activate, Deactivate, or Delete |
| **Items per page** | 10, 50, or 100 |

Each offer row shows: **Priority** number, **Name**, **Status** badge, **Type**, **Views**, **Orders**, **Revenue**, and action icons (edit / play-pause / delete).

---

## Step 2: Choose offer type

1. Click **Create offer** (top right)
2. Select **Checkout Upsell**
3. Click **Select**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/s32ThWSzlwwY.webp" %}

---

## Step 3: Configure trigger conditions

The editor opens with two columns:
- **Left** — Step 1 (Triggers), Step 2 (Products), Step 3 (Advanced Settings)
- **Right** — Offer name, Status, App block status, Live preview

{% embed url="https://d2798l25hiaz3h.cloudfront.net/aBL2cmATmi4x.webp" %}

### Expand Step 1 and choose a mode

Click the **Step 1** header to expand. Two options:

| Mode | Behavior |
|------|----------|
| **No condition** | Offer **always** shows to all buyers |
| **Set conditions** | Offer only shows when **all** conditions are satisfied (AND logic) |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Dyidl4v1vOKD.webp" %}

### Set conditions

When you select **Set conditions**, a condition builder appears. You can add up to **4 conditions** (each type used only once). Click **"+ Add 'AND' condition"** to add rows.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/UiYvZHtBKYYg.webp" %}

### Available condition types

#### 1. Included Product

| Setting | Details |
|---------|---------|
| **UI** | Dropdown → click **Browse** to open product picker |
| **Selection** | Choose products; optionally select specific variants |
| **Logic** | Cart must contain **at least one** of the selected products |

**Example:** Show upsell for phone cases only when buyer has a phone in cart.

#### 2. Excluded Product

| Setting | Details |
|---------|---------|
| **UI** | Same product picker as Included |
| **Logic** | Cart must **NOT contain any** of the selected products |

**Example:** Don't show the upsell if buyer already has the upsell product in cart.

#### 3. Subtotal Value

| Setting | Details |
|---------|---------|
| **Operators** | Greater than or equal (≥), Less than or equal (≤), Equal (=) |
| **Input** | Number field with currency prefix ($) |
| **Range toggle** | Click "Use a range" → two fields (From / To). Click "Change to basic" to revert. |

**Range mode:** Offer shows when `From ≤ subtotal ≤ To`

{% hint style="info" %}
**How subtotal is calculated:** Original cart value **before any discounts** — does not include upsell items already added during checkout.
{% endhint %}

#### 4. Customer Tag

| Setting | Details |
|---------|---------|
| **Operator** | **Include** (customer has tag) or **Exclude** (customer does not have tag) |
| **UI** | Click **Add customer tag** to browse/select tags from Shopify |
| **Include logic** | Customer must have **at least one** selected tag |
| **Exclude logic** | Customer must **NOT have any** selected tags |

{% hint style="warning" %}
**Guest checkout:** If the buyer is not logged in, customer tag conditions are **automatically skipped** — the offer still shows. This is by design to avoid blocking offers for guest buyers.
{% endhint %}

### AND logic

Multiple conditions are joined with **AND** — all must be true simultaneously.

**Example:** Included product "Running Shoes" **AND** Subtotal ≥ $80 **AND** Customer tag "vip" → offer only shows when all 3 are true at the same time.

### Managing conditions

| Action | How |
|--------|-----|
| **Add** | Click "+ Add 'AND' condition" |
| **Change type** | Use the dropdown on the left of each row |
| **Remove** | Click trash icon (only if 2+ conditions) |
| **Max** | 4 conditions total — each type used only once |

---

## Step 4: Add products and discounts

Click the **Step 2** header to expand.

### Add products

Click **"Add product"** to see a popover with two sources:

| Source | Description |
|--------|-------------|
| **AI Smart Pick** | AI recommends products based on buyer's cart. Default discount: 10%. |
| **Select Product** | Opens Shopify product picker — choose specific products and variants manually. |

After adding, products appear as draggable cards.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/OOaa5MyizHA2.webp" %}

### Statistics row

Above the product list, real-time performance data:

| Stat | Description |
|------|-------------|
| **Views** | Times the offer was displayed at checkout |
| **Orders** | Orders that included an upsell product from this offer |
| **Revenue** | Total revenue from upsell products |
| **Conversion** | Orders ÷ Views × 100% |

### Product card elements

| Element | Description |
|---------|-------------|
| **Drag handle** (⋮⋮) | Drag to reorder — first product shows first at checkout |
| **Thumbnail** | Product image from Shopify |
| **Name** | Clickable — opens product in Shopify admin |
| **Variant count** | e.g., "36/36 variants" — shows selected / total |
| **Discount badge** | Shows "20%" or "$5" — the discount for this product |
| **Edit icon** (✏️) | Opens product settings modal |
| **Delete icon** (🗑) | Removes product from offer |

### Per-product settings

Click the **edit icon** (✏️) on any product card to open the settings modal:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/dkSZCWWuY2CK.webp" %}

#### Discount section

| Setting | Options | Default |
|---------|---------|---------|
| **Discount type** | Percentage / Fixed amount / No discount | No discount |
| **Discount value** | Number field (visible when type selected) | — |

| Type | Example |
|------|---------|
| **Percentage** | 20% off → $60 product becomes $48 |
| **Fixed amount** | $5 off → $60 product becomes $55 |
| **No discount** | Full price shown |

{% hint style="info" %}
Discounts are applied automatically using Shopify's Discount Code system. Buyers don't need to enter any code — the discount is applied the moment they click "Add".
{% endhint %}

#### Custom title section

| Setting | Description |
|---------|-------------|
| **Use custom title** | Checkbox — override the product name in the upsell block |
| **Custom title** | Text field (visible when checkbox is on) |

**Use case:** Show "Premium Bundle — Save 15%" instead of the default product name.

---

## Step 5: Customize style and settings

Click the **Step 3** header to expand. Two tabs: **Style** and **Settings**.

### Style tab

{% embed url="https://d2798l25hiaz3h.cloudfront.net/q7MC4YH3qJ8D.webp" %}

#### Content section

| Setting | Type | Default |
|---------|------|---------|
| **Title** | Text field | "You may also like" |
| **Description** | Text field | "Recommended for you" |

These are visible to buyers at checkout as the block heading and subtext. Keep them short and compelling.

#### Product section

| Setting | Type | Default |
|---------|------|---------|
| **Show quantity selector** | Checkbox | On |
| **Show variant picker** | Checkbox | On |

- **Quantity selector**: +/− buttons for buyers to choose quantity (min 1)
- **Variant picker**: Dropdown for variant selection (Size, Color, etc.) — only shows if product has multiple variants

#### Button color

The "Add" button uses your store's **checkout theme brand color**. To change it:
1. Click the **"theme settings"** link in the info box
2. Edit primary button color in Shopify Theme Editor → Branding
3. Save

{% hint style="info" %}
Button color follows your Shopify checkout branding — it cannot be changed from within the app.
{% endhint %}

### Settings tab

{% embed url="https://d2798l25hiaz3h.cloudfront.net/cjzVfGhvBfvr.webp" %}

#### Offer settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Hide items already in the order** | Off | Products already in the buyer's cart won't appear in the upsell block. The block still shows if other products remain. |

#### Discount combinations

Control whether upsell discounts **stack** with other active discounts on the order:

| Checkbox | What it allows | Default |
|----------|---------------|---------|
| **Product discounts** | Stack with product-level discounts | Unchecked |
| **Order discounts** | Stack with order-level codes (e.g., "SAVE10") | Unchecked |
| **Shipping discounts** | Stack with free shipping codes | Unchecked |

{% hint style="warning" %}
**Default behavior:** All unchecked — the upsell discount will **NOT** stack with other discounts. If both are present, Shopify keeps the discount that saves the buyer more. Most merchants should **enable all three** to ensure the upsell discount always applies alongside other promotions.
{% endhint %}

#### Active date (scheduling)

| Setting | Required | Description |
|---------|----------|-------------|
| **Start date** | Yes | Date + time when the offer becomes active |
| **Set end date** | No | Enable checkbox to set an expiry date |
| **End date** | If enabled | Date + time when the offer auto-expires. Defaults to start + 24h. |

| Scenario | Status | Shown at checkout? |
|----------|--------|-------------------|
| Before start date | **Scheduled** (yellow badge) | No |
| Between start and end | **Active** (green badge) | Yes |
| After end date | **Expired** (gray badge) | No |
| No end date set | **Active** indefinitely | Yes |

{% hint style="info" %}
The app checks scheduling **every minute** — status changes happen automatically without any manual action needed.
{% endhint %}

---

## Step 6: Name and save

In the **right sidebar**:

1. Enter an **Offer name** (e.g., "Summer upsell bundle") — this is internal, not shown to buyers
2. Check the **Widget status**:
   - **"Added"** (green) — the checkout block is in your theme, offers will display
   - **"Not added"** — click **"Go to theme settings"** to add the block (see "Before you start" section above)
3. Review the **Preview** panel to see how the offer looks at checkout
4. Click **Save** in the top bar

{% embed url="https://d2798l25hiaz3h.cloudfront.net/aBL2cmATmi4x.webp" %}

The offer is live when:
- Status is **Active**
- Start date has passed (or no scheduling set)
- Checkout block is **Added** to your theme

---

## Manage offer priority

When multiple offers match at checkout, **priority determines which single offer is displayed**. Only one offer shows at a time — the highest-priority matching offer wins.

| Priority | Offer | Matches cart? | Result |
|----------|-------|---------------|--------|
| 1 | Summer Bundle | Yes | **Displayed** |
| 2 | VIP Exclusive | Yes | Hidden (lower priority) |
| 3 | New Arrivals | No | Hidden (no match) |

### How to set priority

1. Go to **Offers** in the sidebar
2. Click **Manage priority** (top of the page)
3. Select **Checkout upsell** from the dropdown
4. **Drag and drop** to reorder — top of list = priority 1 (highest)
5. Click **Save**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/ag6g9vxWPCTp.webp" %}

{% hint style="info" %}
**Tip:** Put your highest-converting or time-sensitive offers at priority 1. You can safely schedule future offers at high priority without affecting current ones — scheduled/expired offers are automatically skipped.
{% endhint %}

### Priority and scheduling

Scheduled or expired offers are **skipped** — the next active match is shown:

| Priority | Offer | Status | What happens |
|----------|-------|--------|-------------|
| 1 | Black Friday Deal | Scheduled (Nov 25–27) | Before Nov 25: skipped. Nov 25–27: shown. After Nov 27: skipped. |
| 2 | Everyday Upsell | Active (always) | Shown whenever offer #1 is not active |

---

## What buyers see at checkout

### Product card anatomy

Each product in the upsell block shows:

| Element | Description |
|---------|-------------|
| **Thumbnail** | Product image with quantity badge overlay |
| **Name** | Original name or custom title (if set by merchant) |
| **Price** | ~~Original~~ strikethrough + discounted price (if discount set), or regular price |
| **Variant selector** | Dropdown (if "Show variant picker" is on and product has multiple variants) |
| **Quantity stepper** | +/− buttons (if "Show quantity selector" is on) |
| **Add button** | In your store's brand color |

Multiple products appear in a vertical scrollable area (max ~480px height).

{% embed url="https://d2798l25hiaz3h.cloudfront.net/njqfHwvbDKex.webp" %}

### Add to order flow

| Step | What happens |
|------|-------------|
| **Default** | Product card with "Add" button |
| **Select variant** | Price and image update instantly |
| **Change quantity** | Updates via +/− stepper (min 1) |
| **Click Add** | Loading spinner appears |
| **Success** | Product **disappears** from the upsell block and appears in the order summary |
| **Discount** | Applied automatically — buyer sees the discounted total immediately |

### Offer selection logic

1. Extension reads all **active** offers from store metafield
2. Each offer's trigger conditions are evaluated against the current cart
3. The highest-priority matching offer is selected
4. That offer's products are displayed in the block
5. If **no offers match** — the block is completely hidden (checkout works normally)

### Edge cases

| Scenario | Behavior |
|----------|----------|
| No offers match conditions | Block hidden — checkout works normally |
| Product already in cart | Hidden if "Hide items already in order" is enabled |
| All upsell products already in cart | Entire block hidden (if hide-items enabled) |
| Variant out of stock | Variant disabled in dropdown; other variants remain selectable |
| Extension error | Checkout continues normally — block silently hidden |
| Guest checkout | Customer tag conditions are skipped (offer still shows) |
| Buyer added the upsell product | Product disappears from the block |
| Discount conflict (stacking disabled) | Shopify keeps the discount that saves the buyer more |

---

## Offer statuses

| Status | Badge | Meaning |
|--------|-------|---------|
| **Active** | Green | Live at checkout now |
| **Scheduled** | Yellow | Will auto-activate on start date |
| **Expired** | Gray | Past end date — no longer shown |
| **Draft** | Blue | Saved but not activated |
| **Test mode** | Orange | Only shown to test emails |

---

## Edit or delete an offer

From the **Offers** list page:

| Action | How |
|--------|-----|
| **Edit** | Click the offer name or pencil icon |
| **Pause / Activate** | Click the play/pause icon on the offer row |
| **Delete** | Click the trash icon — permanently removes the offer and its associated discount |
| **Bulk actions** | Select multiple offers via checkboxes → Activate, Deactivate, or Delete |

---

## Validation errors

| Rule | Error message |
|------|---------------|
| No products added | "Add products that will be offered to customers" |
| Included product — none selected | "Select at least one product customers must buy" |
| Excluded product — none selected | "Select at least one product customers must NOT buy" |
| Customer tag — none selected | "Customer tag can't be blank" |
| Start date after end date | "Start date must be earlier than end date" |
| End date before start date | "End date must be later than start date" |

---

## FAQs

### Setup & Requirements

**Q: Is Shopify Plus required?**
Yes. Checkout Upsell uses Checkout UI Extensions, which are exclusively available on Shopify Plus plans. Stores on Basic, Shopify, or Advanced plans cannot use this feature.

**Q: How do I add the upsell block to my checkout?**
Go to **Shopify Admin → Settings → Checkout → Customize**. In the Theme Editor, click **"Add block"**, scroll to the Apps section, and select **"AOV.ai Checkout Upsell"**. Click Save. See the "Before you start" section above for detailed steps.

**Q: I added the block but the editor still shows "Not added". Why?**
Make sure you clicked **Save** in the Theme Editor after adding the block. If it still shows "Not added", try refreshing the app page. The status checks your live theme — draft/unpublished themes are not detected.

**Q: Can I place the upsell block anywhere on the checkout page?**
Yes. After adding the block in the Theme Editor, you can drag it to any position — in the main checkout column (left) or in the order summary sidebar (right). The block auto-adapts its width.

---

### Offers & Conditions

**Q: How many offers can I create?**
There is no hard limit on the number of offers. However, only **one offer** is shown per checkout — the highest-priority matching offer.

**Q: Can I show multiple offers at the same time?**
No. The system evaluates all active offers against the buyer's cart and shows only the single highest-priority match. If you want to recommend multiple products, add them all to the same offer.

**Q: What happens if no offer matches the buyer's cart?**
The upsell block is completely hidden. The checkout works normally with no visible change.

**Q: How does "No condition" differ from removing all conditions?**
They are the same. "No condition" means the offer always shows to all buyers regardless of what's in their cart.

**Q: Can I use OR logic between conditions?**
No. All conditions use **AND** logic — every condition must be true for the offer to show. If you need OR logic, create separate offers for each scenario and use priority to control which one displays.

**Q: How is the subtotal calculated for the Subtotal Value condition?**
The subtotal is the **original cart value before any discounts** are applied. It does not include upsell items the buyer added during the current checkout session.

**Q: What happens with customer tag conditions during guest checkout?**
Customer tag conditions are **automatically skipped** for guest (not logged-in) buyers. The offer still shows as if the tag condition doesn't exist. This is intentional — guest buyers are not blocked from seeing offers.

---

### Products & Discounts

**Q: How does AI Smart Pick work?**
AI Smart Pick uses Shopify's product recommendation algorithm to automatically select products that are commonly purchased together with items in the buyer's cart. A default 10% discount is applied. You can change the discount after adding.

**Q: Can I set different discounts for different products in the same offer?**
Yes. Each product has its own discount setting (percentage, fixed amount, or no discount). Click the edit icon (✏️) on each product card to configure individually.

**Q: Do buyers need to enter a discount code?**
No. Discounts are applied automatically when the buyer clicks "Add". The app uses Shopify's Discount Code system behind the scenes — the code is generated and applied without any buyer input.

**Q: What happens if a product variant is out of stock?**
The out-of-stock variant is **disabled** in the dropdown selector. Buyers can still select other available variants. If all variants are out of stock, the product card still appears but the Add button may not work.

**Q: Can I reorder the products shown in the upsell block?**
Yes. In the editor's Step 2, drag the product cards using the handle (⋮⋮) to reorder. The first product in the list appears first in the block at checkout.

**Q: What if I delete a product from Shopify that's in an offer?**
The product will no longer appear in the upsell block. You should remove it from the offer and add a replacement to avoid an empty-looking block.

---

### Discount Stacking

**Q: What are discount combinations?**
Discount combinations control whether the upsell discount can **stack** with other active discounts on the order. By default, stacking is disabled for all types (product, order, and shipping discounts).

**Q: What happens if stacking is disabled and the buyer has another discount?**
Shopify automatically keeps the discount that **saves the buyer more money** and drops the other. For example, if the buyer has a 30% order discount and the upsell offers 10% off a product, Shopify keeps the 30% order discount.

**Q: Should I enable all discount combination checkboxes?**
In most cases, **yes**. Enabling all three (product, order, shipping) ensures the upsell discount always applies alongside other promotions. Only disable if you specifically don't want upsell discounts to stack.

---

### Priority & Scheduling

**Q: How does priority work?**
Each offer has a priority number (1 = highest). When multiple offers match the buyer's cart, only the highest-priority offer is shown. Set priority via the **Manage priority** modal on the Offers list page.

**Q: If I schedule a future offer at priority 1, will it block my current offers?**
No. Scheduled offers are **automatically skipped** until their start date. The next active matching offer is shown instead. You can safely pre-schedule offers at any priority.

**Q: Can I manually pause an offer that's scheduled?**
Yes. You can manually change the status to Draft or Expired at any time, regardless of the scheduling dates.

**Q: How quickly does scheduling take effect?**
The app checks scheduling **every minute**. Status changes (Active → Expired, Scheduled → Active) happen automatically within 1 minute of the scheduled time.

---

### Troubleshooting

**Q: My offer is active but not showing at checkout. What should I check?**

1. **Block not added** — Check if the app block is in your checkout theme. The editor sidebar shows "Added" (green) or "Not added". See the "Before you start" section.
2. **Store not on Shopify Plus** — This feature requires Shopify Plus.
3. **Trigger conditions not matched** — The buyer's cart may not satisfy all conditions. Test with a cart that matches.
4. **Start date in the future** — Check the scheduling in Settings tab.
5. **Lower priority** — Another offer with higher priority may be matching instead. Check the Manage priority modal.

**Q: The discount is not applied when the buyer adds the upsell product. Why?**

1. **Discount combinations disabled** — In the Settings tab, check the discount combination checkboxes. If the buyer has another active discount and stacking is off, the system keeps the higher-value discount.
2. **Discount sync delay** — After saving a new offer, wait a few seconds for the discount to sync to Shopify.
3. **Discount limit reached** — Shopify has a maximum number of discount combinations per order. Check your Shopify discount settings.

**Q: A product disappeared from the upsell block during checkout.**
This is expected behavior when **"Hide items already in order"** is enabled. Once the buyer adds a product from the upsell block, it disappears from the block to avoid duplicate purchases.

**Q: The upsell block appears in the wrong position.**
Block position is controlled by your **Shopify theme**, not the app. Go to **Shopify Admin → Settings → Checkout → Customize** and drag the AOV.AI block to your preferred location.

**Q: I see "Checkout Upsell block isn't activated" warning in the editor.**
This means the app block has not been added to your checkout theme. Click **"Go to theme settings"** in the warning banner and follow the steps to add the block. See the "Before you start" section.

---

## Tips

- **Enable all discount combinations** — unless you have a specific reason not to. This ensures upsell discounts always apply, maximizing conversion.
- **Use "Hide items already in order"** — prevents buyers from seeing products they've already added, keeping the block clean.
- **Keep block title short** — "You may also like" or "Complete your order" works well. Buyers scan quickly at checkout.
- **Put your best offer at priority 1** — highest-converting or highest-margin products should get top priority.
- **Schedule seasonal offers in advance** — set start/end dates and priority. The system handles transitions automatically.
- **Test at checkout** — use a real test order to verify conditions, discounts, and block placement. The admin preview shows sample data, but the checkout shows real behavior.
- **Use AI Smart Pick** if you're unsure which products to recommend — the algorithm learns from purchase patterns.
