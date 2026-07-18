function SearchBar({search, setSearch}) {

    return (

        <div className="search">
            <input 
            type="text" 
            placeholder="...ค้นหาเมนู..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}

export default SearchBar;