"use client";

import React from 'react';
import * as Icons from 'lucide-react';

/**
 * DynamicIcon component that renders a Lucide icon based on its string name.
 * Supports standard camelCase Lucide icon names (e.g., 'Home', 'Search', 'CreditCard').
 * 
 * @param {Object} props
 * @param {string} props.name - The name of the Lucide icon to render.
 * @param {string} [props.className] - Optional CSS class name.
 * @param {number|string} [props.size] - Optional size of the icon.
 * @param {string} [props.color] - Optional color of the icon.
 */
const DynamicIcon = ({ name, className = "", size, color, ...props }) => {
    // Handle cases where name might be missing or not a string
    if (!name || typeof name !== 'string') {
        return <Icons.HelpCircle className={className} size={size} color={color} {...props} />;
    }

    // Capitalize the first letter if it's not (though Lucide icons are usually PascalCase)
    const iconName = name.charAt(0).toUpperCase() + name.slice(1);

    // Get the component from the Icons object
    const IconComponent = Icons[iconName] || Icons[name] || Icons.HelpCircle;

    return <IconComponent className={className} size={size} color={color} {...props} />;
};

export default DynamicIcon;
