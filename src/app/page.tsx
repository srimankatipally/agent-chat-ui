"use client";

import React from "react";
import ModelSelectionPage from "@/components/model-selection-page";

export default function DemoPage(): React.ReactNode {
  return (
    <React.Suspense fallback={<div>Loading (layout)...</div>}>
      <ModelSelectionPage />
    </React.Suspense>
  );
}
