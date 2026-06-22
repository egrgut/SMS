import type { Grade, Student as StudentInterface } from "./interface";
export declare class Student implements StudentInterface {
    readonly id: number;
    name: string;
    birthDate: Date;
    constructor(id: number, name: string, birthDate: Date);
    private _grades;
    get grades(): Grade[];
}
//# sourceMappingURL=students.d.ts.map