# Show Product Metafields as Product Description

---
description: >-
  Explore how to use Product Metafields as Product Description in this following
  guideline
---

# Show Product Metafields as Product Description

{% hint style="success" %}
#### Who can use this feature

This feature is available to all AOV Post Purchase merchants who use any of the following offer types:

* Post Purchase
* Thank You Page
* Order Status Upsell
{% endhint %}

### What is this feature

The "Show Product Metafields as Product Description" feature allows merchants to replace the default product description shown in an upsell offer with content pulled from a metafield.

Notice: A metafield is a custom field in Shopify used to store specialized information. This feature uses a specific metafield (`aov_ppu.product_description`) to display a more controlled and concise product description on upsell offer pages.

### Why to use this feature

<details>

<summary>Keep offer layouts clean and focused</summary>

Using a metafield allows you to display a concise, clean message that's tailored for upsell moments and avoid cluttered layouts caused by long default product descriptions.

</details>

<details>

<summary>Maintain consistency</summary>

Metafields let you standardize short descriptions for similar products across your campaigns.

</details>

<details>

<summary>Enhance customer experience</summary>

A short, purpose-driven product description helps them quickly understand the value and act without distraction.

</details>

<details>

<summary>Boost conversion rate</summary>

Merchants can craft descriptions to convert rather to inform with optimized and focused product messaging.

</details>

### How to set up the feature

#### Step 1: Locate and enable the metafield feature

Before creating the metafield itself, you'll need to locate the setting in your AOV Post Purchase offer and begin the activation process.

Open the AOV Post Purchase app.

Go to **Offers** and select the offer you want to modify.

Navigate to **Step 3: Widget content**.

Locate the product card (Upsell or Downsell). Each card displays the current product and configuration options.

Look for the banner labeled **"Show Product metafields as Product description"**.

Click the **"Contact us"** link on the banner. This will guide you to enable the feature and show setup instructions for metafields.

{% embed url="https://app.canvid.com/share/fi_01K1CM8SNZTA3SCVQFAS9V378Y" %}

#### Step 2: Create a metafield definition

In your **Shopify Admin**, click the **Settings** button at the bottom left of the navigation bar.

Click **Settings** > **Metafields and metaobjects**.

Select **Products >** Click **Add definition**.

Set the **Name** to something recognizable, such as AOV Product description.

In **Namespace/key**, enter: `aov_ppu.product_description`.

Choose the type: either **Single line text** or **Multi-line text**.

Assign this metafield to the relevant product categories > Click **Save**.

{% embed url="https://app.canvid.com/share/fi_01K1CKJHG1813D87E9CF0DYK1N" %}

#### Step 3: Add content to your metafield

Go to **Products** in your admin > Select the product you want to update.

Scroll to the **Category metafields** section.

Enter your custom product description in the AOV product metafield's field > **Save** your product.

{% embed url="https://app.canvid.com/share/fi_01K1CMJABC84S7TYQ1JWWN0DXQ" %}

**Step 4: Update the offer in AOV Post Purchase**

Open the **AOV Post Purchase app** > Go to **Offers** and select the offer you want to update.

In **Step 3: Widget content**, ensure the product description is enabled in the template.

{% embed url="https://app.canvid.com/share/fi_01K1CMWVA09XSPFRYJ43092DFB" %}

Remove and re-add the product in the offer to reload the updated metafield.

Save the offer. Once this is complete, your offer will now display the custom metafield content instead of the original Shopify product description.

{% embed url="https://app.canvid.com/share/fi_01K1CN6H77RKZCDDM1701EBJ83" %}

{% hint style="success" %}
#### Example Use Case

Let’s say your original product description includes 6 paragraphs of technical details. You want your upsell to show just 1 sentence:

> "Perfect for post-workout recovery – clean formula, 20g protein per serving."

By creating a metafield with this short version and activating it, your upsell now looks cleaner and more persuasive.
{% endhint %}

### Frequently Asked Questions

<details>

<summary><strong>What happens if I don’t set up the metafield correctly?</strong></summary>

The offer will fall back to displaying the original product description.

</details>

<details>

<summary><strong>Can I use HTML or rich text in the metafield?</strong></summary>

No, only plain text is supported.

</details>

<details>

<summary><strong>Will this affect the product page description?</strong></summary>

No. This change only applies to the AOV Post Purchase offer pages.

</details>

<details>

<summary><strong>Can I use different metafields for different offers?</strong></summary>

Currently, only one metafield key is supported: `aov_ppu.product_description`

</details>

Need help or have questions about metafields or templates? We're here for you.

**📩 Contact AOV Support:** [win@aov.ai](mailto:win@aov.ai)

That’s it! You’re all set to create more focused and effective upsell pages.

We’re excited to see how this feature helps you optimize your upsell experience.

