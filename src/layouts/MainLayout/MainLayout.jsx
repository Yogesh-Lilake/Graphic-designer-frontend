import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f0f0f0] text-black">
            <main className="flex-1 mx-auto w-full">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;