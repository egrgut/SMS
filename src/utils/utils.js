"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestStudent = exports.findByName = exports.addCourse = exports.addStudent = exports.getAverageGrade = exports.addGrade = exports.calculateAge = void 0;
//TODO calculate age
const calculateAge = (date) => {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const month = today.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < date.getDate()))
        age--;
    return age;
};
exports.calculateAge = calculateAge;
//TODO addGrade
const addGrade = (student, courseId, grade) => {
    student.grades.push({ courseId, grade });
};
exports.addGrade = addGrade;
//TODO getAverageGrade
const getAverageGrade = (student) => {
    if (student.grades.length === 0)
        return 0;
    const sum = student.grades.reduce((acc, grade) => acc + grade.grade, 0);
    return sum / student.grades.length;
};
exports.getAverageGrade = getAverageGrade;
//TODO addStudent
const addStudent = (students, student) => {
    const isDuplicate = students.find(f => f.name === student.name);
    if (isDuplicate)
        throw new Error("Student already exists");
    students.push(student);
};
exports.addStudent = addStudent;
//TODO addCourse
const addCourse = (courses, course) => {
    const isDuplicate = courses.find(f => f.name === course.name);
    if (isDuplicate)
        throw new Error("Course already exists");
    courses.push(course);
};
exports.addCourse = addCourse;
//TODO findByName
const findByName = (students, name) => {
    return students.filter(student => student.name.includes(name));
};
exports.findByName = findByName;
//TODO getBestStudent
const getBestStudent = (students) => {
    if (students.length === 0)
        throw new Error("No students");
    return students.reduce((acc, student) => {
        const average = (0, exports.getAverageGrade)(student);
        return average > (0, exports.getAverageGrade)(acc) ? student : acc;
    }, students[0]);
};
exports.getBestStudent = getBestStudent;
//# sourceMappingURL=utils.js.map