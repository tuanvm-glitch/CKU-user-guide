# Milestone Rewards

---
description: >-
  The Milestone rewards camp is a powerful campaign type that motivates
  customers to spend more by showing them a visual progress bar with tiered
  rewards — order discounts, free shipping, and free gifts
---

# Milestone Rewards

***

### Overview <a href="#overview" id="overview"></a>

The Milestone Progress Bar works by:

* Showing customers **how close they are** to unlocking the next reward
* Displaying **multiple reward tiers** (up to the max tier limit) on a single bar
* Supporting **3 types of rewards** per tier: Order Discount, Free Shipping, Free Gift
* Updating the bar **in real time** as customers add items to their cart

```
Example campaign with 3 tiers:
  ─────●────────────●────────────●
  $50             $100           $150
  10% off      Free Shipping   Free Gift
```

> **Note:** Only one Milestone campaign can be active per store at a time.

***

### Step 1 — Create a Milestone Campaign <a href="#step-1--create-a-milestone-campaign" id="step-1--create-a-milestone-campaign"></a>

1. In your Shopify Admin, open the **AOV.ai app**
2. Navigate to **Gift Campaigns** in the left sidebar
3. Click **Create campaign**
4. Select **AOV Milestone Rewards** as the campaign type

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2F8IERjSRwV4DzMPwa1P94%2F02_campaign_list.png?alt=media&#x26;token=c9545cef-4d12-44f2-872e-2146421bac7f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FnEhqpN6P8MKKEUDEMFL1%2F03_create_campaign.png?alt=media&#x26;token=5f6f0898-ab6f-4f44-a376-1f87d48323be" alt=""><figcaption></figcaption></figure>

***

### Step 2 — Choose a Gift Method <a href="#step-2--choose-a-gift-method" id="step-2--choose-a-gift-method"></a>

After creating the campaign, you will see the **Gift Method** card at the top of the campaign editor.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FSrtPRCvQAS7x0Uza5XIv%2F04_campaign_editor.png?alt=media&#x26;token=c0173810-db46-45de-873d-488d78373771" alt=""><figcaption></figcaption></figure>

#### Multi-goal (Recommended) <a href="#multi-goal-recommended" id="multi-goal-recommended"></a>

Shows a **progress bar with multiple milestone icons** — one icon per reward tier. The customer sees all rewards at once and can track their progress toward each one.

Use this when you want to:

* Offer **3 or more rewards** in one campaign
* Encourage customers to keep spending past the first reward
* Display a **visual roadmap** of all available rewards

#### Single-goal <a href="#single-goal" id="single-goal"></a>

Shows a **single-tier progress bar** that focuses on one reward — typically a free gift. The bar fills up until the customer reaches the trigger amount, then reveals the gift product card.

Use this when you want to:

* Highlight **one specific free gift** prominently
* Keep the widget **simple and clean**
* Show the gift product image, variant picker, and pricing directly in the bar

***

### Step 3 — Set Up Milestones (Tiers) <a href="#step-3--set-up-milestones-tiers" id="step-3--set-up-milestones-tiers"></a>

This is the core of your campaign. Scroll down to the **Tiered Rewards** card.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FN1dCTioqxn4ajLsklScp%2F06_milestone_tiers.png?alt=media&#x26;token=6b472593-7cdc-41e4-884a-a4de2af3ff5d" alt=""><figcaption></figcaption></figure>

#### 3.1 Choose a Trigger Type <a href="#id-31-choose-a-trigger-type" id="id-31-choose-a-trigger-type"></a>

At the top of the Tiered Rewards card, select how the bar triggers:

| Option            | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| **Cart Value**    | Progress is based on the total cart amount (e.g., spend $50)     |
| **Item Quantity** | Progress is based on number of items in cart (e.g., buy 3 items) |

#### 3.2 Add Your First Milestone <a href="#id-32-add-your-first-milestone" id="id-32-add-your-first-milestone"></a>

Click **+ Add milestone** and choose a reward type from the dropdown:

**Option A — Order Discount**

