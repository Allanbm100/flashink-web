import Link from "next/link";

interface NavBarProps{
    active: "dashboard" | "categories" | "booking"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const activeClass = "border-b-2"

    const links = [
        { label: "dashboard", href: "/dashboard" },
        { label: "categories", href: "/categories" },
        { label: "booking", href: "/booking" },
    ]

    return (
        <nav className="flex justify-between items-center py-6 px-12 bg-primary">
            <h1 className="text-2xl font-black">FLASH INK</h1>
            <ul className="flex gap-16 font-bold text-sm">

                {links.map( link => 
                    <li key={link.label} className={active === link.label ? activeClass : ""}>
                        <Link className="uppercase" href={link.href}>{link.label}</Link>
                    </li>
                    
                )}
            </ul>
            <div className="flex gap-2 items-center p-2 border rounded-md">
                <img className="size-4 rounded-full" src="http://github.com/levmn.png" alt="" />
                <p className="font-bold text-sm">ENTRAR</p>
            </div>
        </nav>
    )
}