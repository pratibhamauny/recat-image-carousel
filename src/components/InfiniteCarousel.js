import React,{useState} from 'react'
import './infinite-carousel.css'
const InfiniteCarousel = ({images}) => {
    const [displayedImageIndex,setDisplayedImageIndex]=useState(0)
    const changeToNextImage=()=>{
       // alert("hello")
      // alert(displayedImageIndex)
        const newDisplayedImageIndex=displayedImageIndex !== images.length-1 ? displayedImageIndex+1 : 0
        setDisplayedImageIndex(newDisplayedImageIndex)
    }

    
    const changeToPrevImage=()=>{
      //  alert("bye")
        const newDisplayedImageIndex=displayedImageIndex !==0 ? displayedImageIndex-1 : images.length-1
        setDisplayedImageIndex(newDisplayedImageIndex)
    }
  return (
    <div className='container'>
        <div className='infinite-carousel'>
            <ul className='images' >
                {images.map((image,index)=>(
                   
                    <li key={index} className={`images__li${displayedImageIndex===index ? "images__li--displayed":""}`}>
                    <img src={image} alt="carousel_image" className='image' />
                    
                    </li>
                ))}
               
            </ul>
        </div>
       <button className='previous-image' onClick={changeToPrevImage}>Previous Image</button>
       <button className='next-image' onClick={changeToNextImage}>Next Image</button>
    </div>
  )
}

export default InfiniteCarousel
