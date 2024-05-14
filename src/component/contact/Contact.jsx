import React from 'react'
import contactBg from '../assets/contactBg.svg' 
function Contact() {
    return (
        <div className=''>
            <div className='absolute  pointer-events-none '>
                <img src={contactBg} alt="" />
            </div>
            <div className='gap-6 flex flex-col w-screen mt-4 bg-transparent'>
                <h1 className=' w-full text-center text-pretty text-zinc-800 text-4xl font-bold mb-8'>Contact Page</h1>


                <div className='w-full  flex justify-end items-center pr-16'>
                    <form action="" method="post" className='border  flex flex-col w-1/3 p-10 gap-3 '>
                        <input
                            type="text"
                            placeholder='Enter your Username'
                            name='username'
                            required
                            autoComplete='off'
                            className='border border-zinc-500 p-4'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your Email'
                            autoComplete='on'
                            required
                            className='border border-zinc-500 p-4'
                        />
                        <textarea
                            name="message"
                            placeholder='Enter your Feedback'
                            autoComplete='on'
                            required
                            cols={10}
                            rows={5}
                            className='border border-zinc-500 p-4'
                        ></textarea>
                        <input
                            type="submit"
                            value={"Send"}
                            className='bg-blue-600 text-white h-12'
                        />
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588681401!2d82.90870727116949!3d25.320739742503008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715534319518!5m2!1sen!2sin"
                    width="100%"
                    height="300rem"
                    style={{ border: 0 }}
                    allowFullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact
