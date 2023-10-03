import {useRef} from "react";
import Logo from "../../components/UI/Icons/Logo";
import Play from "../../components/UI/Icons/Play";
import usePlayStore from "../../store/usePlaystore";

const Intro = () => {
    const {play} = usePlayStore();
    const playRef = useRef<HTMLVideoElement | null>(null);

    function setVideo(): void{
        if (play) {
            playRef.current?.play();
        } else {
            playRef.current?.pause();
        }
    }

    return (
        <section className="pt-[224px]">
            <div className="container mx-auto px-5">
                <div className="flex gap-x-[110px]">
                    <Logo />
                    <Play  setVideo={setVideo} />
                </div>
                <div className="p-4 mt-[80px]">
                    <video
                        className="yt-bg-video d-sm-block d-none rounded-[12px]"
                        preload="auto"
                        width="1320"
                        height="740"
                        autoPlay={play}
                        loop={true}
                        muted={true}
                        ref={playRef}
                        controls
                    >
                        <source src="https://cms.jetour-ru.com/file/video/1672814240_dashing_pc.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Intro;
