"use client";

import { bubleSortEnhanced, codeLines } from "@/algorithms/sorts/bubbleSort";
import { EFDisplay } from "@/components/EFDisplay";

export function BubbleSortDisplay() {
    return <EFDisplay EF={bubleSortEnhanced} codeLines={codeLines} />;
}
