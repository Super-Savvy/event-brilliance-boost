

## Problem

The floating contact strip (phone, hours, trust badge) is invisible because:

- The hero `<section>` has `overflow-hidden` (needed to clip the background hero image)
- The strip lives **inside** that section and uses a negative bottom margin (`-mb-16 sm:-mb-20`) to overlap onto the next section
- `overflow-hidden` clips the strip's overflow, so the part that was supposed to spill into the next section gets cut off — and on certain layouts the entire strip ends up clipped

## Fix

Move the floating contact strip **out** of the hero `<section>` so it is no longer subject to its `overflow-hidden` clipping. Place it immediately after the hero section as its own sibling block, then use a negative top margin to pull it up over the bottom of the hero.

### Changes to `src/routes/index.tsx`

1. **Remove** the strip block from inside the hero section (current lines 105–127).
2. **Insert** the strip as a sibling right after `</section>` (the hero closing tag), wrapped so it overlaps both the hero above and the next section below:

   ```tsx
   {/* Floating contact strip — sits between hero and intro */}
   <div className="relative z-30 mx-auto -mt-16 mb-8 max-w-6xl px-4 sm:-mt-20 sm:px-6">
     <div className="grid gap-4 rounded-2xl bg-foreground p-5 text-background shadow-glow sm:grid-cols-3 sm:p-6">
       {/* ...existing 3 items unchanged... */}
     </div>
   </div>
   ```

3. **Reduce top padding** of the "INTRO 1" section from `pt-28 pb-20` to `pt-12 pb-20` since the strip's own `mb-8` now provides spacing.

### Result

- Strip is fully visible, overlapping the hero/intro boundary as intended
- No clipping on any viewport
- Z-index stacking still works (strip is `z-30`, sits above both neighbors)

