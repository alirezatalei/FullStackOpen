import { useEffect, useState } from "react";
import Filter from "./Filter";
import { findCountry, getAll } from "./services/countries";
import Results from "./Results";
import Country from "./Country";
function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filterKeyword, setFilterKeyword] = useState('')
  const [selectedCountry, setSelectedCountry] = useState()
  const [results, setResults] = useState([])

  useEffect(() => {
    getAll().then(setAllCountries)
  }, []);

  useEffect(() => {
    if (results.length === 1) setSelectedCountry(results[0])
  }, [results]);

  const onFilterChange = (e) => {
    setSelectedCountry(undefined)
    setResults(allCountries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  const onSelectCountry = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div >
      <Filter onFilterChange={onFilterChange} />
      {selectedCountry
        ? <Country country={selectedCountry} />
        : results.length
          ? results.length < 10
            ? <Results results={results} onSelectCountry={onSelectCountry} />
            : <div>Too many matches, narrow your search</div>
          : null}

    </div>
  );
}

export default App;
