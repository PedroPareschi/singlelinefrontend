import * as React from "react";
import {DiagramData} from "./DiagramData.ts";
import {createContext} from "react";

interface DiagramContextType {
    diagramData: DiagramData;
    setDiagramData: (data: DiagramData) => void;
}

export const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

export const useDiagramContext = () => {
    const context = React.useContext(DiagramContext);
    if (!context) {
        throw new Error('useDiagramContext must be used within a DiagramProvider');
    }
    return context;
}