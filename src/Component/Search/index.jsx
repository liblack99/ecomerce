function Search({ handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search a product"
      className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
      onChange={(event) => handleSearch(event.target.value)}
    />
  );
}

export default Search;
