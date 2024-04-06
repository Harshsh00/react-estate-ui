import { useState } from 'react'
import './SearchBar.scss'

const types = ["buy", "rent"];

function SearchBar() {

    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="search-bar">
            <div className="type">

                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}

                {/* <button onClick={() => switchType("rent")}>Rent</button> */}
            </div>
            <form action="">
                <input type="text" name='location' placeholder='City Loacation' />
                <input type="name" name='minPrice' min={0} max={1000000} placeholder='Min Price' />
                <input type="text" name='maxPrice' min={0} max={1000000} placeholder='Max Price' />
                <button><img src="./search.png" alt="" /></button>
            </form>
        </div>
    )
}

export default SearchBar