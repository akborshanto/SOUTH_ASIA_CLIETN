import React from 'react'
import UseTitle from './../../../hook/useTitle/UseTitle';

const BestPlace = () => {
  return (
    <div className='my-6 '>
    <UseTitle heading="FEATURED BEST THINGS TO DO" title='From megacities to remote islands, Asias top travel spots offer a hearty dose of adventure, ancient history and culture. '></UseTitle>
    <div className="hero min-h-screen rounded-lg" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/rafting-mountains-trunk-beautiful-park_1417-198.jpg?t=st=1714273151~exp=1714276751~hmac=d00f7d5a7a43aaca42e5fd1f34f105b143d4a370aecfc8b5d45db3da4f0bfcbb&w=900)'}}>
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Tours and Attractions</h1>
<p>Une attraction touristique peut être un site archéologique, un site historique, un parc national, une station balnéaire, un musée, une église, un parc d'attractions, un festival, etc. Cette fiche fait partie du Vocabulaire du tourisme(Cet hyperlien externe s'ouvrira dans une nouvelle fenêtre.) .</p>
      </div>
    </div>
  </div>

    </div>
  )
}

export default BestPlace
