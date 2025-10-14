import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AssetAssignment.css";
import SearchBar from "../searchBar/SearchBar";
import FilterComponent from "../filter/FilterComponent";
import RoleFilter from "../filter/RoleFilter";
import AssetAssignmentTable from "../Table/AssetAssignmentTable";
import { toCamelCase } from "../../helpers/utils";


const AssetAssignment: React.FC = () => {
  const [assignmentList, setAssignmentList] = useState<any>({});
  const [selectedColumns, setSelectedColumns] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [filterQuery, setFilterQuery] = useState({ name: "", value: "" });

  useEffect(() => {
    axios
      .get("/asset-assignments.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log("✅ Loaded asset assignments:", res.data);
        setAssignmentList(res.data);

        if (res.data.list && res.data.list.length > 0) {
          const cols = Object.keys(res.data.list[0]).map((key) => ({
            name: toCamelCase(key), 
          }));
          setSelectedColumns(cols);
        }
      })
      .catch((err) => console.error(" Error fetching assignments:", err));
  }, []);

  return (
    <div className="asset-assignment-page">
      <header className="asset-header">
        <div>
          <h2 className="asset-title">Asset Assignments</h2>
          <p className="asset-subtitle">Manage asset allocation to employees</p>
        </div>
        <button className="assign-btn">+ Assign Now</button>
      </header>

      <hr className="header-divider" />

      <div className="filters">
        <SearchBar query={query} setQuery={setQuery} />
        <FilterComponent setFilterQuery={setFilterQuery} />
        <RoleFilter role={roleFilter} setRole={setRoleFilter} />
      </div>

      <AssetAssignmentTable
        query={query}
        filterQuery={filterQuery}
        roleFilter={roleFilter}
        assignmentList={assignmentList}
        selectedColumns={selectedColumns}
      />
    </div>
  );
};

export default AssetAssignment;
