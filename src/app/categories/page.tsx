import NavBar from "../../../nav-bar";

export default function CategoriesPage() {
    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center">
                <div className="bg-stone-300 my-10 p-4 min-w-1/3">
                    <h1>CATEGORIAS</h1>
                </div>
            </main>
        </>
    )
}