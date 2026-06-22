"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./src/students");
const courses_1 = require("./src/courses");
const university_1 = require("./src/university");
const utils_1 = require("./src/utils/utils");
const university = new university_1.University();
//create students
const student1 = new students_1.Student(1, "Masha", new Date("1999-05-01"));
// console.log(student1);
const student2 = new students_1.Student(2, "Pasha", new Date("1998-05-01"));
const student3 = new students_1.Student(3, "Sasha", new Date("1992-05-01"));
//create courses
const course1 = new courses_1.Course(1234, "HTML", 5);
const course2 = new courses_1.Course(5678, "CSS", 3);
const course3 = new courses_1.Course(9012, "JavaScript", 4);
const course4 = new courses_1.Course(3456, "TypeScript", 2);
//add to University
university.addStudent(student1);
university.addStudent(student2);
university.addStudent(student3);
university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);
university.addCourse(course4);
//addGrades
(0, utils_1.addGrade)(student1, 1234, 90);
(0, utils_1.addGrade)(student1, 5678, 80);
(0, utils_1.addGrade)(student1, 9012, 70);
(0, utils_1.addGrade)(student1, 3456, 60);
(0, utils_1.addGrade)(student2, 1234, 70);
(0, utils_1.addGrade)(student2, 5678, 90);
(0, utils_1.addGrade)(student2, 9012, 60);
(0, utils_1.addGrade)(student2, 3456, 70);
(0, utils_1.addGrade)(student3, 1234, 100);
(0, utils_1.addGrade)(student3, 5678, 90);
(0, utils_1.addGrade)(student3, 9012, 90);
(0, utils_1.addGrade)(student3, 3456, 90);
//test findByName
const res = (0, utils_1.findByName)(university.getAllStudents(), 'Sasha');
console.log(res);
//test age
const age = (0, utils_1.calculateAge)(student3.birthDate);
console.log(`Age:${age}`);
//test AverageGrade
const avg = (0, utils_1.getAverageGrade)(student2);
console.log(`Average Grade:${avg}`);
//test BestStudent
const best = (0, utils_1.getBestStudent)(university.getAllStudents());
console.log(`Best Student:${best.name}`);
//# sourceMappingURL=main.js.map