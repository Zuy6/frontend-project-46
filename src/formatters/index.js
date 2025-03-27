import renderDiff from './stylish.js';

const outputController = (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return renderDiff(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

export default outputController;
