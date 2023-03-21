export default function DiscoverCat({cat, handleBan}) {
    return(
        <div className="discover-cat">
            <h3>{cat.breeds[0].name}</h3>
            <div className="info">
                <button onClick={handleBan} value={cat.breeds[0].weight.imperial}>{cat.breeds[0].weight.imperial} lbs</button>
                <button onClick={handleBan} value={cat.breeds[0].life_span}>{cat.breeds[0].life_span} yrs</button>
                <button onClick={handleBan}value={cat.breeds[0].dog_friendly}>{"Friendly Level: " + cat.breeds[0].dog_friendly}</button>

            </div>
            <img src={cat.url}/>
        </div>
    )
}