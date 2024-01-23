import React, {useState, useRef} from 'react';
import PP2 from '../assets/pp_2.png';
import { ReactSVG } from 'react-svg'
import { send } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage: React.FC = () => {
     
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        message: '',
        name:''
    });
    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
     
        if(formData.name.length < 3){
            toast.error("Name should be atleast 3 characters long!");
            nameRef.current?.focus();
            return;
        }   
        if(!validateEmail(formData.email)){
            toast.error("Please enter a valid email!");
            emailRef.current?.focus();
            return;
        }
        if(formData.message.length < 20){
            toast.error("Message should be atleast 10 characters long!");
            messageRef.current?.focus();
            return;
        }

        sendEmail();
    };

    const sendEmail = async() => {
        var templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };
        setIsLoading(true);
        send("service_8tmwgf9","template_wdfyfb6",templateParams,"Bzq6NPDBiQLttfCea").then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsLoading(false);
            if(response.status === 200){
                toast.success("Email Sent!");
            }
            else{
                toast.error("Email Failed!");
            }
        }
        ).catch((err) => {
            setIsLoading(false);
            console.log('FAILED...', err);
            toast.error("Email Failed!");
            
        });
    }

    return (
        <div className="bg-[#E4E1DD] text-red w-full h-full mt-12 sm:mt-16 md:mt-16">
            {/* <section id="home" className="min-h-screen flex items-center justify-center flex-col">
                <div className="flex flex-row justify-center space-x-4">
                    <div className="text-left">
                        <div className='font-bold text-9xl text-black font-sans'>
                            Surya Shukla
                        </div>
                        <div className='text-6xl text-black mt-5 font-semibold font-sans'>
                            Software Engineer
                        </div>
                        <div className='text-2xl mt-8 font-light font-sans text-black'>
                            Hey, I am Surya! A passionate software engineer.
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={PP2} alt="IMG_9795" className='h-[80vh]' />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#E4E1DD]"></div>
                    </div>
                </div>
            </section> */}
            <ToastContainer theme='dark'/>
            <section id="home" className="min-h-screen flex items-center justify-center flex-col">
                <div className="flex flex-col sm:flex-row sm:justify-center justify-center space-x-0 sm:space-x-4 sm:px-14 px-6">
                    <div className="text-center sm:text-left flex flex-col justify-center">
                        <div className='font-bold text-5xl sm:text-6xl lg:text-9xl text-black font-sans'>
                            Surya Shukla
                        </div>
                        <div className='text-2xl sm:text-4xl lg:text-6xl text-black mt-2 sm:mt-5 font-semibold font-sans'>
                            Software Engineer
                        </div>
                        <div className='sm:text-2xl text-lg lg:text-2xl mt-4 sm:mt-8 font-light font-sans text-black sm:max-w-[50vw]'>
                            Hey, I am Surya! Software Engineer at Paytm. I graduated from IIT Goa in 2023. I love to build things and solve problems. I am passionate about learning new technologies and frameworks. I am always looking for new opportunities to learn and grow.
                        </div>
                        <div className='flex lg:flex-row flex-col space-x-0 lg:space-x-16 mt-4 sm:mt-8 justify-center sm:justify-start items-center'>
                            <div className='flex flex-row space-x-16 justify-center sm:justify-start'>
                                <a href="https://www.linkedin.com/in/cerdo/" target="_blank" rel="noopener noreferrer">
                                    <ReactSVG src='src/assets/linkedin.svg' />
                                </a>
                                <a href="https://twitter.com/cerdo03" target="_blank" rel="noopener noreferrer">
                                    <ReactSVG src='src/assets/twitter.svg' />
                                </a>
                                <a href="https://github.com/cerdo03" target="_blank" rel="noopener noreferrer">
                                    <ReactSVG src='src/assets/github.svg' />
                                </a>
                            </div>
                            <a href='src/assets/Surya_Shukla.pdf'  target="_blank" rel="noopener noreferrer" className='w-[9rem]'>
                                <button type="submit" className="group self-center mt-4 lg:mt-0 flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-black text-white rounded-md outline-none transition-all hover:scale-110 hover:bg-gray-900 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 text-base sm:text-base lg:text-lg focus:ring-0">
                                        Resume 
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" width="1.2em" viewBox="0 0 24 24" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" fill='currentColor'><path d="M7 2v-2h10v2h-10zm0 4h10v-2h-10v2zm10 7v-5h-10v5h-6l11 11 11-11h-6z"/></svg>
                                </button>
                            </a>
                            
                        </div>
                    </div>
                    <div className='relative mt-4 sm:mt-0 justify-center flex'>
                        <img src={PP2} alt="IMG_9795" className='h-[40vh] sm:h-[60vh] lg:h-[80vh] object-cover' />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#E4E1DD]"></div>
                    </div>
                </div>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center bg-yellow-500">
                <h1 className="text-2xl text-white">About Section</h1>
                <p className="text-white">This is some dummy content for the about section.</p>
            </section>

            <section id="experience" className="min-h-screen flex items-center justify-center bg-green-500">
                <h1 className="text-2xl text-white">Experience Section</h1>
                <p className="text-white">This is some dummy content for the experience section.</p>
            </section>

            <section id="skills" className="min-h-screen flex items-center justify-center bg-blue-500">
                <h1 className="text-2xl text-white">Skills Section</h1>
                <p className="text-white">This is some dummy content for the skills section.</p>
            </section>

            <section id="projects" className="min-h-screen flex items-center justify-center bg-indigo-500">
                <h1 className="text-2xl text-white">Projects Section</h1>
                <p className="text-white">This is some dummy content for the projects section.</p>
            </section>

            <section id="contact" className="flex items-center justify-center bg-[#E4E1DD] flex-col p-8">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-8 text-black">Contact Me</h2>
                <div className='flex flex-col py-4'>
                    <div className="text-lg sm:text-lg lg:text-xl mb-4 sm:mb-8 font-light font-sans text-black">
                        Please contact me directly at <a href="mailto:official.surya3jan@gmail.com" className="underline text-black hover:text-gray-600 hover:scale-110 transition-all duration-200">official.surya3jan@gmail.com</a> or through this form.
                    </div>
                    {/* <form className="flex flex-col space-y-4 justify-center mb-4 sm:mb-8" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" className="p-3 bg-white rounded shadow outline-none text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="name" maxLength={30} ref={nameRef}/>
                        <input type="email" placeholder="Email" className="p-3 bg-white rounded shadow outline-none text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="email" maxLength={30} ref={emailRef}/>
                        <textarea placeholder="Message" className="p-3 bg-white rounded shadow outline-none h-36 text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="message" maxLength={800} ref={messageRef}/>
                        <br/>
                        <br className='sm:block hidden'/>
                        <button type="submit" className="group self-center flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-black text-white rounded-md outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 text-base sm:text-base lg:text-lg focus:ring-0">
                            {isLoading ? (<>
                                <div className="loader"></div>
                            </>):(<>Submit <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg></>)}
                        </button>
                    </form> */}
                    <form className="flex flex-col space-y-4 justify-center mb-4 sm:mb-8" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" className="p-3 bg-white rounded shadow outline-none text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="name" maxLength={30} ref={nameRef} disabled={isLoading}/>
                        <input type="email" placeholder="Email" className="p-3 bg-white rounded shadow outline-none text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="email" maxLength={30} ref={emailRef} disabled={isLoading}/>
                        <textarea placeholder="Message" className="p-3 bg-white rounded shadow outline-none h-36 text-black text-base sm:text-base lg:text-lg focus:bg-gray-100" onChange={handleChange} name="message" maxLength={800} ref={messageRef} disabled={isLoading}/>
                        <br/>
                        <br className='sm:block hidden'/>
                        <button type="submit" className="group self-center flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-black text-white rounded-md outline-none transition-all hover:scale-110 hover:bg-gray-900 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 text-base sm:text-base lg:text-lg focus:ring-0" disabled={isLoading}>
                            {isLoading ? (
                                <div className="loader"></div>
                            ) : (
                                <>
                                    Submit 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                </>
                            )}
                        </button>
                    </form>
                    <div className='flex flex-row space-x-16 justify-center py-5 sm:py-10'>
                        <a href="https://www.linkedin.com/in/cerdo/" target="_blank" rel="noopener noreferrer">
                            <ReactSVG src='src/assets/linkedin.svg'/>
                        </a>
                        <a href="https://twitter.com/cerdo03" target="_blank" rel="noopener noreferrer">
                            <ReactSVG src='src/assets/twitter.svg' />
                        </a>
                        <a href="https://github.com/cerdo03" target="_blank" rel="noopener noreferrer">
                            <ReactSVG src='src/assets/github.svg' />
                        </a>
                    </div>
                    <div className='sm:text-xl text-lg lg:text-xl font-light font-sans text-black'>
                        Made with ❤️ by Surya Shukla
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
