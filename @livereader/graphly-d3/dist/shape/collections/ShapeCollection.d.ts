import * as d3 from "d3";
export declare type BreakLine = "break-line";
export declare function BreakLine(): BreakLine;
export declare enum Alignment {
    Left = "left",
    Center = "center",
    Right = "right"
}
export interface CollectionStyle {
    height: number;
    width: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    rowCount: number;
    align: Alignment;
    rowMargins: number[];
}
export declare function CollectionStyle(height: number, width: number, x: number, y: number, dx: number, dy: number, rowCount: number, align?: Alignment, rowMargins?: number[]): CollectionStyle;
export declare function ShapeCollection(shapes: (d3.Selection<SVGElement, any, any, any> | BreakLine)[], style: CollectionStyle, ellipsis?: d3.Selection<SVGElement, any, any, any> | null): d3.Selection<SVGElement, any, any, any>;
