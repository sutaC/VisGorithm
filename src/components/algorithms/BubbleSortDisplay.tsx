"use client";

import { bubleSortEnhanced, codeLines } from "@/algorithms/bubbleSort";
import { ESFDisplay } from "../ESFDisplay";

export function BubbleSortDisplay() {
    return <ESFDisplay ESF={bubleSortEnhanced} codeLines={codeLines} />;
}
