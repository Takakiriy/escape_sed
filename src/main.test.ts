import * as fs from "fs";
import * as main from './main';
import * as path from "path";
import * as lib from "./lib";
const  callMain = main.callMainFromJest;

if (path.basename(process.cwd()) !== 'src') {
    // Because the second execute of Jest watch mode is inherited the current folder.
    process.chdir('src');
}

test('back slash', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('\\n')).toBe('\\\\\\\\n');  // \n => \\\\n
    expect(main.escapeAfter( '\\n')).toBe('\\\\\\\\n');  // \n => \\\\n
});

test('slash', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a/b/c')).toBe('a\\\\/b\\\\/c');  // a/b/c => a\\/b\\/c
    expect(main.escapeAfter( 'a/b/c')).toBe('a\\\\/b\\\\/c');  // a/b/c => a\\/b\\/c
});

test('daller', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('$you')).toBe('\\$you');  // $you => \$you
    expect(main.escapeAfter( '$me')).toBe('\\$me');    // $me => \$me
});

test('double quotation', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('"a"')).toBe('\\"a\\"');  // " " => \" \"
    expect(main.escapeAfter( '"b"')).toBe('\\"b\\"');  // " " => \" \"
});

test('single quotation', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore("'a'")).toBe("'a'");  // no change
    expect(main.escapeAfter( "'b'")).toBe("'b'");  // no change
});

test('asterisk', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a*b')).toBe('a\\*b');  // a*b => a\*b
    expect(main.escapeAfter( 'a*b')).toBe('a*b');  // no change
});

test('question', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a?b')).toBe('a?b');  // no change
    expect(main.escapeAfter( 'a?b')).toBe('a?b');  // no change
});

test('plus', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a+b')).toBe('a+b');  // no change
    expect(main.escapeAfter( 'a+b')).toBe('a+b');  // no change
});

test('period', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('..a')).toBe('\\\\.\\\\.a');  // . => \\.
    expect(main.escapeAfter( '..b')).toBe('..b');  // no change
});

test('caret', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a^b')).toBe('a\\\\^b');  // ^ => \\^
    expect(main.escapeAfter( 'a^b')).toBe('a^b');  // no change
});

test('round bracket', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('(a)')).toBe('(a)');  // no change
    expect(main.escapeAfter( '(b)')).toBe('(b)');  // no change
});

test('curly brace', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('{a}')).toBe('{a}');  // no change
    expect(main.escapeAfter( '{b}')).toBe('{b}');  // no change
});

test('square bracket', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('[a]')).toBe('\\\\[a\\\\]');  // [ ] => \\[ \\]
    expect(main.escapeAfter( '[b]')).toBe('[b]');  // no change
});

test('virtical line', () => {
    // CentOS7 sed, mac OS 12 sed
    expect(main.escapeBefore('a|b|c')).toBe('a|b|c');  // no change
    expect(main.escapeAfter( 'a|b|c')).toBe('a|b|c');  // no change
});
