// src/assets/Assets.tsx
import React, { useMemo, useState } from "react";
import AssetFilters from "./AssetFilters";
import AssetTable, { Asset } from "./AssetTable";
import AssetPagination from "./AssetPagination";
import AssetForm from "./AssetForm";
import sampleAssets from "./sampleAssets";
import "./Assets.css";

const Assets: React.FC = () => {
  const [items, setItems] = useState<Asset[]>(sampleAssets());
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Asset | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (a) =>
        a.number.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.subCategory.toLowerCase().includes(q) ||
        (a.status || "").toLowerCase().includes(q)
    );
  }, [items, query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  // keep handlers (you may use later)
  const handleChangeStatus = (id: string, status: string) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  // search
  const onSearch = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  return (
    <div className="assets-container">
      <div className="assets-page">
        <header className="assets-top">
          <div>
            <h2 className="assets-title">Assets</h2>
            <p className="assets-sub">Manage your equipment rental Inventory</p>
          </div>
          <div>
            {/* Button kept visible but does not open form */}
            <button
              className="add-asset-btn"
              onClick={() => console.log("Add Asset button clicked")}
            >
              + Add Asset
            </button>
          </div>
        </header>

        <AssetFilters query={query} setQuery={onSearch} />

        <AssetTable
          items={pageItems}
          onChangeStatus={handleChangeStatus}
        />

        <div className="assets-footer">
          <div>
            {(page - 1) * perPage + 1}-{Math.min(page * perPage, total)} of{" "}
            {total}
          </div>
          <div className="assets-footer-right">
            <label>
              Rows per page:
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={12}>12</option>
                <option value={25}>25</option>
              </select>
            </label>
            <AssetPagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>

        {/* Form completely removed for now */}
      </div>
    </div>
  );
};

export default Assets;
