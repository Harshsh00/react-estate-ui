import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Map from '../../components/map/Map';
import { ListData } from '../../lib/DummyData';
import './ListPage.scss';

function ListPage(){
    
    const data = ListData;
    
    return(
        <div className="list-page">
            <div className="list-container">
            <div className="wrapper">
                <Filter/>
                {data.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
            </div>
            <div className="map-container">
                    {/* <Map item={data}/> */}
            </div>
        </div>
    )
}

export default ListPage