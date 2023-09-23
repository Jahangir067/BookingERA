import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <div>
            <div className="hero-overlay " style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", marginTop: '220px' }}></div>
            <div className="hero-content text-center text-light">
                <div className="container max-w-md">
                    <h1 className=" display-1 text-black">Page Not Found</h1>
                    <p className="mb-5 text-black">404 error. Your requested page was not found.</p>
                    <button onClick={navigateToHome} className="btn btn-primary">
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
