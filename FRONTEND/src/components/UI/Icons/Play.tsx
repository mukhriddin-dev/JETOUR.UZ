import {FC} from "react";
import usePlayStore from "../../../store/usePlaystore";

interface PROP {
    setVideo: () => void;
}

const Play: FC<PROP> = ({setVideo}) => {
    const {setPlay, play} = usePlayStore();
    return (
        <div
            onClick={() => {
                setPlay();
                setVideo();
            }}
            className="w-24 h-24 grid place-content-center border-2 border-black rounded-full"
        >
            {play ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                    <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="#333333" />
                </svg>
            ) : (
                <i className="bx bx-pause text-[36px]"></i>
            )}
        </div>
    );
};

export default Play;
