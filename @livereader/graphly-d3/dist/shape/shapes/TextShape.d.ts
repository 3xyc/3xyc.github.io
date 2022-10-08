import { ShapeStyle } from "../utils/styleModifier";
/**
 * @param  {String} text
 * @param  {ShapeStyle[]} styles
 * @return {Object} shape
 */
declare function TextShape(text: string, styles?: ShapeStyle[]): d3.Selection<SVGElement, any, any, any>;
export default TextShape;
