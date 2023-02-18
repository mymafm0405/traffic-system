import { Direction } from "./direction.model";

export class Intersection {
    constructor(public id: number, public directions: Direction[] ) {}
}