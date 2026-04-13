# Custom Rules — How to Set Up

Block orders that don't meet your requirements by creating custom validation rules. Set conditions based on cart value, product quantity, or specific products — and display clear error messages at checkout.

{% hint style="success" %}
**Available on all Shopify plans.** Custom Rules uses Shopify Functions — no Shopify Plus required.
{% endhint %}

---

## What it does

Custom Rules lets you create validation rules that block checkout when specific conditions are met:

- **Cart total** — require a minimum or maximum order value
- **Cart quantity** — limit the total number of items
- **Product quantity** — restrict how many of a specific product can be ordered
- **Product restrictions** — block checkout when certain products are (or aren't) in the cart

Each rule shows a **custom error message** at a position you choose — either as a banner at the top of the page or inline next to a specific field.

---

## Step 1: Go to Checkout Validations

In the app sidebar, click **Checkout Validations**. You'll see the list of all validation rules.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/nZkhTdbCBXL4.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Search** | Find rules by name |
| **Status filter** | Filter by Active, Inactive, or Test mode |
| **Table** | Shows rule name, status, conditions summary, and actions |
| **Actions** | Activate/Deactivate, Edit, Delete for each rule |
| **Bulk actions** | Select multiple rules to activate, deactivate, or delete |

---

## Step 2: Create a new rule

Click **Create validation** (top right). The editor opens with three sections: General Setting, Trigger Conditions, and Error Message.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/tVZXRHibXpcp.webp" %}

---

## Step 3: Set name and status

| Setting | Description |
|---------|-------------|
| **Rule name** | A descriptive name for your reference (e.g., "Minimum order $50") |
| **Status** | **Active** — rule applies at checkout. **Test mode** — only triggers when checkout email is `aov@testing.com`. **Inactive** — rule is saved but not applied. |

{% hint style="info" %}
**Tip:** Start with **Test mode** to verify the rule works correctly before activating it for all customers.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/7ieVkxKoAzLF.webp" %}

---

## Step 4: Configure trigger conditions

Trigger conditions define **when** the rule blocks checkout. By default, rules apply to all orders.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/9jVqCQGkj5Vh.webp" %}

### Two modes

| Mode | Behavior |
|------|----------|
| **No condition** | Rule **always** applies to all orders |
| **When conditions are met** | Rule only applies when **all** conditions are satisfied (AND logic) |

### Available condition types

When you select **When conditions are met**, a condition builder appears. Click **"+ Add 'AND' condition"** to add rows.

| Condition | Operators | Example |
|-----------|-----------|---------|
| **Product** | Contains / Does not contain | Cart contains "Fragile Item" → block checkout with warning |
| **Product quantity** | Greater than / Greater than or equal / Less than / Less than or equal | Product quantity > 10 → block bulk orders |
| **Cart total** | Greater than / Greater than or equal / Less than / Less than or equal | Cart total < $50 → require minimum order |
| **Cart quantity** | Greater than / Greater than or equal / Less than / Less than or equal | Cart quantity > 20 → limit total items |

{% hint style="info" %}
All conditions use **AND logic** — every condition must be true for the rule to trigger. For example: "Cart total < $50" AND "Cart contains Product A" means both must be satisfied for the error to show.
{% endhint %}

---

## Step 5: Configure error message and position

This section controls what buyers see when the rule triggers.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/q6sxHyy3t4jg.webp" %}

### Error message

Enter the message buyers will see at checkout. Keep it clear and helpful — explain what they need to do (e.g., "Your order must be at least $50 to proceed. Please add more items.").

Maximum **200 characters** recommended. A character counter is shown below the field.

### Error position

Choose where the error message appears on the checkout page:

| Position | Display |
|----------|---------|
| **Top of the checkout page** | Red banner at the top of the page — most visible |
| **First name** | Inline error below the First name field |
| **Last name** | Inline error below the Last name field |
| **Company** | Inline error below the Company field |
| **Address line 1** | Inline error below Address line 1 |
| **Address line 2** | Inline error below Address line 2 |
| **City** | Inline error below the City field |
| **Email or phone number** | Inline error below the Email/Phone field |
| **Delivery phone** | Inline error below the Delivery phone field |
| **ZIP / Postal code** | Inline error below the ZIP code field |
| **Country** | Inline error below the Country dropdown |
| **Province / State** | Inline error below the Province/State dropdown |

{% hint style="warning" %}
**"Top of the checkout page"** is recommended for most rules — it's the most visible position and doesn't confuse buyers into thinking a specific field has an error.
{% endhint %}

---

## Step 6: Preview and save

The right sidebar shows a **live preview** of how your error message will appear based on the selected position.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/EtQtYy4qRsOX.webp" %}

### Full checkout preview

Click **"Preview in checkout"** to open a full-screen modal showing the complete checkout layout with your error message rendered at the correct position.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/remdGQRZ0bJm.webp" %}

When everything looks good:
1. Set the **Status** to your preferred option
2. Click **Save** in the top bar

The rule takes effect at checkout immediately.

---

## Test your rule with Test Mode

Before activating a rule for all customers, test it first:

1. Set the rule **Status** to **Test mode** and save
2. Go to your store and add products to the cart
3. Proceed to checkout
4. Enter **aov@testing.com** as the checkout email
5. Make sure all trigger conditions (if any) are met
6. Verify the error message appears at the correct position
7. Once verified, change the status to **Active**

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

## Tips

- **Start with Test mode** — verify the rule works correctly before activating for all customers
- **Use "Top of the checkout page"** for most rules — it's the most visible and avoids field-level confusion
- **Keep messages actionable** — tell buyers what to do, not just what went wrong (e.g., "Add at least 2 items" instead of "Not enough items")
- **Combine conditions wisely** — all conditions use AND logic, so the rule only triggers when every condition matches
- **Keep rule names descriptive** — "Min order $50 for wholesale" is better than "Rule #1"
- **Check the limits** — Shopify allows up to 25 active validation rules at once

---

## FAQs

### General

**Q: Do I need Shopify Plus for Custom Rules?**
A: No. Custom Rules uses Shopify Functions, which are available on all Shopify plans.

**Q: How many rules can I have?**
A: You can have up to **25 active validation rules** at once (shared with Geo Restriction rules).

**Q: Do rules take effect immediately after saving?**
A: Yes. Once a rule is set to **Active** and saved, it applies to all new checkouts immediately.

### Trigger conditions

**Q: What happens if I set no conditions?**
A: The rule applies to every order at checkout. The error message will always show.

**Q: Can I combine multiple conditions?**
A: Yes. Add multiple conditions with AND logic — all must be true for the rule to trigger.

**Q: Does "Product" condition check variants?**
A: It checks at the product level. If any variant of the selected product is in the cart, the condition is met.

**Q: What's the difference between "Greater than" and "Greater than or equal"?**
A: "Greater than 10" means 11 or more. "Greater than or equal to 10" means 10 or more.

### Error message

**Q: Can I use different languages in the error message?**
A: Yes. Enter the message in any language you prefer — it will display exactly as typed.

**Q: What happens if multiple rules trigger at the same time?**
A: All matching rules display their error messages. Buyers must resolve all errors before completing checkout.

**Q: Does the error block checkout or just show a warning?**
A: The error **blocks checkout** — buyers cannot complete their purchase until the condition is no longer met.
