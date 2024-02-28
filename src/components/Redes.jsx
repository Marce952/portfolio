import React from 'react'

const Redes = (props) => {
  return (
    <>
        <article className='article-redes'>
          <a href={props.link} target='_blank'>
            <img src={props.img1} alt={props.alt1} />
            <img src={props.img2} alt={props.alt2} />
          </a>
        </article>
    </>
  )
}

export default Redes