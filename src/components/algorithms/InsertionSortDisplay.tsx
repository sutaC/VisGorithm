"use client";

import { insertionSortEnhanced, codeLines } from "@/algorithms/insertionSort";
import { EFDisplay } from "@/components/EFDisplay";

export function InsertionSortDisplay() {
    return <EFDisplay EF={insertionSortEnhanced} codeLines={codeLines} />;
}
