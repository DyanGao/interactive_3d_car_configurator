
import CarConfigurator from "./components/CarConfigurator.jsx";


function App() {

    return (
        <div className="flex flex-col h-screen ">

            <div className="absolute top-4 left-4 text-white z-10">
                <h1 className="text-4xl font-bold">FERRARI 458 ITALIA</h1>
                <p className="text-xl">Luxury performance redefined</p>
            </div>

            <div className="flex-1 w-full ">
                <CarConfigurator/>
            </div>

        </div>

    )
}

export default App
