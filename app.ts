import * as inquirer from 'inquirer';
// Define the questions for the user
const questions = [
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
    },
];
// Perform the calculation based on user input
function calculate(num1: number, operation: string, num2: number): any {
    switch (operation) {
        case 'Add':
            return num1 + num2;
        case 'Subtract':
            return num1 - num2;
        case 'Multiply':
            return num1 * num2;
        case 'Divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}

// Use inquirer to prompt the user for input
inquirer.prompt(questions).then((answers) => {
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    const operation = answers.operation;

    const result = calculate(num1, operation, num2);

    console.log(`Result: ${result}`);
});
