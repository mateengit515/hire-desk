import  {  useState } from 'react';
import downArrow from '../../images/down-arrow.png';
import FilterOptions from './FilterOptions';


function FilterComponent({ filterOptions, setFilterQuery, filterQuery }: any) {
    const [openDivIndex, setOpenDivIndex] = useState(null as number | null);

    const handleToggle = (index: number) => {
        setOpenDivIndex(index === openDivIndex ? null : index);
    };

    return (<div className='container'>
        {filterOptions && filterOptions.length > 0 &&
            filterOptions.map((filter: any, index: number) => {
                return <div key={index} onClick={() => { handleToggle(index) }} className='filter-option'>
                    {filter.name}
                    <img
                        src={downArrow}
                        alt="HireDesk Logo"
                        className="down-arrow-img"
                    />
                    {openDivIndex === index && (<FilterOptions options={filter.options} handleClose={() => setOpenDivIndex(null)} filterQuery={filterQuery} setFilterOption={(op: string) => {
                        setFilterQuery({name: filter.nickName, value: op});
                        setOpenDivIndex(null);
                    }} />)}
                </div>
            })}
    </div>)
}

export default FilterComponent;