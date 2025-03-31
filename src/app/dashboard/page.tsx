import NavBar from "../../components/nav-bar";

export default function DashboardPage() {
    return (
        <>
            <NavBar active="dashboard" />

            <main className="flex justify-center">
                <div className="bg-stone-300 my-10 mx-12 ">
                    <h1>DASHBOARD</h1>
                </div>
            </main>
        </>
    )
}