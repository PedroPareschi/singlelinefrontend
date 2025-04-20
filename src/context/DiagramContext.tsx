import {createContext, useState} from "react";
import * as React from "react";

interface Position {
    x: number;
    y: number;
}



interface Component {
    data: {
        title: string;
        kv?: string;
    };
    id: string;
    type: string;
    targetPosition?: string;
    sourcePosition?: string;
    position: Position;
    hidden?: boolean;
}

interface Connection {
    data: {
        label: string;
    }
    id: string;
    source: string;
    target: string;
}

interface DiagramData {
    components: Component[];
    connections: Connection[];
}

interface DiagramContextType {
    diagramData: DiagramData;
    setDiagramData: (data: DiagramData) => void;
}

const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

interface DiagramProviderProps {
    children: React.ReactNode;
}

export const DiagramProvider = ({children}: DiagramProviderProps) => {
    const [diagramData, setDiagramData] = useState<DiagramData>({
        components: [],
        connections: [],
    });

    return (
        <DiagramContext.Provider value={{diagramData, setDiagramData}}>{children}</DiagramContext.Provider>
    )
}

export const useDiagramContext = () => {
    const context = React.useContext(DiagramContext);
    if (!context) {
        throw new Error('useDiagramContext must be used within a DiagramProvider');
    }
    return context;
}