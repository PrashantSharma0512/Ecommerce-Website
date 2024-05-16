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
        <div className='p-6 shadow-blue-600 shadow-lg'>
            <h2 className='text-center  text-3xl '>Fill by Price</h2>
            <Slider
                min={1}
                max={10000}
                step={1}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <div className='flex'>
                <span className='m-auto flex'>FROM: ₹{value[0]}</span>
                <span className='m-auto flex'>FROM: ₹{value[1]}</span>
            </div>
            <br />
            <br />
            <br />
            {/* checkbox */}
            <div className=''>
                <ul>
                    <li><Checkbox {...label} defaultChecked />Product1</li>
                    <li><Checkbox {...label} defaultChecked />Product2</li>
                    <li><Checkbox {...label} defaultChecked />Product3</li>
                    <li><Checkbox {...label} defaultChecked />Product4</li>
                    <li><Checkbox {...label} defaultChecked />Product5</li>
                    <li><Checkbox {...label} defaultChecked />Product6</li>
                    <li><Checkbox {...label} defaultChecked />Product7</li>
                    <li><Checkbox {...label} defaultChecked />Product8</li>
                </ul>
            </div>

        </div>
    )
}

export default SideProductRange
