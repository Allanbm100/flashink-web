import NavBar from "../../components/nav-bar";
import CategoryItem from "../../components/categoryItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getCategories } from "@/actions/category-actions";

export default async function CategoriesPage() {

    const data: Category[] = await getCategories()

    return (
        <>
            <NavBar active="categories" />

            <main className="flex justify-center">
                <div className="bg-stone-300 my-10 p-4 min-w-2/3">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold">CATEGORIAS</h1>
                        <Button asChild>
                            <Link href="/categories/form">
                                <Plus />
                                Nova Categoria
                            </Link>
                        </Button>
                    </div>

                    {data.map(category => <CategoryItem key={category.id} category={category} />)}
                </div>
            </main>
        </>
    )
}