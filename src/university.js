"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.University = void 0;
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
class University {
    students = new Repository();
    courses = new Repository();
    addStudent(student) {
        this.students.add(student);
    }
    addCourse(course) {
        this.courses.add(course);
    }
    getAllStudents() {
        return this.students.getAll();
    }
    getAllCourses() {
        return this.courses.getAll();
    }
    getStudentById(id) {
        return this.students.findById(id);
    }
    getCourseById(id) {
        return this.courses.findById(id);
    }
}
exports.University = University;
//# sourceMappingURL=university.js.map