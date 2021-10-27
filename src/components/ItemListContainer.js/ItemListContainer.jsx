import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import data from '../data.json';
// import data from '../dataLocal.js';

const ItemListContainer = () => {
    // const newdata = data.map((data)=>{
    //     return (

    //         <div>
    //             <p>{data.name}</p>
    //             <ItemList/>
    //         </div>

    //     )
    // })    
    
    const [idols, setIdol] = useState([]);
    const getData = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(data){
                resolve(data);
                console.log(data);
            }else{
                reject('No hay idols disponibles');
            }
        }, 2000);
    });
   
    useEffect(() => {
        getData(data)
        .then((res) => setIdol(res))
        .catch((err) => console.log(err));
        console.log(data);
    }, [])

    return (
        <div>
            <ItemList idols={idols}/>
        </div>
    )
}

export default ItemListContainer;
