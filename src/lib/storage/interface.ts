// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IStorage<T, FuncResult = any> {
  load(): FuncResult;
  setValues(value: Partial<T>): FuncResult;
  values(): T;
}
