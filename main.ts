import {Student} from "./src/students";
import {Course} from "./src/courses";
import {University} from "./src/university";
import {addGrade, getAverageGrade, getBestStudent, findByName, calculateAge} from "./src/utils/utils";


const university = new University();

//create students
const student1 = new Student(1, "Masha", new Date("1999-05-01"));
// console.log(student1);
const student2 = new Student(2, "Pasha", new Date("1998-05-01"));
const student3 = new Student(3, "Sasha", new Date("1992-05-01"));

//create courses
const course1 = new Course(1234, "HTML", 5);
const course2 = new Course(5678, "CSS", 3);
const course3 = new Course(9012, "JavaScript", 4);
const course4 = new Course(3456, "TypeScript", 2);


//add to University
university.addStudent(student1);
university.addStudent(student2);
university.addStudent(student3);

university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);
university.addCourse(course4);


//addGrades
addGrade(student1, 1234, 90);
addGrade(student1, 5678, 80);
addGrade(student1, 9012, 70);
addGrade(student1, 3456, 60);

addGrade(student2, 1234, 70);
addGrade(student2, 5678, 90);
addGrade(student2, 9012, 60);
addGrade(student2, 3456, 70);

addGrade(student3, 1234, 100);
addGrade(student3, 5678, 90);
addGrade(student3, 9012, 90);
addGrade(student3, 3456, 90);

//test findByName
const res= findByName(university.getAllStudents(), 'Sasha');
console.log(res);

//test age
const age=calculateAge(student3.birthDate);
console.log(`Age:${age}`);

//test AverageGrade
const avg=getAverageGrade(student2);
console.log(`Average Grade:${avg}`);

//test BestStudent
const best=getBestStudent(university.getAllStudents());
console.log(`Best Student:${best.name}`);


