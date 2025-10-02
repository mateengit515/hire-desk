import React, { useState } from "react";

const AssetFilters: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="asset-filters">
      <input
        type="text"
        placeholder="Search assets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="asset-search-input"
      />
      <div className="filter-buttons">
        <button className="filter-btn">Asset Type ▼</button>
        <button className="filter-btn">Asset Group ▼</button>
        <button className="filter-btn">Asset Status ▼</button>
        <button className="filter-btn">⚙ Filter</button>
      </div>
    </div>
  );
};

export default AssetFilters;
