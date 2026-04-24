// gsap stuff
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

import React, {useState, useEffect, useRef} from 'react';  // don't even know if this is necessary.
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [info, setInfo] = useState(true);
    const navigate = useNavigate(); // for the navigation after the animation.
    
    // refs
    const scrolRef = useRef();
    const scrolRef2 = useRef();
    const scrolRef3 = useRef();
    const scrolRef4 = useRef();
    
    const picRef = useRef();
    const titleRef = useRef();
    const subTitleRef = useRef();
    const btnRef = useRef();

    useEffect(()=>{
        console.log(info, setInfo)
    }, [info])
    
    // intro animation.
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.from(picRef.current, {x: -150, opacity: 0, borderRadius: '0%',duration:1})
        tl.from(titleRef.current, {y: -50, opacity: 0, duration: 1})
        tl.from(subTitleRef.current, {x: -30, opacity: 0, duration: 1}, '-=0.3')
        tl.from(btnRef.current, {scale: 0, duration: .5}, '-=1')
        
        // on scroll animations.
        // the forEach loop used here makes one child element animate at a time. Stagger will not work because all the children are not being animated once.
        const divs = gsap.utils.toArray(scrolRef.current.children); // creates an array of the children elements of the container with ref "scrolRef".
        divs.forEach((div)=>{
            gsap.from(div, {
                x: -50 * (divs.indexOf(div) + 5),   // don't mind the calc, u can just do -50.
                opacity: 0,
                // stagger: {
                //     amount: .5,
                //     axis: 'y',
                // },
                scrollTrigger: {
                    trigger: div,
                    start: 'top bottom',
                    end: 'top 50%', // what percentage of the viewport does the animation end.
                    scrub: true
                }
            })
        })

        // scroll animation2
        // here where no forEach loop was used, all the children elements are animated once. Stager can now work.
        const divs2 = gsap.utils.toArray(scrolRef2.current.children);
        gsap.from(divs2, {
            y: 50 * (divs2.indexOf(divs2) + 5),
            opacity: 0,
            stagger: 0.2, // or any delay you want
            scrollTrigger: {
                trigger: scrolRef2.current,
                start: 'top bottom',
                end: 'bottom 50%',
                scrub: true
            }
        });
        
        // scroll animation3
        const divs3 = gsap.utils.toArray(scrolRef3.current.children);
        gsap.from(divs3, {
            x: 50,
            opacity: 0,
            stagger: 0.2, // or any delay you want
            scrollTrigger: {
                trigger: scrolRef3.current,
                start: 'top bottom',
                end: 'bottom 60%',
                scrub: true
            }
        });

        // scroll animation4
        const divs4 = gsap.utils.toArray(scrolRef4.current.children);
        gsap.from(divs4, {
            x: -50 * (divs2.indexOf(divs2) + 5),
            opacity: 0,
            stagger: 0.2, // or any delay you want
            scrollTrigger: {
                trigger: scrolRef4.current,
                start: 'top bottom',
                end: 'bottom 90%',
                scrub: true
            }
        });

        // the single header animation (we help businesses grow)
        gsap.from('#tt', {
            x: -50,
            opacity: 0,
            scrollTrigger: {
                trigger: '#tt',
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: true
            }
        })

    }, [])


    // exit animation function.
    const handleExit = (e)=>{
        e.preventDefault();
        const tl2 = gsap.timeline({
            onComplete: ()=>{navigate('/Employees')}
        });
        tl2.to(picRef.current, {x: -150, opacity: 0, borderRadius: '0%',duration:.8})
        tl2.to(titleRef.current, {y: -50, opacity: 0, duration: .8}, '-=0.1')
        tl2.to(subTitleRef.current, {x: 30, opacity: 0, duration: .8}, '-=0.3')
        tl2.to(btnRef.current, {scale: 0, duration: .5}, '-=1')
    }


    return (
        <>
            <div className="container-fluid bg-dark text-white d-flex align-items-center" style={{minHeight: '100vh'}}>
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* Text Section */}
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 ref={titleRef} className="display-4 fw-bold">Hello there</h1>
                            <p ref={subTitleRef} className="lead">
                                Welcome to <span className='fw-bold'>Mployee</span>. I am the CEO here, what can we do for you today.
                            </p>
                            <button ref={btnRef} className="btn btn-primary mt-3 px-4 py-2" onClick={handleExit}>
                                Get Started
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="col-lg-6 text-center">
                            <img
                                ref={picRef}
                                src="/china.png" 
                                alt="Rex" 
                                className="img-fluid w-75"
                                style={{maxHeight: '500px', objectFit: 'contain', borderRadius: '50%'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        
            <section className='my-5'>
                <div className="container">
                    <div className=""  ref={scrolRef}>
                        <h2 className='fw-bold mb-4'>We make sure your idea & creation <br /> is delivered properly</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Here in Mploye, we're creative minded. Ensuring that digital ideas
                                    are implemented and made a reality.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <p>Our one and only goal remains to satisfy our 
                                    customers by providing well refined and optimized
                                    web solutions to make your ideas a reality.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-5 gap-1">
                        <div className="col-lg-6 position-relative mb-5" ref={scrolRef3}>
                            <img src="/laptop.png" alt="" className='img-fluid rounded-4'/>
                            <div className="position-absolute shadow bg-white p-4 rounded-4 text-center" style={{left: '25%', top: '70%', zIndex: '1'}}>
                                <p>"Making an impact, together"</p>
                                <p className='text-muted mt-0'>Socialy founder</p>
                            </div>
                        </div>

                        <div className="col-lg-5 mt-5 mt-lg-0"  ref={scrolRef2}>
                            <h2 className='fw-bold'>We empower small <br /> business owners</h2>
                            <p className='mt-4'>
                                We grant businesses an online presence, enabling
                                them to reach out to more clients in need of their products.
                                Our goal is simple: Connect businesses with potential clients.
                                Increase the reach of businesses for profit optimization.
                            </p>
                            <div className="p-4" style={{borderLeft: '5px solid grey'}}>
                                <p className='fw-bold'>"It's not just a company, but an interconnect platform.
                                    I have never made the leve of profit I've made on Mployee since I started my business.
                                    Great platform!."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className='mt-5 bg-dark text-white p-5'>
                <div className="">
                    <h2 id='tt' className='fw-bold text-center'>We help businesses grow <br />
                    faster and bigger</h2>
                    <div className="row justify-content-center"  ref={scrolRef4}>
                        <div className="col-lg-4 text-center mt-5">
                            <img src="/favicon.svg" alt="..." />
                            <h5>Professional Team</h5>
                            <p className=''>
                                We're professional in all we do. Group of like minded
                                individuals that can deliver in a professional setting.
                            </p>
                        </div>

                        <div className="col-lg-4 text-center mt-5">
                            <img src="/target.svg" alt="..."  height={48} width={46}/>
                            <h5>Target Oriented</h5>
                            <p className=''>
                                We set our target, and we work towards it. Our operations are
                                to the achievement of our set targets.
                            </p>
                        </div>

                        <div className="col-lg-4 text-center mt-5">
                            <img src="/success.svg" alt="..."  height={48} width={46}/>
                            <h5>Success Driven</h5>
                            <p className=''>
                                We are strongly driven by the success of clients,
                                measures ensuring that projects are
                                successful.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;