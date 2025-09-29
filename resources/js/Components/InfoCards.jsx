import {
    GameControllerIcon,
    ShoppingCartIcon,
    UserCircleIcon,
} from "@phosphor-icons/react";

export default function InfoCards() {
    return (
        <div className="w-[85%] lg:w-[70%] mx-auto mt-20 bg-[#171A1FFF] flex flex-col">
            <h2 className="text-white text-4xl font-bold text-center nice-font">
                Unlock Endless Fun
            </h2>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:h-[300px] flex items-center justify-center flex-col gap-3 p-6 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#241700FF] flex items-center justify-center p-1">
                        <UserCircleIcon size={40} fill="#D68B00FF" />
                    </div>
                    <span className="block mt-2 font-bold text-2xl text-white text-center">
                        Connect with Fellow Gamers
                    </span>
                    <p className="text-gray-300 text-center">
                        Find new friends who share your passion for retro
                        adventures and competitive fun. Share tips, strategies,
                        and memorable moments.
                    </p>
                    <a href="#" className="text-blue-700 underline">
                        Join the community
                    </a>
                </div>

                <div className="lg:h-[300px] flex items-center justify-center flex-col gap-3 p-6 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#241700FF] flex items-center justify-center p-1">
                        <GameControllerIcon size={40} fill="#D68B00FF" />
                    </div>
                    <span className="block mt-2 font-bold text-2xl text-white text-center">
                        Discover Timeless Titles
                    </span>
                    <p className="text-gray-300 text-center">
                        Explore a vast library of classic arcade, console, and
                        PC games. Relive your favorites or find hidden gems.
                    </p>
                    <a href="#" className="text-blue-700 underline">
                        Browse Games
                    </a>
                </div>

                <div className="lg:h-[300px] flex items-center justify-center flex-col gap-3 p-6 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#241700FF] flex items-center justify-center p-1">
                        <ShoppingCartIcon size={40} fill="#D68B00FF" />
                    </div>
                    <span className="block mt-2 font-bold text-2xl text-white text-center">
                        Gear Up for Fun
                    </span>
                    <p className="text-gray-300 text-center">
                        Shop for vintage consoles, rare game cartridges, and
                        unique merchandise. Everything you need to complete your
                        retro collection.
                    </p>
                    <a href="#" className="text-blue-700 underline">
                        Start Shopping
                    </a>
                </div>
            </div>
        </div>
    );
}
