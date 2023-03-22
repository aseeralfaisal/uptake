export type TabsProps = {
    bordered?: boolean;
    centered?: boolean;
    color: 'gray' | 'primary';
    contents: JSX.Element[];
    size: 'sm' | 'md';
    soft?: boolean;
    titles: string[];
};
