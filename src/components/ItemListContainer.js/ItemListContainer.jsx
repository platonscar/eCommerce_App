import React from 'react'
import './ItemListContainer.css'
import yugyeom from '../../assets/yugyeom.jpg'
import jinyoung from '../../assets/jinyoung.jpg'
import jb from '../../assets/jb.jpg'


const ItemListContainer = () => {
    return (
        <section>
            <ul className="img_ul">
                <li className="img_li">
                    <img src={yugyeom} alt="yugyeom" width="300px" height="450px" />
                    <p>Yugyeom</p>
                </li>
                <li className="img_li">
                    <img src={jinyoung} alt="jinyoung" width="300px" height="450px" />
                    <p>Jinyoung</p>
                </li>
                <li className="img_li">
                    <img src={jb} alt="jb" width="300px" height="450px" />
                    <p>Jaebeom</p>
                </li>
            </ul>
        </section>
    )
}

export default ItemListContainer;
