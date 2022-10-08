import { Template } from "../types/Template";
import { Node } from "../types/Node";
export default class TemplateStore {
    private _errorTemplate;
    get errorTemplate(): Template;
    private _templates;
    get templates(): {
        [key: string]: Template;
    };
    private failed;
    remoteOrigin: string;
    add(id: string, template: Template): void;
    get(node: Node): Promise<Template | undefined>;
    private load;
}
