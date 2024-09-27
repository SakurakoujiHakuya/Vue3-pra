export interface personInt {
    name: string,
    age: number
}

export type Persons = Array<personInt>; // 使用 type 来定义类型别名