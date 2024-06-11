"use client";

import { ESFDisplay } from "../ESFDisplay";
import { quickSortEnhanced, codeLines } from "@/algorithms/quickSort";

export function QuickSortDisplay() {
    return <ESFDisplay ESF={quickSortEnhanced} codeLines={codeLines} />;
}
