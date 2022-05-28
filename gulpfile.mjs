import {fileURLToPath} from "url";
import {dirname} from "path";

import "dotenv/config";

import deploy from "./gulp/deploy-to-ftp.mjs";
import clean from "./gulp/clean.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
process.rootDir = __dirname;

export { deploy, clean };
