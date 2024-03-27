import * as fs from 'fs';
import symlinkDir from 'symlink-dir';
import * as process from 'process';

const cwd = process.cwd();
const submodulePath = '.github/submodule-prism';

const fileLinks = [
  // components.json
  {
    present: `${cwd}/.github/components.json`,
    missing: `${cwd}/${submodulePath}/components.json`,
  },
  // grammars
  {
    present: `${cwd}/langs/prism-tact.js`,
    missing: `${cwd}/${submodulePath}/components/prism-tact.js`,
  },
  {
    present: `${cwd}/langs/prism-func.js`,
    missing: `${cwd}/${submodulePath}/components/prism-func.js`,
  },
  {
    present: `${cwd}/langs/prism-fift.js`,
    missing: `${cwd}/${submodulePath}/components/prism-fift.js`,
  },
  {
    present: `${cwd}/langs/prism-tlb.js`,
    missing: `${cwd}/${submodulePath}/components/prism-tlb.js`,
  },
  // examples/
  {
    present: `${cwd}/.github/examples/prism-tact.html`,
    missing: `${cwd}/${submodulePath}/examples/prism-tact.html`,
  },
];

const dirLinks = [
  {
    present: `${cwd}/tests/tact`,
    missing: `${cwd}/${submodulePath}/tests/languages/tact`,
  },
  {
    present: `${cwd}/tests/func`,
    missing: `${cwd}/${submodulePath}/tests/languages/func`,
  },
  {
    present: `${cwd}/tests/fift`,
    missing: `${cwd}/${submodulePath}/tests/languages/fift`,
  },
  {
    present: `${cwd}/tests/tlb`,
    missing: `${cwd}/${submodulePath}/tests/languages/tlb`,
  },
];

for (const fileLink of fileLinks) {
  // console.log(fileLink.present, '->', fileLink.missing);
  if (fs.existsSync(fileLink.missing)) { fs.unlinkSync(fileLink.missing); }
  fs.symlinkSync(fileLink.present, fileLink.missing);
}

for (const dirLink of dirLinks) {
  // console.log(dirLink.present, '->', dirLink.missing);
  symlinkDir.sync(dirLink.present, dirLink.missing);
}
