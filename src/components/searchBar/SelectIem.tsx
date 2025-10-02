import "./SearchBar.css"
const SearchBar = ({setQuery, query}: any) => {
  return (
    <>
      <input
        type="text"
        placeholder="Select Item"
        value={query}
        className="select-item"
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
