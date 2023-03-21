export default function GalleryCat({cat}) {
    return(
        <div className="gallery-cat">
            <img src={cat.url} ></img>
            <p>A {cat.breeds[0].name} Cat.</p>
        </div>
    )
}