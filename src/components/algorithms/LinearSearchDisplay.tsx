import {
    linearSearchEnhanced,
    codeLines,
} from "@/algorithms/searches/linearSearch";
import { EFDisplay } from "../EFDisplay";
import { EnhancedFunction } from "@/algorithms/sorts/innerFunctions";

export function LinearSearchDisplay() {
    return (
        <EFDisplay
            EF={linearSearchEnhanced as unknown as EnhancedFunction}
            codeLines={codeLines}
            options={{ search: true }}
        />
    );
}
