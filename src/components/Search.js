import React ,{useState}from "react";

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

   function handleChange(e) {
setSearchTerm(e.target.value)
   }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
