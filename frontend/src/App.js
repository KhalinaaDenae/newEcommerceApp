import React, { useState } from 'react';
import SearchBar from '../src/component/SearchBar';
import ProviderList from '../src/component/ProviderList';
import Filters from '../src/component/Filters';
import providersData from '../src/data/providers.json';
import '../src/screens/LandingPage'
import LandingPage from '../src/screens/LandingPage';



const App = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    gender: '',
    availability: '',
  });

  // Assuming providersData contains the JSON data you provided
  const filteredProviders = providersData.filter(provider => {
    // const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedFilters.category === '' || provider.specialty === selectedFilters.category;
    const matchesGender = selectedFilters.gender === '' || provider.gender === selectedFilters.gender;
    const matchesAvailability = selectedFilters.availability === '' || provider.availability.includes(selectedFilters.availability);
    
    return  matchesCategory && matchesGender && matchesAvailability;
  });

  return (
    <>
   <div>
    < LandingPage />
      {/* <SearchBar setSearchTerm={setSearchTerm} /> */}
      <Filters setSelectedFilters={setSelectedFilters} />
      <ProviderList providers={filteredProviders} />
    </div>
    </>
  );
};

export default App;