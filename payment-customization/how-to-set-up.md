# Payment Customization — How to Set Up

Control which payment methods are shown at checkout, rename them, or change their display order — all powered by Shopify Functions. Changes take effect immediately after saving a rule.

{% hint style="success" %}
**Available on all Shopify plans.** No Shopify Plus required.
{% endhint %}

---

## What it does

Payment Customization lets you create rules that modify how payment methods appear at checkout. You control:

- **Which methods** to hide, rename, or reorder
- **When** rules apply (trigger conditions)
- **How** methods are matched (exact name or contains)

| Rule | Description |
|------|-------------|
| **Hide** | Remove one or more payment methods from checkout |
| **Rename** | Change the display name of a payment method |
| **Reorder** | Change the order in which payment methods appear |

---

## Step 1: Go to Checkout Customizations

In the app sidebar, click **Checkout customizations** to see all your rules.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/icJERxNizoZG.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Tabs** | Filter by: All, Delivery method, Payment method |
| **Search** | Find rules by name |
| **Sort** | By Date Created (oldest/newest) |
| **Status filter** | Active, Expired, Test mode |
| **Actions** | Pause/Start, Edit, Delete for each rule |

---

## Step 2: Choose rule type

1. Click **Create rule** (top right)
2. Select a payment customization type

{% embed url="https://d2798l25hiaz3h.cloudfront.net/cCsuMvrEKL7N.webp" %}

Three options under **Payment customizations**:

| Type | What it does |
|------|-------------|
| **Hide payment method** | Remove specific payment methods from checkout |
| **Rename payment method** | Change the display name of payment methods |
| **Reorder payment method** | Rearrange the order payment methods appear |

{% hint style="info" %}
**Limitations of the Shopify API:**
- You cannot customize the Credit Card payment method unless you are on Shopify Plus (US and Canada only)
- Maximum **25 active payment rules** at once
- Maximum **25 active shipping rules** at once
{% endhint %}

---

## Step 3: Configure general settings

The editor opens with three sections: General Setting, Trigger Conditions, and Rule Action.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/ZMFxlWsCo9Fn.webp" %}

### Rule name

Enter a descriptive name (e.g., "Hide COD for international orders"). A default name like "Payment customization #1" is suggested.

### Status

| Status | Description |
|--------|-------------|
| **Active** | Rule applies to all customers at checkout |
| **Inactive** | Rule is saved but not applied |
| **Test mode** | Rule only triggers when the checkout email is **aov@testing.com** |

{% hint style="info" %}
**Tip:** Start with **Test mode** to verify the rule works correctly before activating it for all customers.
{% endhint %}

---

## Step 4: Configure trigger conditions

Trigger conditions control when the rule applies. By default, rules apply to all orders.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/QT1AHVwx1wiv.webp" %}

### Two modes

| Mode | Behavior |
|------|----------|
| **No condition** | Rule **always** applies to all orders |
| **Set conditions** | Rule only applies when **all** conditions are satisfied (AND logic) |

### Available condition types

When you select **Set conditions**, a condition builder appears. Click **"+ Add 'AND' condition"** to add rows.

#### 1. Included Product (or variant)

| Setting | Details |
|---------|---------|
| **Logic** | Rule applies when buyer's cart **contains** any of the selected products |
| **UI** | Dropdown → click **Add product** to open product picker |
| **Use case** | Hide COD when buyer has digital products in cart |

#### 2. Excluded Product (or variant)

| Setting | Details |
|---------|---------|
| **Logic** | Rule applies when buyer's cart does **NOT** contain any of the selected products |
| **UI** | Dropdown → click **Add product** to open product picker |
| **Use case** | Only apply rename when buyer does not have a specific product |

#### 3. Total Cart Value

| Setting | Details |
|---------|---------|
| **UI** | Operator dropdown (Greater than / Less than) + value field |
| **Logic** | Compares cart subtotal against the threshold |
| **Use case** | Hide Buy Now Pay Later for orders under $50 |

#### 4. Customer Tag

| Setting | Details |
|---------|---------|
| **UI** | Operator dropdown (Has tag / Does not have tag) + tag field |
| **Logic** | Checks buyer's Shopify customer tags |
| **Use case** | Show wholesale payment options only for tagged customers |

{% hint style="info" %}
All conditions use **AND logic** — every condition must be true for the rule to apply. For example: "Cart contains Product A" AND "Cart value > $100" means both must be satisfied.
{% endhint %}

---

## Step 5: Configure rule action

This section changes based on the rule type you selected in Step 2.

### Hide payment method

{% embed url="https://d2798l25hiaz3h.cloudfront.net/GwWVtOWRldwK.webp" %}

Three options:

