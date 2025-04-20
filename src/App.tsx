import './App.css';
import '@xyflow/react/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DiagramFlow from "./components/DiagramFlow.tsx";
import DiagramInput from "./components/DiagramInput.tsx";
import {DiagramProvider} from "./context/diagram/DiagramProvider.tsx";

function App() {
    return (
        <div className="">
            <DiagramProvider>
                <h1 className="display-6">Diagrama Unifiliar</h1>
                <hr></hr>
                <div className="mt-3 mb-3">
                    <DiagramInput/>
                </div>
                <div style={{height: 500}}>
                    <DiagramFlow/>
                </div>
            </DiagramProvider>
        </div>
    );
}

export default App;