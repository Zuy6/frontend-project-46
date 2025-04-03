import renderDiff from './stylish.js';
import formatPlain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return renderDiff(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

export default formatter;
