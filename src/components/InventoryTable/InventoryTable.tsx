import { Table } from '@aws-amplify/ui-react';
import "./InventoryTable.css"
import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import { toCamelCase } from '../../helpers/utils';

function InventoryTable({ query }: any) {
    const [inventoryList, setInventoryList] = React.useState({} as any);
    const statusOptions = [
        "Available",
        "Pre-Delivery Inspection",
        "On Hired",
        "Off Hired",
        "Ready for Collection",
        "Post Hire Insection"
    ]
    const [selectedColumns, setSelectedColumns] = React.useState([]as any);
    useEffect(() => {
        axios.get('/inventory-list.json', {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }
        }).then((response) => {
            setInventoryList(response.data);
            const columns = Object.keys(response.data.list[0]).map((key) => ({ name: toCamelCase(key) }));
            setSelectedColumns(columns);
        }).catch((error) => {
            console.error("Error fetching inventory data:", error);
        });
    }, []);

    const filteredItems = inventoryList.list && inventoryList.list.filter((item: any) =>
         Object.values(item).some((value: any) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
    );

    return (
        <div className="table-container">
            <Table>
                <thead>
                    <tr key={"inventory-header"}>
                    {selectedColumns.map((item: any, index: number): any => {
                        return <th key = {index} className="table-cell">{item.name}</th>
                    })}
                    </tr>
                </thead>
                <tbody>
            {filteredItems && filteredItems.map((val: any, i: number): any => {
                return <tr key={i}>
                    <td className="table-cell">{val["asset-number"]}</td>
                    <td className="table-cell">{val["asset-description"]}</td>
                    <td className="table-cell">{val["sub-category"]}</td>
                    <td className="table-cell">
                        <Dropdown controlClassName='dropdown-cell' options={statusOptions} onChange={() => {}} value={val.status}></Dropdown>
                    </td>
                    <td className="table-cell">{val.capacity}</td>
                    <td className="table-cell">{val["capacity-unit"]}</td>
                    <td className="table-cell">{val.location}</td>
                </tr>
            })}
            </tbody>
            </Table>
        </div>
    );
}

export default InventoryTable;