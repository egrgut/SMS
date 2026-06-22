export interface WithId {
    id: number;
}
export interface Student extends WithId{
    name: string;
    birthDate: Date;
    grades: Grade[];

}

export interface Course extends WithId{
    name: string;
    credits: number;
}

export interface Grade {
    readonly courseId: number;
    readonly grade: number;
}




