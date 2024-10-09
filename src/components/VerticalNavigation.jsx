import {useState} from "react";


const VerticalNavigation = ({ onSelect }) => {
    const [activeOption, setActiveOption] = useState('body');


    const handleSelect = (option) => {
        setActiveOption(option);
        onSelect(option);
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
            <div className={`${activeOption === 'body' ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => handleSelect('body')}>
                Body
            </div>
            <div className={`${activeOption === 'details' ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => handleSelect('details')}>
                Details
            </div>
            <div className={`${activeOption === 'glass' ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => handleSelect('glass')}>
                Glass
            </div>
        </div>
    );
};

export default VerticalNavigation;