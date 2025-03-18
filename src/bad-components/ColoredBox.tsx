import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// Receive the current color as a prop, rather than using a fixed index
function ColorPreview({ color }: { color: string }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    // The color index should live here so both the text and preview can see updates
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function advanceColor(): void {
        setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
    }

    const currentColor = COLORS[colorIndex];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <Button onClick={advanceColor}>Next Color</Button>
                {/* Pass the current color to ColorPreview */}
                <ColorPreview color={currentColor}></ColorPreview>
            </div>
        </div>
    );
}
