import ForceSimulation from "./forceSimulation";
interface ExportLink {
    source: string;
    target: string;
    id?: string;
    type?: string;
    directed?: boolean;
    label?: string;
    strength?: number | string;
    padding?: number;
    width?: number;
    curvature?: number;
    payload?: any;
}
interface ExportNode {
    id: string;
    x?: number;
    y?: number;
    shape: {
        type: string;
        scale: number;
        url?: string;
    };
    gravity?: number;
    anchor?: {
        type: string;
        x: number;
        y: number;
    };
    satellite?: {
        source: string;
        angle: number;
        distance: number;
    };
    payload?: any;
}
export interface ExportGraph {
    nodes: ExportNode[];
    links: ExportLink[];
}
export declare function exportGraph(this: ForceSimulation): ExportGraph;
export {};
