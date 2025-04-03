import renderDiff from './stylish.js';
import formatPlain from './plain.js';

const format = (data, type = 'stylish') => {
  switch (type) {
    case 'stylish':
      return renderDiff(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      throw new Error(`Unsupported format: ${type}`);
  }
};

export default format;
