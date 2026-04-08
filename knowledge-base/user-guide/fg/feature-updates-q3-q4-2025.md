# Feature updates: Q3/Q4 2025

---
description: Keep track of all updates, improvements, and fixes.
---

# Feature updates: Q3/Q4 2025

### 8 Dec 2025

**Update: Deal of the Day Now Supports “Content” Tab**

* A new Content tab is added inside the Deal of the Day max modal (next to Settings / Style)
* This tab allows merchants to customize all widget text: headlines, labels, badges, campaign-specific messages, etc.
* Besides the default text fields, the system dynamically displays extra fields only for the campaigns enabled in Deal of the Day

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FFee237IkXpDsMGqbnoai%2FFrame%202085653894.png?alt=media&#x26;token=e77a139d-a5d9-435f-94b5-437a40113351" alt=""><figcaption></figcaption></figure>

### 8 Dec 2025

**Update: Milestone display on Both Product Page & Cart Drawer**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FiKVbUZW5SQgnZkIJ1RwM%2FFrame%202085653895.png?alt=media&#x26;token=f34fbd08-fb8c-4fb6-9167-dfa702c17f6c" alt=""><figcaption></figcaption></figure>

* Milestone Progress Bar can now display directly in the Cart Drawer with a single checkbox
* When both are enabled → the milestone will appear on both PDP and Cart Drawer
* No Theme Support team needed → faster, fully self-serve setup for merchants

### 8 Dec 2025

**Improvement: Prevent Expired Campaign Gifts From Being Checked Out**

* The system now automatically validates and removes expired gifts when the buyer visits the storefront\
  (home, collection, cart, PDP, etc.)
* Only exception: direct visits to the Checkout page (because Shopify allows app scripts only on Plus stores)\
  → Non-Plus stores cannot modify checkout, but expired gifts will already be removed before reaching checkout

### 25 Nov 2025

**Improvement:** Milestone Rewards — “All Eligible Gifts” Optimization

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FsI3zXAkebyKD04f3EyCw%2Fmilestone.png?alt=media&#x26;token=040717f9-cca6-4c76-a2d5-99d87822395d" alt=""><figcaption></figcaption></figure>

#### **What**

When merchants use **All eligible gifts** (shoppers who reach the highest milestone receive _all_ gifts), the system now handles adding and displaying gifts more efficiently:

* Faster and more accurate Auto Add Gift
* No pop-up spamming for the Pop-up method
* Smoother UX with less friction

#### **How**

**1. Auto Add Gift**

If the shopper reaches the highest milestone:

* The system adds **all gifts in one single action**, not multiple times\
  (e.g., 4 milestones → add 4 gifts at once)
* Result: **Much faster**, prevents add-gift errors

**2. Pop-up Gift Selection**

If the shopper unlocks multiple gifts:

* No multiple pop-ups in a row
* Higher milestones displayed to boost motivation
* Result: **No pop-up spam**, better purchase motivation

### 15 Nov 2025

#### **UI/UX Improvements for Gift Selection (Popup & Floating Widget)**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FYOLGgPmH1bxTYcuTLFMS%2FFrame%202085654133.png?alt=media&#x26;token=dc59559d-5cf2-4612-a719-bb9ec4ad6e8d" alt=""><figcaption></figcaption></figure>

* Added **vertical & horizontal scrolling** for long variant lists
* **Clicking the entire product card** now selects the gift (not just the checkbox)
* **Hover underline** on product name when quantity selector is off
* Added micro-interactions from prototype:\
  hover on add item, variants, product card, product name, quantity;\
  select icon rotates on toggle

### 1 Nov 2025

**New Feature:** Product Combination Conditions for Gift Campaigns

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FLE0Qf7iBvOjG5fZ5qEtn%2FFrame%202085654878.png?alt=media&#x26;token=290d829d-43e2-4833-880f-4b972e0b41e8" alt=""><figcaption></figcaption></figure>

Merchants can now require customers to purchase **all selected products**—each with its own minimum quantity—to qualify for the gift.

* New **ALL** logic for Specific Products
* Set **minimum quantity per product**
* Gift is unlocked only when **every product** meets its required quantity

Check details here

### 15 Oct 2025

**New feature:** Support multiple gifts and pop-up selection in Milestone Rewards campaigns

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FsS4HA9RW6UYYo7eS8SSh%2F6.png?alt=media&#x26;token=588eb585-33c0-4fdb-8c9d-90b621a02bee" alt=""><figcaption></figcaption></figure>

