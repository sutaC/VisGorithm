import { linearSearchEnhanced, codeLines } from "@/algorithms/linearSearch";
import { EFDisplay } from "../EFDisplay";
import { EnhancedFunction } from "@/algorithms/innerFunctions";

export function LinearSearchDisplay() {
    return (
        <EFDisplay
            EF={linearSearchEnhanced as unknown as EnhancedFunction}
            codeLines={codeLines}
            options={{ search: true }}
        />
    );
}