| Field             | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| **Buy at least**  | Cart value (or item count) the customer must reach to unlock this reward |
| **Discount Type** | `Percentage` (e.g., 10%) or `Fixed amount` (e.g., $5 off)                |
| **Value**         | The discount amount. Percentage is capped at 100%                        |

**Option B — Free Shipping**

Free Shipping tiers have only the **Buy at least** threshold — no discount value needed (it always equals 100% shipping discount).

> **Note:** You can only have **one Free Shipping tier** per campaign.

**Option C — Free Gift**

| Field               | Description                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Buy at least**    | Cart threshold to unlock the free gift                                                                                                                                  |
| **Select Products** | Opens a product picker — customers can choose from all selected products                                                                                                |
| **Gift Limit**      | When enabled (and multiple gifts selected), lets you set the **maximum number of gifts** a customer can choose. Only available when Grab Gift Behavior is set to Manual |

> **Tip:** Select multiple products so customers can pick their preferred gift. This increases conversion.

***

### Step 4 — Design the Progress Bar <a href="#step-4--design-the-progress-bar" id="step-4--design-the-progress-bar"></a>

Navigate to the **Display setting** tab of your campaign and customize widget Milestone

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2F8Q4UHsZESxXJg174PyJx%2F09_design_layout.png?alt=media&#x26;token=dc9e7e18-83c0-4aea-a0bb-5fccbcfe9991" alt=""><figcaption></figcaption></figure>

#### 4.1 Layout Style <a href="#id-41-layout-style" id="id-41-layout-style"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FmMeZ8xE94z3z9Sdnqo4o%2F10_design_icon.png?alt=media&#x26;token=650bd9a6-9998-4d19-b7c9-7fc8e823ada9" alt=""><figcaption></figcaption></figure>

**Layout 1**

One horizontal bar spans the full width. Each milestone has an **icon positioned along the bar** at its threshold position.

**Layout 2**

Each tier gets its **own independent progress bar**. Below each bar is an icon and label.

#### 4.2 Bar Appearance <a href="#id-42-bar-appearance" id="id-42-bar-appearance"></a>

| Setting                  | Default | Description                                         |
| ------------------------ | ------- | --------------------------------------------------- |
| **Bar Thickness**        | 8px     | Height of the progress bar track                    |
| **Bar Radius**           | 16px    | Corner roundness — `0` = square, `16+` = pill shape |
| **Padding Top / Bottom** | 0px     | Space inside the widget above/below the bar         |
| **Margin Top / Bottom**  | 8px     | Space outside the widget                            |
| **Spacing Gap**          | 24px    | Space between the title message and the bar         |

#### 4.3 Milestone Icons <a href="#id-43-milestone-icons" id="id-43-milestone-icons"></a>

**Icon Source**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FitwAdL9ZJWCa2MrTsNwJ%2Ffg_a_icon_source_row.png?alt=media&#x26;token=491d2e41-4882-4d04-99b7-cc6116d39509" alt=""><figcaption></figcaption></figure>

| Option      | What it shows                                                                 |
| ----------- | ----------------------------------------------------------------------------- |
| **Default** | Built-in SVG icons: discount tag, truck, gift card                            |
| **Upload**  | Your own images — upload separate icons for Discount, Shipping, and Free Gift |
| **None**    | No icons shown (text only)                                                    |

> **Free Gift special case:** When Icon Source is **Upload** and the reward is a Free Gift, you can choose to show:
>
> * The **product image** of the first selected gift product
> * A **custom uploaded image**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FkNHgcnYNNE9FoVQtM1ou%2Ffg_d_upload_image_mode.png?alt=media&#x26;token=493e0f20-e4ee-4532-b8eb-a0f53a037327" alt=""><figcaption></figcaption></figure>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FuDi4gyCLOwlW2L8KAmT1%2Ffg_e_display_as_icon_on.png?alt=media&#x26;token=f9d67cf2-caf0-4e94-badc-3cae79147925" alt=""><figcaption></figcaption></figure>

**Icon Size**

