import * as d3 from "d3";
import TemplateStore from "./templateStore";
import NodeDataStore from "./nodeDataStore";
import { Graph } from "../types/Graph";
import { Node } from "../types/Node";
import { Link } from "../types/Link";
import { Boundary, MoveOptions } from "./move";
import { EventStore } from "./eventStore";
import "../styles/graph.scss";
interface SelectionGroups {
    world: d3.Selection<SVGGElement, any, any, any>;
    nodes: d3.Selection<SVGGElement, any, any, any>;
    links: d3.Selection<SVGGElement, any, any, any>;
}
export default class ForceSimulation {
    debug: {
        enabled: boolean;
        bodyPoints: {
            enabled: boolean;
            color: string;
        };
    };
    private _svgElement;
    get svgElement(): SVGElement;
    set svgElement(svgElement: SVGElement);
    private _svgSelection;
    get svgSelection(): d3.Selection<SVGElement, any, any, any>;
    private _simulation;
    get simulation(): d3.Simulation<Node, Link>;
    private _selectedNodes;
    get selectedNodes(): string[];
    set selectedNodes(ids: string[]);
    private _zoom;
    worldTransform: {
        x: number;
        y: number;
        k: number;
    };
    get worldBounds(): Boundary;
    set zoomScaleExtent(extent: [number, number]);
    set zoomEnabled(enabled: boolean);
    private _onZoomRegister;
    get onZoomRegister(): {
        id: string;
        threshold: number;
        callback: (k: number) => boolean;
    }[];
    private _onZoomRoutines;
    get onZoomRoutines(): {
        [threshold: number]: ((k: number) => boolean)[];
    };
    set envGravity(value: number);
    set linkDistance(value: number);
    animationDuration: number;
    draggableNodes: boolean;
    selectionGroups: SelectionGroups;
    graph: Graph;
    templateStore: TemplateStore;
    nodeDataStore: NodeDataStore;
    readonly eventStore: EventStore;
    constructor(svgEl: SVGElement | d3.Selection<SVGElement, any, any, any>);
    private createSimulation;
    private createWorld;
    private setEvents;
    registerOnZoom(id: string, threshold: number, callback: (k: number) => boolean): void;
    deregisterOnZoom(id: string): void;
    private createOnZoomRoutines;
    private selectNodes;
    render(this: ForceSimulation, graph: Graph, alpha?: number, forced?: boolean): Promise<void>;
    exportGraph(): import("./export").ExportGraph;
    moveTo(options: MoveOptions): void;
    on(event: string, callback: (...args: any[]) => void): void;
}
export {};
