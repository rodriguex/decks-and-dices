export default function ExploreCards() {
    return (
        <div className="mt-40">
            <h3 className="text-white font-bold text-4xl text-center nice-font">
                Explore Game Categories
            </h3>

            <div className="mt-16 w-[85%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/arcade.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Arcade Classics
                    </span>
                    <span className="text-[#BDC1CAFF]">78 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/console.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Console Adventures
                    </span>
                    <span className="text-[#BDC1CAFF]">50 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/rpg.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Retro RPGs
                    </span>
                    <span className="text-[#BDC1CAFF]">28 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/racing.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Sports & Racing
                    </span>
                    <span className="text-[#BDC1CAFF]">120 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/scifi.webp) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Sci-Fi Shooters
                    </span>
                    <span className="text-[#BDC1CAFF]">228 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/puzzle.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Puzzle & Strategy
                    </span>
                    <span className="text-[#BDC1CAFF]">58 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/platform.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Platformers
                    </span>
                    <span className="text-[#BDC1CAFF]">18 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/fighting.png) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Fighting Games
                    </span>
                    <span className="text-[#BDC1CAFF]">100 Games</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div
                        className="w-[80px] h-[80px] bg-gray-400"
                        style={{
                            background: `url(/images/cards.webp) center center / cover no-repeat`,
                        }}
                    ></div>
                    <span className="text-white font-bold text-2xl">
                        Cards Games
                    </span>
                    <span className="text-[#BDC1CAFF]">5 Games</span>
                </div>
            </div>
        </div>
    );
}
