import { Link } from "@inertiajs/react";

export default function Header({ showBackground }) {
    return (
        <div
            className={`w-full fixed z-50 top-[0px] h-[80px] text-xl flex items-center ${
                showBackground && "bg-[#1e2128] shadow-lg text-2xl"
            }`}
        >
            <div className="w-[90%] mx-auto flex items-center justify-between">
                <Link className="font-bold" href="/">
                    Decks & Dices
                </Link>

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
                    <Link href="/shop" className="hover:underline">
                        Shop
                    </Link>
                    <a href="#" className="hover:underline">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
}
