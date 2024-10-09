import React, {Suspense, useEffect, useState} from 'react';
import CarModel from "./CarModel.jsx";
import {CameraControls, Environment, Html, OrbitControls} from "@react-three/drei";
import ColorPicker from "./ColorPicker.jsx";
import CarScene from "./CarScene.jsx";
import * as THREE from 'three';
import {Canvas, useThree} from "@react-three/fiber";
import Ground from "./Ground.jsx";
import VerticalNavigation from "./VerticalNavigation.jsx";
import Loader from "../pages/Loader.jsx";


const CarConfigurator = () => {

    const [bodyColor, setBodyColor] = useState('#ff0000');
    const [detailsColor, setDetailsColor] = useState('#FEDD14');
    const [glassColor, setGlassColor] = useState('#F0F3F2');
    const [selectedPart, setSelectedPart] = useState('body');


    const [environment, setEnvironment] = useState('autoshop'); // Default environment map



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
                    camera={{
                            fov: 45,
                            near: 0.1,
                            far: 100,
                            position: [-4.25, 1.4, -4.5]
                        }}
                    className="relative bg-gray-600">
                <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.5}/>
                <directionalLight castShadow position={[1, 2, 3]} intensity={5.5} shadow-normalBias={0.04}/>
                <OrbitControls enableZoom={true} enableRotate={true} />
                <Environment
                    background
                    /*preset="warehouse"*/
                    files={`./environmentMaps/${environment}.hdr`}
                />

                {/* 3D Car Model */}
                <CarModel bodyColor={bodyColor} detailsColor={detailsColor} glassColor={glassColor}/>


                {/* Glass Floor */}
                <Ground/>
                </Suspense>
            </Canvas>

            {/* Vertical Navigation Menu */}
            <div className="relative ">
                <VerticalNavigation
                    onSelect={handleNavigationSelect}
                    setEnvironment={setEnvironment}
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