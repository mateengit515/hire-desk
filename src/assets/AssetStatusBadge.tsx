import React from "react";
import "./Assets.css";

const STATUS_CLASS: Record<string, string> = {
  Available: "status-available",
  "Pre-Delivery Inspection": "status-inspection",
  "On Hired": "status-hired",
  "Off Hired": "status-offhired",
  "Ready for Collection": "status-ready",
  "Post Hire Inspection": "status-post",
  "Under Repair": "status-under",
  Breakdown: "status-breakdown",
  "Work In Progress": "status-wip",
  "Temporary Transfer": "status-temp",
  Disposal: "status-disposal",
};

const AssetStatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const cls = STATUS_CLASS[status] || "status-default";
  return <span className={`status-badge ${cls}`}>{status}</span>;
};

export default AssetStatusBadge;
