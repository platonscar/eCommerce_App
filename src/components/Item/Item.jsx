import React, { useState } from 'react'
// import yugyeom from '../../assets/yugyeom.jpg'
// import jinyoung from '../../assets/jinyoung.jpg'
// import jb from '../../assets/jb.jpg'
// import youngjae from '../../assets/youngjae.jpg'
// import bambam from '../../assets/bambam.jpg'
// import mark from '../../assets/mark.jpg'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({ idol }) => {
    
    return (
        <section>

            <ul className="img_ul-1">
                <li className="img_li">
                    <img src={idol.img} alt="Idoru" width="300px" height="450px" />
                    <p>{idol.name}</p>
                    <p>{idol.group}</p>
                    <p className="p_dates">How many dates do you want?:</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Item
