
import { useParams } from 'react-router-dom';
import './Reserved.css';
import { MdTravelExplore, MdAttachEmail } from 'react-icons/md';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Reserved = () => {
    const { register, handleSubmit, reset } = useForm();
    const { cardTitle, cardPrice } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    

    const onSubmit = (data) => {
        console.log(data)
        const { name, email, number, address, guest, room } = data;
        const newBooking = { name, email, number, address, guest, room }
        console.log(newBooking)
        fetch(`https://bookingera-server.up.railway.app/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })

            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    reset();
                    setShow(true);
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please fill in all the required fields!',
                      });
                }

                
            })
    }





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
                            <input className="form-control" id="studentName" type="text" name='name' {...register("name", { required: true })} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fs-6">Email</label>
                            <input className="form-control" id="email" type="email" name='email' {...register("email", { required: true })} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label fs-6">Contact Number</label>
                            <input className="form-control" id="number" {...register("number", { required: true })} type="number" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="guest" className="form-label fs-6">Guest</label>
                            <select className="form-select" {...register("guest", { required: true })} defaultValue="" required>
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
                            <input className="form-control" id="address" {...register("address", { required: true })} type="text" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="room" className="form-label fs-6">Room</label>
                            <select className="form-select" {...register("room", { required: true })} defaultValue="" required>
                                <option value=''>--Select--</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>

                    </div>

                    <div className="bg-light p-2 imgBtn">
                        <div className="d-flex gap-2 mx-2">
                            <img className="formImg" src="https://i.ibb.co/8cS08gX/images-1-removebg-preview-1.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/Z8XpVXg/visa-349221.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/0n0515F/maestro-217445.png" alt="" />
                            <img className="formImg" src="https://i.ibb.co/3vybWr4/ruble-10040420.png" alt="" />
                        </div>
                        <div className="w-100 payBtn">
                            <button onClick={() => setShow()} className="filterButton btnWidth">Checkout ${cardPrice}</button>
                        </div>
                    </div>
                </form>

                {/* MOdal */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Your Payment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Stripe Payment Method will be add here</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    );
}

export default Reserved;


