export declare function main(): Promise<void>;
export declare function escapeBefore(unescaped: string): string;
export declare function escapeAfter(unescaped: string): string;
export declare function println(message: any, delayedExpanding?: boolean): void;
export declare function callMainFromJest(parameters?: string[], options?: {
    [name: string]: string;
}): Promise<void>;
export declare var stdout: string;
export declare var programArguments: string[];
export declare var programOptions: {
    [key: string]: any;
};
