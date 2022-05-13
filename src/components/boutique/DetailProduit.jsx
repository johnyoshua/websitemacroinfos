import React from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";


export default class DetailProduit extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        fetch(`http://admin.macroinfos.com/api/articles/${id}`).then((response) => {
            return response.json()
        })
            .then((result) => {
                setTimeout(() => {
                    this.setState({ article: result })
                }, 500)


            })
    }


    render() {
        return (
            <>
                {(this.state.article.nom) ? 
                <div className='flex space-x-5 mb-4'>
                    <div className='w-4/12'>
                        <img src={`http://admin.macroinfos.com/${this.state.article.imageUrl}`} />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>{this.state.article.nom}</h1> 
                    </div>
                </div>
                : <p className='text-5xl text-red py-32 mx-auto'>Chargement.....</p>}

            </>
        )
    }
}