# VAT Validation — How to Set Up

Collect and validate VAT numbers at checkout. Require buyers to enter a valid VAT number before completing their order — with automatic format validation for 40+ countries.

{% hint style="warning" %}
**Shopify Plus required.** VAT Validation uses Checkout UI Extensions, which require a Shopify Plus plan.
{% endhint %}

---

{% embed url="https://d2798l25hiaz3h.cloudfront.net/BaiGRRPgUblb.webp" %}

## What it does

VAT Validation adds a VAT number input field to your checkout page. You control:

- **Required or Optional** — force buyers to enter a VAT number, or let them skip it
- **Format validation** — automatically checks VAT number format based on the buyer's shipping country (40+ countries supported)
- **Custom error messages** — show clear, localized errors when the field is empty or the format is invalid
- **Conditions** — only show the VAT field for specific countries or customer tags (e.g., B2B, wholesale)

The VAT number is saved to the **order note** — accessible in Order admin and Shopify API.

---

## Before you start: Enable "Allow app to block checkout"

{% hint style="danger" %}
**Required setup.** Without this step, the VAT validation rule will not block checkout — buyers can skip the field even when it's set to Required.
{% endhint %}

This is a one-time setup in the Shopify Checkout Editor.

### Step 1: Open the Checkout Editor

1. Go to **Shopify Admin → Settings → Checkout → Customize**
   Or: **Online Store → Themes → Customize → select "Checkout and customer accounts" page**
2. In the left sidebar under **Main**, find and click the **AOV VAT Validation** block
   - If you haven't added it yet: click **"Add block"** → scroll to **AOV.ai Checkout Upsell** → select **AOV VAT Validation**

### Step 2: Turn on "Allow app to block checkout"

1. With the **AOV VAT Validation** block selected, look at the right panel
2. Under **Checkout behavior**, find the toggle **"Allow app to block checkout"**
3. **Turn it ON**

{% hint style="info" %}
The description reads: *"Orders will be rejected if customer information is missing or invalid."* This is exactly what enables the VAT validation to block checkout when the buyer leaves the field empty or enters an invalid format.
{% endhint %}

### Step 3: Save

Click **Save** in the top right of the Checkout Editor.

{% hint style="success" %}
**Done!** You only need to do this once. After enabling, all your VAT validation rules will be able to block checkout automatically.
{% endhint %}

---

## Step 1: Go to Checkout Validations

In the app sidebar, click **Checkout Validations**. You'll see the list of all validation rules.

---

## Step 2: Create a VAT validation rule

Click **Create validation** (top right), then select **VAT Validation**.

---

{% embed url="https://d2798l25hiaz3h.cloudfront.net/nqusdLRWVvyO.webp" %}

## Step 3: Configure VAT field settings

| Setting | Description |
|---------|-------------|
| **Rule name** | A descriptive name (default: "VAT number validation") |
| **Status** | **Active** — rule applies at checkout. **Test mode** — only triggers for email `aov@testing.com`. **Expired** — saved but not applied. |
| **Field requirement** | **Required** — buyer must enter a valid VAT number. **Optional** — buyer can skip, but if entered, must be valid format. |
| **Field label** | Label shown above the input at checkout (default: "VAT number") |

{% hint style="info" %}
**Tip:** Start with **Test mode** status to verify the rule works correctly before activating it for all customers. Use `aov@testing.com` as the checkout email to see it in action.
{% endhint %}

---

{% embed url="https://d2798l25hiaz3h.cloudfront.net/j6tmXyZwGjYk.webp" %}

## Step 4: Configure error messages

Two error messages control what buyers see:

| Error | When it shows | Default message |
|-------|---------------|-----------------|
| **Empty field error** | Field is Required and buyer leaves it empty | "Please enter your VAT number to continue." |
| **Invalid format error** | Buyer enters a VAT number that doesn't match the country format | "The VAT number format is invalid. Please check and try again." |

Errors display directly below the VAT input field at checkout. Maximum 150 characters each.

---

{% embed url="https://d2798l25hiaz3h.cloudfront.net/Hu00cJsgc2Pu.webp" %}

## Step 5: Set conditions (optional)

By default, the VAT field appears for **all checkouts**. Expand the **Conditions** section to narrow the scope.

| Condition | Description |
|-----------|-------------|
| **Included product** | VAT field only appears when cart contains specific products or variants |
| **Excluded product** | VAT field hidden when cart contains specific products or variants |
| **Subtotal value** | VAT field only appears when cart subtotal meets a threshold (>, >=, <, <=, =) |
| **Customer tag** | Only show for customers with specific tags (e.g., `B2B`, `wholesale`) |
| **Shipping country** | VAT field only appears when buyer ships to specific countries |

All conditions use **AND logic** — every condition must be true for the VAT field to appear.

{% hint style="info" %}
**Example:** Shipping country = Germany, France, Italy + Customer tag = `B2B` → VAT field only appears for B2B customers shipping to those 3 countries.
{% endhint %}

---

## Step 6: Save the rule

Click **Save** (top right). The rule is now active based on its status.

---

{% embed url="https://d2798l25hiaz3h.cloudfront.net/1nC4ow09Lp46.webp" %}

## How format validation works

When a buyer enters a VAT number, the system automatically validates the format based on their **shipping country**:

| Scenario | Result |
|----------|--------|
| Buyer ships to Germany, enters `DE123456789` | ✅ Valid — matches Germany's format |
| Buyer ships to Germany, enters `ABC123` | ❌ Invalid — error shown |
| Buyer ships to a country without a format rule (e.g., Australia) | ✅ Any non-empty input accepted |
| Buyer changes shipping country mid-checkout | Format re-validates automatically |

The system supports **40+ countries** including all EU member states and major non-EU European countries (UK, Switzerland, Norway, etc.).

{% hint style="info" %}
**Lowercase is fine.** If a buyer types `de123456789`, the system automatically converts it to uppercase before validating.
{% endhint %}

---

## FAQ

{% embed url="https://d2798l25hiaz3h.cloudfront.net/u97CUoc4vLxg.webp" %}

{% embed url="https://d2798l25hiaz3h.cloudfront.net/t0BSoFuDagUn.webp" %}

**Q: What happens if the buyer uses Apple Pay or Google Pay?**
A: VAT field does not appear for accelerated checkout methods (Shop Pay, Apple Pay, Google Pay). These checkouts proceed without VAT collection.

**Q: Can I have multiple VAT validation rules?**
A: Yes. Each rule can target different countries or customer segments with different settings.

**Q: Where is the VAT number stored after checkout?**
A: In the **order note** (format: `VAT: DE123456789`). You can view it in the Order detail page in Shopify Admin or access via Shopify API.

**Q: Do I need Shopify Plus?**
A: Yes. VAT Validation uses Checkout UI Extensions, which require a Shopify Plus plan.
