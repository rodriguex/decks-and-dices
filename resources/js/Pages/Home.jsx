import Banner from "@/Components/Banner";
import CallToAction from "@/Components/CallToAction";
import Community from "@/Components/Community";
import ExploreCards from "@/Components/ExploreCards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import InfoCards from "@/Components/InfoCards";
import Testimony from "@/Components/Testimony";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const parentDivRef = useRef(null);
    const [hasUserScrolled, setHasUserScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleScroll(event) {
        if (event.target.scrollingElement.scrollTop > 0 && !hasUserScrolled) {
            setHasUserScrolled(true);
        } else {
            setHasUserScrolled(false);
        }
    }

    return (
        <div
            ref={parentDivRef}
            className="w-full flex flex-col bg-[#171A1FFF] text-white"
            onScrollCapture={(event) => handleScroll(event)}
        >
            <Banner />
            <Header showBackground={hasUserScrolled} />
            <InfoCards />
            <ExploreCards />
            <Testimony />
            <Community />
            <CallToAction />
            <Footer />
        </div>
    );
}
