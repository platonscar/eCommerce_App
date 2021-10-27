import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ idols }) => {

    return (
        <section className="itemList_container">
            {idols.length ? idols.map((idol) =>(
                
                <Item idol={idol} key={idol.id}/>
            )): 'Loading your idols'}
        </section>
    )
}

export default ItemList
