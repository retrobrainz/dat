# @retrobrainz/dat

![Version](https://img.shields.io/npm/v/@retrobrainz/dat)
![Downloads](https://img.shields.io/npm/dw/@retrobrainz/dat)

Another [clrmamepro .dat file format](https://github.com/SabreTools/SabreTools/wiki/DatFile-Formats#clrmamepro-format) parser for Node.js and browsers.

See also https://github.com/RobLoach/datfile

## Install

```bash
npm i -S @retrobrainz/dat
```

## Example

```js
import { readFile } from 'node:fs/promises';
import { parse } from '@retrobrainz/dat';

const datContent = await readFile('path/to/your.dat', 'utf-8');
const dat = parse(datContent);
```
