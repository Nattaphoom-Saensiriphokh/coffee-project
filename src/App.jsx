import { useState, useEffect, createContext, useContext, useReducer, useMemo} from 'react'
import './App.css'
import ProductList from './components/ProductList'
import products from './data/products'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import Summary from "./components/Summary";
import { cartReducer, initialCart } from './reducer/cartReducer'



function App() {

  const [ search, setSearch ] = useState("");
  const [ category, setCategory] = useState("All");
  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

        const matchSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchCategory =
            category === "All" ||
            product.category === category;

        return matchSearch && matchCategory;

    });

  }, [search, category]);


  
  return (
<div className="container">

    <h1>☕ Coffee Shop</h1>

    <SearchBar
        search={search}
        setSearch={setSearch}
    />

    <CategoryFilter
        category={category}
        setCategory={setCategory}
    />

    <div className="layout">

        <ProductList
            products={filteredProducts}
        />

        <div>

            <Cart />

            <Summary />

        </div>

    </div>

</div>
  
  );
}


export default App;
