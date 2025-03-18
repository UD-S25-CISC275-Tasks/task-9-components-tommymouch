import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * 1) Return only the questions whose `published` is true.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q) => q.published);
}

/**
 * 2) Return only questions that are "non-empty."
 *    An "empty" question has:
 *      - body == "" (empty string)
 *      - expected == "" (empty string)
 *      - options == [] (empty array)
 *    If any of those fields is non-empty, it's a "non-empty" question.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q) =>
            !(q.body === "" && q.expected === "" && q.options.length === 0)
    );
}

/**
 * 3) Return the question with the given `id`, or null if none found.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find((q) => q.id === id);
    return found ?? null;
}

/**
 * 4) Return a new array without the question that has the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q) => q.id !== id);
}

/**
 * 5) Return an array of just the `name` of each question.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q) => q.name);
}

/**
 * 6) Sum up the `points` of all questions.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, q) => total + q.points, 0);
}

/**
 * 7) Sum up the `points` of only the published questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((q) => q.published)
        .reduce((total, q) => total + q.points, 0);
}

/**
 * 8) Produce a CSV string with header "id,name,options,points,published"
 *    Then each question on its own line:
 *      id,name,#_of_options,points,published
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const rows = questions.map((q) => {
        const numOptions = q.options.length;
        return `${q.id},${q.name},${numOptions},${q.points},${q.published}`;
    });
    return header + "\n" + rows.join("\n");
}

/**
 * 9) For each Question, produce an Answer object:
 *      { questionId: q.id, text: "", correct: false, submitted: false }
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((q) => ({
        questionId: q.id,
        text: "",
        correct: false,
        submitted: false
    }));
}

/**
 * 10) Return a new array where all questions are now published = true.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((q) => ({ ...q, published: true }));
}

/**
 * 11) Return whether the array is empty or all questions share the same `type`.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const firstType = questions[0].type;
    return questions.every((q) => q.type === firstType);
}

/**
 * 12) Add a new blank question to the end of the array. This "blank" question
 *     must match the test's expectation (id, name, type, body, etc.).
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion: Question = {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    return [...questions, newQuestion];
}

/**
 * 13) Return a new array where the question with `targetId` has its name changed
 *     to `newName`. All others remain the same.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((q) =>
        q.id === targetId ? { ...q, name: newName } : q
    );
}

/**
 * 14) Return a new array where the question with `targetId` has its `type` changed
 *     to `newQuestionType`. If `newQuestionType` is not "multiple_choice_question",
 *     set `options` to an empty array.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((q) => {
        if (q.id !== targetId) {
            return q;
        } else {
            if (newQuestionType === "multiple_choice_question") {
                return { ...q, type: newQuestionType };
            } else {
                return { ...q, type: newQuestionType, options: [] };
            }
        }
    });
}

/**
 * 15) Return a new array where the question with `targetId` has a modified `options`
 *     array. If `targetOptionIndex` = -1, push `newOption` onto the end. Otherwise,
 *     replace the existing option at `targetOptionIndex` with `newOption`.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((q) => {
        if (q.id !== targetId) {
            return q;
        } else {
            const newOptions = [...q.options];
            if (targetOptionIndex === -1) {
                newOptions.push(newOption);
            } else {
                newOptions[targetOptionIndex] = newOption;
            }
            return { ...q, options: newOptions };
        }
    });
}

/**
 * 16) Duplicate the question with `targetId` (using "Copy of X" for the name and
 *     `published: false`) and insert it immediately after the original question.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return questions.flatMap((q) => {
        if (q.id === targetId) {
            // Create a duplicate
            const duplicated: Question = {
                ...q,
                id: newId,
                name: "Copy of " + q.name,
                published: false
            };
            return [q, duplicated];
        } else {
            return [q];
        }
    });
}
