export default function readSegment(
  text: string,
  startIndex: number,
): { key: string; nextIndex: number } {
  let currentIndex = startIndex;
  let key = '';
  let quoted = false;

  while (currentIndex < text.length) {
    const char = text[currentIndex];
    currentIndex++;

    if (char === '"') {
      if (quoted) {
        break;
      } else {
        quoted = true;
      }
    } else if (char === ' ') {
      if (quoted) {
        key += char;
      } else if (key.length > 0) {
        break;
      }
    } else if (char === '\n') {
      if (key.length > 0) {
        break;
      }
    } else {
      key += char;
    }
  }

  return { key: key.trim(), nextIndex: currentIndex };
}
