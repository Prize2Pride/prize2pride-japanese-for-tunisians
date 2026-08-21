export function phraseReviewCards(phrases, level, savedPhrases, markedOnly = false) {
  const saved = new Set(Array.isArray(savedPhrases) ? savedPhrases : []);
  return phrases.filter((phrase) => phrase.level === level && (!markedOnly || saved.has(phrase.id)));
}
