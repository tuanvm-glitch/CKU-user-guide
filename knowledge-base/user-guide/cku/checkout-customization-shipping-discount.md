# Shipping Discount — How to Set Up

Create shipping discount rules that automatically reduce or eliminate shipping costs at checkout. Offer free shipping, a fixed amount off, or a percentage off — triggered automatically by conditions or redeemed with a discount code.

{% hint style="success" %}
**Available on all Shopify plans.** Shipping Discount uses Shopify Discount Functions — no Shopify Plus required.
{% endhint %}

---

## What it does

Shipping Discount lets you create rules that reduce shipping costs for your buyers at checkout:

- **Free shipping** — remove shipping charges entirely
- **Fixed amount off** — reduce shipping by a specific dollar amount (e.g., $5 off)
- **Percentage off** — reduce shipping by a percentage (e.g., 50% off)

Each rule can be triggered **automatically** when conditions are met, or require the buyer to enter a **discount code** at checkout.

---

## Step 1: Go to Checkout Customizations

In the app sidebar, click **Checkout customizations**. You'll see the list of all your rules across payment, delivery, and shipping discount types.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/4ituaq82eOzZ.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Tabs** | Filter by: All, Delivery method, Payment method, Shipping discount |
| **Search** | Find rules by name |
| **Table** | Shows rule name, type (badge), status, created date, and actions |
| **Actions** | Activate/Deactivate, Edit, Delete for each rule |
| **Bulk actions** | Select multiple rules to activate, deactivate, or delete |

---

## Step 2: Create a shipping discount rule

1. Click **Create rule** (top right)
2. On the Rule Type Selection page, select **Shipping discount**

{% embed url="https://d2798l25hiaz3h.cloudfront.net/RYGuXa1dGu08.webp" %}

The editor opens with a two-column layout:
- **Left column (~35%)** — Section labels and descriptions
- **Right column (~65%)** — Form fields and settings

The editor has three sections: **General Settings**, **Trigger Conditions**, and **Discount**.

---

## Step 3: Configure general settings

{% embed url="https://d2798l25hiaz3h.cloudfront.net/mZfV3KBjw1dJ.webp" %}

### Rule name

Enter a descriptive name for your reference (e.g., "Free shipping over $75"). Maximum **50 characters**.

### Discount combinations

Control whether this shipping discount can be combined with other active discounts:

| Option | Description |
|--------|-------------|
| **Order discounts** | Allow this rule to stack with order-level discounts (checked by default) |
| **Product discounts** | Allow this rule to stack with product-level discounts (checked by default) |

{% hint style="info" %}
**Tip:** Keep both options checked unless you have a specific reason to prevent stacking. This gives buyers the best experience when multiple promotions are active.
{% endhint %}

### Trigger method

Choose how the discount is applied:

| Method | Description |
|--------|-------------|
| **Automatically** | Discount applies whenever trigger conditions are met — no action required from the buyer (default) |
| **With a discount code** | Buyer must enter a discount code at checkout to activate the discount |

{% hint style="warning" %}
**The trigger method cannot be changed after saving.** Once you save a rule as "Automatically" or "With a discount code", this setting is locked. If you need a different trigger method, create a new rule.
{% endhint %}

### Discount code settings (code trigger only)

When you select **With a discount code**, additional fields appear:

| Setting | Description |
|---------|-------------|
| **Discount code** | The code buyers enter at checkout (e.g., "FREESHIP2026") |
| **Usage limit** | Check to set a maximum number of times the code can be used across all customers |
| **One use per customer** | Check to limit each customer to a single use of this code |

---

## Step 4: Configure trigger conditions

Trigger conditions control when the shipping discount applies. By default, the discount applies to all orders.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/YNDgNegrlAX6.webp" %}

### Two modes

| Mode | Behavior |
|------|----------|
| **No condition** | Discount applies to **all** orders |
| **Set conditions** | Discount only applies when **all** conditions are satisfied (AND logic) |

### Available condition types

When you select **Set conditions**, a condition builder appears. Click **"+ Add 'AND' condition"** to add rows.

| Condition | Operators | Example |
|-----------|-----------|---------|
| **Product** | Contains / Does not contain | Cart contains "Summer Collection" items → free shipping |
| **Total cart value** | Greater than / Less than | Cart total > $75 → free shipping |
| **Customer tag** | Has tag / Does not have tag | Customer tagged "VIP" → 50% off shipping |

{% hint style="info" %}
All conditions use **AND logic** — every condition must be true for the discount to apply. For example: "Cart total > $75" AND "Cart contains Product A" means both must be satisfied.
{% endhint %}

---

## Step 5: Configure the discount

This section defines what discount buyers receive on shipping.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/UIL6CMd1tpkW.webp" %}

### Discount label

Enter the text buyers will see at checkout next to the discount (e.g., "Free Shipping Promotion"). Maximum **50 characters**. This label appears in the order summary as a tag below the shipping line.

### Discount type

| Type | Behavior | Value input |
|------|----------|-------------|
| **Free shipping** | Removes all shipping charges | No value input needed |
| **Fixed amount off** | Reduces shipping by a specific amount | Number input with currency suffix (e.g., "$5.00") |
| **Percentage off** | Reduces shipping by a percentage | Number input with % suffix (maximum 100%) |

### Currency conversion (Fixed amount off only)

When using **Fixed amount off**, two additional settings appear:

| Setting | Description |
|---------|-------------|
| **Convert to cart currency** | Automatically convert the discount amount to the buyer's local currency. Recommended for multi-currency stores. |
| **Conversion behavior** | How to handle conversion rounding: **Don't round up** / **Round up to nearest** / **Round to nearest** |

