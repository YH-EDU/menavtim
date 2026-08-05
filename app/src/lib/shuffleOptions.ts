/** Fisher–Yates shuffle with optional deterministic seed (per session / question). */
export function shuffleArray<T>(arr: T[], seed?: number): T[] {
  const a = [...arr];
  let s = seed ?? Math.floor(Math.random() * 233280);
  for (let i = a.length - 1; i > 0; i--) {
    if (seed != null) {
      s = (s * 9301 + 49297) % 233280;
    }
    const j = seed != null ? Math.floor((s / 233280) * (i + 1)) : Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffle option strings and return the new index of the correct answer. */
export function shuffleOptionsWithCorrect(
  options: string[],
  correctIndex: number,
  seed: number,
): { options: string[]; correct: number } {
  const order = shuffleArray(options.map((_, i) => i), seed);
  return {
    options: order.map((i) => options[i]),
    correct: order.indexOf(correctIndex),
  };
}
