import React, {Suspense, useState} from 'react';
import CarModel from "./CarModel.jsx";
import {Environment, Html, OrbitControls} from "@react-three/drei";
import ColorPicker from "./ColorPicker.jsx";
import CarScene from "./CarScene.jsx";
import * as THREE from 'three';
import {Canvas} from "@react-three/fiber";
import Ground from "./Ground.jsx";
import VerticalNavigation from "./VerticalNavigation.jsx";

const CarConfigurator = () => {

    const [bodyColor, setBodyColor] = useState('#ff0000');
    const [detailsColor, setDetailsColor] = useState('#FEDD14');
    const [glassColor, setGlassColor] = useState('#F0F3F2');
    const [selectedPart, setSelectedPart] = useState('body');



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
                fallback={<div>Sorry no WebGL supported!</div>}
                    shadows
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 100,
                        position: [-4.25, 1.4, -4.5]
                    }}
                    className="relative bg-gray-600">
                <ambientLight intensity={0.5}/>
                <directionalLight castShadow position={[1, 2, 3]} intensity={5.5} shadow-normalBias={0.04}/>
                <OrbitControls makeDefault/>
                <Environment
                    /*background*/
                    preset="warehouse"
                    /*files="./environmentMaps/autoshop_01_2k.hdr"*/
                />

                {/* 3D Car Model */}
                <CarModel bodyColor={bodyColor} detailsColor={detailsColor} glassColor={glassColor}/>

                {/* Glass Floor */}
                <Ground/>
            </Canvas>

            {/* Vertical Navigation Menu */}
            <div className="relative ">
                <VerticalNavigation onSelect={handleNavigationSelect}/>
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