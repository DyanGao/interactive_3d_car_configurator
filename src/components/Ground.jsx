
const Ground = () => {
    return (
        <>
            <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshPhysicalMaterial
                    color="white"
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.1}
                    transparent={true}
                    roghness={0}
                    transmission={0.9}
                    thickness={0.1}
                    ior={1.5}
                    opacity={0.4}
                    reflectivity={1.0}
                />
            </mesh>
        </>
    );
};

export default Ground;