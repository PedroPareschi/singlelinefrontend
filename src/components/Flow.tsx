import {useEffect, useState} from 'react';
import {
    ReactFlow,
    Node,
} from '@xyflow/react';
import { useDiagramContext } from '../context/DiagramContext.tsx';
import {Edge} from "reactflow";

const Flow = () => {
    const { diagramData } = useDiagramContext();

    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    useEffect(() => {
        const newNodes = diagramData.components.map((comp) => ({
            id: comp.id,
            data: {label: comp.data.title},
            position: comp.position,
            type: comp.type,
        }));
        setNodes(newNodes);

        const newEdges = diagramData.connections.map((con) => ({
            id: con.id,
            label: con.data.label,
            source: con.source,
            target: con.target,
        }))
        setEdges(newEdges);

    }, [diagramData, setNodes, setEdges]);

    return <ReactFlow nodes={nodes} edges={edges} fitView />;
};

export default Flow;
