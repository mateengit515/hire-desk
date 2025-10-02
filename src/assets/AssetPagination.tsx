import React from "react";
import "./Assets.css";

const AssetPagination: React.FC<{ page: number; totalPages: number; onPageChange: (p: number) => void; }> =
  ({ page, totalPages, onPageChange }) => {
    return (
      <div className="pagination-controls">
        <button onClick={() => onPageChange(1)} disabled={page === 1}>{"<<"}</button>
        <button onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1}>{"<"}</button>
        <span className="page-indicator">{page}/{totalPages}</span>
        <button onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages}>{">"}</button>
        <button onClick={() => onPageChange(totalPages)} disabled={page === totalPages}>{">>"}</button>
      </div>
    );
  };

export default AssetPagination;
