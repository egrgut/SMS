import type {Grade, Student as StudentInterface} from "./interface";

export class Student implements StudentInterface {
    constructor(
        readonly id: number,
        public name: string,
        public birthDate: Date) {
    }

    private _grades: Grade[] = []
    get grades(): Grade[] {
        return this._grades;
    }

}


