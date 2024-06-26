"use client";

import { EFDisplay } from "@/components/EFDisplay";
import { quickSortEnhanced, codeLines } from "@/algorithms/sorts/quickSort";

export function QuickSortDisplay() {
    return <EFDisplay EF={quickSortEnhanced} codeLines={codeLines} />;
}
