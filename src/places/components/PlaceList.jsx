import PlaceItem from "./PlaceItem"

export default function PlaceList({items}) {
    if (items.length === 0) {
        return (<div>
                    <h2>No Place Found. Please create one</h2>
                    <button>Share Place</button>
                </div>);
    }
  return (
    <ul className="width-[90%] m-auto flex flex-col gap-[2em] items-center p-[2rem]">
        {items.map(place => <PlaceItem key={place.id} 
                                       id={place.id} 
                                       image={place.imageUrl}
                                       description={place.description}
                                       creatorId={place.creator}
                                       coordinates={place.location}
                                       address={place.address}
                                       title={place.title}
                            />)
        }
    </ul>
  )
}
