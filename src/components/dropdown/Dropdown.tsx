/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
    value: string;
    dataFromStore: Record<string, any>[];
    placeholder: string;
    onData: (data: string) => void;
}

export const Dropdown: React.FC<Props> = ({ value, dataFromStore, placeholder, onData }) => {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || placeholder);

    const handleData = (data: string) => {
        setSelectedValue(data);
        onData(data);
    };

    return (
        <div className='dropdowns_container' onClick={() => setIsDropDownOpen(!isDropdownOpen)}>
            <FontAwesomeIcon icon={faChevronDown} className='chevron_down' />
            {selectedValue}
            <div className='state_container'>
                {isDropdownOpen && dataFromStore && dataFromStore.map((data, index) => (
                    <div
                        key={index}
                        className='state'
                        onClick={() => handleData(data.name)}
                    >
                        <p>{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
