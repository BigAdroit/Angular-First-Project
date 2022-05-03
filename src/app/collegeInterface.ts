// CREATING INTERFACE FOR THE DEPT 
interface dept {
    id : number,
    name : string,
    lecturers : number,
    students : number,
    dean : string
  }
// CREATING INTERFACE FOR THR COLLEGE
export interface college {
    id : number,
    name: string,
    department : dept []
}