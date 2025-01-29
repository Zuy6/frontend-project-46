const parse = (data, ext) => {
  switch (ext) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
};
export default parse;
