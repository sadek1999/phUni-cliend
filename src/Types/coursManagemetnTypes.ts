
export type TCourse={
    _id: string
    title: string
    prefix: string
    code: number
    credits: number
    preRequisiteCourses: { course: string | null; isDeleted: boolean }[];
    isDeleted: boolean
   
}