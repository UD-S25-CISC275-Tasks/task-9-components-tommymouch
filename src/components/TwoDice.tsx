import React, { useState } from "react";
import { Button } from "react-bootstrap";

function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    const isDoubles = leftDie === rightDie;
    const isSnakeEyes = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>

            {/* If both dice are 1, the user loses */}
            {isSnakeEyes && <div>You lose the game</div>}

            {/* If dice match (and are not snake eyes), the user wins */}
            {isDoubles && !isSnakeEyes && <div>You win the game</div>}

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
        </div>
    );
}
