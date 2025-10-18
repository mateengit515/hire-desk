import React, { useMemo, useState } from "react";
import AssetAssignmentTable, { AssetAssignment } from "./AssetAssignmentTable";
import sampleAssignments from "./sampleAssignments";
import "./AssetAssignments.css";

const AssetAssignments: React.FC = () => {
  const [items, setItems] = useState<AssetAssignment[]>(sampleAssignments());
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let results = items;
    if (q) {
      results = results.filter(
        (a) =>
          a.number.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.employeeName.toLowerCase().includes(q) ||
          a.role.toLowerCase().includes(q) ||
          a.status.toLowerCase().includes(q)
      );
    }
    if (roleFilter !== "All") {
      results = results.filter((a) => a.role === roleFilter);
    }
    return results;
  }, [items, query, roleFilter]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const handleChangeStatus = (
    id: string,
    status: AssetAssignment["status"]
  ) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  return (
    <div className="assignments-container">
      <div className="assignments-page">
        <header className="assignments-top">
          <div>
            <h2 className="assignments-title">Asset Assignments</h2>
            <p className="assignments-sub">
              Manage asset allocation to employees
            </p>
          </div>
          <div>
            <button
              className="add-assignment-btn"
              onClick={() => console.log("Assign button clicked")}
            >
              + Assign Now
            </button>
          </div>
        </header>

        {/* Divider line */}
        <div className="header-divider" />

        {/* Search + Role Type filter row */}
        <div className="search-row">
          <div className="assignments-search">
            <input
              type="text"
              placeholder="Search by asset, employee, or status..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="role-filter">
            <label>Role Type</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="Inspector">Inspector</option>
              <option value="Manager">Operator</option>
              <option value="Technician">Technician</option>
              <option value="Technician">Driver</option>
            <option value="Technician">Transporter</option>


            </select>
          </div>
        </div>

        <AssetAssignmentTable
          items={pageItems}
          onChangeStatus={handleChangeStatus}
        />

        <div className="assignments-footer">
          <div>
            {(page - 1) * perPage + 1}-{Math.min(page * perPage, total)} of{" "}
            {total}
          </div>
          <div className="assignments-footer-right">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetAssignments;
