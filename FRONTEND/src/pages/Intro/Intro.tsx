import Logo from "../../components/UI/Icons/Logo";
import Play from "../../components/UI/Icons/Play";

const Intro = () => {
    return (
        <section className="pt-[224px]">
            <div className="container mx-auto px-5">
                <div className="flex gap-x-[110px]">
                    <Logo />
                    <Play />
                </div>
                <div className="p-4 mt-[80px]">
                    <video
                        className="yt-bg-video d-sm-block d-none rounded-[12px]"
                        preload="auto"
                        width="1320"
                        height="740"
                        autoplay=""
                        loop="true"
                        muted="true"
                    >
                        <source src="https://cms.jetour-ru.com/file/video/1672814240_dashing_pc.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Intro;
