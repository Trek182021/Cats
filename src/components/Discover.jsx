import DiscoverCat from "./DiscoverCat";

export default function Discover({cats, fetchData, ban}) {
    return (
        <div className="discover">
            <h1>Discover Cats!</h1>
            <p>"Cats are connoisseurs of comfort. -James Herriot"</p>
            {cats ? <DiscoverCat cat={cats[0]}  handleBan={ban}/> : ""}
            <button onClick={fetchData}>Discover🐈</button>
        </div>
    )
}