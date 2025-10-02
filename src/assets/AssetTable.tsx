import React from "react";
import AssetStatusBadge from "./AssetStatusBadge";
import "./Assets.css";

export type Asset = {
  id: string;
  number: string;
  description: string;
  subCategory: string;
  status: string;
  capacity?: number | string;
  capacityUnit?: string;
  location?: string;
};

type AssetTableProps = {
  items: Asset[];
  onChangeStatus?: (id: string, status: string) => void; // optional now
};

const AssetTable: React.FC<AssetTableProps> = ({ items }) => {
  return (
    <div className="asset-table">
      <table>
        <thead>
          <tr>
            <th>Asset Number</th>
            <th>Asset Description</th>
            <th>Sub Category</th>
            <th>Status</th>
            <th>Capacity</th>
            <th>Capacity Unit</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((asset) => (
            <tr key={asset.id}>
              <td>
                <a className="asset-link" href="#">
                  {asset.number}
                </a>
              </td>
              <td>{asset.description}</td>
              <td>{asset.subCategory}</td>
              <td>
                <AssetStatusBadge status={asset.status} />
              </td>
              <td>{asset.capacity}</td>
              <td>{asset.capacityUnit}</td>
              <td>{asset.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
