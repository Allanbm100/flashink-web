import NavBar from "../../components/nav-bar";

export default function BookingPage() {
    return (
        <>
            <NavBar active="booking" />

            <main className="flex justify-center">
                <div className="bg-stone-300 my-10 mx-12 ">
                    <h1>RESERVAS</h1>
                </div>
            </main>
        </>
    )
}