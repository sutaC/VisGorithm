import {
    binarySearchEnhanced,
    codeLines,
} from "@/algorithms/searches/binarySearch";
import { EFDisplay } from "../EFDisplay";
import { EnhancedFunction } from "@/algorithms/sorts/innerFunctions";

export function BinarySearchDisplay() {
    return (
        <EFDisplay
            EF={binarySearchEnhanced as unknown as EnhancedFunction}
            codeLines={codeLines}
            options={{ search: true, sorted: true }}
        />
    );
}
