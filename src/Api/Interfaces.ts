export interface TreeItemInterface {
    mode: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
}

export interface RepositoryInterface{
    sha: string;
    tree: TreeItemInterface[];
    truncated: boolean;
    url: string;
}
