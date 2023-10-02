import "./style.scss";

const Spinner = () => {
    return (
        <div className="w-full absolute top-0 left-0 min-h-screen grid place-content-center bg-[rgba(0,0,0,0.5)]">
            <div className="loader">Loading...</div>
        </div>
    );
};

export default Spinner;
