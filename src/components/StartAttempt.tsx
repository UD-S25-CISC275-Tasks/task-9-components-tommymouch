import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    // Tests expect an initial 3 attempts
    const [attempts, setAttempts] = useState<number>(3);
    // Track whether a quiz is in progress
    const [inProgress, setInProgress] = useState<boolean>(false);

    // Decrement attempts and set quiz in progress
    function startQuiz(): void {
        setInProgress(true);
        setAttempts((prev) => prev - 1);
    }

    // Stop the quiz
    function stopQuiz(): void {
        setInProgress(false);
        // We do NOT reset attempts here (the test wants us to remain at attempts - 1)
    }

    // Mulligan: increase attempts by 1
    function mulligan(): void {
        setAttempts((prev) => prev + 1);
    }

    return (
        <div>
            <div>Attempts left: {attempts}</div>

            {/* "Start Quiz" is disabled if out of attempts or quiz already in progress */}
            <Button 
                onClick={startQuiz}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            {/* "Stop Quiz" is disabled if not in progress */}
            <Button 
                onClick={stopQuiz}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>

            {/* "Mulligan" is disabled while quiz is in progress (per test requirement) */}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}