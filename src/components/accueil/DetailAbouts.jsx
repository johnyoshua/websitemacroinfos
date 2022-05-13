import React from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

export default class DetailAbouts extends React.Component {

    state = {
        appropos: [],
        sousApropos: [],
        domaines: [],
    }

    componentDidMount() {
        axios.get(`http://admin.macroinfos.com/api/appropos`)
            .then(res => {
                const appropos = res.data;
                this.setState({ appropos });
            })

        axios.get(`http://admin.macroinfos.com/api/sousAppropos`)
            .then(res => {
                const sousApropos = res.data;
                this.setState({ sousApropos });
            })

        axios.get(`http://admin.macroinfos.com/api/domaines`)
            .then(res => {
                const domaines = res.data;
                this.setState({ domaines });
            })
    }

    render() {
        return (
            <div className='container px-4 lg:px-8  text-gray-700 '>
                <div className="text-center ">
                    <h1 className="teal text-3xl font-semibold pt-10 md:pt-12">Qui sommes nous</h1>
                </div>
                <div className='my-14 flex flex-col lg:flex-row lg:space-x-20'>

                    {this.state.appropos.map(appropo =>

                        <div key={appropo.id} className='lg:w-6/12'>
                            <img className=' w-full mb-6' src={`http://admin.macroinfos.com/${appropo.imageUrl}`} alt="" />
                            <h1 className=' text-gray-800 font-semibold my-3 text-xl'>{appropo.titre}</h1>
                            <p className='text-gray-500 mb-6 justify-center'>{appropo.detail}</p>



                        </div>
                    )
                    }

                    <div className='lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0'>
                        {this.state.sousApropos.map(sous =>
                            <h1 key={sous.id} className='text-gray-800 text-md sm:text-lg font-semibold'>
                                {sous.detail}
                            </h1>
                        )

                        }

                        {this.state.domaines.map(domaine =>

                            <div key={domaine.id} >
                                <div className='flex space-x-5 py-2'>
                                    <div className='w-8/12'>
                                        <div className=' relative'>
                                            <img className='rounded-xl w-full' src={`http://admin.macroinfos.com/${domaine.imgUrl}`} alt="" />
                                        </div>
                                    </div>
                                    <div className='w-8/12'>
                                        <h1 className='text-gray-800 text-md sm:text-lg font-semibold'>{domaine.description}</h1>
                                        <p className='text-gray-500 my-2  text-md  hidden sm:block'>{domaine.detail}</p>
                                    </div>

                                </div>
                                <p className='text-gray-500 my-2 sm:my-4 text-md sm:text-md md:hidden'>{domaine.detail}</p>


                            </div>

                        )

                        }
                    </div>
                </div>
            </div >
        )
    }
}