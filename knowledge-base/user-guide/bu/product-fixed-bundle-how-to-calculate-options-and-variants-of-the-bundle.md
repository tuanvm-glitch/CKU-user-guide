# How to calculate options and variants of the bundle?

---
description: >-
  Follow this article to know how to calculate how different options and
  variants work in a bundle.
---

# How to calculate options and variants of the bundle?

### What are Options, Variants and Value?&#x20;

<details>

<summary>Options</summary>

Different choices within a bundle (like size or color).

</details>

<details>

<summary>Variants</summary>

Different versions of a product, based on the options selected.&#x20;

</details>

<details>

<summary>Value</summary>

Specific choices or attributes that are associated with the options or variant within a product bundle.&#x20;

</details>

**For example:** Imagine you sell a t-shirt bundle that allows customers to choose their size (Small. Medium, or Large) and color (Red, Blue, or Green). Each combination of size and color would be a variant. The option is the choice (size or color), and the variant is the result of selecting a specific combination. The value represents the particular selection within each option (like selecting the value "Red" for color or "Medium" for size).&#x20;

### How to Calculate Options and Variants&#x20;

Consider the three products in the table below with their corresponding options and values. If a bundled product doesn't have a value for an option, it is marked with an (x).

<table><thead><tr><th width="194">Product name</th><th>Color</th><th>Size</th><th>Paper type</th><th>Cover material</th></tr></thead><tbody><tr><td><strong>Honey Bee Travel Notebook (P1)</strong></td><td>Brown, Beige, Purple, Silver</td><td>A4, A5, B5</td><td>Dot, Grid, Lined</td><td>(x)</td></tr><tr><td><strong>Soft Feather Travel Notebook (P2)</strong></td><td>Purple</td><td>A4, A5, B5</td><td>(x)</td><td>Hardcover, Softcover</td></tr><tr><td><strong>Moonflower Bullet Journal (P3)</strong></td><td>Black, Beige, Pink</td><td>(x)</td><td>Dot</td><td>(x)</td></tr></tbody></table>

#### **1.** How bundled products are calculated?

All products added to the bundle are referred to as bundled products. Therefore:

> **Number of bundled products = Number of selected applicable products**

From the sample, let's create two bundles to see how the calculations work.

**Bundle 1:** Select bundled products are P1 and P2 -> The number of bundled products is 2

**Bundle 2:** Select bundled products are P1, P2, and P3 -> The number of bundled products is 3

#### 2. How options are calculated?

**An option for the bundle is calculated** when the options of the bundled product have **more than one value selected** (\*). Therefore:

> **Number of options = Total number of calculated options from its bundled products**

**For Bundle 1:**

* **Select the following** **options and values for P1**, and we determine that there are 3 option values that meet condition (\*), meaning P1 has 3 options.

<table><thead><tr><th width="149">Option</th><th width="162">Value</th><th width="175">Calculated option</th><th>Explanation (compare to *)</th></tr></thead><tbody><tr><td><strong>Color</strong></td><td>Brown, Beige</td><td>Yes</td><td>Has 2 values</td></tr><tr><td><strong>Size</strong></td><td>A4, A5, B5</td><td>Yes</td><td>Has 3 values</td></tr><tr><td><strong>Paper type</strong></td><td>Dot</td><td>Yes</td><td>Has 3 values</td></tr></tbody></table>

* **Select the following options and values for P2**, and we determine that there are 2 option values that meet condition (\*), meaning P2 has 2 options.

<table><thead><tr><th width="172">Option</th><th width="162">Value</th><th width="175">Calculated option</th><th>Explanation (compare to *)</th></tr></thead><tbody><tr><td><strong>Color</strong></td><td>Purple</td><td>No</td><td>Has 1 value</td></tr><tr><td><strong>Size</strong></td><td>A4, A5</td><td>Yes</td><td>Has 2 values</td></tr><tr><td><strong>Cover material</strong></td><td>Hardcover, Softcover</td><td>Yes</td><td>Has 2 values</td></tr></tbody></table>

Therefore, the number of options for **Bundle 1** is calculated as:

Number of options = Calculated options of P1 + Calculated options of P2

Number of options  = 2 + 3 = 5

**For Bundle 2:**

* **Select the following** **options and values for P1** (similar to Bundle 1), and we determine that there are 3 option values that meet condition (\*), meaning P1 has 3 options.
* **Select the following options and values for P2** (similar to Bundle 1), and we determine that there are 2 option values that meet condition (\*), meaning P2 has 2 options.
* **Select the following options and values for P3**, and we determine that there are 2 option values that meet condition (\*), meaning P3 has 1 option.

<table><thead><tr><th width="163">Option</th><th width="178">Value</th><th width="164">Calculated option</th><th>Explanation (compare to *)</th></tr></thead><tbody><tr><td><strong>Color</strong></td><td>Black, Beige, Pink</td><td>Yes</td><td>Has 3 values</td></tr><tr><td><strong>Paper type</strong></td><td>Dot</td><td>No</td><td>Has 1 value</td></tr></tbody></table>

Therefore, the number of options for **Bundle 2** is calculated as:

Number of options = Calculated options of P1 + Calculated options of P2 + Calculated options of P3

Number of options = 2 + 3 + 1 = 6

#### 3. How variants are calculated?

The number of values for each option is referred to as option values.&#x20;

Variants of the bundle are calculated based on these option values for each bundled product. They are computed by:

> **Number of variants = Product of variants for each bundled product**

**From the selected sample, we get:**

* **P1** has 2 x 3 x 3 = 12 variants
* **P2** has 1 x 2 x 2 = 4 variants
* **P3** has 3 x 1 = 3 variants

**Therefore:**

The number of variants for **Bundle 1** is:

Number of variants = Variants of P1 × Variants of P2

Number of variants = 12 × 4 = 48

The number of variants for **Bundle 2** is:

Number of variants = Variants of P1 × Variants of P2 × Variants of P3

Number of variants = 12 × 4 × 3 = 144

Finally, once you’ve mastered the calculations, you’re ready to create bundles that meet all the requirements. Let’s [dive back in and set up bundles](how-to-set-up) that work perfectly for your needs!<br>

