import type {Course, Student} from "../interface";

//TODO calculate age
export const calculateAge = (date: Date): number => {
    const today: Date = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const month = today.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < date.getDate())) age--;
    return age;
}
//TODO addGrade
export const addGrade = (student: Student, courseId: number, grade: number): void => {
    student.grades.push({courseId, grade});
}
//TODO getAverageGrade
export const getAverageGrade = (student: Student) => {
    if (student.grades.length === 0)
        return 0;
    const sum = student.grades.reduce((acc, grade) => acc + grade.grade, 0);
    return sum / student.grades.length;
};

//TODO addStudent
export const addStudent = (students: Student[], student: Student): void => {
    const isDuplicate = students.find(f => f.name === student.name);
    if (isDuplicate) throw new Error("Student already exists");
    students.push(student);
}

//TODO addCourse
export const addCourse = (courses: Course[], course: Course): void => {
    const isDuplicate = courses.find(f => f.name === course.name);
    if (isDuplicate) throw new Error("Course already exists");
    courses.push(course);
}

//TODO findByName
export const findByName = (students: Student[], name: string): Student[] => {
    return students.filter(student => student.name.includes(name))
}

//TODO getBestStudent
export const getBestStudent = (students: Student[]): Student=> {
    if (students.length === 0) throw new Error("No students");
    return students.reduce((acc, student) => {
        const average = getAverageGrade(student);
        return average > getAverageGrade(acc) ? student : acc;
    }, students[0]!);
}
