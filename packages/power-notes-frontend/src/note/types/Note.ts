import { Section } from "./Section";

export interface Note {
    readonly name: string;
    readonly sections: ReadonlyArray<Section>;
}
