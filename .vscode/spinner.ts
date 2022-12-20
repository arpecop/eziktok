import { shuffle } from 'lodash';

export function parseTemplate (template: string): string {
  type Alternative = string;
  type Set = string;

  const sets: Set[] = template.split(/{[^}]*}/);

  const chosenAlternatives: Alternative[] = [];

  chosenAlternatives.push(
    ...sets
      .filter((set) => set !== '')
      .map((set) => {
        // Split the set on the "|" character to get the individual alternatives
        const alternatives: Alternative[] = set.split('|');

        // Shuffle the array of alternatives using the _.shuffle function from Lodash
        const shuffledAlternatives: Alternative[] = shuffle(alternatives);

        // Use the first alternative in the shuffled array as the chosen alternative
        const chosenAlternative: Alternative = shuffledAlternatives[0];

        // Return the chosen alternative
        return chosenAlternative;
      }),
  );

  // Replace the template string with the chosen alternatives
  const message = template.replace(
    /{[^}]*}/g,
    (match) => chosenAlternatives.shift() || match,
  );

  return message;
}
