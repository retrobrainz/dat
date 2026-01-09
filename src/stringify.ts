export interface StringifyOptions {
  /** Indentation string to use (e.g., '  ' for two spaces, '\t' for a tab). */
  indent?: string;
}

export default function stringify(obj: any, options: StringifyOptions = {}): string {
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => stringify(item, options)).join('\n');
  }

  const { $class, $entries, ...attrs } = obj;
  const { indent = '' } = options;

  if (!$class) {
    return '';
  }

  const separator = indent ? '\n' : ' ';

  let output = `${$class} (${separator}`;

  Object.entries(attrs).forEach(([key, value]) => {
    let stringValue = String(value);

    if (stringValue.includes(' ') || stringValue.includes("'")) {
      stringValue = `"${value}"`;
    } else {
      stringValue = String(value);
    }

    output += `${indent}${key} ${stringValue}${separator}`;
  });

  if ($entries) {
    const entriesString = stringify($entries, options);

    if (indent) {
      output += '\n';
      output += entriesString
        .split('\n')
        .map((line) => (line ? indent + line : line))
        .join('\n');
    } else {
      output += entriesString;
    }
    output += separator;
  }

  output += `)`;

  return output.trim();
}
