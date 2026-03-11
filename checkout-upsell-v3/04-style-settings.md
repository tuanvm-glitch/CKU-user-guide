# Customize Style & Settings

This is **Step 3** in the offer editor — the **Advance settings** section with two tabs: **Style** and **Settings**.

---

## Style tab

![Style tab — Title, Description, Quantity selector, Button color](https://i.ibb.co/MD6V3J9n/style-tab-content-v2.png)

### Content section

| Setting | Type | Default |
|---------|------|---------|
| **Title** | Text field | "You may also like" |
| **Description** | Text field | "Recommended for you" |

These are visible to buyers at checkout. Keep them short and compelling.

### Product section

| Setting | Type | Default |
|---------|------|---------|
| **Show quantity selector** | Checkbox | On ✅ |
| **Show variant picker** | Checkbox | On ✅ |

- **Quantity selector**: +/− buttons for buyers to choose units (min 1)
- **Variant picker**: Dropdown for variant selection (Size, Color, etc.) — only shows if product has multiple variants

### Button color

The "Add" button uses your store's **checkout theme brand color**. To change:
1. Click **"theme settings"** link in the info box
2. Edit primary button color in Shopify Theme Editor
3. Save

{% hint style="info" %}
Button color follows your Shopify checkout branding — it cannot be changed from within the app.
{% endhint %}

---

## Settings tab

![Settings tab — Offer settings, Discount combinations, Active date](https://i.ibb.co/hFhZpY6c/settings-tab-v2.png)

### Offer settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Hide items already in the order** | Off | Products already in cart won't appear in upsell block. Offer still shows if other products remain. |

### Discount combinations

Control whether upsell discounts **stack** with other active discounts:

| Checkbox | What it allows | Default |
|----------|---------------|---------|
| **Product discounts** | Stack with product-level discounts | Unchecked |
| **Order discounts** | Stack with order-level codes (e.g., "SAVE10") | Unchecked |
| **Shipping discounts** | Stack with free shipping codes | Unchecked |

{% hint style="warning" %}
**Default:** All unchecked — upsell discount will **NOT** stack with other discounts. Enable checkboxes to allow stacking. Most merchants should enable all three.
{% endhint %}

### Active date (scheduling)

| Setting | Required | Description |
|---------|----------|-------------|
| **Start date** | Yes | Date + time when offer becomes active |
| **Set end date** | No | Enable checkbox to set expiry. Defaults to start + 24h. |
| **End date** | If enabled | Date + time when offer auto-expires |

| Scenario | Status | Shown? |
|----------|--------|--------|
| Before start date | **Scheduled** (yellow) | No |
| Between start and end | **Active** (green) | Yes |
| After end date | **Expired** (gray) | No |
| No end date | **Active** indefinitely | Yes |

{% hint style="info" %}
The app checks scheduling **every minute** — status changes happen automatically.
{% endhint %}

### Validation

| Rule | Error |
|------|-------|
| Start date after end date | "Start date must be earlier than end date" |
| End date before start date | "End date must be later than start date" |
