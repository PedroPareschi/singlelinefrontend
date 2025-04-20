export interface Position {
    x: number;
    y: number;
}

export interface Component {
    data: {
        title: string;
        kv?: number;
    };
    id: string;
    type: string;
    targetPosition?: string;
    sourcePosition?: string;
    position: Position;
    hidden: boolean | true;
}

export interface Connection {
    data: {
        label: string;
    };
    id: string;
    source: string;
    target: string;
}

export interface DiagramData {
    components: Component[];
    connections: Connection[];
}
