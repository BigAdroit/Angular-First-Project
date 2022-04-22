interface dept {
    id : number,
    name : string,
    lecturers : number,
    students : number,
    dean : string
  }
export interface college {
    id : number,
    name: string,
    department : dept []
}