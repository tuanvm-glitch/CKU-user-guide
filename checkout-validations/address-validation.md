# Address Validation — How to Set Up

Block orders with invalid shipping addresses by creating address validation rules. Prevent PO Box deliveries, require street numbers, and enforce character limits on address fields — all at checkout.

{% hint style="success" %}
**Available on all Shopify plans.** Address Validation uses Shopify Functions — no Shopify Plus required.
{% endhint %}

---

## What it does

Address Validation lets you create rules that block checkout when the shipping address does not meet your requirements. Three validation types are available:

- **Block PO Box** — prevent checkout when the address contains PO Box, P.O. Box, Post Office Box, PMB, Parcel Locker, or custom keywords you define
- **Require street number** — prevent checkout when the address is missing a street number (e.g., "Main Street" without a number)
- **Character limit** — prevent checkout when an address field exceeds or falls below a character count you set

Each rule shows a **custom error message** at a position you choose — either as a banner at the top of the page or inline next to a specific checkout field.

---

## Step 1: Go to Checkout Validations

In the app sidebar, click **Checkout Validations**. You'll see the list of all validation rules.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/EspHB2aiAm1N.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Search** | Find rules by name |
| **Status filter** | Filter by Active, Inactive, or Test mode |
| **Table** | Shows rule name, type, status, summary, and actions |
| **Actions** | Activate/Deactivate, Edit, Delete for each rule |
| **Bulk actions** | Select multiple rules to activate, deactivate, or delete |

---

## Step 2: Create a new rule

Click **Create validation** (top right). The editor opens with a 2-column layout — settings on the left, checkout preview on the right.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/f11BXUzIGTL9.webp" %}

---

## Step 3: Set name and status

| Setting | Description |
|---------|-------------|
| **Rule name** | A descriptive name for your reference. A default name is generated based on the validation type you choose (e.g., "Block PO Box addresses"). |
| **Status** | **Active** — rule applies at checkout. **Test mode** — only triggers when checkout email is `aov@testing.com`. **Inactive** — rule is saved but not applied. |

