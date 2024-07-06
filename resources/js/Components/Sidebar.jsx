import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Sidebar = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <div className={`relative flex transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
            {/* Sidebar */}
            <div className={`h-screen bg-teal-400 text-gray-500 flex flex-col py-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                {/* Menu Toggle Button */}
                <div className="w-full px-3 mb-4">
                    <IconButton
                        onClick={toggleSidebar}
                        className="text-gray-700 hover:text-gray-900"
                    >
                        {isOpen ? <ArrowBackIcon /> : <MenuIcon />}
                    </IconButton>
                </div>

                {/* Sidebar Items */}
                {items.map((item, index) => (
                    <div key={index}>
                        <Tooltip title={!isOpen ? item.label : ''} placement="right">
                            <div
                                className="w-full flex items-center px-3 py-2 mb-2 cursor-pointer hover:bg-teal-500 transition-colors duration-200"
                                onClick={() => toggleDropdown(index)}
                            >
                                <IconButton className="text-gray-700">
                                    <item.icon />
                                </IconButton>
                                {isOpen && <span className="ml-3 text-gray-700 flex-grow">{item.label}</span>}
                                {isOpen && item.subItems && item.subItems.length > 0 && (
                                    <IconButton className="text-gray-700">
                                        {activeItem === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton>
                                )}
                            </div>
                        </Tooltip>

                        {/* Dropdown Menu */}
                        {activeItem === index && isOpen && item.subItems && item.subItems.length > 0 && (
                            <div className=" mb-2 bg-teal-300 p-2 rounded">
                                {item.subItems.map((subItem, subIndex) => (
                                    <div key={subIndex} className="py-1 px-2 cursor-pointer hover:bg-teal-400 rounded">
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Content area (you can add your main content here) */}
            <div className="flex-grow bg-gray-100">
                {/* Your main content goes here */}
            </div>
        </div>
    );
};

export default Sidebar;
