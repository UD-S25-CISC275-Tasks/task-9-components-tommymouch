import React, { useState } from "react";
import { Button } from "react-bootstrap";

// A TypeScript union type for our five holidays
type Holiday = 
  | "Halloween"
  | "Thanksgiving"
  | "Christmas"
  | "New Year's"
  | "Valentine's Day";

// The five holidays in alphabetical order
const ALPHABET_HOLIDAYS: Holiday[] = [
  "Christmas",
  "Halloween",
  "New Year's",
  "Thanksgiving",
  "Valentine's Day"
];

// The five holidays in "calendar year" order
const YEAR_HOLIDAYS: Holiday[] = [
  "New Year's",
  "Valentine's Day",
  "Halloween",
  "Thanksgiving",
  "Christmas"
];

// Helper function: get the next holiday in alphabetical order
function getNextHolidayAlphabet(current: Holiday): Holiday {
  const currentIndex = ALPHABET_HOLIDAYS.indexOf(current);
  return ALPHABET_HOLIDAYS[(currentIndex + 1) % ALPHABET_HOLIDAYS.length];
}

// Helper function: get the next holiday in year order
function getNextHolidayYear(current: Holiday): Holiday {
  const currentIndex = YEAR_HOLIDAYS.indexOf(current);
  return YEAR_HOLIDAYS[(currentIndex + 1) % YEAR_HOLIDAYS.length];
}

export function CycleHoliday(): React.JSX.Element {
  // Start with any one of the holidays; tests often expect 
  // you to begin with a specific holiday like "Halloween"
  const [holiday, setHoliday] = useState<Holiday>("Halloween");

  // Advance the holiday in alphabetical order
  function advanceAlphabet(): void {
    setHoliday((prevHoliday) => getNextHolidayAlphabet(prevHoliday));
  }

  // Advance the holiday in year order
  function advanceYear(): void {
    setHoliday((prevHoliday) => getNextHolidayYear(prevHoliday));
  }

  return (
    <div>
      <p>Holiday: {holiday}</p>
      {/* Button that cycles the holiday alphabetically */}
      <Button onClick={advanceAlphabet}>Alphabet</Button>
      {/* Button that cycles the holiday in "calendar year" order */}
      <Button onClick={advanceYear}>Year</Button>
    </div>
  );
}
