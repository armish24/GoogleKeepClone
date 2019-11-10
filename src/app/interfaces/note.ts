export interface Note {
    id: number;
    title: string;
    description: string;
    label?: string;
    isDone: boolean;
    isArchived: boolean;
}
