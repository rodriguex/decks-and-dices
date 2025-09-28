export default function Banner() {
    return (
        <div className="relative flex justify-center">
            <div
                className="w-full bg-cover"
                style={{
                    background:
                        'url("/images/banner.jpg") center center no-repeat',
                    height: "calc(100vh)",
                }}
            ></div>

            <div className="absolute bg-black/70 top-0 w-[100%] h-full flex flex-col items-center justify-center gap-3 text-white">
                <h1 className="text-7xl font-extrabold text-center w-[50%] nice-font">
                    Relive the glory days of gaming together!
                </h1>
                <span className="text-4xl text-center block mt-4 w-[50%] text-[#bfc0c0]">
                    Join a vibrant community passionate about classic games.
                    Connect, compete and create unforgettable memories.
                </span>
            </div>
        </div>
    );
}
