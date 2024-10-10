import React, {Suspense, useEffect, useState} from 'react';
import CarModel from "./CarModel.jsx";
import {CameraControls, Environment, Html, OrbitControls} from "@react-three/drei";
import ColorPicker from "./ColorPicker.jsx";
import {Canvas, useThree} from "@react-three/fiber";
import Ground from "./Ground.jsx";
import VerticalNavigation from "./VerticalNavigation.jsx";
import Loader from "../pages/Loader.jsx";
import CameraController from "./CameraController.jsx";


const CarConfigurator = () => {

    const [bodyColor, setBodyColor] = useState('#ff0000');
    const [detailsColor, setDetailsColor] = useState('#FEDD14');
    const [glassColor, setGlassColor] = useState('#F0F3F2');
    const [selectedPart, setSelectedPart] = useState('body');

    const [environment, setEnvironment] = useState('autoshop'); // Default environment map

    // State to manage camera position and rotation
    const [cameraPosition, setCameraPosition] = useState([-5,3,-5]);
    const [cameraRotation, setCameraRotation] = useState([0, Math.PI/4, 0]);



    // Function to handle environment changes
    const handleEnvironmentChange = (environment) => {
        switch (environment) {
            case 'autoshop':
                setEnvironment('autoshop');
                setCameraPosition([ -5,3,-5]);
                setCameraRotation([0, Math.PI/4 , 0]);
                break;
            case 'street':
                setEnvironment('street');
                setCameraPosition([-3,3,-7]);
                setCameraRotation([0, Math.PI/3, 0]);
                break;
            case 'sunset':
                setEnvironment('sunset');
                setCameraPosition([5,3,-5]);
                setCameraRotation([0, Math.PI / 2, 0]);
                break;
            default:
                break;
        }
    };


    const handleNavigationSelect = (option) => {
        setSelectedPart(option);
    };

    // Function to set color for the selected part
    const handleColorChange = (color) => {
        if (selectedPart === 'body') {
            setBodyColor(color);
        } else if (selectedPart === 'details') {
            setDetailsColor(color);
        } else if (selectedPart === 'glass') {
            setGlassColor(color);
        }
    };
    return (
        <>
            <Canvas
                shadows
                dpr={1}

                className="relative bg-gray-600">

                <OrbitControls
                    target={[0, 0, 0]}
                    enableZoom={true}
                    enableRotate={true}
                    maxDistance={10} maxPolarAngle={Math.PI/2 }
                />

                <Suspense fallback={<Loader/>}>
                    <Environment
                        background
                        /*preset="warehouse"*/
                        files={`./environmentMaps/${environment}.hdr`}

                        ground={{
                            height: 5,
                            radius: 30,
                            scale: 10
                        }}
                    />

                    {/* 3D Car Model */}
                    <CarModel
                        bodyColor={bodyColor}
                        detailsColor={detailsColor}
                        glassColor={glassColor}

                    />

                    <CameraController
                        cameraPosition={cameraPosition}
                        cameraRotation={cameraRotation}
                    />
                </Suspense>
                {/* Glass Floor */}
                {/*<Ground/>*/}


            </Canvas>
            {/* Vertical Navigation Menu */}
            <div className="relative">
                <VerticalNavigation
                    onSelect={handleNavigationSelect}
                    onEnvironmentChange={handleEnvironmentChange}
                />
            </div>

            {/* Color Picker UI */}
            <ColorPicker
                selectedPart={selectedPart}
                bodyColor={bodyColor}
                detailsColor={detailsColor}
                glassColor={glassColor}
                handleColorChange={handleColorChange}
            />


        </>
    );
};

export default CarConfigurator;