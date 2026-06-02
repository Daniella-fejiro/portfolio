import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import FeaturedProjects from "../components/FeaturedProjects"
import AreasOfInterest from "../components/AreasOfInterest"
import WhyTheseIndustries from "../components/WhyTheseIndustries"
import CTA from "../components/cta"
import Footer from "../components/Footer"

export default function Home(){
    return(
        <div>
            <Hero />
            <Skills />
            <FeaturedProjects />
            <Experience />
            <AreasOfInterest />
            <WhyTheseIndustries />
            <CTA />
            <Footer />
        </div>
    )
}