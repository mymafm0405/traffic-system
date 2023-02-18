import { Light } from "./light.model";

export class Direction {
    constructor(public id: number, public lights: Light[]) {}
}