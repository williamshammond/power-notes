interface Props {
    readonly content: string;
}

export const LeftMenu = function LeftMenu({ content }: Props) {
    return <div>{content}</div>;
};
