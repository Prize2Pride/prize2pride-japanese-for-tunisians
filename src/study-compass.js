export function studyCompassCounts(state, lessonCount, phraseCount) {
  const completed = Array.isArray(state?.completed) ? new Set(state.completed).size : 0;
  const savedPhrases = Array.isArray(state?.savedPhrases) ? new Set(state.savedPhrases).size : 0;
  const grammarDrafts = state?.drafts && typeof state.drafts === "object"
    ? Object.values(state.drafts).filter((draft) => typeof draft === "string" && draft.trim()).length
    : 0;
  return { completed: Math.min(completed, lessonCount), savedPhrases: Math.min(savedPhrases, phraseCount), grammarDrafts };
}
