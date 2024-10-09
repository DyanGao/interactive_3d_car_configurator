


import CarConfigurator from "./components/CarConfigurator.jsx";


function App() {


    return (
        <div className="flex flex-col text-white h-screen">


            <div className="absolute top-4 left-4 text-white z-10">
                <h1 className="text-4xl font-bold">FERRARI 458 ITALIA</h1>
                <p className="text-xl">Luxury performance redefined</p>
            </div>

            <div className="flex-1 w-full">
                <CarConfigurator/>
            </div>

            {/*<div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <VerticalNavigation/>
            </div>*/}

            {/*<div className="absolute bottom-8 w-full flex justify-center">
                <ColorPicker/>
            </div>*/}

            {/*<Canvas
                fallback={<div>Sorry no WebGL supported!</div>}
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    position: [-4.25, 1.4, -4.5]
                }}
                className="relative bg-gray-600"
            >
                <CarConfigurator/>
                <CarScene/>
            </Canvas>*/}
        </div>

    )
}

export default App
