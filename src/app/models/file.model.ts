export interface File {
    name: string;
    hash?: string;
    stats?: string;
    children?: Array<File>
}
