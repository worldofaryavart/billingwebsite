import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Sidebar = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="relative flex">
            {/* Main Sidebar */}
            <div className="w-16 h-screen bg-gray-300 text-gray-500 flex flex-col items-center py-4 transition-all duration-300">
                {items.map((item, index) => (
                    <Tooltip key={index} title={item.label}>
                        <IconButton
                            onClick={() => handleButtonClick(index)}
                            className={`transition-colors duration-300 p-2 rounded-full ${
                                activeIndex === index
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                        >
                            <item.icon />
                        </IconButton>
                    </Tooltip>
                ))}
            </div>

            {/* Sub-sidebar */}
            {activeIndex !== null && (
                <div
                    className={`absolute top-0 left-16 bg-gray-700 text-white p-4 transition-transform duration-500 ${
                        activeIndex !== null ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    style={{ width: '250px', height: '100vh' }}
                >
                    <h2 className="text-xl mb-4">
                        {items[activeIndex].label}
                    </h2>

                    <ul>
                        {items[activeIndex].subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="mb-2">
                                {subItem}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;