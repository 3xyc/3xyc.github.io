export declare enum Event {
    NodeClick = "node:click",
    NodeDoubleClick = "node:doubleclick",
    NodeContextMenu = "node:contextmenu",
    NodeDragStart = "node:dragstart",
    NodeDragMove = "node:dragmove",
    NodeDragEnd = "node:dragend",
    LinkClick = "link:click",
    LinkDoubleClick = "link:doubleclick",
    LinkContextMenu = "link:contextmenu",
    LinkDragStart = "link:dragstart",
    LinkDragMove = "link:dragmove",
    LinkDragEnd = "link:dragend",
    EnvironmentClick = "environment:click",
    EnvironmentDoubleClick = "environment:doubleclick",
    EnvironmentContextMenu = "environment:contextmenu",
    EnvironmentMove = "environment:move",
    SimulationTick = "simulation:tick",
    SimulationTickEnd = "simulation:tickend"
}
export declare class EventStore {
    static readonly events: {
        [key: string]: {
            [key: string]: (...args: any[]) => void;
        };
    };
    private register;
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback: (...args: any[]) => void): void;
    emit(event: string, ...args: any[]): any;
}
