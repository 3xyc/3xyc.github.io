import ForceSimulation from "./forceSimulation";
import { Graph } from "../types/Graph";
import { Link } from "../types/Link";
export declare function indexLinks(graph: Graph): void;
export declare function renderNodes(this: ForceSimulation, graph: Graph): Promise<void>;
export declare function renderLinks(this: ForceSimulation, graph: Graph): void;
export declare function linkID(link: Link): string;
