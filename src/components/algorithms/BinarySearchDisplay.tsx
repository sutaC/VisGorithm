import { binarySearchEnhanced, codeLines } from "@/algorithms/binarySearch";
import { EFDisplay } from "../EFDisplay";
import { EnhancedFunction } from "@/algorithms/innerFunctions";

export function BinarySearchDisplay() {
    return (
        <EFDisplay
            EF={binarySearchEnhanced as unknown as EnhancedFunction}
            codeLines={codeLines}
            options={{ search: true, sorted: true }}
        />
    );
}
