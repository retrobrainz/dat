import { DatEntry } from './DatObject';
import readSegment from './readSegment';

export default function parse(datContent: string): DatEntry[] {
  let currentIndex = 0;
  const result = [];
  while (currentIndex < datContent.length) {
    const { value, nextIndex } = parseObject(datContent, currentIndex);
    if (value) {
      result.push(value);
    }
    currentIndex = nextIndex;
  }
  return result;
}

function parseObject(
  text: string,
  startIndex: number,
): { value: DatEntry | null; nextIndex: number } {
  const value: DatEntry = { $class: '' };
  let currentIndex = startIndex;

  const typeResult = readSegment(text, startIndex);

  if (!typeResult.key) {
    return { value: null, nextIndex: typeResult.nextIndex };
  }

  const leftBracketResult = readSegment(text, typeResult.nextIndex);

  if (leftBracketResult.key !== '(') {
    return { value: null, nextIndex: leftBracketResult.nextIndex };
  }

  value.$class = typeResult.key;

  currentIndex = leftBracketResult.nextIndex;

  while (currentIndex < text.length) {
    const keyResult = readSegment(text, currentIndex);
    if (keyResult.key === ')') {
      currentIndex = keyResult.nextIndex;
      break;
    }

    const valueResult = readSegment(text, keyResult.nextIndex);

    if (valueResult.key === '(') {
      const entryResult = parseObject(text, currentIndex);
      if (entryResult.value) {
        if (!value.$entries) {
          value.$entries = [];
        }
        value.$entries.push(entryResult.value);
      }
      currentIndex = entryResult.nextIndex;
      continue;
    }

    if (keyResult.key) {
      value[keyResult.key] = valueResult.key;
      currentIndex = valueResult.nextIndex;
    }
  }

  return { value, nextIndex: currentIndex };
}
