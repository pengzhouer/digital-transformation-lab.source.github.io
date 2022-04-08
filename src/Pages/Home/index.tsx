import Header from '../../Components/Header'
import Description from '../../Components/Description'
import Projects from './Projects'
import Professors from './Professors'
import Students from './Students'
import ContactUs from '../../Components/ContactUs'
import { useRef } from 'react'

type Props = {

}

function HomePage(props: Props) {
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const projectsRef = useRef<HTMLDivElement | null>(null)
    const professorsRef = useRef<HTMLDivElement | null>(null)
    const studentsRef = useRef<HTMLDivElement | null>(null)
    const contactUsRef = useRef<HTMLDivElement | null>(null)
    return (
        <>
            <Header regions={[
                {title: 'About us', domRef: descriptionRef},
                {title: 'Projects', domRef: projectsRef},
                {title: 'Professors', domRef: professorsRef},
                {title: 'Students', domRef: studentsRef},
                {title: 'contact', domRef: contactUsRef}
            ]}/>
            <Description forwardRef={descriptionRef}
                description={
                    <>
                        <h2>An <span className="logocolor">International Research Group</span> aiming at <br></br> developing better <span className="logocolor">software system</span> for better life</h2>
                        <p>We investigate how the next generation of software systems can effectively utilize modern Internet-based computing platforms.   </p>
                        <p>We develop novel frameworks and tools to enable IT-based organizations for the systematic and safe transformation of existing legacy systems or implementation of new systems relying on these platforms.</p>
                    </>
                }
            />
            <Projects forwardRef={projectsRef}/>
            <Professors forwardRef={professorsRef}/>
            <Students forwardRef={studentsRef}/>
            <ContactUs forwardRef={contactUsRef}/>
        </>
    )
}

export default HomePage