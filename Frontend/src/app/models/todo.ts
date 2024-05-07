/**
 * ... das gleiche Todo Modell wie im Backend
 */
export interface Todo {
  id?: number;
  task: string;
  details: string;
  date: Date;
  completed: boolean;
}
