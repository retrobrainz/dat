import stringify from './stringify';

describe('stringify()', () => {
  it('stringifies an object to .dat format', () => {
    const input = {
      $class: 'game',
      name: 'Example Game (World)',
      region: 'World',
      $entries: [
        {
          $class: 'rom',
          name: 'Example Game (World).gg',
          size: '262144',
          crc: '1D01F999',
          md5: 'F4F3211738002369B9ADA7A099E33A45',
          sha1: '3231D574E5EB0AC3A77B1D65D74F3A581819A9C7',
        },
      ],
    };

    const result = stringify(input, { indent: '    ' });

    const expectedOutput = `game (
    name "Example Game (World)"
    region World

    rom (
        name "Example Game (World).gg"
        size 262144
        crc 1D01F999
        md5 F4F3211738002369B9ADA7A099E33A45
        sha1 3231D574E5EB0AC3A77B1D65D74F3A581819A9C7
    )
)`;

    expect(result).toBe(expectedOutput);
  });

  it('stringifies an object to .dat format without indent', () => {
    const input = {
      $class: 'game',
      name: 'Example Game (World)',
      region: 'World',
      $entries: [
        {
          $class: 'rom',
          name: 'Example Game (World).gg',
          size: '262144',
          crc: '1D01F999',
          md5: 'F4F3211738002369B9ADA7A099E33A45',
          sha1: '3231D574E5EB0AC3A77B1D65D74F3A581819A9C7',
        },
      ],
    };

    const result = stringify(input);

    const expectedOutput = `game ( name "Example Game (World)" region World rom ( name "Example Game (World).gg" size 262144 crc 1D01F999 md5 F4F3211738002369B9ADA7A099E33A45 sha1 3231D574E5EB0AC3A77B1D65D74F3A581819A9C7 ) )`;

    expect(result).toBe(expectedOutput);
  });
});
