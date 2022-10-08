import * as d3 from "d3";
export declare function prerender(shape: d3.Selection<SVGElement, any, any, any>, onElement: (el: SVGGraphicsElement) => void): void;
export declare function getBBox(shape: d3.Selection<SVGElement, any, any, any>): SVGRect;
export declare function create(type: string): d3.Selection<SVGElement, any, any, any>;
export declare function transform(shape: d3.Selection<SVGElement, any, any, any>, size: number): {
    scale: number;
    translate: {
        x: number;
        y: number;
    };
};
export declare function Circle(radius: number): d3.Selection<SVGElement, any, any, any>;
export declare function Rectangle(width: number, height: number, cr?: number): d3.Selection<SVGElement, any, any, any>;
export declare function Polygon(n: number, radius: number, curveRadius?: number): d3.Selection<SVGElement, any, any, any>;
