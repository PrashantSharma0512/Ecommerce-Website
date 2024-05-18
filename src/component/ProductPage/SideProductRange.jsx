import React from 'react'
import Slider from '@mui/material/Slider'
import Checkbox from '@mui/material/Checkbox';

function valuetext(value) {
    return `${value}`;
}

function SideProductRange() {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='p-6 shadow-blue-600 shadow-lg sticky'>
            <h2 className='text-center  text-3xl '>Fill by Price</h2>
            {/* fliter slider */}
            <Slider
                min={1}
                max={10000}
                step={1}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color='secondary'
                getAriaValueText={valuetext}
            />
            <div className='flex'>
                <span className='m-auto flex'>FROM: ₹{value[0]}</span>
                <span className='m-auto flex'>FROM: ₹{value[1]}</span>
            </div>
            <br />
            <br />
            <br />
            {/* <-----checkbox------> */}

            
            {/* filter by category */}
            <div className=''>
                <h1 className='text-3xl text-blue-800 mb-4 font-medium'>Category</h1>
                <ul>
                    <li><Checkbox {...label}  />Product1</li>
                    <li><Checkbox {...label}  />Product2</li>
                    <li><Checkbox {...label}  />Product3</li>
                    <li><Checkbox {...label}  />Product4</li>
                    <li><Checkbox {...label}  />Product5</li>
                    <li><Checkbox {...label}  />Product6</li>
                    <li><Checkbox {...label}  />Product7</li>
                    <li><Checkbox {...label}  />Product8</li>
                </ul>
            </div>
            {/* color */}
            <div className=''>
                <h1 className='text-3xl text-blue-800 mb-4 font-medium'>Color</h1>
                <ul>
                    <li><Checkbox {...label} />Blue</li>
                    <li><Checkbox {...label} />Red</li>
                    <li><Checkbox {...label} />Black</li>
                    <li><Checkbox {...label} />Orange</li>
                    <li><Checkbox {...label} />Crimson</li>
                    <li><Checkbox {...label} />pta nhi</li>
                    <li><Checkbox {...label} />Aur ek color</li>
                    <li><Checkbox {...label} />Apne Se Mann Lo</li>
                </ul>
            </div>
            
        </div>
    )
}

export default SideProductRange
