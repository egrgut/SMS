import { Student } from "./students";
import { Course } from "./courses";
declare class University {
    private students;
    private courses;
    addStudent(student: Student): void;
    addCourse(course: Course): void;
    getAllStudents(): Student[];
    getAllCourses(): Course[];
    getStudentById(id: number): Student | undefined;
    getCourseById(id: number): Course | undefined;
}
export { University };
//# sourceMappingURL=university.d.ts.map