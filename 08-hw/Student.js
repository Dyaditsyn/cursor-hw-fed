"use strict";

class Student {
    constructor(university, course, fullName) {
        this.university = university,
        this.course = course,
        this.fullName = fullName,
        this.marksArr = [],
        this.isDismissed = false
    }

    getInfo() {
        if (this.isDismissed) {
            return 'no such student';
        }
        return `${this.fullName}, ${this.university}, ${this.course} course`
    }

    get marks() {
        if (this.isDismissed) {
            return null;
        }
        return this.marksArr;
    }

    set marks(mark) {
        if (this.isDismissed) {
            return null;
        }
        this.marksArr.push(mark);
    }

    getAverageMark() {
        if (this.isDismissed) {
            return null;
        }
        const total = this.marksArr.reduce( (total, mark) => {
            return total + mark;
        }, 0);
        return total / this.marksArr.length;
    }

    dismiss() {
        this.isDismissed = true;
        setTimeout(() => { clearInterval(this.scolarshipTimer); }, 10);
    }

    recover() {
        this.isDismissed = false;
    }
}

class BudgetStudent extends Student {
    constructor (university, course, fullName){
        super(university, course, fullName);
    }

    getScolrarship() {
        if (this.isDismissed) {
            return console.error(`Student ${this.fullName} is dismissed`);
        }
        else if (this.getAverageMark() < 4.0) {
            return console.error(`Your average is ${this.getAverageMark()}. Minimum of 4.0 is needed to get Scolarship`);
        }
        else {
            console.log('You received 1400UAH scolarship');
            const scolarshipTimer = setInterval ( () => console.log('You received 1400UAH scolarship'), 30000);
            setTimeout(() => { clearInterval(scolarshipTimer); }, 120000);}
        }
    }
