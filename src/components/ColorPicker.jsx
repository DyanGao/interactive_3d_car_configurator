
const ColorPicker = ({ selectedPart, bodyColor, detailsColor, glassColor, handleColorChange }) => {

    const bodyColors = ['#ff0000','#020202','#FCCA2C', '#7C8D9F', '#32CD32', '#8A2BE2', '#8C8F96' ]; // Example body colors
    const detailColors = ['#6A1A1C', '#A02020', '#FEDD14', '#1E3764']; // Only 3 colors for details
    const glassColors = ['#F0F3F2', '#545454'];

    let predefinedColors = [];

    if (selectedPart === 'body') {
        predefinedColors = bodyColors;
    } else if (selectedPart === 'details') {
        predefinedColors = detailColors;
    } else if (selectedPart === 'glass') {
        predefinedColors = glassColors;
    }

    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 p-4 bg-black bg-opacity-70 rounded-full">
            {predefinedColors.map((color) => (
                <div
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                        (selectedPart === 'body' && bodyColor === color) ||
                        (selectedPart === 'details' && detailsColor === color) ||
                        (selectedPart === 'glass' && glassColor === color)
                            ? 'border-yellow-500'
                            : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}
export default ColorPicker;