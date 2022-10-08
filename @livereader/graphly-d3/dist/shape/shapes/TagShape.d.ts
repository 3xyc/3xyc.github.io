import * as d3 from "d3";
import { ShapeStyle } from "../utils/styleModifier";
export interface TagStyle {
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    textStyles: ShapeStyle[];
    backgroundStyles: ShapeStyle[];
    cornerRadius: number;
}
export declare function TagStyle(padding: number | [number, number] | [number, number, number, number], textStyles?: ShapeStyle[], backgroundStyles?: ShapeStyle[], cornerRadius?: number): TagStyle;
export declare function TagShape(text: string, style: TagStyle): d3.Selection<SVGElement, any, any, any>;