* Merchants can select multiple gift products for each milestone.
* Choosing **Pop-up** enables customization settings and an optional gift limit.
* On the storefront:
  * **Auto-add:** all eligible gifts are automatically added to the cart.
  * **Pop-up:** shoppers can manually select their preferred gifts.

#### 26 Sep 2025

**New feature:** Multiply Lowest-Priced Gift.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FdH14YtroLMZ0EnXpfh8u%2F8.png?alt=media&#x26;token=e7d40b03-e589-45ef-b8b6-b6fc006cf76b" alt=""><figcaption></figcaption></figure>

This feature automatically multiplies the number of gifts when customers purchase multiple trigger products. The system awards gifts based on the lowest-priced eligible item in the cart, applicable to the “Gift with Quantity Purchase” campaign type.

#### 25 Sep 2025

**New feature:** Apply code to get a gift directly in the cart drawer or cart page.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FUWZmDNvRRaSVI3Cagv0T%2FFrame%202085654128.png?alt=media&#x26;token=0c93f439-3b05-4c7e-993d-218cb96785f3" alt=""><figcaption></figcaption></figure>

Shoppers can now enter a code in the cart to instantly receive a gift for “Buy X Get Y” campaigns. The app auto-generates a default code (e.g., SUMMER) that merchants can customize. This feature supports stores with a discount input field in the cart (including the Horizon theme). If unsupported, the option will be disabled and merchants can contact support for integration.

#### 18 Sep 2025

**Update:** Optimized the AOV Free Gift widget experience for easier management and customization.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FqDft2qWMEapVisRuWJMU%2FFrame%202085654129.png?alt=media&#x26;token=22a87738-3c4f-4456-b2fa-e5375cd6e575" alt=""><figcaption></figcaption></figure>

Widgets now display usage status:

* **In use:** Shows how many campaigns are using the widget (e.g., “2 campaigns”) with options to _Customize_ (open the edit modal) or _View Campaigns_ (see campaign list and check details).
* **Not in use:** The _Customize_ button is disabled, but merchants can still use _Preview_ to create a new campaign.

***

### 28 Oct 2025

**Performance improvement:** Faster gift add and trigger–gift sync.

* Optimized the speed of adding and removing gifts in real time when trigger products are added or deleted.
* Benchmarks show near-instant updates — gifts are added or removed in less than one second.

#### **30 Jul 2025**

**Improve: Redesigned the analytics dashboard for better visibility and actionable insights**

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FZrFfXuNu96nuhSyHuv15%2F1.jpg?alt=media&#x26;token=a1ecac20-62fa-4693-8639-1f8f6df87597" alt=""><figcaption></figcaption></figure>

* Added metrics for Orders, Revenue, AOV breakdown, and Conversion Funnel tracking.
* Introduced a completely new Analytics interface with two tabs: Overview (key performance metrics) and Campaign Performance (detailed campaign results).

### 25 June 2025

**New feature:** Milestone-based Free Gift Campaigns.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2F8VwQOT9tHeoOGXX92ylk%2F12.png?alt=media&#x26;token=b792e55e-f212-4c7e-9f50-d100354c234d" alt=""><figcaption></figcaption></figure>

* Introduced the ability for merchants to create milestone campaigns that reward customers with free gifts.
* Admins can search, filter, and select products from store inventory directly in the campaign setup flow.

### 24 June 2025

**New feature:** Gift multiplier with cart value.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FLg2OgjjSXuR37ZvmmMbC%2F11.png?alt=media&#x26;token=c0877534-2788-4d9f-a0f8-60b7529cdd83" alt=""><figcaption></figcaption></figure>

* Automatically calculates the number of gifts based on cart value for “Gift with Cart Value” campaigns.
* Tiered example: $100 → 1 gift, $200 → 2 gifts, $300 → 3 gifts.

### 17 June 2025

**New feature:** Include Product for Cart Value campaigns.

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FXhMmvKO0GoKbXnJiAwuY%2F9.png?alt=media&#x26;token=fe2310bf-f01d-40fb-887f-3e0ebf1d5351" alt=""><figcaption></figcaption></figure>

* Added the **Include Product** option to Cart Value campaigns, requiring customers to have a specific product in their cart in addition to meeting the minimum cart value.

