import React from 'react'
// import yugyeom from '../../assets/yugyeom.jpg'
// import jinyoung from '../../assets/jinyoung.jpg'
// import jb from '../../assets/jb.jpg'
// import youngjae from '../../assets/youngjae.jpg'
// import bambam from '../../assets/bambam.jpg'
// import mark from '../../assets/mark.jpg'
import ItemCount from '../ItemCount/ItemCount'
import idols from '../idols.json'


const Item = () => {
    // const [data, setData] = useState(null);

    // fetch("./data.json").then(
    //     function(res){
    //         return res.json()
    //     }
    // ).then(function(data){
    //       setData(data)
    //     }).catch(
    //       function(err){
    //         console.log(err, 'error')
    //       }
    //     )
    return (
        <section>
            <ul className="img_ul-1">
                <li className="img_li">
                    {/* <img src={yugyeom} alt="yugyeom" width="300px" height="450px" /> */}
                    <p>Yugyeom</p>
                    <p className="p_dates">How many dates do you want?:</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
                <li className="img_li">
                    {/* <img src={jinyoung} alt="jinyoung" width="300px" height="450px" /> */}
                    <p>Jinyoung</p>
                    <p className="p_dates">How many dates do you want?</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
                <li className="img_li">
                    {/* <img src={jb} alt="jb" width="300px" height="450px" /> */}
                    <p>Jaebeom</p>
                    <p className="p_dates">How many dates do you want?</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
            </ul>
            <ul className="img_ul-2">
                <li className="img_li">
                    {/* <img src={youngjae} alt="youngjae" width="300px" height="450px" /> */}
                    <p>Youngjae</p>
                    <p className="p_dates">How many dates do you want?</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
                <li className="img_li">
                    {/* <img src={bambam} alt="bambam" width="300px" height="450px" /> */}
                    <p>Bambam</p>
                    <p className="p_dates">How many dates do you want?</p>
                    <ItemCount count={1} limit={10} />
                    <div className="button_date_div">
                        <button className="button_date">Date</button>
                    </div>
                </li>
                <li className="img_li">
                    {/* <img src={mark} alt="mark" width="300px" height="450px" /> */}
                    <p>Mark</p>
                    <p className="p_dates">How many dates do you want?</p>
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
