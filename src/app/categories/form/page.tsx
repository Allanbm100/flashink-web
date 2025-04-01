"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function CategoryFormPage() {
    const initialState = {
        values: {
            name: "",
            icon: ""
        },
        errors: {
            name: "",
            icon: ""
        }
    }

    const [state, formAction, pending] = useActionState(createCategory, initialState)
    return (
        <>
            <NavBar active="categories" />

            <main className="flex justify-center">
                <div className="bg-stone-300 my-10 p-4 min-w-2/3 mb-4">
                    <h1 className="text-xl font-semibold">Cadastrar Categorias</h1>

                    <form action={formAction} className="space-y-4">
                        <div>
                            <Input name="name" placeholder="Nome da Categoria" defaultValue={state?.values.name} />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>
                        <div>
                            <Input name="icon" placeholder="Nome do ícone" defaultValue={state?.values.icon} />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-between">
                            <Button variant={"outline"} asChild>
                                <Link href="/categories">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>
                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}