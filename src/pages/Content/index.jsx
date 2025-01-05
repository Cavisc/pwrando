import MatrixRain from "../../components/MatrixRain";
import Terminal from "../../components/Terminal";

export default function Content() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
            <MatrixRain />
            <Terminal />
        </div>
    )
}