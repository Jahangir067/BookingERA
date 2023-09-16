
import { useParams } from 'react-router-dom';
import './Reserved.css';
import { MdTravelExplore, MdAttachEmail } from 'react-icons/md';
import { useForm } from "react-hook-form"


const Reserved = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    const { cardTitle, cardPrice } = useParams();

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     console.log(name)
    // }
   

    return (
        <div className="container-lg fromContainer mb-8">
            <div className="row flex-lg-row justify-content-between">

                <div className="col-lg-6 text-lg-left text-black">
                    <div className="d-flex align-items-center mb-8">
                        <div className="border border-info"><img src="https://i.ibb.co/F4V1Yqf/light-garden-luxury-pool-nature.jpg" className="formheadImg" alt="Writo" /></div>
                        <h6 className="ms-2 fw-bold paySubTitle">{cardTitle}</h6>
                    </div>
                    <h5 className="mt-4">TravelERA - Get inspiration for your next trip</h5>
                    <hr className="w-25" />
                    <h4 className="fw-bold payHeadTitle">Hey Visitor!</h4>
                    <p>Congratulations on taking the next step toward your dream vacation! We're thrilled to have you here at our Hotel Booking Platform. This is the pre-booking process, a crucial step on your journey to an unforgettable travel experience.</p> <br />
                    <h4 className="fw-bold payHeadTitle">Booking Details</h4>
                    <p>This is the initial reservation fee, which secures your spot for the upcoming adventure. Our dedicated support team will contact you shortly with further details including payment receipt within 1-2 hours after your pre-booking</p> <br />
                    <br />
                    <h5 className="fw-bold payHeadTitle">Contact Us:</h5>
                    <p className="d-flex align-items-center gap-1 text-primary"><MdAttachEmail /> support@travelera.com</p>
                    <br />

                    <h4 className="fw-bold payHeadTitle">Terms & Conditions:</h4>
                    <p>Booking fee once Paid is not refundable for more details visit <a className="text-primary" href="">https://travelera/refund_returns/</a></p>
                    <p className="mt-4">You consent to the sharing of information entered on this website with TravelEra, in compliance with relevant legal regulations and requirements.</p>
                    <hr className="mt-8" />

                    <div className="mt-2">
                        <MdTravelExplore className='icon'></MdTravelExplore>
                        <p>Interested to get more from this Hotel? Visit <br /> <a className="text-primary" href="">TravelEra Payment Pages</a> to find relevant offer</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="card cardPayment ms-lg-4 mx-2 col-12 col-lg-5 shadow-lg bg-white border border-success-subtle">
                    <div className="p-4">
                        <h5 className="fw-bold payHeadTitle">Additional Information</h5>
                        <hr className="bg-success w-25 mt-4" /> <br />

                        <div className="mb-3">
                            <label htmlFor="studentName" className="form-label fs-6">Full Name</label>
                            <input className="form-control" id="studentName" type="text" name='name' {...register("name", { required: true })} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fs-6">Email</label>
                            <input className="form-control" id="email" type="email" name='email' {...register("email", { required: true })}  />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label fs-6">Contact Number</label>
                            <input className="form-control" id="number" {...register("number", { required: true })} type="number" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="guest" className="form-label fs-6">Guest</label>
                            <select className="form-select" {...register("guest", { required: true })} defaultValue="">
                                <option value="">--Select--</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label fs-6">Address</label>
                            <input className="form-control" id="address" {...register("address", { required: true })} type="text" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="room" className="form-label fs-6">Room</label>
                            <select className="form-select" {...register("room", { required: true })} defaultValue="">
                                <option value=''>--Select--</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between bg-light p-2 imgBtn">
                        <div className="d-flex gap-2 mx-2">
                            <img className="formImg" src="https://i.ibb.co/8cS08gX/images-1-removebg-preview-1.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/Z8XpVXg/visa-349221.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/0n0515F/maestro-217445.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/3vybWr4/ruble-10040420.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/7GX248v/download-7.png" alt="" />
                        </div>
                        <div className="h w-100 payBtn">
                            <button className="filterButton btnWidth">Checkout</button>
                        </div>
                    </div>
                </form>


            </div>
        </div>

    );
}

export default Reserved;


