# Vita Verde presentation design system

Private owner-facing concept for Vita Verde Hostal Boutique. The redesign uses an open editorial layout with real property photography, concise guest information and a restrained botanical palette. It is an independent proposal, not an approved hotel identity.

## Tokens

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Page | `#f5f7f2` | `#18241d` | Continuous page canvas |
| Surface | `#eaf0e8` | `#202e25` | Adjacent editorial sections and contact panel |
| Text | `#1d2a22` | `#edf2eb` | Headlines and body copy |
| Secondary text | `#5c685f` | `#b4beb2` | Supporting copy and captions |
| Brand accent | `#526d48` | `#a3b993` | Primary action, links, small labels |
| Display | Cormorant Garamond | Cormorant Garamond | Editorial headlines |
| Utility | Manrope | Manrope | Navigation and controls |
| Content width | `1360px` maximum | Same | Centered layouts |

Color mode follows the device preference. Each mode keeps the same page tone across sections. The home hero pairs the offer with a real property photograph; interior pages use the same open paper surface.

## Page sequence

Home: concise offer and real property photo → central location and year-round facts → room categories → hostal story and patio → amenities → five-photo gallery → location and distances → Booking.com action.

The room photo is not assigned to a named category. The eight room types use text and bed configurations from the listing. Availability, room mix and booking terms lead to Booking.com for current details.

## Components and behavior

- **Header:** wordmark, five page links, language switch, booking action. Stays in document flow and collapses to an accessible menu below 1120px; Escape closes it and the label follows menu state.
- **Actions:** solid botanical primary button, outlined secondary button, and understated text link. Keyboard focus is visible; touch press feedback does not rely on hover.
- **Room list:** name and bed configuration link directly to the current property listing. A separate property photo avoids implying an unverified category-to-photo match.
- **Amenity and policy lists:** semantic lists and labeled rows; longer terms wrap instead of truncating.
- **Photo gallery:** six real municipal listing images. Intrinsic dimensions, descriptive alt text, lazy loading below the first property image.
- **Motion:** one short first-view photo entrance, hover transitions only on hover-capable inputs, and quick press feedback. Reduced-motion removes movement while retaining color feedback.
- **Privacy:** all routes remain `noindex, nofollow`; no direct reservation form or enquiry form is represented as functional.

## Accessibility and responsive behavior

Landmarks, one H1 per page, skip link, language attribute, `aria-current`, labeled menu button, visible focus, 44px minimum mobile menu target, tap-action feedback, and reduced motion support are included. At 640px the room and gallery columns collapse, policy rows stack, and contact actions take the available width. Check final behavior on a physical phone before public launch.

## Source and production notes

Six property images are hotlinked from the [Torrevieja municipal tourism listing](https://turismo.torrevieja.es/es/poi/vita-verde-hostal-boutique); internet access is needed to display them. The photo inventory tracks image URLs and source notes. Obtain owner/photographer approval and original files before public use. Details that can change, such as rating, parking, transfer and late check-in arrangements, are identified for reconfirmation.
