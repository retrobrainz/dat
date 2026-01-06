import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import readSegment from './readSegment';

describe('readSegment()', () => {
  it('reads keys', async () => {
    const text = await readFile(join(import.meta.dirname, '../dats/nointro.dat'), 'utf-8');

    let result = readSegment(text, 0);
    expect(result).toEqual({ key: 'clrmamepro', nextIndex: 11 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: '(', nextIndex: 13 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'name', nextIndex: 19 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'Sega - Game Gear', nextIndex: 37 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'description', nextIndex: 51 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'Sega - Game Gear', nextIndex: 69 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'version', nextIndex: 79 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: '2025.11.10', nextIndex: 91 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'homepage', nextIndex: 102 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: 'http://github.com/robloach/libretro-dats', nextIndex: 144 });

    result = readSegment(text, result.nextIndex);
    expect(result).toEqual({ key: ')', nextIndex: 147 });
  });
});
