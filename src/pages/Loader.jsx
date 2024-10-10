
import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress()

    return progress < 100 ? (
        <Html center>
            <div className="flex flex-col items-center justify-center">
                {/* Loading Text */}
                <p className="text-white text-xl font-semibold">Loading...</p>

                {/* Progress Bar */}
                <div className="w-48 h-2 bg-gray-800 rounded-full mt-4">
                    <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <p className="text-white text-sm font-medium mt-2">{progress.toFixed(0)}%</p>
            </div>
        </Html>
    ): null;
};

export default Loader;