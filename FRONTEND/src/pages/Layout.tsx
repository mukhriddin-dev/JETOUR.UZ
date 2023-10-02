import {lazy, Suspense} from "react";

const Footer = lazy(() => import("../components/Footer/Footer"));
const Header = lazy(() => import("../components/Header/Header"));
const About = lazy(() => import("./About/About"));
const Intro = lazy(() => import("./Intro/Intro"));
const Models = lazy(() => import("./Models/Models"));
const Service = lazy(() => import("./Service/Service"));
const Spinner = lazy(() => import("../components/UI/Spinner/Spinner"));

const Layout = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Intro />
                <Models />
                <About />
                <Service />
                <Footer />
            </Suspense>
        </>
    );
};

export default Layout;
