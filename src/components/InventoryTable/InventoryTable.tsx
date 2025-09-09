import { Table } from '@aws-amplify/ui-react';
import "./InventoryTable.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const columns = [
    { name: 'Asset Number' },
    { name: 'Asset Description' },
    { name: 'Sub Category' },
    { name: 'Status' },
    { name: 'Capacity' },
    { name: 'Capacity Unit' },
    {name: "Location"}
];

const statusOptions = [
    "Available",
    "Pre-Delivery Inspection",
    "On Hired",
    "Off Hired",
    "Ready for Collection",
    "Post Hire Insection"
]

const data = [
    { assetNumber: 1, assetDescription: 'John Doe', subCategory: '1.75m', status: 'Available', capacity: "10", capacityUnit: "Tons", location: "Hyderabad" },
    { assetNumber: 2, assetDescription: 'Jane Doe', subCategory: '1.64m', status: 'Pre-Delivery Inspection', capacity: "160", capacityUnit: "kw", location: "Noida" },
    { assetNumber: 3, assetDescription: 'Sheera Maine', subCategory: '1.69m', status: 'On Hired', capacity: "5", capacityUnit: "Cubic Meter", location: "Delhi" },
];

function InventoryTable({ query }: any) {
    const filteredItems = data.filter((item) =>
         Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
    );
    return (
        <div className="table-container">
            <Table>
                <tr>
                    {columns.map((item): any => {
                           return <th className="table-cell">{item.name}</th>
                    })}
                </tr>
            {filteredItems.map((val, i): any => {
                return <tr key={i}>
                    <td className="table-cell">{val.assetNumber}</td>
                    <td className="table-cell">{val.assetDescription}</td>
                    <td className="table-cell">{val.subCategory}</td>
                    <td className="table-cell">
                        <Dropdown controlClassName='dropdown-cell' options={statusOptions} onChange={() => {}} value={val.status}></Dropdown>
                    </td>
                    <td className="table-cell">{val.capacity}</td>
                    <td className="table-cell">{val.capacityUnit}</td>
                    <td className="table-cell">{val.location}</td>
                </tr>
            })}
            </Table>
        </div>
    );
}

export default InventoryTable;