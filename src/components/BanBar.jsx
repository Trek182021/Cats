export default function BanBar({banList}) {
    return (
        <div className="banbar">
            <h2>Ban List</h2>
            <p>Select an attribute in your listing to ban it.</p>
            {banList.map((ban,index) => <button key={index}>{ban}</button>)}
        </div>
    )
}