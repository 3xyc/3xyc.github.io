import * as d3 from "d3";
import ForceSimulation from "./forceSimulation";
import { Transform } from "./move";
export declare function createZoom(this: ForceSimulation): d3.ZoomBehavior<Element, any>;
export declare function onZoom(this: ForceSimulation, transform: Transform): void;
