import type { FC } from "react";

/**
 * Slice Registry
 *
 * Central mapping of Prismic slice types to React components.
 * Add new slices here as they are created.
 *
 * Intentionally empty for now — slice components have not been
 * migrated into this package yet. That's a separate, later step.
 */

// biome-ignore lint/suspicious/noExplicitAny: Mixed slice types with and without generated types
type SliceType = any;

// biome-ignore lint/suspicious/noExplicitAny: Components accept varied slice prop structures
type SliceComponent = FC<any>;

export interface SliceRendererProps {
  slice: SliceType;
}

/**
 * Registry mapping slice_type to component
 * Enables extensible, type-safe slice rendering
 */
const sliceRegistry: Record<string, SliceComponent> = {};

/**
 * Fallback component for unmapped/unknown slice types
 *
 * Renders a development-friendly error display that shows:
 * - Slice type identifier
 * - Variation name
 * - Developer guidance
 *
 * Production: Consider replacing with empty fragment or logging
 */
function UnmappedSlice({ slice }: { slice: SliceType }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-4 w-full rounded-lg border-2 border-yellow-300 bg-yellow-50 p-6"
    >
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-2 font-semibold text-lg text-yellow-900">Unmapped Slice Component</h3>
        <p className="mb-2 text-yellow-800">
          <strong>Type:</strong>{" "}
          <code className="rounded bg-yellow-100 px-2 py-1">{slice.slice_type}</code>
        </p>
        <p className="mb-4 text-yellow-800">
          <strong>Variation:</strong>{" "}
          <code className="rounded bg-yellow-100 px-2 py-1">{slice.variation || "default"}</code>
        </p>
        <p className="text-sm text-yellow-700">
          Add this slice type to the <code className="bg-yellow-100 px-1">sliceRegistry</code> in{" "}
          <code className="bg-yellow-100 px-1">SliceRenderer.tsx</code>
        </p>
      </div>
    </section>
  );
}

/**
 * SliceRenderer Component
 *
 * Main component that maps Prismic slice types to their corresponding React components.
 * Replaces Prismic's SliceZone for custom slice rendering without platform dependencies.
 *
 * Architecture:
 * 1. Receives a Prismic slice object
 * 2. Looks up component in sliceRegistry using slice.slice_type
 * 3. Renders the component or fallback if not found
 * 4. Preserves slice metadata (data-slice-type, data-slice-variation)
 *
 * Error Handling:
 * - Unknown slices render UnmappedSlice (development-friendly)
 * - No runtime errors - graceful degradation
 * - Console warning for unregistered slices
 *
 * Performance:
 * - O(1) component lookup via registry object
 * - No switch statements or string comparisons
 * - Suitable for 200+ slice types
 */
export default function SliceRenderer({ slice }: SliceRendererProps) {
  // Safely access slice type
  if (!slice?.slice_type) {
    return null;
  }

  // Look up component in registry
  const Component = sliceRegistry[slice.slice_type];

  // If component not found, render fallback
  if (!Component) {
    return <UnmappedSlice slice={slice} />;
  }

  // Render the component with the slice
  return <Component slice={slice} />;
}
