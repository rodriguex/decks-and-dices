import Banner from "@/Components/Banner";
import CallToAction from "@/Components/CallToAction";
import Community from "@/Components/Community";
import ExploreCards from "@/Components/ExploreCards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import InfoCards from "@/Components/InfoCards";
import Testimony from "@/Components/Testimony";

export default function Home() {
    return (
        <div className="w-full flex flex-col h-[2000px]">
            <Header />
            <Banner />
            <InfoCards />
            {/* <ExploreCards />
            <Community />
            <Testimony />
            <CallToAction />
            <Footer /> */}
        </div>
    );
}
