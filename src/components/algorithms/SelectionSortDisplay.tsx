"use client";

import { EFDisplay } from "@/components/EFDisplay";
import { codeLines, selectionSortEnhanced } from "@/algorithms/selectionSort";

export function SelectionSortDisplay() {
    return <EFDisplay EF={selectionSortEnhanced} codeLines={codeLines} />;
}
