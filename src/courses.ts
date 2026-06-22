//TODO Courses
import type {Course as CoursesInterface} from "./interface";

export class Course implements CoursesInterface {
    constructor(readonly id: number,
                public name: string,
                public credits: number) {
    }
}
