export default function InfoCards() {
    return (
        <div className="w-[85%] lg:w-[70%] mx-auto mt-20 bg-[#171A1FFF] flex flex-col">
            <h2 className="text-white text-4xl font-bold text-center nice-font">
                Unlock Endless Fun
            </h2>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:h-[300px] flex items-center justify-center flex-col gap-3 p-6 rounded-lg bg-[#1E2128FF] shadow-lg">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#241700FF] flex items-center justify-center p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="#D68B00FF"
                            viewBox="0 0 256 256"
                        >
                            <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                        </svg>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="#D68B00FF"
                            viewBox="0 0 256 256"
                        >
                            <path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>
                        </svg>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="#D68B00FF"
                            viewBox="0 0 256 256"
                        >
                            <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
                        </svg>
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
