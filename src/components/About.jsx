import aboutImg from "../assets/about.png"
import aboutImg2 from "../assets/about2.png"
function About() {
    return (
        <div className="max-w-screen-2xl md:px-14 p-4 mx-auto space-y-10">
            { /* 1st Part */}
            <div className="flex md:flex-row flex-col justify-between items-center gap-8">
                { /*Image content */}
                <div className="md:w-1/2">
                    <img src={aboutImg} alt="aboutImage" />
                </div>

                { /*about content */}
                <div className="md:w-1/2">
                    <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">We have been improving out products <span className="text-[#59A3F9]">for many years</span></h2>
                    <p className="text-2xl mb-7 text-tartiary">Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opcion en la cadena logística de distribución.</p>
                    <button className="btnPrimary">Vision</button>
                </div>
            </div>

            { /*2nd Part */}
            <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-8 mt-24">
                { /*Image content */}
                <div className="md:w-1/2">
                    <img src={aboutImg2} alt="aboutImage" />
                </div>
                { /*about content */}
                <div className="md:w-1/2">
                    <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">You can Practice at any<span className="text-[#59A3F9]">time convinent for you.</span></h2>
                    <p className="text-2xl mb-7 text-tartiary">Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opcion en la cadena logística de distribución.</p>
                    <button className="btnPrimary">Vision</button>
                </div>

            </div>
        </div>
    )
}

export default About