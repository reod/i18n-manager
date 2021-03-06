#!/usr/bin/env node

import * as program from 'commander';

import { listLocales } from './command-handlers/list-locales';
import { cleanLocales } from './command-handlers/clean-locales';
import { translateLocales } from './command-handlers/translate-locales';


program
  .command('list [directory]')
  .description('List available locales')
  .alias('l')
  .action(listLocales);

program
  .command('translate <base-locale-path> <source-launguage> <target-language>')
  .description('Translate locales.')
  .alias('t')
  .option('-o, --override-existing', 'Override existing values (default false)')
  .option('-n, --output-file-name', 'Output fille name (default [target-locale].json)')
  .option('-s, --save', 'Write result to files (creates backup by default)')
  .action(translateLocales);

program
  .command('clean <directory> <base-locale>')
  .description('Clean locales')
  .alias('c')
  .option('-f, --fill-missing', 'Fill missing keys based on base locale')
  .option('-a, --sort', 'Sort keys based on base locale')
  .option('-s, --save', 'Write result to files (creates backup by default)')
  .action(cleanLocales);

program
  .version('0.1.0')
  .parse(process.argv);
