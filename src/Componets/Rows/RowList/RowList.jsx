import React from 'react'
import Row from '../Row/Row'
import request from '../../../utils/requests'



const RowList = () => {
  return (
    <>
      <Row 
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
          isLarge = {true}
      />
      <Row 
          title="Trending Now"
          fetchUrl={request.fetchTrending}  
      />
      <Row 
          title="Top Rated" 
          fetchUrl={request.fetchTopRated}
      />
      <Row      
          title="Action Movies"
          fetchUrl={request.fetchActionMovies}  
      />
      <Row 
          title="Comedy Movies"
          fetchUrl={request.fetchComedyMovies}  
      />
      <Row
          title="Horror Movies"
          fetchUrl={request.fetchHorrorMovies}          

      />    
      <Row 
          title="Romance Movies"  
          fetchUrl={request.fetchRomanceMovies}
      />
      <Row 
          title="Documentaries"  
          fetchUrl={request.fetchDocumentaries}       
      />
    </>
  )
}

export default RowList
