export type UploaderProps = {
    accept: {[key: string]: string[]};
    maxFiles?: number,
    maxSize?: number;
    disabled?: boolean;
    multiple?: boolean;
}