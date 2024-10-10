import React from 'react';

import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const CameraController = ({ cameraPosition, cameraRotation }) => {
    const { camera } = useThree(); // Access the camera inside Canvas

    useEffect(() => {
        camera.fov = 40;
        camera.near = 0.1;
        camera.far = 100;

        camera.updateProjectionMatrix();

        // Update the camera position and rotation when props change
        camera.position.set(...cameraPosition);
        camera.rotation.set(...cameraRotation);
    }, [cameraPosition, cameraRotation, camera]);

    return null;
};

export default CameraController;