| Setting                 | Default | Description                                    |
| ----------------------- | ------- | ---------------------------------------------- |
| **Icon Size**           | 16px    | Size of the icon graphic inside the container  |
| **Icon Border Radius**  | 32px    | Shape of the icon circle container             |
| **Icon Border Opacity** | 100%    | Opacity of the border on incomplete milestones |

**When a Milestone is Reached**

| Option                | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| **Done Icon**         | Replaces the entire icon with a ✓ checkmark (animated fade-in)                                      |
| **Checkmark Overlay** | Keeps the original icon + adds a small circular checkmark badge at the top-right corner of the icon |

**Icon Position (Segmented Layout only)**

| Option     | Description                                         |
| ---------- | --------------------------------------------------- |
| **Beside** | Icon and reward label are side by side horizontally |
| **Above**  | Icon sits above the reward label                    |

#### 4.4 Text & Colors <a href="#id-44-text--colors" id="id-44-text--colors"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FFd0aPZAvKlvbqMnwtGhM%2F17_message_templates.png?alt=media&#x26;token=2139843f-76e1-4b48-9bd1-cc2ae3c438fc" alt=""><figcaption></figcaption></figure>

**Title Messages**

The **title text** at the top of the bar changes dynamically based on the customer's cart:

| Customer's cart         | Message shown                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Below first milestone   | `beforeAchievedMessage` of the first tier (e.g., _"Spend **$35 more** to get 10% off"_) |
| Between milestones      | `beforeAchievedMessage` of the next unreached tier                                      |
| Reached final milestone | `postAchieveMessage` (global setting, e.g., _"You've unlocked all rewards! 🎉"_)        |

**Available variables for message templates:**

| Variable             | Replaced with                                      |
| -------------------- | -------------------------------------------------- |
| `{{amount_left}}`    | Formatted currency amount left (e.g., `$35.00`)    |
| `{{item_left}}`      | Number of items left (for quantity-based triggers) |
| `{{nearest_reward}}` | Bold text of the next reward (e.g., **10% off**)   |

#### 4.5 Animations <a href="#id-45-animations" id="id-45-animations"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FdfgcgmY8tmfe2feOlz0E%2F18_animation_options.png?alt=media&#x26;token=5b989c86-2a42-4e59-8b69-2ecdb4220ecc" alt=""><figcaption></figcaption></figure>

| Animation   | Effect                                                                 |
| ----------- | ---------------------------------------------------------------------- |
| **None**    | No animation on the bar                                                |
| **Striped** | Diagonal white stripes continuously scroll from right to left          |
| **Shimmer** | A light gleam sweeps across the bar from left to right every 2 seconds |

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FPfjJcnQKedRVh9dWa1vP%2Fimage.png?alt=media&#x26;token=768ebf90-86f4-47ff-97cf-473e522f1433" alt=""><figcaption></figcaption></figure>

***

### Step 5 — Configure Display Location <a href="#step-5--configure-display-location" id="step-5--configure-display-location"></a>

The Milestone Progress Bar can be displayed in two locations:

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FCRvTbJ52zgSKUBA2MM2K%2F19_display_location.png?alt=media&#x26;token=ffd5c91d-04ba-447a-a6de-dce6c3d06960" alt=""><figcaption></figcaption></figure>

#### Product Page (Theme App Extension) <a href="#product-page-theme-app-extension" id="product-page-theme-app-extension"></a>

The bar is embedded directly into your product page template using Shopify's **Theme App Extension** system.

**To enable it:**

1. Click **Go to Theme Editor** (or navigate to **Online Store > Themes > Customize**)
2. Select a **Product** template
3. In the section list, click **Add block**
4. Search for **"AOV Milestone Bar"**
5. Position the block where you want it to appear (recommended: below the Add to Cart button)
6. Click **Save**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FRtjiEwDRPBxsILkZVHsW%2Fimage.png?alt=media&#x26;token=c77ddb7d-e7d5-41f6-96cc-18c6e2564bc9" alt=""><figcaption></figcaption></figure>

#### Cart Drawer <a href="#cart-drawer" id="cart-drawer"></a>

