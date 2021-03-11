// import React, { useState , useEffect} from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsGridItem } from './GifsGridItem';

export const GifGrid = ({category}) => {    
    const { data:images, loading} = useFetchGifs(category);
    return (
       <>
            <h3>{category}</h3>
            {loading && <div className="animate__flash">Loading...</div>}
            <div className="card-grid animate__fadeOutDown">
                {images.map( img =>(
                    <GifsGridItem {...img} key={img.id}/>
                ))}               
            
            </div>
        </>
    )
}
