import * as d3 from "d3";
import { Node } from "../types/Node";
import { Link } from "../types/Link";
import ForceSimulation from "./forceSimulation";
export declare function linkForce(distance: number): d3.ForceLink<Node, Link>;
export declare function xForce(): d3.ForceX<Node>;
export declare function yForce(): d3.ForceY<Node>;
export declare function gravity(envGravity: number): d3.ForceManyBody<Node>;
export declare function circleCollide(): d3.Force<Node, Link>;
export declare function position(d: Node): {
    x: number;
    y: number;
};
export declare function strength(d: Node): number;
export declare function shapeCollide(this: ForceSimulation, alpha: number): any;
