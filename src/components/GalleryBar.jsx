import GalleryCat from "./GalleryCat"


export default function GalleryBar({cats}) {
    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <div>

                {cats && cats[0]? cats.map( (cat, index) => {return <GalleryCat cat={cat} key={index}/>}) : ""}
            </div>
        </div>
    )
}