| Option | Description |
|--------|-------------|
| **Hide all payment methods** | Removes every payment method (use with trigger conditions!) |
| **Hide specific payment method(s)** | Select which methods to hide |
| **Show only specific payment method(s)** | Hide everything **except** the selected methods |

For specific methods, add rows with:

| Column | Description |
|--------|-------------|
| **Matching type** | "Name is exactly" (exact match) or "Name contains" (partial match) |
| **Payment method** | Search and select from your store's payment methods |

Click **Add** to add more conditions. Click the trash icon to remove a row.

{% hint style="warning" %}
**"Hide all payment methods"** removes every payment option. Always use this with trigger conditions — otherwise buyers cannot complete checkout.
{% endhint %}

---

### Rename payment method

{% embed url="https://d2798l25hiaz3h.cloudfront.net/9QQT6EBNVbdA.webp" %}

Add rename mappings with three columns:

| Column | Description |
|--------|-------------|
| **Matching type** | "Name is exactly" or "Name contains" |
| **Payment method** | The current method name to match |
| **Rename to** | The new display name buyers will see |

You can add multiple rename mappings in a single rule. Click **Add** to add more rows.

{% hint style="info" %}
**Example:** Rename "Cash on Delivery (COD)" → "Pay when delivered" to make the option clearer for buyers.
{% endhint %}

---

### Reorder payment method

{% embed url="https://d2798l25hiaz3h.cloudfront.net/s2WvLDytl53h.webp" %}

1. Search and select your payment methods from the dropdown
2. Selected methods appear as a draggable list
3. **Drag and drop** using the handle (≡) to set the desired order
4. Methods listed here appear first; unlisted methods follow in their default order

Click the trash icon to remove a method from the list.

{% hint style="info" %}
**Tip:** If your payment method is not in the list, type the name and click **Add custom method** to add it manually.
{% endhint %}

---

## Step 6: Save and activate

1. Review all settings
2. Click **Save** in the top bar

{% embed url="https://d2798l25hiaz3h.cloudfront.net/WgJkVMBhegoc.webp" %}

The rule is live when:
- Status is **Active**
- All conditions are properly configured

The rule takes effect at checkout immediately.

---

## Test your rule with Test Mode

Before activating a rule for all customers, test it first:

1. Set the rule **Status** to **Test mode** and save
2. Go to your store and add products to the cart
3. Proceed to checkout
4. Enter **aov@testing.com** as the checkout email
5. Make sure all trigger conditions (if any) are met
6. Verify the payment methods are correctly hidden, renamed, or reordered
7. Once verified, change the status back to **Active**

{% hint style="warning" %}
**Test mode only works with the email aov@testing.com.** All trigger conditions must also be satisfied for the rule to take effect.
{% endhint %}

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

## Rule statuses

| Status | Badge | Meaning |
|--------|-------|---------|
| **Active** | Green | Live and affecting checkout |
| **Expired** | Grey | Manually deactivated |
| **Test mode** | Orange | Only triggers with aov@testing.com email |

---

## FAQs

### General

**Q: Do I need Shopify Plus for Payment Customization?**
A: No. Payment Customization uses Shopify Functions, which are available on all Shopify plans.

**Q: How many rules can I have?**
A: You can have up to **25 active payment rules** at once.

**Q: Can I customize the Credit Card payment method?**
A: Only on Shopify Plus plans in the United States and Canada.

### Trigger conditions

**Q: What happens if I set no conditions?**
A: The rule applies to every order at checkout.

**Q: Can I combine multiple conditions?**
A: Yes. Add multiple conditions with AND logic — all must be true for the rule to apply.

**Q: Does "Included Product" check variants?**
A: It checks at the product level. If any variant of the selected product is in the cart, the condition is met.

### Rule actions

**Q: What's the difference between "Name is exactly" and "Name contains"?**
A: "Name is exactly" requires a perfect match. "Name contains" matches if the payment method name includes the keyword anywhere. Use "Name contains" for flexibility — it catches variations like "Credit Card" and "Credit Card (Stripe)".

**Q: What happens if I hide all payment methods without conditions?**
A: Buyers will see no payment options and cannot complete checkout. Always use trigger conditions with "Hide all".

**Q: Do reordered methods override Shopify's default order?**
A: Yes. Methods in your reorder list appear first in the order you set. Unlisted methods appear after in their default order.

---

## Tips

- **Start with Test mode** — verify the rule works correctly before activating for all customers
- **Use "Name contains"** for flexibility — it catches variations of payment method names
- **Keep rule names descriptive** — "Hide COD for international" is better than "Rule #1"
- **Combine trigger conditions** to target specific segments (e.g., hide COD for orders above $500 from wholesale customers)
- **Check Shopify Payments settings** to confirm exact payment method names before creating rename rules
- **Use "Show only specific methods"** when you want to whitelist — it's easier than hiding many methods individually
