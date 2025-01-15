import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

const readFile = (filepath) => {
    const currentDir = cwd();
    const absolutePath = resolve(currentDir, filepath);
    const content = readFileSync(absolutePath, 'utf-8');
    return content;
  };

export default readFile;