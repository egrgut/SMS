import type { Course, Student } from "../interface";
export declare const calculateAge: (date: Date) => number;
export declare const addGrade: (student: Student, courseId: number, grade: number) => void;
export declare const getAverageGrade: (student: Student) => number;
export declare const addStudent: (students: Student[], student: Student) => void;
export declare const addCourse: (courses: Course[], course: Course) => void;
export declare const findByName: (students: Student[], name: string) => Student[];
export declare const getBestStudent: (students: Student[]) => Student;
//# sourceMappingURL=utils.d.ts.map