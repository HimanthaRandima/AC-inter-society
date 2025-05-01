"use client";

import { Spinner } from "@nextui-org/react";
import "@/styles/loading.css";

export default function Loading() {
  return (
    <div id="loading">
      <Spinner size="lg" />
    </div>
  );
}
