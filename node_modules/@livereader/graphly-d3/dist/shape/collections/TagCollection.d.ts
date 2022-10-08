import * as d3 from "d3";
import { TagStyle } from "../shapes/TagShape";
import { CollectionStyle } from "./ShapeCollection";
export declare function TagCollection(tags: string[], style: CollectionStyle, tagStyle: TagStyle): d3.Selection<SVGElement, any, any, any>;
