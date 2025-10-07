import { Table } from '@aws-amplify/ui-react';
import "./InventoryTable.css"
import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function InventoryTable({ query, filterQuery, inventoryList, selectedColumns }: any) {
      const [filteredItems, setFilteredItems] = React.useState({list: inventoryList.list} as any);
    
    const statusOptions = [
        "Available",
        "Pre-Delivery Inspection",
        "On Hired",
        "Off Hired",
        "Ready for Collection",
        "Post Hire Insection"
    ]
   

    useEffect(() => {
        const filteredItem = Object.keys(inventoryList).length > 0 && inventoryList.list && inventoryList.list.filter((item: any) =>
            Object.values(item).some((value: any) =>{
               return value.toString().toLowerCase().includes(query.toLowerCase()) &&  item[filterQuery.name.toLowerCase()]?.toString().toLowerCase().includes(filterQuery.value.toLowerCase())
            }
            )
        );
        setFilteredItems({list: filteredItem});
    }, [query, filterQuery]);
    return (
        <div className="table-container">
            <Table>
                <thead>
                    <tr key={"inventory-header"}>
                        {selectedColumns.map((item: any, index: number): any => {
                            return <th key={index} className="table-cell">{item.name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(filteredItems).length > 0 && filteredItems.list && filteredItems.list.map((val: any, i: number): any => {
                        return <tr key={i}>
                            <td className="table-cell asset-number">{val["asset-number"]}</td>
                            <td className="table-cell">{val["asset-description"]}</td>
                            <td className="table-cell">{val["sub-category"]}</td>
                            <td className="table-cell">
                                <Dropdown controlClassName='dropdown-cell' disabled={true} options={statusOptions} onChange={() => { }} value={val.status}></Dropdown>
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