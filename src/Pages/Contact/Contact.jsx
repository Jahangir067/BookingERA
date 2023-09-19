import { AiOutlineHome } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container pt-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase pt-4">--Contact Us--</h6>
                    <h1 className="mb-5"><span className="text-primary">Contact</span> For Any Query</h1>
                </div>
                <div className="row g-4 mt-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Office</h6>
                                <p><AiOutlineHome className='text-primary fs-4 me-2'></AiOutlineHome> 123 Street, Tongi, Dhaka</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Phone</h6>
                                <p><BsPhoneVibrate className='text-primary fs-4 me-2'></BsPhoneVibrate> +8801617854906</p>
                            </div>
                            <div className="col-md-4">
                                <h6 className="section-title text-start text-primary text-uppercase">Email</h6>
                                <p><MdOutlineEmail className='text-primary fs-4 me-2'></MdOutlineEmail> support@travelera.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tongi, Dhaka&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            frameBorder="0"
                            style={{ border: '0', width: '100%', height: '370px' }}
                            allowFullScreen
                        ></iframe>

                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="allBtn w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;