// main.js

// Import custom module
const utils = require('./utils');

// Import external npm package
const chalk = require('chalk');

console.log(chalk.green('--- Using Custom Module ---'));
console.log(chalk.blue(`Addition: ${utils.add(5, 3)}`));
console.log(chalk.yellow(`Multiplication: ${utils.multiply(4, 2)}`));
console.log(chalk.magenta(utils.greet('Sahul')));
