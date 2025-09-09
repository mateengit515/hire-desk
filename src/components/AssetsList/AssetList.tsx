import React, { useState } from 'react';
import "./AssetList.css";
import SearchBar from '../searchBar/SearchBar';
import InventoryTable from '../InventoryTable/InventoryTable';

const AssetList: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2 className="asset-list-title">Assets</h2>
      <h3 className='asset-list-sub-title'>Manage your equipment rental inventory</h3>
      <hr className="dashboard-separator" />
      <SearchBar query={query} setQuery={setQuery} />
      <InventoryTable query={query} />
    </div>
  )
};

export default AssetList;