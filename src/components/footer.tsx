

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-6 px-12 bg-foreground">
            <div>
                <h1 className="text-4xl text-primary font-bold">FLASH INK</h1>
                <p className="text-white text-xs">Todos os direitos reservados © 2025</p>
            </div>
            <ul className="text-white text-right items-end justify-end">
                <li className="flex">
                    <h3>@flashink</h3>
                    {/* <Instagram /> */}
                </li>
                <li className="flex">
                    <h3>+55 11 12345-6789</h3>
                    {/* <Smartphone /> */}
                </li>
                <li className="flex">
                    <h3>contato.flashink@gmail.com</h3>
                    {/* <Mail /> */}
                </li>
            </ul>
        </footer>
    )
}