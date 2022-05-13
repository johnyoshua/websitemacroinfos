import React from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

export default class About extends React.Component {

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
            <div className='px-4 lg:px-8  text-gray-700 '>
                <div className="text-center ">
                    <h1 className="teal text-3xl font-semibold pt-10 md:pt-12">Qui sommes nous</h1>
                </div>
                <div className='my-14 flex flex-col lg:flex-row lg:space-x-20'>

                    {this.state.appropos.map(appropo =>

                        <div key={appropo.id} className='lg:w-6/12'>
                            <img className=' w-full mb-6' src={`http://admin.macroinfos.com/${appropo.imageUrl}`} alt="" />
                            <h1 className=' text-gray-800 font-semibold my-3 text-xl'>{appropo.titre}</h1>
                            <p className='text-gray-500 text-md mb-6 justify-center hidden sm:block'>{appropo.detail.substring(0, 600)}...</p>
                            <p className='text-gray-500 text-md mb-6 justify-center md:hidden'>{appropo.detail.substring(0, 200)}...</p>

                            <Link exact to="/about">
                                <span className='b-info text-darken font-semibold px-4 py-px text-sm rounded-xl'>Lire Plus...</span>
                            </Link>


                        </div>
                    )
                    }

                    <div className='lg:w-6/12 mt-4 md:mt-0'>
                        {this.state.sousApropos.map(sous =>
                            <h1 key={sous.id} className='text-gray-800 text-lg sm:text-lg font-semibold'>
                                {sous.detail}
                            </h1>
                        )

                        }

                        {this.state.domaines.map(domaine =>

                            <div key={domaine.id} className='flex space-x-5 mt-4 shadow-lg dark:border-gray-700 rounded-md'>

                                <div className='relative w-8/12'>
                                    <img className='object-cover w-full rounded-l-lg' src={`http://admin.macroinfos.com/${domaine.imgUrl}`} alt="" />
                                </div>

                                <div className='w-8/12'>
                                    <h1 className='text-gray-800 text-md md:text-lg md:pr-2 font-semibold'>{domaine.description}</h1>
                                    <p className='text-gray-500  pr-2 text-md pt-1 hidden sm:block'>{domaine.detail.substring(0, 170)}...</p>
                                </div>
                            </div>


                        )

                        }
                    </div>
                </div>
            </div >
        )
    }
}