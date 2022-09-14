import React, { useEffect, useState } from 'react'
import { getApi } from '../helpers/getApi';

const pokemon = ({ pokemones }: any) => {
    const [detalles, setDetalles] = useState<any>()
    const { name, url } = pokemones;
    const [image, setImage] = useState('');
    const [weight, setWeight] = useState('');
    const [baseExperience, setBaseExperience] = useState('');
    const [height, setHeight] = useState('');
    const [id, setId] = useState('');
   

    useEffect(
        () => {
            getApi(url, setDetalles)
        }
        , [])

    useEffect(
        () => {
            
            if (detalles) {
                console.log(detalles)
                const imagen = detalles.sprites.other['official-artwork'].front_default;
                const { weight, base_experience, height, id } = detalles

                setImage(imagen);
                setWeight(weight);
                setBaseExperience(base_experience);
                setHeight(height);
                setId(id)

            }

        }
        , [detalles]
    )

    return (

       
            <div className='container_pokemon'>
                <img src={image} alt="" />
                <div className='container_info'>
                    <h2>{name}</h2>

                </div>
            

        </div>
    )
}

export default pokemon
