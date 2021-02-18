export enum TODO_STATUS {
  WILLDO = 'willdo',
  FINISHED = 'finished',
  FAVORITE = 'favorite'
}

export interface ITodo{
  id:number
  content:string
  status:TODO_STATUS
}

export interface IState {
  list:ITodo[]
}