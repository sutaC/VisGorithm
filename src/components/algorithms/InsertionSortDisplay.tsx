"use client";

import { insertionSortEnhanced, codeLines } from "@/algorithms/insertionSort";
import { ESFDisplay } from "../ESFDisplay";

export function InsertionSortDisplay() {
    return <ESFDisplay ESF={insertionSortEnhanced} codeLines={codeLines} />;
}
