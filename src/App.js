import InfiniteCarousel from "./components/InfiniteCarousel";

function App() {
  const images=[
    "images/image1.webp",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
  ]
  return (
    <div className="App">
      <InfiniteCarousel images={images}/>
    </div>
  );
}

export default App;
