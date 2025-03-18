import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => setPosition(position + 4)}
            // The test looks for a button, so "Shove the Box" is fine
        >
            Shove the Box
        </Button>
    );
}

// Now MoveableBox is a "dumb" component that just renders a box at a given position
function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    // We manage the box's position in the parent
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            {/* The test wants to see the box's initial position. */}
            <span>The box is at: {position}</span>
            <div>
                {/* The button uses the parent's state to shift the box */}
                <ShoveBoxButton position={position} setPosition={setPosition} />
                {/* Pass the current position down so the box renders in the right place */}
                <MoveableBox position={position} />
            </div>
        </div>
    );
}
