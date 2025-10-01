import Header from "@/Components/Header";

export default function Shop() {
    return (
        <div className="w-full flex flex-col">
            <Header showBackground={true} />

            <div className="mt-36 w-[90%] mx-auto">
                <h1 className="font-bold text-4xl text-center">Most popular</h1>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 pb-20">
                    <div className="flex flex-col border border-gray-800 rounded-lg items-center gap-8">
                        <div
                            className="w-[150px] h-[150px] bg-gray-400"
                            style={{
                                background: `url(/images/uno.avif) center center / cover no-repeat`,
                            }}
                        ></div>
                        <div className="flex flex-col gap-2 text-xl">
                            <span>Yu-Gi-Oh! 50 cards package</span>
                            <span className="font-bold">$20.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
