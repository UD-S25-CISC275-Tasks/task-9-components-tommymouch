import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // The tests expect the initial type to be "Short Answer"
    // so we start with "short_answer_question"
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    // Toggle between "short_answer_question" and "multiple_choice_question"
    const toggleType = () => {
        setQType(
            qType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    // The tests look for the exact text "Short Answer" or "Multiple Choice"
    const displayedType = qType === "short_answer_question"
        ? "Short Answer"
        : "Multiple Choice";

    return (
        <div>
            <p>Current Type: {displayedType}</p>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}