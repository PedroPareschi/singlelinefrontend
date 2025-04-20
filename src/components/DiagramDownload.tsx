import axios from "axios";
import {Node, Edge} from '@xyflow/react';

const DiagramDownload = ({nodes, edges}: { nodes: Node[], edges: Edge[] }) => {
    const data = {nodes, edges};

    const handleDownload = async () => {
        try {
            const response = await axios.post('http://localhost:8080/download', data,
                {
                    responseType: 'blob',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'diagrama-unifilar.json');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button className="btn btn-outline-secondary" hidden={!nodes || !edges}
                onClick={handleDownload} type="button"
                id="inputGroupFileAddon04">
            Baixar
        </button>)
}

export default DiagramDownload;