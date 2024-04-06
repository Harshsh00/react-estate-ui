import './Filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>Search result for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="cit">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' />

                </div>

            </div>
            {/* bottom */}
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>

                </div>

                {/* Property */}
               
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="">
                       <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                {/* Min - price */}
                <div className="item">
                    <label htmlFor="minPrice">Min-Price</label>
                    <input type="number" id='minPrice' name='minPrice' placeholder='Any' />
                </div>

{/* Max - price */}

                <div className="item">
                    <label htmlFor="max-price">Max-Price</label>
                    <input type="number"
                     id='max-price' 
                     name='max-price'
                      placeholder='any' />
                </div>

                {/* Bedroom */}
                
                <div className="item">
                    <label htmlFor="bedroom">Bedroom`</label>
                    <input type="text" id='bedroom' name='bedroom' placeholder='Any' />
                </div>

                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter