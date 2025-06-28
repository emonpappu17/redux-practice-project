import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-baseline gap-3 px-5">
            <div className="flex items-center">
                {/* <Logo></Logo> */}
                <span className="font-bold ml-2">Task</span>Master
            </div>

            <Link to={"/"}>Tasks</Link>
            <Link to={"/users"}>Users</Link>

            <div className="ml-auto">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}