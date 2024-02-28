import React from 'react'

const Proyecto = (props) => {
    return (
        <article className='article-proyect'>
            <figure>
                <img src={props.img} alt="Proyecto N°1" className='img-proyect'/>
            </figure>

            <figcaption>
                <a href={props.link} target='_blank' class="btn-43">
                    <span class="old">{props.titulo}</span>
                    <span class="new">{props.github ? 'Codigo' : 'Web'}</span>
                </a>
            </figcaption>
        </article>
    )
}

export default Proyecto