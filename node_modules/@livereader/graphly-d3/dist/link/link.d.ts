import { Link } from "../types/Link";
export declare enum ArrowPosition {
    Head = "head",
    Tail = "tail"
}
export declare function lineFull(link: Link): string | undefined;
export declare function line(link: Link): string | undefined;
export declare function arrow(link: Link, _arrowPos?: ArrowPosition): string | undefined;
export declare function labelPosition(link: Link): string | undefined;
export declare function pointInPolygon(point: {
    x: number;
    y: number;
}, polygon: {
    x: number;
    y: number;
}[]): boolean;