{% hint style="info" %}
**Tip:** Start with **Test mode** to verify the rule works correctly before activating it for all customers.
{% endhint %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/KxUSFRMhGjhh.webp" %}

---

## Step 4: Choose a validation type

Select one of the three validation types. Each rule uses **one type** — create separate rules if you need multiple types.

| Validation type | What it does | Default rule name |
|-----------------|-------------|-------------------|
| **Block PO Box** | Blocks checkout when the address contains PO Box patterns | "Block PO Box addresses" |
| **Require street number** | Blocks checkout when the address has no street number | "Require street number" |
| **Character limit** | Blocks checkout when a field exceeds character limits | "Character limit — [Field name]" |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/bpQ6tjDauUQe.webp" %}

---

## Step 5: Configure validation settings

Settings change depending on the validation type you selected.

### Block PO Box

{% embed url="https://d2798l25hiaz3h.cloudfront.net/78YgA1QNcgvB.webp" %}

| Setting | Description |
|---------|-------------|
| **Apply to** | Choose which address fields to check — **Address line 1** and/or **Address line 2**. Both are checked by default. At least one must be selected. |
| **Also block military addresses (APO/FPO/DPO)** | Toggle (default OFF). When enabled, addresses containing APO, FPO, or DPO are also blocked. |
| **Custom blocked keywords** | Add your own keywords to block. Type a keyword and press Enter to add it as a tag. The address is rejected if it contains any of these keywords (case-insensitive, substring match). |

**Built-in patterns** — the following are always detected (case-insensitive):
- PO Box, P.O. Box, P.O Box, P O Box, Post Office Box
- POB, Box + number (e.g., "Box 123")
- PMB (Private Mailbox)
- Parcel Locker

{% hint style="info" %}
**Custom keyword examples:** `General Delivery`, `Lockbox`, `Drawer`, `Postfach` (German), `Boite Postale` (French). Be careful with short/generic keywords like "box" — they may block valid addresses.
{% endhint %}

---

### Require street number

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Q696L5aBlC6w.webp" %}

| Setting | Description |
|---------|-------------|
| **Apply to** | Choose which fields to check — **Address line 1** (checked by default) and/or **Address line 2**. At least one must be selected. |
| **Validation mode** | **Must contain a number** (default) — the address must have at least one digit anywhere (e.g., "456 Oak Ave" or "Hauptstrasse 42"). **Must start with a number** — the address must begin with a digit (e.g., "456 Oak Ave"). Stricter — best for US/Canada format. |
| **Exempt countries** | Select countries where this rule should NOT apply. Some countries (e.g., Japan, UAE, Saudi Arabia) use addressing systems without traditional street numbers. Leave empty to apply to all countries. |

{% hint style="warning" %}
**"Must start with a number"** is stricter and may block valid addresses in countries where the street number comes after the street name (e.g., "Hauptstrasse 42" in Germany). Use the **Exempt countries** setting or choose **"Must contain a number"** if you ship internationally.
{% endhint %}

---

### Character limit

{% embed url="https://d2798l25hiaz3h.cloudfront.net/LUE0do7W1nFI.webp" %}

| Setting | Description |
|---------|-------------|
| **Field** | Select the checkout field to limit. Options: Address line 1, Address line 2, City, Company, First name, Last name, Phone, ZIP / Postal code. |
| **Minimum characters** | The minimum number of characters required. Leave empty to skip the minimum check. |
| **Maximum characters** | The maximum number of characters allowed. Leave empty to skip the maximum check. |

At least one limit (minimum or maximum) must be set. If both are set, the minimum must be less than the maximum.

{% hint style="info" %}
**Use placeholders in your error message.** Include `{min}` and `{max}` in the error message — they will be replaced with the actual values at checkout. For example: "Must be between {min} and {max} characters." becomes "Must be between 5 and 50 characters."
{% endhint %}

---

## Step 6: Add conditions (optional)

By default, the rule applies to **all checkouts**. Expand the **Additional Conditions** section to narrow down when the rule triggers.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/m0BAhyn6tBhe.webp" %}

### Two modes

| Mode | Behavior |
|------|----------|
| **No condition** | Rule **always** applies to all orders |
| **Set conditions** | Rule only applies when **all** conditions are satisfied (AND logic) |

### Available condition types

| Condition | Description |
|-----------|-------------|
| **Included product** | Rule only applies when the cart contains this product |
| **Excluded product** | Rule does NOT apply when the cart contains this product |
| **Subtotal value** | Rule only applies when the order value meets the threshold |
| **Customer tag** | Rule only applies when the customer has (or doesn't have) a specific tag |
| **Shipping country** | Rule only applies for specific countries |

{% hint style="info" %}
All conditions use **AND logic** — every condition must be true for the rule to trigger. For example: "Block PO Box" + "Shipping country = US" means PO Box addresses are only blocked for US shipments.
{% endhint %}

---

## Step 7: Set the app failure fallback

| Setting | Default | Description |
|---------|---------|-------------|
| **Allow customer to complete the checkout, if the app fails or experiences a problem** | Checked | When enabled, if the app encounters an error or times out, checkout proceeds normally — buyers are not blocked by a technical issue. |

{% hint style="warning" %}
We recommend keeping this **checked**. Unchecking it means a temporary app issue could block all checkouts.
{% endhint %}

---

## Step 8: Configure error message and position

{% embed url="https://d2798l25hiaz3h.cloudfront.net/LUE0do7W1nFI.webp" %}

### Error message

Enter the message buyers will see at checkout. A default message is pre-filled based on the validation type:

| Validation type | Default error message |
|-----------------|----------------------|
| Block PO Box | "Cannot deliver to PO Box addresses. Please use a street address." |
| Require street number | "Missing street number. Please update your address." |
| Character limit (min only) | "Minimum {min} characters required." |
| Character limit (max only) | "Maximum limit of {max} characters." |
| Character limit (both) | "Must be between {min} and {max} characters." |

You can edit the message to anything you prefer. Keep it clear and helpful — tell buyers what to do, not just what went wrong.

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

**Smart defaults:** The error position is automatically set based on the validation type — Block PO Box and Require street number default to **Address line 1**, Character limit defaults to the **selected field**.

{% hint style="info" %}
For Block PO Box and Require street number, **Address line 1** is usually the best position — it draws attention to the exact field buyers need to fix.
{% endhint %}

---

## Step 9: Preview and save

The right sidebar shows a **live preview** of how your error message will appear based on the selected position. The preview updates in real time as you change the message, position, or validation settings.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/oK2X0oG8VZfY.webp" %}

### Full checkout preview

Click **"Preview"** below the sidebar preview to open a full-screen modal showing the complete checkout layout with your error message rendered at the correct position.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/oK2X0oG8VZfY.webp" %}

When everything looks good:
1. Set the **Status** to your preferred option
2. Click **Save** in the top bar

The rule takes effect at checkout immediately.

---

## Test your rule with Test Mode

Before activating a rule for all customers, test it first:

1. Set the rule **Status** to **Test mode** and save
2. Go to your store and add a physical product to the cart
3. Proceed to checkout
4. Enter **aov@testing.com** as the checkout email
5. Enter an address that should trigger the rule (e.g., "PO Box 123" for a Block PO Box rule)
6. Verify the error message appears at the correct position
7. Fix the address (e.g., change to "456 Main Street") and verify the error disappears
8. Once verified, change the status to **Active**

{% hint style="warning" %}
**Test mode only works with the email aov@testing.com.** All additional conditions (if any) must also be satisfied for the rule to take effect.
{% endhint %}

---

## Manage existing rules

### Toggle status

Use the **Pause** / **Start** action on any rule to quickly toggle its status without opening the editor.

### Edit a rule

Click the **edit icon** (pencil) in the Actions column, or click the rule name to open the editor.

### Delete rules

- **Single rule:** Click the **delete icon** (trash) in the Actions column
- **Bulk delete:** Select multiple rules with checkboxes, then click **Delete rules**

Other bulk actions: **Activate rules**, **Deactivate rules**.

{% hint style="warning" %}
Deletion is permanent. The rule cannot be recovered.
{% endhint %}

---

## Tips

- **Start with Test mode** — verify the rule works correctly before activating for all customers
- **Use smart default positions** — let the app choose the error position, or pick the field most relevant to the validation type
- **Keep messages actionable** — tell buyers what to do (e.g., "Please use a street address" instead of "PO Box not allowed")
- **Be careful with custom keywords** — short keywords like "box" may block valid addresses. Use specific terms like "PO Box" or "Lockbox"
- **Exempt countries for street numbers** — if you ship to Japan, UAE, or other countries without traditional street numbers, add them to the exempt list
- **Combine with conditions** — use "Shipping country = US" to only enforce PO Box blocking for US orders, or "Subtotal > $200" to only require street numbers for high-value orders
- **Character limits for integrations** — if your ERP or fulfillment system has field length limits, set matching character limits to prevent import errors
- **Check the limits** — Shopify allows up to 25 active validation rules at once (shared across all validation rule types)

---

## FAQs

### General

**Q: Do I need Shopify Plus for Address Validation?**
A: No. Address Validation uses Shopify Functions, which are available on all Shopify plans.

**Q: How many rules can I have?**
A: You can have up to **25 active validation rules** at once (shared with Custom Rules, Geo Restriction, and other validation rule types).

**Q: Can I combine multiple validation types in one rule?**
A: No. Each rule uses one validation type. Create separate rules if you need Block PO Box and Require street number at the same time — both will be enforced independently.

**Q: Do rules take effect immediately after saving?**
A: Yes. Once a rule is set to **Active** and saved, it applies to all new checkouts immediately.

**Q: Does Address Validation work with digital products?**
A: No. Digital products have no shipping address, so address validation rules do not trigger for digital-only orders.

### Block PO Box

**Q: What patterns does Block PO Box detect?**
A: Built-in patterns include: PO Box, P.O. Box, P.O Box, P O Box, Post Office Box, POB, Box + number (e.g., Box 123), PMB, and Parcel Locker. All are case-insensitive.

**Q: Will it block military addresses (APO/FPO/DPO)?**
A: By default, no. Military addresses are allowed. Enable the **"Also block military addresses"** toggle to block APO, FPO, and DPO addresses as well.

**Q: What if the PO Box is in the middle of the address?**
A: It will still be blocked. The pattern matches anywhere in the address field — for example, "Suite 5, PO Box 123" would be blocked.

**Q: What happens if the address field is empty?**
A: Block PO Box does **not** trigger on empty fields. It only checks addresses that have been entered.

### Require street number

**Q: What's the difference between "Must contain a number" and "Must start with a number"?**
A: "Must contain a number" checks for any digit anywhere in the address (e.g., both "123 Main St" and "Hauptstrasse 42" pass). "Must start with a number" requires the address to begin with a digit (e.g., "123 Main St" passes, but "Hauptstrasse 42" does not).

**Q: Why are some countries exempt?**
A: Countries like Japan, UAE, and Saudi Arabia use addressing systems that don't follow the traditional street-number format. Exempting these countries prevents blocking valid addresses.

**Q: What if the address field is empty?**
A: Require street number does **not** trigger on empty fields. It only validates addresses that have been entered.

### Character limit

**Q: How are characters counted?**
A: Characters are counted by length, including spaces and special characters. Unicode characters (e.g., Japanese, Arabic) are counted correctly.

**Q: Can I set just a minimum or just a maximum?**
A: Yes. You can set one or both. At least one limit is required.

**Q: How do the {min} and {max} placeholders work?**
A: When the error message displays at checkout, `{min}` is replaced with the minimum value and `{max}` is replaced with the maximum value you set. For example, "Must be between {min} and {max} characters" becomes "Must be between 5 and 50 characters."

### Error message

**Q: Can I use different languages in the error message?**
A: Yes. Enter the message in any language you prefer — it will display exactly as typed.

**Q: What happens if multiple rules trigger at the same time?**
A: All matching rules display their error messages. Buyers must resolve all errors before completing checkout.

**Q: Does the error block checkout or just show a warning?**
A: The error **blocks checkout** — buyers cannot complete their purchase until the address meets all active rules.
