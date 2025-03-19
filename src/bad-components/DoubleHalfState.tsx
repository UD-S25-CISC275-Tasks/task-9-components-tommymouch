import React, { useState } from "react";

export function DoubleHalfState(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <p>Value: {dhValue}</p>
            <button
                onClick={() => {
                    setDhValue(dhValue / 2);
                }}
            >
                Half
            </button>
            <button
                onClick={() => {
                    setDhValue(dhValue * 2);
                }}
            >
                Double
            </button>
        </div>
    );
}
