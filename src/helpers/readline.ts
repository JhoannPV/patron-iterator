import * as readline from 'readline';

export const inputConsole = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
}