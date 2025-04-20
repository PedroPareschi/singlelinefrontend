import './App.css';
import '@xyflow/react/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Flow from "./components/Flow.tsx";
import Input from "./components/Input.tsx";
import { DiagramProvider } from "./context/DiagramContext.tsx";
import { ReactFlowProvider } from 'reactflow';

function App() {
    return (
        <div className="container-fluid">
            <DiagramProvider>
                <ReactFlowProvider>
                    <header>
                        <h3>Diagrama Unifiliar</h3>
                        <div className="w-100 bg-light" style={{ height: 150 }}>
                            <Input />
                        </div>
                    </header>
                    <main>
                        <div className="w-100 bg-body-tertiary" style={{ height: 500 }}>
                            <Flow />
                        </div>
                    </main>
                </ReactFlowProvider>
            </DiagramProvider>
        </div>
    );
}

export default App;