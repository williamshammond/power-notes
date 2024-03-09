export interface Section {
    readonly content: string;
    readonly title: string;
    readonly type: SectionType;
}

export const SectionType = {
    TEXT: "Text",
    MEDIA: "Media",
    TODO: "Todo",
} as const;

export type SectionType = (typeof SectionType)[keyof typeof SectionType];
