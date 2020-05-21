module.exports = class Task {
    constructor(title = "", isComplete = false, dueTo = new Date()) {
        this._title = title;
        this.isComplete = isComplete;
        this.dueTo = dueTo;
    }

    changeDue(date) {
        if (date instanceof Date) {
            this.dueTo = date;
            return true;
        }
        return false;
    }

    complete() {
        this.isComplete = true;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (typeof title === 'string') {
            this._title = title;
        }
    }


}