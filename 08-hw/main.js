"use strict";

// BASIC

// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
const student = new Student("Odessa Psychoterapy High School", "1st", "Ostap Bender")
console.log('new student instance creating', student)

// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
console.log('student: ', student.getInfo());

// 3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
student.marksArr = [5, 4, 4, 5];
console.log('student marks before set: ', student.marks);

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
student.marks = 5;
console.log('student marks after set: ', student.marks);

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log('student average: ', student.getAverageMark());

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
student.dismiss();
console.log('dismissed student marks: ', student.marks);
student.marks = 2;
console.log('dismissed student marks, trying to set new mark: ', student.marks);
console.log('trying to get the average mark of dismissed student: ', student.getAverageMark());
console.log('trying to get the info about dismissed student: ', student.getInfo());

// 7. Створіть метод this.recover, який дозволить поновити студента
student.recover();
console.log('recovered student marks: ', student.marks);
console.log('check average mark of recovered student: ', student.getAverageMark());
console.log('check info about recovered student: ', student.getInfo());

// ADVANCED

// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
const budgetStudent = new BudgetStudent('Odessa Psychoterapy High School', '1st', 'Ostap Bender');
console.log('new budget student instance creating', budgetStudent);

// 2-5. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )

budgetStudent.getScolrarship(); // nothing happened - no marks, no average > 4.0
budgetStudent.marksArr = [5, 4, 4, 5];
budgetStudent.getScolrarship(); // scolarship printing
budgetStudent.dismiss();
budgetStudent.getScolrarship(); // message about no scolarship due to student dismissed
// budgetStudent.recover();
// budgetStudent.marksArr = [3, 4, 4, 3];
// budgetStudent.getScolrarship(); // recovered but message about no scolarship due to low average
// budgetStudent.marksArr = [5, 4, 4, 5];
// budgetStudent.getScolrarship(); // scolarship granted
// ------------------------------------------------------------------------------------------------------------------ //


