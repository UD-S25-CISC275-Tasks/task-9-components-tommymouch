import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    // Put the holidays in alphabetical order (for the "Alphabet" button)
    const alphaHolidays = [
        "🎄 Christmas",
        "🎃 Halloween",
        "🎆 New Year",
        "🦃 Thanksgiving",
        "❤️ Valentine's Day"
    ].sort(); // or you can hardcode them in alphabetical order

    // Put the holidays in "year" order (for the "Year" button)
    // (One reasonable approach is chronological order: 
    //  New Year -> Valentine's Day -> Halloween -> Thanksgiving -> Christmas)
    const yearHolidays = [
        "🎆 New Year",
        "❤️ Valentine's Day",
        "🎃 Halloween",
        "🦃 Thanksgiving",
        "🎄 Christmas"
    ];

    // We'll store the current holiday displayed in state.
    // Start with whatever you like from the alpha list, for example.
    const [currentHoliday, setCurrentHoliday] = useState<string>(alphaHolidays[0]);

    // Helper function to cycle to the next holiday in a given list
    function getNextHolidayInList(current: string, list: string[]): string {
        const index = list.indexOf(current);
        // If not found for some reason, start at index 0
        const nextIndex = index === -1 ? 0 : (index + 1) % list.length;
        return list[nextIndex];
    }

    // Cycles the holiday in alphabetical order
    function cycleAlphabet(): void {
        setCurrentHoliday((prevHoliday) => getNextHolidayInList(prevHoliday, alphaHolidays));
    }

    // Cycles the holiday in "year" order
    function cycleYear(): void {
        setCurrentHoliday((prevHoliday) => getNextHolidayInList(prevHoliday, yearHolidays));
    }

    return (
        <div>
            <h3>Cycle Holiday</h3>
            <p>Current Holiday: {currentHoliday}</p>
            {/* Button the tests look for: labeled "Alphabet" */}
            <Button onClick={cycleAlphabet}>Alphabet</Button>
            {/* Button the tests look for: labeled "Year" */}
            <Button onClick={cycleYear}>Year</Button>
        </div>
    );
}