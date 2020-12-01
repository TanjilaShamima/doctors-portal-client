import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const businessService = [
    // {
    //     name:'Fluoride Treatment',
    //     image:'/images/fluoride.png',
    // },
    // {
    //     name:'Cavity Filling',
    //     image:'/images/cavity.png',
    // },
    // {
    //     name:'Teeth Whitening',
    //     image:'/images/whitening.png',
    // },
    {
        serviceId: 1,
        serviceName: 'Emergency & Observation',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        seat: 10,
        image:'/images/fluoride.png',
    },
    {
        serviceId: 2,
        serviceName: 'Dialysis Unit',
        availableOn:  ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '10:05 AM - 11:30 AM',
        image:'/images/cavity.png',
        seat: 10
    },
    {
        serviceId: 3,
        serviceName: 'ICU',
        availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
        availableTime: '05:00 PM - 06:30 PM',
        image:'/images/whitening.png',
        seat: 10
    },
    {
        serviceId: 4,
        serviceName: 'Indoor and Outdoor',
        availableOn: ['Mon', 'Tue', 'Wed', 'Thu'],
        availableTime: '05:00 PM - 06:30 PM',
        image:'/images/cavity.png',
        seat: 10
    },
    {
        serviceId: 5,
        serviceName: 'Dental Care',
        availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
        availableTime: '05:00 PM - 06:30 PM',
        image:'/images/whitening.png',
        seat: 10
    },
    {
        serviceId: 6,
        serviceName: 'Vaccination Center',
        availableOn: ['Sun','Mon', 'Tue', 'Wed', 'Thu'],
        availableTime: '05:00 PM - 06:30 PM',
        seat: 10,
        image:'/images/fluoride.png',
    },
    {
        serviceId: 7,
        serviceName: 'Laser skin Care',
        availableOn: ['Sun','Mon', 'Wed', 'Thu'],
        availableTime: '05:00 PM - 06:30 PM',
        image:'/images/cavity.png',
        seat: 10
    },
    {
        serviceId: 8,
        serviceName: 'Pharmacy',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        seat: 10,
        image:'/images/fluoride.png',
    },
    {
        serviceId: 9,
        serviceName: 'Ambulance',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        image:'/images/whitening.png',
        seat: 10
    },
    {
        serviceId: 10,
        serviceName: 'Consultation Unit',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        image:'/images/cavity.png',
        seat: 10
    },
    {
        serviceId: 11,
        serviceName: 'Female Unit',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        image:'/images/cavity.png',
        seat: 10
    },
    {
        serviceId: 12,
        serviceName: 'HBO',
        availableOn: ['Sat','Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        availableTime: '24 Hours',
        seat: 10,
        image:'/images/fluoride.png',
    }
]

const Services = () => {
    return (
        <section  className="d-flex align-items-center">
            <Container className="text-center">
                <p style={{ color: '#1CC7C1'}} className="mt-3 mb-3">Our Services</p>
                <h2 className="mt-2 pt-3">Services We Provide</h2> 
                <Row className="mt-5 pt-3">
                    {
                        businessService.map((service, idx )=> 
                            <Col md={4} key={idx}>
                                <div className="p-1">
                                    <Image width={50} src={service.image} alt="im" fluid/>
                                    <h6 className="mt-4">{service.serviceName}</h6>
                                    <p className="mt-2 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem.</p>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;