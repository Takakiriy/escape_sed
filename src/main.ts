import * as path from "path";  // or path = require("path")
import * as readline from 'readline';
import * as lib from "./lib";
import { pp } from "./lib";

// main
export async function  main() {
    locale = Intl.NumberFormat().resolvedOptions().locale;
    if ('locale' in programOptions) {
        locale = programOptions.locale;
    }

    let  before = await lib.input('before>');
    let  after = await lib.input('after>');
    console.log('');
    console.log(`before: ${before}`);
    console.log(`after: ${after}`);

    before = escapeBefore(before);
    after = escapeAfter(after);

    console.log(`sed "s/${before}/${after}/g"`);
}

// escapeBefore
export function  escapeBefore(unescaped: string): string {
    var  before = unescaped;
    before = before.replace(/\\/g, '\\\\\\\\');  // \ => \\\\
    before = before.replace(/\//g, '\\\\/');     // / => \\/
    before = before.replace(/\$/g, '\\$');    // $ => \$
    before = before.replace(/"/g,  '\\"');    // " => \"
    before = before.replace(/\*/g, '\\*');    // * => \*
    before = before.replace(/\./g, '\\\\.');  // . => \\.
    before = before.replace(/\^/g, '\\\\^');  // ^ => \\^
    before = before.replace(/\[/g, '\\\\[');  // [ => \\[
    before = before.replace(/\]/g, '\\\\]');  // ] => \\]
    const  escaped = before;
    return  escaped;
}

// escapeAfter
export function  escapeAfter(unescaped: string): string {
    var  after = unescaped;
    after = after.replace(/\\/g, '\\\\\\\\');  // \ => \\\\
    after = after.replace(/\//g, '\\\\/');     // / => \\/
    after = after.replace(/\$/g, '\\$');  // $ => \$
    after = after.replace(/"/g,  '\\"');  // " => \"
    const  escaped = after;
    return  escaped;
}

// getStdOut
// Example:
//    var d = getStdOut();  // Set break point here and watch the variable d
function  getStdOut(): string[] {
    return  stdout.split('\n');
}

// println
// #keyword: println, console.log, consoleLog
// Output any text to standard output.
export function  println(message: any, delayedExpanding: boolean = false) {
    if (typeof message === 'object' && !delayedExpanding) {
        message = JSON.stringify(message);
    }
    if (withJest && !delayedExpanding) {
        stdout += message.toString() + '\n';
        pp(message.toString());
    } else {
        consoleLog(message);
    }
}
const  consoleLog = console.log;
console.log = println;

// callMainFromJest
// #keyword: callMainFromJest
export async function  callMainFromJest(parameters?: string[], options?: {[name: string]: string}) {
    withJest = true;
    stdout = '';
    if (parameters) {
        programArguments = parameters;
    } else {
        programArguments = [];
    }
    if (options) {
        programOptions = options;
    } else {
        programOptions = {};
    }

    await main();
}

var    locale = '';
var    withJest = false;
export var  stdout = '';
export var  programArguments: string[] = [];
export var  programOptions: {[key: string]: any} = {};