{% hint style="info" %}
**Tip:** Enable **Convert to cart currency** if your store sells in multiple currencies. This ensures the discount amount is correctly applied regardless of the buyer's currency.
{% endhint %}

---

## Step 6: Configure shipping method targeting

Choose which shipping methods the discount applies to.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/ArdRV5XHrr0H.webp" %}

| Option | Description |
|--------|-------------|
| **Apply to all shipping methods** | The discount applies to every available shipping method (default) |
| **Apply to only specific methods** | The discount applies only to methods matching your criteria |

When you select **Apply to only specific methods**, a table appears where you can define matching rules:

| Column | Description |
|--------|-------------|
| **Operator** | How to match: Contains, Does not contain, Is, Is not |
| **Value** | The text to match against shipping method names |

Click **Add** to add more matching rules. Click the trash icon to remove a row.

{% hint style="info" %}
**Example:** To offer free shipping only on standard methods, set the operator to **Contains** and the value to **"Standard"**. This matches any shipping method with "Standard" in its name.
{% endhint %}

---

## Step 7: Save and activate

1. Review all settings
2. Click **Save** in the top bar

{% embed url="https://d2798l25hiaz3h.cloudfront.net/RChP0L7x1Alt.webp" %}

The discount takes effect at checkout immediately after saving.

---

## What buyers see at checkout

### Automatic discounts

When an automatic shipping discount applies:

- **Shipping method line:** The original shipping price appears crossed out, with the discounted price shown next to it. If the discount covers the full cost, it shows **"FREE"**
- **Order summary:** The original shipping cost is crossed out with the new price displayed. Below the shipping line, the discount label appears as a tag with an icon
- **Total savings:** A line at the bottom of the order summary shows the total amount saved

{% embed url="https://d2798l25hiaz3h.cloudfront.net/PIfVu8FpF55q.webp" %}

### Discount code

When a buyer has a discount code:

1. The buyer enters the code in the **"Discount code or gift card"** field at checkout
2. Clicks **Apply**
3. The shipping prices update to reflect the discount
4. The discount label tag appears in the order summary

{% embed url="https://d2798l25hiaz3h.cloudfront.net/8xOSWHa56hQm.webp" %}

---

## Manage existing rules

### Toggle status

Use the **Pause** / **Start** action on any rule to quickly toggle its status without opening the editor.

### Edit a rule

Click the **edit icon** (pencil) in the Actions column, or click the rule name to open the editor.

### Delete rules

- **Single rule:** Click the **delete icon** (trash) in the Actions column
- **Bulk delete:** Select multiple rules with checkboxes → click **Delete rules**

Other bulk actions: **Activate rules**, **Deactivate rules**.

{% hint style="warning" %}
Deletion is permanent. The rule cannot be recovered.
{% endhint %}

---

## Tips

- **Keep discount labels clear** — buyers see this text at checkout. "Free Shipping on Orders Over $75" is more helpful than "Shipping Promo"
- **Use conditions for automatic discounts** — without conditions, the discount applies to every order. Set a cart value threshold to protect your margins
- **Target specific methods** when you only want to discount certain shipping tiers (e.g., free standard shipping but not express)
- **Enable currency conversion** for fixed amount discounts if you sell in multiple currencies
- **Keep rule names descriptive** — "Free shipping over $75" is better than "Shipping rule #1"
- **Monitor the 25-rule limit** — Shopify allows up to 25 active automatic discounts at once. You'll see a warning banner when approaching this limit

---

## FAQs

### General

**Q: Do I need Shopify Plus for Shipping Discount?**
A: No. Shipping Discount uses Shopify Discount Functions, which are available on all Shopify plans.

**Q: How many shipping discount rules can I have?**
A: You can have up to **25 active automatic discounts** at once. This limit is shared across all automatic discount types in Shopify.

**Q: Can I change the trigger method after saving?**
A: No. The trigger method (Automatic or With a discount code) is **locked after the first save**. If you need a different trigger method, create a new rule.

**Q: Does the discount take effect immediately?**
A: Yes. Once saved, the discount applies to all new checkouts immediately.

### Discount behavior

**Q: What happens if the discount is larger than the shipping cost?**
A: Shipping is reduced to **$0** — it never goes negative. For example, a $10 fixed discount on $7 shipping results in $0 shipping, not -$3.

**Q: What happens when multiple shipping discounts qualify?**
A: Shopify automatically applies the **highest-value discount** for the buyer. The buyer always gets the best deal.

**Q: Can shipping discounts stack with product or order discounts?**
A: Yes, if the **Discount combinations** checkboxes are enabled. By default, both "Order discounts" and "Product discounts" are checked, allowing stacking.

### Trigger conditions

**Q: What happens if I set no conditions on an automatic discount?**
A: The discount applies to every order at checkout — all buyers receive the shipping discount automatically.

**Q: Can I combine multiple conditions?**
A: Yes. Add multiple conditions with AND logic — all must be true for the discount to apply.

**Q: Does "Product" condition check variants?**
A: It checks at the product level. If any variant of the selected product is in the cart, the condition is met.

### Discount codes

**Q: Where do buyers enter the discount code?**
A: In the **"Discount code or gift card"** field on the checkout page. After entering the code, they click **Apply** to activate the discount.

**Q: Can I set a usage limit on discount codes?**
A: Yes. Enable the **Usage limit** checkbox and enter the maximum number of uses. You can also check **One use per customer** to prevent repeat usage by the same buyer.

**Q: Can a buyer use multiple discount codes?**
A: Shopify allows only one discount code per checkout. If a buyer enters a new code, it replaces the previous one.
