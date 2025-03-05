import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Returns only the published questions from the given array.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Returns only non-empty questions, where `body` and `expected`
 * are not empty strings, and `options` is not an empty array.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body.trim() !== "" ||
            question.expected.trim() !== "" ||
            question.options.length > 0
    );
}

/**
 * Finds a question by `id` and returns it; if not found, return `null`.
=======

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return [];
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return [];
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
>>>>>>> origin/task-state
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
<<<<<<< HEAD
    return questions.find((question) => question.id === id) || null;
}

/**
 * Returns a new array without the question that matches the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/**
 * Returns an array of only the `name` properties from the given questions.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/**
 * Returns the sum of all question points.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

/**
 * Returns the sum of points for only published questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((question) => question.published)
        .reduce((total, question) => total + question.points, 0);
}

/**
 * Converts an array of questions into a CSV (Comma-Separated Values) string format.
 */
export function toCSV(questions: Question[]): string {
    const headers = "id,name,options,points,published";
    const rows = questions
        .map(
            (q) =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");
    return `${headers}\n${rows}`;
}

/**
 * Creates an array of Answers corresponding to the given Questions.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/**
 * Returns a new array where all questions are now published.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/**
 * Checks if all questions in the array are the same type.
 */
export function sameType(questions: Question[]): boolean {
    return questions.every(
        (question) => question.type === questions[0]?.type
    );
}

/**
 * Returns a new array with a blank question added to the end.
=======
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return [];
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return [];
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return 0;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return 0;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    return "";
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return [];
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
>>>>>>> origin/task-state
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
<<<<<<< HEAD
    return [...questions, makeBlankQuestion(id, name, type)];
}

/**
 * Returns a new array where the question with `targetId` has its name changed to `newName`.
=======
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
>>>>>>> origin/task-state
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
<<<<<<< HEAD
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question
    );
}

/**
 * Changes the type of a question and resets `options` if necessary.
=======
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
>>>>>>> origin/task-state
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
<<<<<<< HEAD
    return questions.map((question) =>
        question.id === targetId
            ? {
                  ...question,
                  type: newQuestionType,
                  options:
                      newQuestionType !== "multiple_choice_question"
                          ? []
                          : question.options
              }
            : question
    );
}

/**
 * Updates the options of a question by adding/replacing an option at a specified index.
=======
    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
>>>>>>> origin/task-state
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
<<<<<<< HEAD
): Question[] {
    return questions.map((question) =>
        question.id === targetId
            ? {
                  ...question,
                  options:
                      targetOptionIndex === -1
                          ? [...question.options, newOption]
                          : question.options.map((opt, index) =>
                                index === targetOptionIndex ? newOption : opt
                            )
              }
            : question
    );
}

/**
 * Duplicates a question with a new ID and inserts it directly after the original question.
=======
) {
    return [];
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
>>>>>>> origin/task-state
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
<<<<<<< HEAD
    const index = questions.findIndex((q) => q.id === targetId);
    if (index === -1) return questions; // If not found, return the original array

    const duplicatedQuestion = duplicateQuestion(newId, questions[index]);
    return [
        ...questions.slice(0, index + 1),
        duplicatedQuestion,
        ...questions.slice(index + 1)
    ];
=======
    return [];
>>>>>>> origin/task-state
}
