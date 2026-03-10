# Rename a Payment Method

Use this rule to change how a payment method is displayed to buyers at checkout — without removing it.

## When to Use

- Make payment method names clearer (e.g., "COD" → "Pay on Delivery")
- Localize names for specific markets
- Add estimated processing time to the name

## Setup

1. Go to **Checkout Customization** → **Payment** tab
2. Click **Create rule** → select **Change name of payment method**
3. Set a **Rule name** and **Status** (Active / Inactive)
4. Configure **Trigger Conditions** (optional)
5. In the **Rule Action** section, add name mappings:
   - **Original name** — The exact name as it appears in Shopify
   - **New name** — The name buyers will see at checkout
6. Add multiple mappings if needed
7. Click **Save**

{% hint style="warning" %}
The **Original name** must match exactly how the payment method appears in Shopify. Check your Shopify Payments settings to confirm the exact name.
{% endhint %}
