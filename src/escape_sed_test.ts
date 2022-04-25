import * as fs from 'fs';
import * as child_process from 'child_process';
import * as path from 'path';
import * as lib from './lib';

const  scriptPath =  `../build/app.js`;
const  testFolderPath = `test_data` + path.sep;

const  debug = false;

async function  main() {
    if (!debug) {
        await TestOfFirst();
    } else {
        await TestOfFirst();
    }
	console.log('Pass');
}

// TestOfFirst
async function  TestOfFirst() {
	let  returns: ProcessReturns;

    console.log(`TestCase: TestOfFirst`);

    // Test Main
    returns = await callChildProccess(`node ${scriptPath} --test --locale en-US`,
        {inputLines: [
			'12',
            '\\n',
            '\\r\\n'
        ]}
    );
    const  answer = fs.readFileSync(testFolderPath + "1_first_1_ok_1_answer.txt")
        .toString().substring(cutBOM);

    // Check
    if (returns.stdout !== answer) {
        printDifferentPaths(`_output.txt`, '1_first_1_ok_1_answer.txt');
        fs.writeFileSync(testFolderPath + "_output.txt", returns.stdout);
        throw new Error();
    }
}

// deleteFile
function  deleteFile(path: string) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}

// printDifferentPaths
function  printDifferentPaths(path1: string, path2: string) {
	console.log(`Error: different between the following files`);
	console.log(`  Path1: ${testFolderFullPath + path1}`);
	console.log(`  Path2: ${testFolderFullPath + path2}`);
}

// diffStrings
function  diffStrings(result: string, answer: string) {
	const  resultFilePath = '_output.txt';
	const  answerFilePath = '_answer.txt';

	fs.writeFileSync(testFolderFullPath + resultFilePath, result);
	fs.writeFileSync(testFolderFullPath + answerFilePath, answer);

	printDifferentPaths(resultFilePath, answerFilePath);
}

// callChildProccess
async function  callChildProccess(commandLine: string,  option?: ProcessOption): Promise<ProcessReturns> {
	return   new Promise( async (resolveFunction, rejectFunction) => {
		const  returnValue = new ProcessReturns();
		try {
			const  childProcess = child_process.exec( commandLine,

				// on close the "childProcess" (2)
				(error: child_process.ExecException | null, stdout: string, stderr: string) => {
					returnValue.stdout = stdout;
					returnValue.stderr = stderr;
					resolveFunction(returnValue);
				}
			);
			if (option && childProcess.stdin) {

				if (option.inputLines) {
					await new Promise(resolve => setTimeout(resolve, 300));
					for (const inputLine of option.inputLines) {
						console.log(inputLine);
						childProcess.stdin.write(inputLine + "\n");
						await new Promise(resolve => setTimeout(resolve, 200));
					}
				}
				childProcess.stdin.end();
			}

			// on close the "childProcess" (1)
			childProcess.on('close', (exitCode: number) => {
				returnValue.exitCode = exitCode;
			});
			childProcess.on('exit', (exitCode: number) => {
				returnValue.exitCode = exitCode;
			});
		} catch (e) {
			throw Error(`Error in the command line ${commandLine}`);
		}
	});
}

// ProcessOption
class ProcessOption {
	inputLines?: string[];
}

// ProcessReturns
class ProcessReturns {
	exitCode: number = 0;
	stdout: string = '';
	stderr: string = '';
}

const  testFolderFullPath = lib.getFullPath( `../src/${testFolderPath}`, process.cwd());
const  cutBOM = 1;
const  notFound = -1;
main();
