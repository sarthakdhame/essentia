import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FileCompat } from 'file-compat';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FileCompat({
  baseDirectory: _dirname,
})

const eslintConfig = {
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
    },
}),
};


export default eslintConfig;
