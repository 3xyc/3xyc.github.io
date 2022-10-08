import ForceSimulation from "./forceSimulation";
import { Node } from "../types/Node";
export interface Transform {
    x: number;
    y: number;
    k: number;
}
export interface Boundary {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface MoveOptions {
    transform?: Transform;
    boundaries?: Boundary[];
    nodes?: Node[];
    duration?: number;
    padding?: number;
}
export declare function moveTo(this: ForceSimulation, options: MoveOptions, onZoom: (t: Transform) => void): void;
