import TerminalHeader from "../TerminalHeader";
import TerminalMain from "../TerminalMain";

export default function Terminal() {
    return (
        <div className="w-72 md:w-2/5 h-screen flex flex-col items-center justify-center overflow-hidden">
            <TerminalHeader />
            <TerminalMain />
        </div>
    )
}