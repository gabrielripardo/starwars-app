export default function Footer() {
    return (
        <footer className="flex h-24 w-full items-center justify-center border-t">
            <a
                className="flex items-center justify-center"
                href="https://www.gabrielripardo.com.br"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Gabriel Ripardo
                {/* <img
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="ml-2 h-4"
                    width={100}
                    height={100}
                /> */}
            </a>
        </footer>
    )
}
