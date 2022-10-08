import * as d3 from "d3";
export interface ShapeStyle {
    key: string;
    value: string;
    condition: (() => boolean) | boolean;
}
export interface LODStyle {
    shape: d3.Selection<SVGElement, any, any, any>;
    key: string;
    value: string;
    condition: ((k: number) => boolean) | boolean;
}
export declare function ShapeStyle(key: string, value: string, condition?: (() => boolean) | boolean): ShapeStyle;
export declare function LODStyle(shape: d3.Selection<SVGElement, any, any, any>, key: string, value: string, condition?: ((k: number) => boolean) | boolean): LODStyle;
export declare function applyStyles(shape: d3.Selection<any, any, any, any>, styles: ShapeStyle[]): void;
export declare function applyLODStyles(k: number, styles: LODStyle[]): void;
