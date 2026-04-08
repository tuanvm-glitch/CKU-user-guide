# Subscription integration

# Subscription integration

## Overview

The **Purchase Type** setting lets you control whether a Buy X Get Y (BXGY) campaign applies to one-time purchases, subscription purchases, or both. This gives you precise control over how gifts are rewarded based on how customers buy your products.

***

## Where to Find It

{% stepper %}
{% step %}
Go to **Gift Campaigns** in the app
{% endstep %}

{% step %}
Open an existing **Buy X Get Y** campaign or create a new one
{% endstep %}

{% step %}
In the **Customer Buys** section, find the **Purchase Type** dropdown
{% endstep %}
{% endstepper %}

***

## Purchase Type Options

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FIvuzbkYdIeArSmDlgrpn%2FUntitled_card.png?alt=media&#x26;token=fb102323-9cc2-4c41-ac34-b7b885bee083" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="220">Option</th><th>Description</th></tr></thead><tbody><tr><td><strong>One-time purchase</strong> <em>(default)</em></td><td>Campaign applies only when the trigger product is purchased as a regular, one-time order</td></tr><tr><td><strong>Subscription</strong></td><td>Campaign applies only when the trigger product is purchased via a subscription plan</td></tr><tr><td><strong>Both</strong></td><td>Campaign applies regardless of purchase type</td></tr></tbody></table>

***

## How Each Option Works

### One-time Purchase (Default)

The gift is added when the customer adds the trigger product to cart **without** a subscription plan attached.

**Behavior:**

* Gift is added for regular one-time purchases
* Gift is **not** added if the trigger product is purchased as a subscription

{% hint style="info" %}
All BXGY campaigns created before this feature was introduced automatically default to **One-time purchase**. No action is required — these campaigns continue to work exactly as before.
{% endhint %}

{% hint style="warning" %}
If your trigger product is sold as a **subscription only** (not available as a one-time purchase), a yellow warning badge will appear in the campaign editor to alert you of the mismatch.
{% endhint %}

***

### Subscription

The gift is added when the customer purchases the trigger product **with a subscription plan**.

**Behavior:**

* Gift is added on the **first order** of the subscription only
* Recurring subscription orders do **not** receive the gift again
* Gift is **not** added for regular one-time purchases

**Compatible subscription apps:**

* Shopify native subscriptions
* Recharge
* Appstle
* Seal Subscriptions
* Joy Subscription

{% hint style="warning" %}
If your trigger product is a **regular (non-subscription) product**, a yellow warning badge will appear in the campaign editor to alert you of the mismatch.
{% endhint %}

***

### Both

The gift is added for all customers — whether they buy one-time or via subscription.

**Behavior:**

* Gift is added for regular one-time purchases
* Gift is added on the **first subscription order** only
* Recurring subscription orders do **not** receive the gift again

***

## Warning Badges

The system displays warning badges in the campaign editor to help you catch configuration mismatches before publishing.

<table><thead><tr><th width="420">Situation</th><th>Badge</th></tr></thead><tbody><tr><td>Trigger product is subscription-only, but Purchase Type = <strong>One-time purchase</strong></td><td>⚠️ "Subscription product"</td></tr><tr><td>Trigger product is a regular product (not subscription), but Purchase Type = <strong>Subscription</strong></td><td>⚠️ "One-time product"</td></tr></tbody></table>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FsI4hR7NaFzHZifbDOW2P%2Fscreenshot1_card.png?alt=media&#x26;token=30e60936-fdf4-4483-99bd-0da5a94ccd29" alt=""><figcaption></figcaption></figure>

<figure><img src="https://1289686769-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMo81Ak7Ig0Z6bLRmWpSA%2Fuploads%2FmbGoQv5gDJCjoDsdvN7Y%2Fscreenshot2_card.png?alt=media&#x26;token=4f9ace61-cd00-4669-8607-140ca2cee75a" alt=""><figcaption></figcaption></figure>

***

## Stores Without Subscription Products

If your store has no subscription products, the **Subscription** and **Both** options will be **disabled** in the Purchase Type dropdown.

Hovering over the disabled options will show a tooltip:

> _"No subscription products found in your store"_

To enable these options, set up subscription products using a compatible subscription app.

