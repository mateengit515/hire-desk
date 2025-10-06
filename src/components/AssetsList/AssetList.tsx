import React, { useEffect, useState } from 'react';
import "./AssetList.css";
import SearchBar from '../searchBar/SearchBar';
import InventoryTable from '../inventoryTable/InventoryTable';
import FilterComponent from '../filter/FilterComponent';
import axios from 'axios';
import { toCamelCase } from '../../helpers/utils';

const AssetList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState({"name" : "status", "value":""} as any);
  const [inventoryList, setInventoryList] = React.useState({} as any);
  const [selectedColumns, setSelectedColumns] = React.useState([] as any);

  const filterOptions = [
    {
      name: "Asset Type", nickName: "type", options: [{ name: "Equipment" },
      { name: "Vehicle" },
      { name: "Attachment" }]
    },
    {
      name: "Asset Status", nickName: "status", options: [{ name: "Available" },
      { name: "Pre-delivery Inspection" },
      { name: "On Hired" },
      { name: "Off Hired" },
      { name: "Ready for Collection" },
      { name: "Post Hire Inspection" },
      { name: "Under Repair" },
      { name: "Breakdown" },
      { name: "Work In Progress" },
      { name: "Temporary Transfer" },]
    },
  ]

  useEffect(() => {
    axios.get('/inventory-list.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      setInventoryList(response.data);
      const columns = Object.keys(response.data.list[0]).map((key) => ({ name: toCamelCase(key) }));
      setSelectedColumns(columns);
    }).catch((error) => {
      console.error("Error fetching inventory data:", error);
    });
  }, []);

  return (
    <div>
      <span className="asset-list-title">Assets</span>
      <span className='asset-list-sub-title'>Manage your equipment rental inventory</span>
      <hr className="dashboard-separator" />
      <div className='filter-search-container'>
        <SearchBar query={query} setQuery={setQuery} />
        <FilterComponent filterOptions={filterOptions} setFilterQuery={setFilterQuery} filterQuery={filterQuery} />
      </div>
      {inventoryList.list && <InventoryTable query={query} filterQuery={filterQuery} inventoryList={inventoryList} selectedColumns={selectedColumns}/>}
    </div>
  )
};

export default AssetList;