# Vita Verde Hostal Boutique - presentation demo

An unofficial bilingual concept site with an editorial Mediterranean direction. It is a presentation proposal, not the hotel's official website, and does not process bookings or enquiries. GitHub Pages publishes this demo publicly; verify all content and obtain the required photo permissions before treating it as the hotel's production website.

## Run locally

This standalone Astro project uses the workspace's installed Astro runtime.

```powershell
cd .\vita-verde-demo
npm run dev
```

Open the local address printed by Astro (normally `http://127.0.0.1:4321/`). For a static production build, run `npm run build`.

## Routes

- `/` redirects to `/es/`
- `/es/`, `/es/habitaciones/`, `/es/experiencia/`, `/es/ubicacion/`, `/es/contacto/`
- `/en/`, `/en/rooms/`, `/en/experience/`, `/en/location/`, `/en/contact/`

The language switch links to the equivalent page. Pages set `noindex, nofollow`; `robots.txt` disallows crawling.

## Assets and provenance

Six real property photos from the Torrevieja municipal tourism listing are connected to the home, room, and location pages. The photos are hotlinked to the original source and need internet access. One AI-generated coastal mood image is used only as an illustration and is explicitly identified as non-local. Generated bedroom concepts are not used to represent real rooms. Photo descriptions and source URLs are in `PHOTO_INVENTORY.md` and `src/data/photo-inventory.json`. The color, type, spacing and component choices are documented in `DESIGN_SYSTEM.md`.

Business details and eight Booking.com room categories, plus stay policies, amenities, address, contact channels, reception hours, registration number and indicative distances are included in Spanish and English. Listing terms and rating can change; the source and lookup date are shown. Parking and airport transfer are flagged for confirmation.

Booking.com availability links leave the demo and open the existing listing.

## Public demo

The GitHub Actions workflow builds the static site and publishes it to GitHub Pages at `https://ministry-transformation.github.io/vita-verde-hostal/`. Each push to `main` triggers a new deployment. The site is marked `noindex, nofollow` while it remains a presentation proposal.

## Before production use

Before production use as the hotel's official website, request owner/photographer approval and original full-resolution photos, verify room-to-photo mapping, room categories, policies and current contact data, then host approved optimized assets locally. This demo is marked `noindex, nofollow`.
