import * as React from "react";
import {useState} from "react";
import { DiagramData} from "./DiagramData.ts";
import { DiagramContext } from "./DiagramContext.tsx";


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