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
        return total ? total / this.marksArr.length : 0;
    }

    dismiss() {
        this.isDismissed = true;
        console.warn(`Student ${this.fullName} dismissed now`);
    }

    recover() {
        this.isDismissed = false;
        console.warn (`Student ${this.fullName} recovered now`);
    }
}

class BudgetStudent extends Student {
    constructor (university, course, fullName){
        super(university, course, fullName);
        this.intervalId = null;
    }

    clearInterval(){    
        if(this.intervalId){
          clearInterval(this.intervalId);
        }
    }

    dismiss(){
        super.dismiss();
        this.clearInterval();
    }

    getScolrarship() {
        this.clearInterval();

        if (this.isDismissed) {
            return console.error(`Student ${this.fullName} is dismissed, no scolarship info found`);
        }
        if (this.getAverageMark() < 4.0 || !!this.getAverageMark() === false) {
            return console.error(`Your average is ${this.getAverageMark()}. Minimum of 4.0 needed to get scolarship`);
        }
        if (!this.isDismissed && this.getAverageMark() >= 4.0) {
            console.log('You received 1400UAH scolarship');
            this.intervalId = setInterval ( () => console.log('You received 1400UAH scolarship'), 30000);
            setTimeout(() => clearInterval(this.intervalId), 150000);
            return;
        }
        return console.error(`Student ${this.fullName} scolarship entitlement info not found`);
    }
    
}
