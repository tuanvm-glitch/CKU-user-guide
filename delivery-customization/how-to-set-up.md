# Delivery Customization — How to Set Up

Control which shipping options appear at checkout, how they're named, and in what order. Create rules to hide irrelevant methods, rename them for clarity, or reorder them to promote your preferred option.

{% hint style="info" %}
**Available on all plans.** Delivery Customization uses Shopify Functions — no Shopify Plus required.
{% endhint %}

---

## What it does

Delivery Customization lets you create rules that modify shipping options at checkout:

- **Hide** — Remove delivery methods that don't apply (e.g., hide express shipping for digital products)
- **Rename** — Change how a method is labeled (e.g., "Standard" → "Free Shipping (3–5 days)")
- **Reorder** — Control the display order (e.g., move free shipping to the top)

Each rule can optionally use **trigger conditions** so it only applies when specific criteria are met (product in cart, cart value, customer tag).

---

## Step 1: Go to Checkout Customizations

In the app sidebar, click **Checkout customizations**. Then click the **Delivery method** tab to filter the list.

{% embed url="https://d2798l25hiaz3h.cloudfront.net/vkAvZic7heao.webp" %}

### List page overview

| Feature | Description |
|---------|-------------|
| **Tabs** | Filter by type: All, Delivery method, Payment method |
| **Table** | Shows rule name, status, type, action type, and actions |
| **Status** | Active (live), Test mode (only triggers for test email), Inactive |
| **Actions** | Activate/Deactivate, Edit, Delete |

---

## Step 2: Choose rule type

Click **Create rule** (top right). The rule type page shows two groups:

- **Payment customizations** (left) — for payment methods
- **Shipping customizations** (right) — for delivery methods

{% embed url="https://d2798l25hiaz3h.cloudfront.net/VWusULykfR25.webp" %}

Choose one of the three delivery options:

| Rule type | What it does |
|-----------|-------------|
| **Hide delivery method** | Remove specific shipping options from checkout |
| **Change name of delivery method** | Rename how a method appears to buyers |
| **Reorder delivery method** | Change the display order of shipping options |

---

## Step 3: Configure general settings and trigger conditions

All three rule types share the same editor layout:
- **Left column** — Section labels and descriptions
- **Right column** — Form fields and settings

{% embed url="https://d2798l25hiaz3h.cloudfront.net/DTBbWtp2gIXe.webp" %}

### General setting

| Setting | Description |
|---------|-------------|
| **Rule name** | A name for your reference (e.g., "Hide express for digital products") |
| **Status** | **Active** — rule applies at checkout. **Test mode** — only triggers when checkout email is `aov@testing.com`. **Inactive** — rule is off. |

{% hint style="info" %}
**Test mode** lets you safely verify your rule without affecting real customers. Use `aov@testing.com` as the checkout email to see the rule in action.
{% endhint %}

### Trigger conditions

Choose when the rule applies:

| Mode | Behavior |
|------|----------|
| **No condition** | Rule **always** applies to all orders |
| **Set conditions** | Rule only applies when **all** conditions are met (AND logic) |

{% embed url="https://d2798l25hiaz3h.cloudfront.net/cMjX5zBrOyUz.webp" %}

### Available condition types

| Condition | Operators | Example |
|-----------|-----------|---------|
| **Included product (or variant)** | Contains product / Does not contain | Cart contains "Digital Product" → hide express |
| **Total cart value** | Greater than / Less than | Cart > $75 → show free shipping first |
| **Customer tag** | Has tag / Does not have tag | Tag "VIP" → prioritize express |

Click **"+ Add 'AND' condition"** to combine up to 3 conditions. All conditions must match for the rule to apply.

---

## Rule type: Hide delivery method

When you select **Hide delivery method**, the Rule Action section offers five options:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/InpACfU0ewbE.webp" %}

| Option | Behavior |
|--------|----------|
| **Hide all delivery methods** | Removes all shipping options |
| **Hide specific delivery method(s)** | Hide only the methods you specify by name |
| **Hide delivery method(s) of type** | Hide all methods of a category (e.g., all Pickup options) |
| **Hide delivery method(s) not of type** | Hide everything except a specific category |
| **Show only specific delivery method(s)** | Hide all methods except the ones you specify |

When you choose an option that requires specifying methods, a selector appears:
- **Matching type**: "Name is exactly" — must match the delivery method name precisely
- **Delivery method**: Enter the exact method name as it appears in Shopify

{% hint style="danger" %}
**Be careful with "Hide all"** — if no delivery methods remain visible, buyers cannot complete their purchase. Always test before activating.
{% endhint %}

---

## Rule type: Rename delivery method

When you select **Change name of delivery method**, the Rule Action section shows a rename table:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/5TSavHJLcMOS.webp" %}

| Column | Description |
|--------|-------------|
| **Matching type** | "Name is exactly" — matches the exact delivery method name |
| **Delivery method** | The original name as it appears in Shopify |
| **Rename to** | The new name buyers will see at checkout |

Click **Add** to create additional rename mappings within the same rule.

**Examples:**
- "Standard" → "Free Shipping (3–5 business days)"
- "Express" → "Next-Day Delivery — $12.99"
- "Economy" → "Budget Shipping (7–10 days)"

{% hint style="warning" %}
The **Delivery method** name must match exactly as shown in your Shopify Shipping settings — including spacing and capitalization.
{% endhint %}

---

## Rule type: Reorder delivery method

When you select **Reorder delivery method**, the Rule Action section lets you set the display order:

{% embed url="https://d2798l25hiaz3h.cloudfront.net/s8FMaRlfh9RM.webp" %}

### How to reorder

1. Type a delivery method name in the input field
2. Click **Add**
3. Repeat for each method you want to prioritize
4. **Drag and drop** to set the desired order — top of list appears first at checkout
5. Use the **delete icon** (trash) to remove a method from the list

{% hint style="info" %}
**Tip:** You don't need to list every delivery method — only the ones you want to prioritize. Unlisted methods will still appear, just after the ones you've explicitly ordered.
{% endhint %}

---

## Important notes from Shopify

{% hint style="warning" %}
**Activation in Shopify Settings required.** After creating a delivery rule in the app, you must also activate it in your Shopify admin. Go to **Settings → Shipping and delivery → Delivery customizations**, select your customization, and click **Activate**. If you skip this step, the rule will not take effect at checkout.
{% endhint %}

{% hint style="info" %}
**Draft order checkouts.** Delivery customizations apply to both regular Shopify Checkout **and** draft order checkouts. However, customizations **will not display** in the admin while you are creating a draft order — they only appear on the actual checkout page.
{% endhint %}

---

## Tips

- **Use Test mode first** — verify your rule works correctly with `aov@testing.com` before setting it to Active.
- **Match method names exactly** — delivery method names are case-sensitive. Check your Shopify Shipping settings for the exact names.
- **Combine conditions wisely** — all conditions use AND logic. The rule only triggers when every condition matches.
- **One rule per purpose** — create separate rules for different scenarios rather than trying to handle everything in one rule.
- **Check the limits** — Shopify allows up to **25 active shipping rules** and **25 active payment rules** at once.

---

## Troubleshoot with function logs

Having trouble with a delivery rule not applying at checkout? You can send the function logs directly to the developer for investigation.

1. Open your Shopify admin and go to **Settings → Shipping and delivery → Delivery customizations**
2. Select **AOV Delivery customization** to view the management page
3. In the **Share function logs** section, click **Share logs**
4. Hit **Share logs** again in the confirmation popup

Once shared, the developer can review the execution logs to identify and resolve the issue.
