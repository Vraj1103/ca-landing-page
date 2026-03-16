# Testimonials data

Edit `testimonials.json` to add, remove, or update client testimonials.

## Format

Each item in the array must have:

- **id** (string) — Unique identifier, e.g. `"1"`, `"2"`. Use a new number when adding.
- **quote** (string) — The full testimonial text.
- **name** (string) — Client name.
- **role** (string) — Optional. e.g. `"Minnesota, USA"` or `"CFO, Company Name"`. Leave `""` if not needed.

## Example (new entry)

```json
{
  "id": "6",
  "quote": "Your testimonial text here.",
  "name": "Client Name",
  "role": "Optional title or location"
}
```

Save the file; the homepage will show the updated testimonials after refresh (or on next build).
