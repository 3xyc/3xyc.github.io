import * as d3 from "d3";
import ForceSimulation from "./forceSimulation";
import { Node } from "../types/Node";
export interface DraggableNode extends Node {
    isDraged?: boolean;
}
export declare function dragNode(this: ForceSimulation): d3.DragBehavior<Element, any, any>;
