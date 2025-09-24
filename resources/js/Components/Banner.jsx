export default function Banner() {
    return (
        <div className="mt-[100px] relative flex justify-center">
            <div
                className="w-full bg-cover"
                style={{
                    background:
                        'url("/images/banner.jpeg") center center no-repeat',
                    height: "calc(100vh - 100px)",
                }}
            ></div>

            <div className="absolute top-0 w-[50%] h-full flex flex-col items-center justify-center gap-3 text-white uppercase">
                <h1 className="text-7xl font-extrabold text-center">
                    Relive the glory days of gaming together!
                </h1>
                <span className="text-2xl font-bold text-center block mt-4">
                    Join a vibrant community passionate about classic games.
                    Connect, compete and create unforgettable memories.
                </span>
            </div>
        </div>
    );
}
