// src/components/filter/RoleFilter.tsx
import React from "react";
import "./RoleFilter.css";

export type RoleFilterProps = {
  /** Currently selected role (controlled) */
  role: string;
  /** State setter from parent */
  setRole: (role: string) => void;
  /** Optional: custom roles to show in dropdown */
  roles?: string[];
};

const defaultRoles = ["Inspector", "Technician", "Operator", "Driver", "Transporter"];

const RoleFilter: React.FC<RoleFilterProps> = ({ role, setRole, roles = defaultRoles }) => {
  return (
    <div className="role-filter">
      <select
        className="role-filter-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        {/* 👇 This acts as placeholder text inside the box */}
        <option value="" disabled selected={!role}>
          Role Type
        </option>

        <option value="">All Roles</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleFilter;
