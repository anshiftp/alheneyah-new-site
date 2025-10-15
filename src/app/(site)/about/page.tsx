

/*
The first part of the page which emerges when we click on about us from the navbar
*/


import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Aboutus | Studiova",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="About we"
                desc="i craft <span>innovative digital</span> designs that amplify brand identity and drive meaningful results" />
            <AboutusDetail />
            <AboutusStats/>
            <AboutusFullimg/>
            <Team teamdataNumber="01"/>
        </main>
    );
};
