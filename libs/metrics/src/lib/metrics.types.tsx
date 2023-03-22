export type MetricsProps = {
    color: 'error' | 'gray' | 'info' | 'primary' | 'purple' | 'rose' | 'success' | 'warning';
    counter: number;
    icon?: JSX.Element;
    title: string;
};