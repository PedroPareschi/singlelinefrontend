import {useEffect, useState} from 'react';
import {
    ReactFlow,
    Node as FlowNode,
} from '@xyflow/react';
import {Edge} from "reactflow";
import {useDiagramContext} from "../context/diagram/DiagramContext.tsx";
import {getColorBaseKv} from "../utils/getColorBaseKv.ts";
import '@xyflow/react/dist/style.css';
import DiagramDownload from "./DiagramDownload.tsx";

const DiagramFlow = () => {
    const {diagramData} = useDiagramContext();

    const [nodes, setNodes] = useState<FlowNode[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    useEffect(() => {
        const newNodes = diagramData.components
            .filter(comp => comp.hidden === false &&
                (comp.type === 'bus' || comp.type === 'machine' || comp.type === 'load'))
            .map((comp) => ({
                id: comp.id,
                data: {label: comp.data.title},
                position: comp.position,
                type: comp.type,
                style: {
                    background: getColorBaseKv(comp.data.kv || 0),
                    height: comp.data.kv != null ? comp.data.kv : 50,
                },
            }));
        console.log(newNodes);
        setNodes(newNodes);

        const newEdges = diagramData.connections
            .filter(con =>
                newNodes.some(node => node.id === con.source) &&
                newNodes.some(node => node.id === con.target))
            .map((con) => ({
                id: con.id,
                label: con.data.label,
                source: con.source,
                target: con.target,
            }))
        setEdges(newEdges);

    }, [diagramData, setNodes, setEdges]);

    return (<>
        <ReactFlow nodes={nodes} edges={edges} fitView/>
        <DiagramDownload nodes={nodes} edges={edges}/>
    </>);
};
export default DiagramFlow;
