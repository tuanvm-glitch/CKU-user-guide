# Definition of Revenue by App

# Definition of Revenue by App

## What this means

AOV.ai Free Gift calculates **revenue only from the part of the order that qualifies for a campaign**, not from the entire order total.\
This makes your analytics:

* **More accurate** – only counts what’s directly tied to the campaign.
* **More fair** – not inflated by unrelated products.
* **More useful** – helps you understand your campaign’s true impact.

## How Revenue is calculated by campaign type

### Buy X Get Y (BXGY)

**How revenue is counted**

* Count the total value of the **X qualifying items** (specific collections or products only).

Example:

Offer: Buy 3 from Makeup, get free gift\
Customer buys 5 Makeup products + 4 skincare products→ Revenue by app = value of the 3 Makeup items.

If the gift isn’t free

* Add the gift’s discounted value.

***

### Gift with Cart Value

**How revenue is counted**

* Use the Minimum Cart Value required to trigger the gift.
* If Multiply = ON, count the highest tier reached.

Example:

* Offer: Spend at least $100, get free gift
* Cart total = $180, Multiply OFF → Revenue by app = $100
* Cart total = $300, Multiply ON → Revenue by app = $200

If the gift isn’t free

* Add the gift’s discounted value.

***

### Gift with Collection Value

**How revenue is counted**

* Same logic as _Gift with Cart Value_
*   Example:

    * Offer: Spend at least $100 from Summer collection, get free gift
    * Cart total = $180, Multiply OFF → Revenue by app = $100
    * Cart total = $300, Multiply ON → Revenue by app = $200

    If the gift isn’t free

    * Add the gift’s discounted value.

***

### Gift with Quantity Purchase

**How revenue is counted**

* If condition = All products: Count the entire order value once the minimum quantity is met.
* If condition = Specific collection: Count the total value of qualifying products within that collection.
* If condition = Specific products: Count the total value of those specific products.

Example:

* Offer: Buy 3 items, get gift.
* If condition = All products: Customer buys 5 items totaling $120.\
  → Revenue by app = $120 (entire order value)

**If the gift isn’t free**

* Add the gift’s discounted value.

***

### Milestone Rewards

#### If Cart Value

**How revenue is counted**

* Use the highest milestone reached based on total cart value.

Example:

* Milestones: $50 / $100 / $150
* Cart total = $180 → Revenue by app = $150 (highest milestone reached)

If the gift isn’t free

* Add the gift’s discounted value.

#### If Quantity

**How revenue is counted**

* Use the highest milestone reached based on item quantity.
* Sum the cheapest items up to that milestone.

Example:

* Milestones: 3 / 5 / 8 items
* Customer buys 9 → Revenue = total of the 8 cheapest items

If the gift isn’t free

* Add the gift’s discounted value.

***

### Shipping Goal

**How revenue is counted**

* Use the **Minimum Cart Value** required to unlock free shipping.

Example:

Free shipping from $100\
Cart total = $180 → Revenue by app = $100

***

### Order Goal

#### If Cart Value

**How revenue is counted**

* Use the Minimum Cart Value threshold.

Example: Spend $100 → Cart = $180 → Revenue by app= $100

#### If Quantity

**How revenue is counted**

* If condition = All products: Count the entire order value once the minimum quantity is met.
* If condition = Specific collection: Count only the value of qualifying items in that collection.

Example

* Offer: Buy 3 items (All products) → Customer buys 5 totaling $150 → Revenue by app= $150 (entire order)
* Offer: Buy 3 items from “Haircare” → Customer buys 5 → Revenue by app = total of 3 Haircare items only :

***

### Checkout Upsell

**How revenue is counted**

* Count the discounted price of the upsell item and trigger product

Example

* Upsell: Pants $200 if customer bsuy 1 shirt $120 → 50% off → Revenue by app= $100 + $120 = $220

### Checkout Progress Bar

**How revenue is counted**

* If cart value goal, use the Minimum Cart Value.
* If quantity goal, use the total of the cheapest items up to the required quantity.

Example

* Spend $50 to unlock free shipping → Revenue by app = $50
* Buy 3 items to get a perk → Customer buys 5 → Revenue buy app = total of 3 cheapest items

***

## Where you’ll see this in AOV.ai

1. **Campaign List Page**\
   → Each campaign’s revenue follows these calculation rules.
2. **Analytics Dashboard**\
   → Revenue Overview and Performance reflect campaign-attributed revenue only.

