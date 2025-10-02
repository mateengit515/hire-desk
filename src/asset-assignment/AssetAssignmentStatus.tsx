import React from "react";
import './AssetAssignments.css';

const ASSIGNMENT_STATUS_CLASS: Record<string, string> = {
  "In Progress": "status-inprogress",
  Completed: "status-completed",
  Delayed: "status-delayed",
};

const AssetAssignmentStatus: React.FC<{ status: string }> = ({ status }) => {
  const cls = ASSIGNMENT_STATUS_CLASS[status] || "status-default";
  return <span className={`status-badge ${cls}`}>{status}</span>;
};

export default AssetAssignmentStatus;
