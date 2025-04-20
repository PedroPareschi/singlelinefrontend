import './App.css';
import '@xyflow/react/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Flow from "./components/Flow.tsx";
import Input from "./components/Input.tsx";
import {DiagramProvider} from "./context/diagram/DiagramProvider.tsx";

function App() {
    return (
        <div className="">
            <DiagramProvider>
                <h1 className="display-6">Diagrama Unifiliar</h1>
                <hr></hr>
                <div className="mt-3 mb-3">
                    <Input />
                </div>
                <div style={{ height: 500 }}>
                    <Flow />
                </div>
            </DiagramProvider>
        </div>
    );
}

export default App;