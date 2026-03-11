# Set Trigger Conditions

Trigger conditions control **when** your upsell offer appears at checkout. This is **Step 1** in the offer editor.

---

## No condition vs. Set conditions

Click Step 1 header to expand, then choose:

| Mode | Behavior |
|------|----------|
| **No condition** | Offer is **always** shown to all buyers. Label: "Always show offer without rule" |
| **Set conditions** | Offer only shows when **all conditions are satisfied** (AND logic) |

![Trigger — No condition selected](https://i.ibb.co/fGMC1zP5/trigger-no-condition-v2.png)

---

## Set conditions

When you select **Set conditions**, a condition builder appears. You can add up to **4 conditions** (each type used once). Click **"+ Add 'AND' condition"** to add rows.

![Trigger — Set conditions with condition builder](https://i.ibb.co/Y4d1vW96/trigger-set-conditions-v2.png)

---

## Available condition types

### 1. Included Product (or variant)

| Setting | Details |
|---------|---------|
| **UI** | Dropdown → click **Browse** to open product picker |
| **Selection** | Choose products; optionally select specific variants |
| **Logic** | Cart must contain **at least one** of the selected products |

**Example:** Show upsell for phone cases only when buyer has a phone in cart.

### 2. Excluded Product (or variant)

| Setting | Details |
|---------|---------|
| **UI** | Same product picker as Included |
| **Logic** | Cart must **NOT contain any** of the selected products |

**Example:** Don't show upsell for Product B if buyer already has it.

### 3. Subtotal Value

| Setting | Details |
|---------|---------|
| **Operators** | Greater ≥, Less ≤, Equal = |
| **Input** | Number field with currency prefix ($) |
| **Range toggle** | Click "Use a range" → two fields (From / To). Click "Change to basic" to revert. |

**Range mode:** Offer shows when `From ≤ subtotal ≤ To`

{% hint style="info" %}
**How subtotal is calculated:** Original cart value **before any discounts** — does not include upsell items already added during checkout.
{% endhint %}

### 4. Customer Tag

| Setting | Details |
|---------|---------|
| **Operator** | Dropdown: **Include** (has tag) or **Exclude** (does not have tag) |
| **UI** | Click **Add customer tag** to browse/select tags |
| **Include logic** | Customer must have **at least one** selected tag |
| **Exclude logic** | Customer must **NOT have any** selected tags |

{% hint style="warning" %}
**Guest checkout:** If buyer is not logged in, customer tag conditions are **automatically skipped** — the offer still shows.
{% endhint %}

---

## AND logic

Multiple conditions are joined with **AND** — all must be true simultaneously.

**Example:** Included product "Running Shoes" + Subtotal ≥ $80 + Customer tag "vip" → offer only shows when all 3 are true.

---

## Managing conditions

| Action | How |
|--------|-----|
| **Add** | Click "+ Add 'AND' condition" |
| **Change type** | Use the dropdown on the left |
| **Remove** | Click trash icon (enabled if 2+ conditions) |
| **Max** | 4 conditions — each type used only once |

---

## Validation

| Rule | Error message |
|------|---------------|
| Included product — no products chosen | "Select at least one product customers must buy" |
| Excluded product — no products chosen | "Select at least one product customers must NOT buy" |
| Customer tag — no tags chosen | "Customer tag can't be blank" |
