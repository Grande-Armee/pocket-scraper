import { addAliases } from 'module-alias';
import path from 'path';

const srcPath = path.resolve(__dirname, '..', 'dist');

addAliases({
  '@domain': path.join(srcPath, 'app', 'domain'),
  '@shared': path.join(srcPath, 'app', 'shared'),
});
