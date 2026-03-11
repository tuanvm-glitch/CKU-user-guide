# Add Products & Discounts

This is **Step 2** in the offer editor. Choose products to upsell and set optional discounts.

---

## Product sources

Click **"Add product"** to see a popover:

| Source | Description |
|--------|-------------|
| **AI Smart Pick** | AI recommends products based on buyer's cart. Default discount: 10%. |
| **Select Product** | Opens Shopify product picker — choose specific products and variants. |

---

## Product list

After adding products, they appear as cards with drag handles for reordering.

![Step 2 — Product list with stats](https://i.ibb.co/YTdSHSSd/step2-products-v2.png)

### Statistics row

Above the product list, real-time performance data:

| Stat | Description |
|------|-------------|
| **Views** | Times the offer was displayed at checkout |
| **Orders** | Orders that included an upsell product |
| **Revenue** | Total revenue from upsell products |
| **Conversion** | Orders ÷ Views × 100% |

### Product card elements

| Element | Description |
|---------|-------------|
| **Drag handle** (⋮⋮) | Drag to reorder — first product shows first at checkout |
| **Thumbnail** | Product image from Shopify |
| **Name** | Clickable — opens product in Shopify admin |
| **Variant count** | e.g., "36/36 variants" or "1/1 variants" |
| **Discount badge** | Shows "20%" or "10%" — the discount for this product |
| **Edit icon** (✏️) | Opens product settings modal |
| **Delete icon** (🗑) | Removes product from offer |

---

## Per-product settings

Click the **edit icon** (✏️) on a product card to open the settings modal:

![Product edit modal — discount and custom title](https://i.ibb.co/7Jgp4dpZ/product-edit-modal3-v2.png)

### Discount section

| Setting | Options | Default |
|---------|---------|---------|
| **Discount type** | Percentage / Fixed amount / No discount | No discount |
| **Discount value** | Number field (only if discount type selected) | — |

| Type | Example |
|------|---------|
| **Percentage** | 20% off → $60 product becomes $48 |
| **Fixed amount** | $5 off → $60 product becomes $55 |
| **No discount** | Full price |

{% hint style="info" %}
Discounts are applied automatically using Shopify's Discount Code system. Buyers don't need to enter any code.
{% endhint %}

### Custom title section

| Setting | Description |
|---------|-------------|
| **Use custom title** | Checkbox — override the product name in the upsell block |
| **Custom title** | Text field (visible when checkbox is on) |

**Use case:** Show "Premium Bundle — Save 15%" instead of "Plain White T-Shirt".

---

## Validation

| Rule | Error message |
|------|---------------|
| No products added | "Add products that will be offered to customers" |
