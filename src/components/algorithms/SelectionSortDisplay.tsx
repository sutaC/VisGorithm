"use client";

import { ESFDisplay } from "../ESFDisplay";
import { codeLines, selectionSortEnhanced } from "@/algorithms/selectionSort";

export function SelectionSortDisplay() {
    return <ESFDisplay ESF={selectionSortEnhanced} codeLines={codeLines} />;
}
