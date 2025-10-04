import React from "react";

interface AssetFiltersProps {
  query: string;
  setQuery: (q: string) => void;
}

const AssetFilters: React.FC<AssetFiltersProps> = ({ query, setQuery }) => {
  return (
    <div className="asset-filters">
      <input
        type="text"
        value={query}
        placeholder="Search assets..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default AssetFilters;
