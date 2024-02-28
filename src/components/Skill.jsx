import React from 'react'

const Skill = (props) => {
    return (
        <>
            <div className='skill'>
                <div>
                    {props.svg}
                    <h2>{props.titulo}</h2>
                    <div className="line line-gd"></div>
                </div>
                <div className='container-list__skill'>
                    <ul>
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                        <li>{props.li4}</li>
                        <li>{props.li5}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skill