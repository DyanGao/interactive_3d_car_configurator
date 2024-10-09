import {Model} from "./Model.jsx";
import {Suspense} from "react";
import {Environment, OrbitControls} from "@react-three/drei";
import CarModel from "./CarModel.jsx";
import Ground from "./Ground.jsx";

const CarScene = () => {
    //const model = useGLTF('./models/ferrari.glb')
    //console.log(model.scene)
    return (
        <>
            <OrbitControls makeDefault/>
            <directionalLight castShadow position={[1, 2, 3]} intensity={5.5} shadow-normalBias={0.04}/>
            <ambientLight intensity={0.5}/>
            <Environment preset="warehouse"/>
            <Suspense>
               {/* <Model position-y={-1}/>*/}
                <CarModel position-y={-1}/>
            </Suspense>
           <Ground position-y={6}/>
        </>
    );
};

export default CarScene;