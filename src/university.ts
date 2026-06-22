import {WithId} from "./interface";
import {Student} from "./students";
import {Course} from "./courses";

class Repository <T extends WithId>{
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

class University {
    private students = new Repository<Student>();
    private courses = new Repository<Course>();

    addStudent(student: Student): void {
        this.students.add(student);
    }
    addCourse(course: Course): void {
        this.courses.add(course);
    }
    getAllStudents(): Student[] {
        return this.students.getAll();
    }
    getAllCourses(): Course[] {
        return this.courses.getAll();
    }
    getStudentById(id: number): Student | undefined {
        return this.students.findById(id);
    }
    getCourseById(id: number): Course | undefined {
        return this.courses.findById(id);
    }
}

export {University};
