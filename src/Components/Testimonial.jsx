import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Axios from '../API/Axios'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import Image from './Image'
const Testimonial = () => {
    const [testimonials, setTestimony] = useState([]);
    const [loading, setLoading] = useState(false);
    const getTestimonials = () => {
        setLoading(true)
        Axios.get('/view-testimonials').then(res => {
            setTestimony(res.data.result);
            setLoading(false);
        }).catch((err) => {
            setLoading(false)
            toast.error('some error occured', toastoptions)
        })
    }

    useEffect(() => {
        getTestimonials()
        console.log(testimonials);
    }, [])

    const toastoptions = {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true
    }

    return (
        <>
            <section id="testimonial" className="testimonial-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-10">
                                <h4 className="title">Testimonial</h4>
                                <p className="text">
                                    Stop wasting time and money designing and managing a website
                                    that doesn’t get results. Happiness guaranteed!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row testimonial-active">
                                {
                                    loading && <><Stack spacing={1} sx={{ marginRight: '10px' }}>
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="rectangular" width={210} height={100} />
                                        <Skeleton variant="rounded" width={210} height={100} />
                                    </Stack>
                                        <Stack spacing={1}>
                                            <Skeleton variant="circular" width={40} height={40} />
                                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton variant="rectangular" width={210} height={100} />
                                            <Skeleton variant="rounded" width={210} height={100} />
                                        </Stack>
                                    </>
                                }
                                {
                                    testimonials.map((item, index) => {
                                        return <div className="col-lg-4">
                                            <div className="single-testimonial mt-30 mb-30 text-center">
                                                <div className="testimonial-image">
                                                    <img src={item.photo} alt="" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <p className="text">
                                                        {item.description}
                                                    </p>
                                                    <h6 className="author-name">{item.name}</h6>
                                                    <span className="sub-title">{item.post}, FutureStore</span>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial