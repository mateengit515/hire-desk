import React, { useEffect, useState } from "react";
import { Asset } from "./AssetTable";
import "./Assets.css";

export default function AssetForm({
  initial,
  onCancel,
  onSave,
}: {
  initial: Asset;
  onCancel: () => void;
  onSave: (asset: Asset) => void;
}) {
  const [form, setForm] = useState<Asset>(initial);

  useEffect(() => setForm(initial), [initial]);

  function update<K extends keyof Asset>(k: K, v: Asset[K]) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>{form.id ? "Edit Asset" : "Add Asset"}</h3>

        <div className="form-grid">
          <label>
            Asset Number
            <input value={form.number ?? ""} onChange={(e) => update("number", e.target.value)} />
          </label>

          <label>
            Description
            <input value={form.description ?? ""} onChange={(e) => update("description", e.target.value)} />
          </label>

          <label>
            Sub Category
            <input value={form.subCategory ?? ""} onChange={(e) => update("subCategory", e.target.value)} />
          </label>

          <label>
            Status
            <input value={form.status ?? ""} onChange={(e) => update("status", e.target.value)} />
          </label>

          <label>
            Capacity
            <input type="number" value={form.capacity ?? ""} onChange={(e) => update("capacity", Number(e.target.value))} />
          </label>

          <label>
            Capacity Unit
            <input value={form.capacityUnit ?? ""} onChange={(e) => update("capacityUnit", e.target.value)} />
          </label>

          <label>
            Location
            <input value={form.location ?? ""} onChange={(e) => update("location", e.target.value)} />
          </label>
        </div>

        <div className="modal-actions">
          <button className="btn" onClick={onCancel}>Cancel</button>
          <button className="btn primary" onClick={() => onSave(form)}>Save</button>
        </div>
      </div>
    </div>
  );
}
