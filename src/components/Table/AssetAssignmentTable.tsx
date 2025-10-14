import React, { useEffect, useState } from "react";
import "./AssetAssignmentTable.css";

type Props = {
  query?: string;
  filterQuery?: { name: string; value: string };
  roleFilter?: string;
  assignmentList: { list: any[] };
  selectedColumns?: any[]; 
  onStatusChange?: (assetNumber: string, newStatus: string) => void;
};

const STATUS_OPTIONS = ["In Progress", "Completed", "Delayed"];

const AssetAssignmentTable: React.FC<Props> = ({
  query = "",
  filterQuery = { name: "", value: "" },
  roleFilter = "",
  assignmentList,
  selectedColumns = [], 
  onStatusChange,
}) => {
  const [filteredItems, setFilteredItems] = useState<{ list: any[] }>({ list: [] });

  useEffect(() => {
    if (!assignmentList || !Array.isArray(assignmentList.list)) return;

    const q = query.toLowerCase();
    const fVal = filterQuery.value.toLowerCase();
    const rVal = roleFilter.toLowerCase();

    const filtered = assignmentList.list.filter((item: any) => {
      const allValues = [
        item["asset-number"],
        item["asset-description"],
        item.role,
        item.status,
        item["assigned-date"],
        item["expected-date"],
        item.employee?.code,
        item.employee?.name,
      ]
        .filter(Boolean)
        .map((v) => v.toString().toLowerCase());

      const matchesQuery = q === "" ? true : allValues.some((v) => v.includes(q));
      const matchesStatus = fVal === "" ? true : item.status.toLowerCase() === fVal;
      const matchesRole = rVal === "" ? true : item.role.toLowerCase() === rVal;

      return matchesQuery && matchesStatus && matchesRole;
    });

    setFilteredItems({ list: filtered });
  }, [query, filterQuery, roleFilter, assignmentList]);

  const handleStatusChange = (assetNumber: string, newStatus: string) => {
    setFilteredItems((prev) => ({
      list: prev.list.map((item) =>
        item["asset-number"] === assetNumber ? { ...item, status: newStatus } : item
      ),
    }));

    onStatusChange?.(assetNumber, newStatus);
  };

  return (
    <div className="table-container">
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Asset Number</th>
            <th>Asset Description</th>
            <th>Employee</th>
            <th>Role</th>
            <th>Assigned Date</th>
            <th>Expected Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.list.length > 0 ? (
            filteredItems.list.map((a, i) => (
              <tr key={i}>
                <td>{a["asset-number"]}</td>
                <td>{a["asset-description"]}</td>
                <td>
                  <div className="employee-cell">
                    <span className="employee-id">{a.employee?.code}</span>
                    <span className="employee-name">{a.employee?.name}</span>
                  </div>
                </td>
                <td>{a.role}</td>
                <td>{a["assigned-date"]}</td>
                <td>{a["expected-date"]}</td>
                <td className="status-cell">
                  <select
                    className={`status-dropdown ${a.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    value={a.status}
                    onChange={(e) =>
                      handleStatusChange(a["asset-number"], e.target.value)
                    }
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No assignments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssetAssignmentTable;
