import readSegment from './readSegment';

export default function readKeyValue(
  text: string,
  startIndex: number,
): { key: string; value: string; nextIndex: number } {
  const keyResult = readSegment(text, startIndex);
  const valueResult = readSegment(text, keyResult.nextIndex);
  return { key: keyResult.key, value: valueResult.key, nextIndex: valueResult.nextIndex };
}
