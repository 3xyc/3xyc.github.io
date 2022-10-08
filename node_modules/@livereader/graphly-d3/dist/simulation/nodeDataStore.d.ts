import { Node } from "../types/Node";
export default class NodeDataStore {
    private nodes;
    clear(): void;
    add(id: string, node: Node): void;
    remove(id: string): void;
    hasNode(id: string): boolean;
    hasTemplateChange(id: string, data: Node): boolean;
    hasPayloadChanges(id: string, data: Node): boolean;
    private storeNode;
    private deepCopy;
}
