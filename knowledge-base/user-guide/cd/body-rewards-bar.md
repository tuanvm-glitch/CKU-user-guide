# Rewards Bar

## What is the Rewards Bar?

The Rewards Bar is a visual progress bar inside the cart drawer that motivates customers to add more items or spend more to unlock tiered rewards. Rewards can include free shipping, order discounts, or free products — displayed as milestones that customers work toward.

## Why use the Rewards Bar?

* **Increase average order value** — Tiered goals give customers a clear incentive to add more to their cart.
* **Visual motivation** — A progress bar shows exactly how close they are to the next reward, creating a game-like experience.
* **Flexible reward types** — Offer free shipping, percentage or fixed-amount discounts, or free products at each tier.

## Requirements before using

* You must have the **AOV.ai Cart Drawer** app installed and active.
* If offering free shipping as a reward, ensure your Shopify shipping settings are configured accordingly.

## How to Set Up?

### Step 1: Open Rewards Bar Settings

1. Go to **AOV.ai Cart Drawer > Cart Editor**.
2. Click **Rewards bar** in the left menu under **Body**.
3. Under **Campaign setting**, choose the **Tiered reward type**:
   * **Total cart value** — Rewards are based on how much the customer spends.
   * **Product quantity** — Rewards are based on how many items are in the cart.

![Open rewards bar and choose type](https://2753131461-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5qQ2eqjWrar8oh2L4x1y%2Fuploads%2Fgit-blob-bb7a718b3368bb4e7335026bf6838a5fe3ce8621%2Fstep-1.png?alt=media)

### Step 2: Set Up Reward Tiers

1. Under **Tiers**, configure each tier:
   * **Reward type** — Choose **Free shipping**, **Order discount**, or **Free product**.
   * **Buy at least** — Set the minimum cart value or quantity to unlock this tier.
   * For **Order discount**, select a **Discount type** (**Percentage** or **Fixed amount**) and enter the **Discount value**.
   * For **Free product**, select the product to give away.
2. Click **Add tier** to create additional reward levels.
3. (Optional) Configure **Threshold by currency** if you sell in multiple currencies, and use **Local currency conversion** for automatic conversions.

> **Tip:** Start with 2-3 tiers. Too many tiers can overwhelm customers rather than motivate them.

![Reward tiers setup](https://2753131461-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5qQ2eqjWrar8oh2L4x1y%2Fuploads%2Fgit-blob-5f96c49f1f70bf835623bf3ae6f0e3f2c26f46d3%2Fstep-2.png?alt=media)

### Step 3: Configure Content Labels

1. Under **Display setting** > **Content**, customize the text customers see:
   * **Title upon achieving all tiers** — The congratulations message when all rewards are unlocked.
   * **Reward** — The label for each reward milestone.
   * **Message before achieving tier** — The motivational message shown while working toward the next tier. Use variables:
     * `{{amount_left}}` — The amount left to reach the next tier.
     * `{{item_left}}` — The number of items left to reach the next tier.
     * `{{discount}}` — The discount value granted at the current tier.

![Content labels](https://2753131461-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5qQ2eqjWrar8oh2L4x1y%2Fuploads%2Fgit-blob-eebf108a217cc2d2501abb672d1eddc1563add57%2Fstep-3.png?alt=media)

### Step 4: Customize Colors and Style

1. Under **Display setting** > **Style**, set the visual appearance:
   * **Title color** — The color of the rewards bar heading.
   * **Milestone color** — The color of milestone markers.
   * **Reached text color** / **Unreached text color** — Text colors for completed and pending tiers.
   * **Reached icon color** / **Unreached icon color** — Icon colors for completed and pending tiers.
   * **Reward bar color** — The main color of the progress bar.
   * **Reached bar background** / **Unreached bar background** — Background colors for the filled and unfilled portions of the bar.
2. Under **Animation**:
   * Toggle **Enable animation upon last tier** to celebrate when customers reach the final reward.
   * Toggle **Right-to-left animation** if your store uses an RTL language.

![Colors and style](https://2753131461-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5qQ2eqjWrar8oh2L4x1y%2Fuploads%2Fgit-blob-f0cc32c90771f09493fb24147ea3fe311620c39e%2Fstep-4.png?alt=media)

### Step 5: Preview and Save

1. Click **Preview** to see the rewards bar in action within the cart drawer.
2. Click **Save** to apply your settings.

![Preview and save](https://2753131461-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F5qQ2eqjWrar8oh2L4x1y%2Fuploads%2Fgit-blob-e1ad8ff8ea8e4fa12638ef1bbf452b07e3cda774%2Fstep-5.png?alt=media)

Your rewards bar is now live. Customers will see their progress toward rewards as they shop, encouraging them to add more to their cart! 🚀
