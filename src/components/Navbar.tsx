export default function Navbar() {
    return (
        <>
        <header className="onscroll:bg-indigo-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-green-300">
                <div className="title-font font-medium  mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Simon Lowe
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#contact" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Work with me
                    </a>
                </nav>
            </div>
        </header>
        </>
    )
}