import {useState} from "react";
import axios from "axios";
import {useDiagramContext} from "../context/diagram/DiagramContext.tsx";

const DiagramInput = () => {
    const [file, setFile] = useState<File | null>(null);
    const {setDiagramData} = useDiagramContext();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    const handleFileUpload = async () => {
        if (!file) {
            return;
        }
        const fileData = await file.text();
        try {
            const response = await axios.post('http://localhost:8080/upload', fileData, {
                headers: {'Content-Type': 'application/xml'}
            });
            if (response.status === 200) {
                setDiagramData(response.data);
            } else {
                throw new Error('Error uploading file');
            }
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="bg-light p-4 max-w-md mx-auto d-flex flex-column gap-3 rounded">
            <div className="input-group">
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    onChange={handleFileChange}
                />
                <button className="btn btn-outline-secondary" onClick={handleFileUpload} type="button"
                        id="inputGroupFileAddon04">
                    Importar
                </button>
            </div>
        </div>
    )
}

export default DiagramInput;