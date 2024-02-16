import { Outlet } from "react-router-dom";
import { TopBar } from "../navigation/components/TopBar";

export function Page() {
    return (
        <div>
            <TopBar />
            <Outlet></Outlet>
        </div>
    );
}
