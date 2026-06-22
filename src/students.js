"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    id;
    name;
    birthDate;
    constructor(id, name, birthDate) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
    }
    _grades = [];
    get grades() {
        return this._grades;
    }
}
exports.Student = Student;
//# sourceMappingURL=students.js.map