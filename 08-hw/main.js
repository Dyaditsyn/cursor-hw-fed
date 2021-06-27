"use strict";

console.group("BASIC part");

console.group("Prints a new instance of Student object");
const student = new Student("Odessa Psychoterapy High School", "1st", "Ostap Bender");
console.log(student);
console.groupEnd();

console.group("Prints info about our student in format of getInfo function");
console.log(`our student info: `, student.getInfo());
console.groupEnd();

console.group("Define an array of student marks and getting it using getter");
student.marksArr = [5, 4, 4, 5];
console.log('Original student marks: ', student.marks);
console.groupEnd();

console.group("Adding a new mark using setter and getting updated marks with getter");
student.marks = 5;
console.log('Student marks after adding new one: ', student.marks);
console.groupEnd();

console.group("Adding a method calculates an average of marks");
console.log('Student average: ', student.getAverageMark());
console.groupEnd();

console.group("Creating Dismiss student method and testing it");
student.dismiss();
console.log('Dismissed student marks, trying to see using getter: ', student.marks);
student.marks = 2;
console.log('Dismissed student marks, trying to add new mark: ', student.marks);
console.log('Trying to get an average mark of dismissed student: ', student.getAverageMark());
console.log('Trying to get the info about dismissed student: ', student.getInfo());
console.groupEnd();

console.group("Creating Recover student method and testing it");
student.recover();
console.log('Recovered student marks: ', student.marks);
console.log('Check average mark of recovered student: ', student.getAverageMark());
console.log('Check info about recovered student: ', student.getInfo());
console.groupEnd();

console.groupEnd();


console.group("ADVANCED part");

console.group("Creating a new BudgetStudent class inherits original Student class and creating a new instance of budgetStudent object");
const budgetStudent = new BudgetStudent('Odessa Psychoterapy High School', '1st', 'Ostap Bender');
console.log(budgetStudent);
console.groupEnd();

console.group("Creating getScolrarship method and trying it on our budget student - no marks, no scolarship");
budgetStudent.getScolrarship();
console.groupEnd();

console.group("Updating with marks good for scolarship - received");
budgetStudent.marksArr = [5, 4, 4, 5];
budgetStudent.getScolrarship();
console.groupEnd();

console.group("Immidiately dissmissing a student, its a reason why message displayed only once. Before dissmissing only");
budgetStudent.dismiss();
budgetStudent.getScolrarship(); 
console.groupEnd();

console.group("Recovering a student but with low marks and trying to get a scolarship - no scolarship below 4.0");
budgetStudent.recover();
budgetStudent.marksArr = [3, 4, 4, 3];
budgetStudent.getScolrarship();
console.groupEnd();

console.group("Updating with good marks, now scolarship granted and running every 30sec:)");
budgetStudent.marksArr = [5, 4, 4, 5];
budgetStudent.getScolrarship(); // scolarship granted

console.groupEnd();