Cart drawer integration requires contacting our support team for manual setup as it depends on your specific theme's cart drawer implementation.

***

### How It Looks to Customers <a href="#how-it-looks-to-customers" id="how-it-looks-to-customers"></a>

#### Classic Layout <a href="#classic-layout-1" id="classic-layout-1"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2F1Kk96XnxGED3GRAtZF8L%2F21_classic_layout_inprogress.png?alt=media&#x26;token=6b68fc25-fdf0-4ef9-b82e-b9ee45bd7108" alt=""><figcaption></figcaption></figure>

#### Segmented Layout <a href="#segmented-layout-1" id="segmented-layout-1"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FmxxTFgnCNDfEZ9AnLLZx%2F23_segmented_layout.png?alt=media&#x26;token=73de9b7e-cd02-4c4c-8f6a-0131b122f85a" alt=""><figcaption></figcaption></figure>

#### Single-Goal Layout <a href="#single-goal-layout" id="single-goal-layout"></a>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FNwavujAfpa7uBFOo2uv0%2F25_single_goal_achieved.png?alt=media&#x26;token=ca5d9551-3ec2-4a57-a0ec-34094e46ea35" alt=""><figcaption></figcaption></figure>

***

### Tips & Best Practices <a href="#tips--best-practices" id="tips--best-practices"></a>

#### Threshold Strategy <a href="#threshold-strategy" id="threshold-strategy"></a>

* **Start low, end high** — set your first milestone at a value just above your current Average Order Value (AOV). This nudges the most customers to reach at least one reward
* **Space tiers evenly** — e.g., $50 → $100 → $150 works better than $50 → $51 → $200
* **End with a high-value reward** — save the free gift for the last (highest) tier to maximize spend

#### Reward Mix <a href="#reward-mix" id="reward-mix"></a>

* Combine reward types for maximum effect:
  * Tier 1: Small order discount (5–10%) — easy to reach, builds momentum
  * Tier 2: Free shipping — high perceived value, customers love it
  * Tier 3: Free gift — most exciting, drives highest cart values

#### Message Copy <a href="#message-copy" id="message-copy"></a>

* Use `{{amount_left}}` in your before-achieved message — showing the exact dollar amount is more motivating than a generic message
* Keep messages **short and action-oriented**: _"Add **$20 more** to get free shipping!"_ ✅
* For the post-achieved message, celebrate the win: _"Congrats! You've unlocked all rewards!"_

#### Design <a href="#design" id="design"></a>

* Use **Shimmer** animation for a premium feel — it draws the eye without being distracting
* For stores with clean minimalist themes, use **Checkmark Overlay** for done milestones instead of replacing the icon
* Match the bar's **Active Bar Color** to your store's primary brand color for a seamless look

***

### FAQ <a href="#faq" id="faq"></a>

**Q: Can I have multiple Milestone campaigns active at once?** A: No. Only one Milestone campaign can be active per store at a time.

**Q: What happens if a customer's cart drops below a milestone threshold?** A: The progress bar animates backwards and the milestone icon reverts to its incomplete state in real time.

**Q: Can I use both Cart Value and Item Quantity triggers in the same campaign?** A: No. You must choose one trigger type for the entire campaign. Changing the trigger type after setting up milestones will reset all milestone messages to new defaults.

**Q: Why is the "Free Shipping" option greyed out when I try to add a second Free Shipping tier?** A: By default, each campaign allows only one Free Shipping tier. This is to prevent conflicting shipping discounts.

**Q: The gift product image is not showing in the icon. Why?** A: Make sure:

1. **Icon Source** is set to `Upload`
2. **Free Gift Display** is set to `Product Image`
3. The gift product has an image assigned
4. The product is selected in the milestone's Free Gift product picker

**Q: Can I translate the milestone messages?** A: Yes. The campaign supports multi-language translations via the **Translations** section of the Design Widget. You can set locale-specific versions of `rewardMessage`, `beforeAchievedMessage`, and `postAchieveMessage`.

***

_For further help, contact our support team through the app or visit our Help Center._

