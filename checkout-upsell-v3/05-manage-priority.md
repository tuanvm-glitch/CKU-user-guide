# Manage Offer Priority

When multiple offers match at checkout, **priority determines which single offer is displayed**. Only one offer shows at a time.

---

## How priority works

- Each offer has a **priority number** (1 = highest)
- All active offers are evaluated against the cart
- The highest-priority matching offer wins
- **Only one offer** is shown

| Priority | Offer | Matches? | Result |
|----------|-------|----------|--------|
| 1 | Summer Bundle | Yes | **Displayed** (highest priority) |
| 2 | VIP Exclusive | Yes | Hidden (lower priority) |
| 3 | New Arrivals | No | Hidden (no match) |

---

## Setting priority

1. Go to **Offers** in the sidebar
2. Click **Manage priority** (top of page)
3. Select **Checkout upsell** from the dropdown
4. **Drag and drop** to reorder — top = priority 1
5. Click **Save**

![Manage priority modal](https://i.ibb.co/0yKfMMkp/priority-modal-v2.png)

{% hint style="info" %}
**Tip:** Put highest-converting or time-sensitive offers at priority 1.
{% endhint %}

---

## Priority and scheduling

Scheduled/Expired offers are **skipped** — the next active match is shown:

| Priority | Offer | Status | What happens |
|----------|-------|--------|-------------|
| 1 | Black Friday Deal | Scheduled (Nov 25–27) | Before Nov 25: skipped. Nov 25–27: shown. After: expired. |
| 2 | Everyday Upsell | Active (always) | Shown whenever #1 is not active |

You can safely schedule future offers at high priority without affecting current ones.
