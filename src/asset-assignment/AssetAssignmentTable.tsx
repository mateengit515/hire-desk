// src/asset-assignments/AssetAssignmentTable.tsx
import React from "react";
import "./AssetAssignments.css";

export type AssetAssignment = {
  id: string;
  number: string;
  description: string;
  employeeId: string;
  employeeName: string;
  role: string;
  assignedDate: Date;
  expectedDate: Date;
  status: "In Progress" | "Completed" | "Delayed";
};

type Props = {
  items: AssetAssignment[];
  onChangeStatus?: (id: string, status: AssetAssignment["status"]) => void;
};

const STATUS_OPTIONS: AssetAssignment["status"][] = [
  "In Progress",
  "Completed",
  "Delayed",
];

function statusToClass(status: AssetAssignment["status"]) {
  switch (status) {
    case "In Progress":
      return "in-progress";
    case "Completed":
      return "completed";
    case "Delayed":
      return "delayed";
    default:
      return "";
  }
}

const AssetAssignmentTable: React.FC<Props> = ({ items, onChangeStatus }) => {
  return (
    <div className="assignments-table-wrap">
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
          {items.map((a) => (
            <tr key={a.id}>
              <td>{a.number}</td>
              <td>{a.description}</td>
              <td>
                <div className="employee-cell">
                  <span className="employee-id">{a.employeeId}</span>
                  <span className="employee-name">{a.employeeName}</span>
                </div>
              </td>
              <td>{a.role}</td>
              <td>{a.assignedDate.toISOString().slice(0, 10)}</td>
              <td>{a.expectedDate.toISOString().slice(0, 10)}</td>
              <td className="status-cell">
                <select
                  className={`assignment-status-select ${statusToClass(
                    a.status
                  )}`}
                  value={a.status}
                  onChange={(e) =>
                    onChangeStatus?.(a.id, e.target.value as AssetAssignment["status"])
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
          ))}
          {items.length === 0 && (
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
