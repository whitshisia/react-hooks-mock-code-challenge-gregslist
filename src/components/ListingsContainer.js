import React ,{useEffect,useState}from "react";
import ListingCard from "./ListingCard"

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  const handleFavorite = (id) => {
    const updatedListings = listings.map(listing => {
      if (listing.id === id) {
        return { ...listing, isFavorite: !listing.isFavorite };
      }
      return listing;
    });
    setListings(updatedListings);
  };

  const handleRemove = (id) => {
    // Remove listing from backend
    // Example:
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedListings = listings.filter(listing => listing.id !== id);
        setListings(updatedListings);
      })
      .catch(error => console.error('Error deleting listing:', error));
  };

  const handleSearch = (searchTerm) => {
    // Perform search
    // Example:
    fetch(`http://localhost:6001/listings/${searchTerm}`)
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error searching listings:', error));
  };

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
          key={listing.id}
          listing={listing}
          onFavorite={handleFavorite}
          onRemove={handleRemove}
          onSearch={handleSearch}
          />
        ))}

      </ul>
    </main>
  );
}

export default ListingsContainer;
