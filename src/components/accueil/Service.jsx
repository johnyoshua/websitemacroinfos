import React from 'react';

import axios from 'axios';


export default class Service extends React.Component {

    state = {
        services: [],
    }

    componentDidMount() {
        axios.get(`http://admin.macroinfos.com/api/services`)
            .then(res => {
                const services = res.data;
                this.setState({ services });
            })
    }

    render() {
        return (

            <div className='w-full '>
                <div className="my-10 text-center">
                    <h1 className="teal text-4xl font-semibold">Nos services</h1>
                </div>
                {this.state.services.map(service =>

                    <div key={service.id} className='shadow-lg dark:border-teal-700 mx-1 md:mx-4 px-2 md:p-8 my-4 rounded-2xl'>
                        
                        <h1 className='text-xl py-2 md:py-4 md:text-2xl font-bold'>{service.description}</h1>

                        <div className='grid md:grid-cols-2 gap-2 md:gap-12'>

                            <div className=''>
                                <img className='w-12/12 rounded-2xl' src={`http://admin.macroinfos.com/${service.imageUrl}`} alt='/' />
                                <p className='text-md md:text-lg py-3 font-semibold text-gray-500'> {service.detail}</p>
                            </div>


                            <div className='mb-4'>
                                {service.sousserives.map((sousService, key) =>
                                    <div key={key} className='flex space-x-2 py-2 md:space-x-5'>
                                        <div className='w-8/12 md:w-4/12'>
                                            <div className=' relative'>
                                                <img className='rounded-xl w-full' src={`http://admin.macroinfos.com/${sousService.imgUrl}`} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-8/12'>
                                            <h1 className='text-gray-800 text-md md:text-lg font-semibold'>{sousService.detail}</h1>
                                        </div>
                                    </div>

                                )

                                }

                            </div>
                        </div>

                    </div>


                )

                }
            </div>
        )
    }
}