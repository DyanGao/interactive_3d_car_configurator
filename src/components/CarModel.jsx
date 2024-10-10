import React, {useEffect, useRef} from 'react';
import {useGLTF} from "@react-three/drei";
import {MeshPhysicalMaterial, MeshStandardMaterial} from "three";
import {useFrame} from "@react-three/fiber";

const CarModel = ({bodyColor, detailsColor, glassColor}) => {
    const {scene, nodes} = useGLTF('models/ferrari.glb')
    //console.log(scene.children[0])
    const carRef = useRef()


    scene.position.set(0,0,0)

    scene.scale.set(1.2, 1.2, 1.2);

    useEffect(() => {
        if (scene) {
            scene.traverse((child) => {
                if (child.isObject3D) {
                    if (child.name === 'body') {
                        child["material"].color.set(bodyColor);
                    } else if (['rim_fl', 'rim_fr', 'rim_rr', 'rim_rl', 'trim'].includes(child.name)) {
                        child["material"].color.set(detailsColor);
                    } else if (child.name === 'glass') {
                        child["material"].color.set(glassColor);
                    }
                }
            });
        }
    }, [scene, bodyColor, detailsColor, glassColor]);

    nodes['body'].material = new MeshPhysicalMaterial({
        color: bodyColor,
        metalness: 1.0,
        roughness: 0.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
    });

    const detailsMaterial = new MeshStandardMaterial({
        color: detailsColor,
        metalness: 1.0,
        roughness: 0.5,
    });

    nodes['rim_fl'].material = detailsMaterial;
    nodes['rim_fr'].material = detailsMaterial;
    nodes['rim_rr'].material = detailsMaterial;
    nodes['rim_rl'].material = detailsMaterial;
    nodes['trim'].material = detailsMaterial;

    nodes['glass'].material = new MeshPhysicalMaterial({
        color: glassColor,
        metalness: 0.25,
        roughness: 0,
        transmission: 1.0,
    });


   /* useFrame((state) => {
        const t = state.clock.getElapsedTime();
        carRef.current.rotation.y = Math.sin(t / 2) * Math.PI / 24;
    });*/

    /*Animate the Wheels*/
   /* const wheels = [nodes['wheel_fl'], nodes['wheel_fr'], nodes['wheel_rl'], nodes['wheel_rr']];

    useFrame((state, delta) => {
        wheels.forEach((wheel) => (
            wheel.rotation.x += delta * Math.PI * 2
        ));
    });*/

    return (
        <primitive object={scene} ref={carRef} />
    );
};

export default CarModel;