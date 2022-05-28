import {rm} from 'fs/promises';

export default function clean() {
  return rm('dist', {recursive: true, force: true});
}
