import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getApi } from '../helpers/getApi';

const pokemon = ({ pokemones }: any) => {
    // const [detalles, setDetalles] = useState<any>()
    // const { name, url } = pokemones;
    // const [image, setImage] = useState('');
    // const [weight, setWeight] = useState('');
    // const [baseExperience, setBaseExperience] = useState('');
    // const [height, setHeight] = useState('');
    // const [id, setId] = useState('');
   

    // useEffect(
    //     () => {
    //         getApi(url, setDetalles)
    //     }
    //     , [])

    // useEffect(
    //     () => {
            
    //         if (detalles) {
    //             console.log(detalles)
    //             const imagen = detalles.sprites.other['official-artwork'].front_default;
    //             const { weight, base_experience, height, id } = detalles

    //             setImage(imagen);
    //             setWeight(weight);
    //             setBaseExperience(base_experience);
    //             setHeight(height);
    //             setId(id)

    //         }

    //     }
    //     , [detalles]
    // )

    return (

        <Link to='/Details'>
            <div className='container_pokemon'>
                <img src={pokemones.image} alt="" />
                <div className='container_info'>
                    <h2>{pokemones.name}</h2>

                </div>
            

        </div>
        </Link>
    )
}

export default pokemon
