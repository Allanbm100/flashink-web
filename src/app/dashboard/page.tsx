import Footer from "@/components/footer";
import { Github } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import NavBar from "../../components/nav-bar";


export default function DashboardPage() {
    return (
        <>
            <NavBar active="dashboard" />

            <main className="flex-row">
                <section className="bg-white w-full flex">
                    <Image
                        src={"/wallpaper-section.png"}
                        width={1920}
                        height={1400}
                        className="w-1/2"
                        alt="Walpaper section 1"
                    />
                    <div className="w-1/2 px-12 py-10">
                        <h1 className="uppercase font-bold text-5xl/tight text-right tracking-wider">seu estilo,<br />sua pele,<br />sua história.</h1>
                        <p className="text-right pt-2 text-xl">Tatuagens flash para quem vive o agora.<br />Escolha, marque e viva!</p>
                        <ul className="flex justify-end gap-10 pt-5">
                            <li>
                                <Image src={"/coracaoTattoo.png"} width={180} height={180} alt={"Coracao"} />
                            </li>
                            <li>
                                <Image src={"/ancoraTattoo.png"} width={180} height={180} alt={"Ancora"} />
                            </li>
                            <li>
                                <Image src={"/passaroTattoo.png"} width={180} height={180} alt={"Passaro"} />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="bg-stone-300 w-full flex-row px-12 py-10">
                    <h1 className="uppercase font-bold text-5xl/tight text-center tracking-wider">idealizadores.</h1>
                    <ul className="flex justify-center gap-10 pt-10">
                        <li>
                            <Image src={"/levi.png"} width={220} height={220} alt={"levi"} className="rounded-3xl" />
                            <div className="mt-2 text-center">
                                <h2 className="text-2xl font-bold">Levi Magni</h2>
                                <h3 className="text-lg">RM98276</h3>
                                <Link className="flex justify-center mt-2" href={"https://github.com/levmn"}><Github size={30} /></Link>
                            </div>
                        </li>
                        <li>
                            <Image src={"/allan.png"} width={220} height={220} alt={"allan"} className="rounded-3xl" />
                            <div className="mt-2 text-center">
                                <h2 className="text-2xl font-bold">Allan Moreira</h2>
                                <h3 className="text-lg">RM558948</h3>
                                <Link className="flex justify-center mt-2" href={"https://github.com/allanbm100"}><Github size={30} /></Link>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    )
}