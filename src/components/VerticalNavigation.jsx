import {useState} from "react";

const VerticalNavigation = ({ onSelect, onEnvironmentChange}) => {

    const [activeOption, setActiveOption] = useState('body');
    const [showEnvironments, setShowEnvironments] = useState(false);



    const handleSelect = (option) => {
        setActiveOption(option);
        onSelect(option);
    };

    return (

        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">

            <div className={`${activeOption === 'body' ? 'text-yellow-500' : 'text-gray-300'}`}
                 onClick={() => handleSelect('body')}>
                Body
            </div>
            <div className={`${activeOption === 'details' ? 'text-yellow-500' : 'text-gray-300'}`}
                 onClick={() => handleSelect('details')}>
                Details
            </div>
            <div className={`${activeOption === 'glass' ? 'text-yellow-500' : 'text-gray-300'}`}
                 onClick={() => handleSelect('glass')}>
                Glass
            </div>
            <div className={`${showEnvironments ? 'text-yellow-500' : 'text-gray-300'}`}
                 onClick={() => setShowEnvironments(!showEnvironments)}>
                Environment
            </div>

            {showEnvironments && (
                <div className="flex flex-col space-y-2 ml-4">
                    <button className="py-1 px-3 rounded-full bg-gray-600 hover:bg-gray-500 text-white text-xs"
                            onClick={() => onEnvironmentChange('autoshop')}>Autoshop
                    </button>
                    <button className="py-1 px-3 rounded-full bg-gray-600 hover:bg-gray-500 text-white text-xs"
                            onClick={() => onEnvironmentChange('street')}>Urban
                    </button>
                    <button className="py-1 px-3 rounded-full bg-gray-600 hover:bg-gray-500 text-white text-xs"
                            onClick={() => onEnvironmentChange('sunset')}>Sunset
                    </button>
                </div>
            )}

        </div>

    );
};

export default VerticalNavigation;