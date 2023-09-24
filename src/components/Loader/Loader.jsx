import { ProgressBar } from "react-bootstrap";
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader"> 
            <ProgressBar animated now={45} />;
        </div>
    );
};

export default Loader;