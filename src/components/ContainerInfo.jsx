import React from 'react'
import "./styles/ContainerInfo.css"
import Button from './Button'

const ContainerInfo = ({quote, handleNewQuote}) => {
 
  return (
    <section className='containerInfo'>
        <h1 className='containerInfo__title'>InfoGalax</h1>

        
        <article className='containerInfo__phrase'>
         <p>{quote.phrase}</p>
        </article>

        <Button handleNewQuote={handleNewQuote} />

     <article className='containerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
        </article>
  </section>
  )
}

export default ContainerInfo