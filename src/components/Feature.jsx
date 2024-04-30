import feature from '../assets/feature.png'

function Feature() {
    return (
        <div className="max-w-screen-2xl mx-auto my-24 md:px-14 px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left side */}
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold mb-3 lg:w-1/2">
                        Nuestros Servicios
                    </h3>
                    <p className="text-lg text-tartiary ">
                        Te Ofrecemos la mejor logistica para planear de forma mas eficiente
                        el modo en que serán transportados y almacenados los bienes que
                        necesita trasladar en el mejor plazo posible y con seguridad que
                        nosotros brindamos
                    </p>
                </div>
                {/* Right side */}
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        { /* Card 1 */}
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={feature} alt="" />
                                <h5 className='font-semibold text-2xl text-primary px-5 text-center'>Conventient study schedule </h5>
                            </div>
                        </div>
                        { /* Card 2 */}
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={feature} alt="" />
                                <h5 className='font-semibold text-2xl text-primary px-5 text-center'>Conventient study schedule </h5>
                            </div>
                        </div>
                        { /* Card 3 */}
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={feature} alt="" />
                                <h5 className='font-semibold text-2xl text-primary px-5 text-center'>Conventient study schedule </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
