export default function Header({ showBackground }) {
    return (
        <div
            className={`w-full fixed z-50 top-[0px] px-8 h-[80px] flex items-center justify-between text-xl ${
                showBackground && "bg-[#1e2128] shadow-lg text-2xl"
            }`}
        >
            <span className="font-bold">Decks & Dices</span>

            <div className="flex items-center gap-6">
                <a href="#" className="hover:underline">
                    Games
                </a>
                <a href="#" className="hover:underline">
                    Community
                </a>
                <a href="#" className="hover:underline">
                    Events
                </a>
                <a href="#" className="hover:underline">
                    About
                </a>
            </div>

            <div className="flex items-center gap-4">
                <a href="#" className="hover:underline">
                    Shop
                </a>
                <a href="#" className="hover:underline">
                    Log in
                </a>
            </div>
        </div>
    );
}
