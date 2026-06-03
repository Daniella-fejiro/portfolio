import AboutMe from "../components/AboutMe"
import AboutHero from "../components/AboutHero"
import WhyIndustries from "../components/WhyTheseIndustries"
import CurrentFocus from "../components/CurrentFocus"
import SkillsSection from "../components/SkillsSection"
import CTA from "../components/cta"

export default function About(){
    return(
        <>
            <AboutHero />
            <AboutMe />
            <WhyIndustries />
            <CurrentFocus />
            <SkillsSection />
            <CTA />
        </>
    )
}