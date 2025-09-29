import { ChatIcon, HeartIcon, ShareNetworkIcon } from "@phosphor-icons/react";

export default function Community() {
    return (
        <div className="mt-40 w-[85%] lg:w-[70%] mx-auto flex flex-col">
            <h4 className="font-bold text-4xl text-center nice-font">
                Community
            </h4>

            <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col bg-[#1E2128FF] p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
                        <div className="flex flex-col">
                            <span>PixelPrincess88</span>
                            <span>2 hours ago</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 pb-3 border-b border-gray-700">
                        <span className="font-bold text-xl">
                            Best co-op games for a weekend session?
                        </span>
                        <span>
                            Looking for some awesome vintage co-op games to play
                            with friends this weekend. Any hidden gems on SNES
                            or Genesis?
                        </span>
                        <span className="w-fit bg-[#D68B00FF] px-2 py-1 text-sm rounded-xl font-bold">
                            Co-op Gaming
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <HeartIcon size={25} />
                            <span>30</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ChatIcon size={25} />
                            <span>18</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ShareNetworkIcon size={25} />
                            <span>7</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#1E2128FF] p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
                        <div className="flex flex-col">
                            <span>RetroRacerGuy</span>
                            <span>4 hours ago</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 pb-3 border-b border-gray-700">
                        <span className="font-bold text-xl">
                            Challenge: High score on Mario Kart 64 Rainbow Road!
                        </span>
                        <span>
                            Who's up for a challenge? Post your best Rainbow
                            Road times! I just hit 1:58:34 and I'm feeling good
                            about it!
                        </span>
                        <span className="w-fit bg-[#D68B00FF] px-2 py-1 text-sm rounded-xl font-bold">
                            High Score
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <HeartIcon size={25} />
                            <span>22</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ChatIcon size={25} />
                            <span>12</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ShareNetworkIcon size={25} />
                            <span>5</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#1E2128FF] p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
                        <div className="flex flex-col">
                            <span>ArcadeArchitect</span>
                            <span>1 day ago</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 pb-3 border-b border-gray-700">
                        <span className="font-bold text-xl">
                            Restoring a classic Asteroids cabinet
                        </span>
                        <span>
                            Just got my hands on an old Asteroids cabinet.
                            Planning a full restoration. Any tips on finding
                            original parts?
                        </span>
                        <span className="w-fit bg-[#D68B00FF] px-2 py-1 text-sm rounded-xl font-bold">
                            Restoration Project
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <HeartIcon size={25} />
                            <span>50</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ChatIcon size={25} />
                            <span>20</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ShareNetworkIcon size={25} />
                            <span>10</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#1E2128FF] p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
                        <div className="flex flex-col">
                            <span>JoystickJunkie</span>
                            <span>3 days ago</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 pb-3 border-b border-gray-700">
                        <span className="font-bold text-xl">
                            New arrivals in the Decks & Dices Play shop!
                        </span>
                        <span>
                            Just browsed the new inventory. Scored a pristine
                            copy of Chrono Trigger! What's everyone else eyeing?
                        </span>
                        <span className="w-fit bg-[#D68B00FF] px-2 py-1 text-sm rounded-xl font-bold">
                            Shop Talk
                        </span>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <HeartIcon size={25} />
                            <span>100</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ChatIcon size={25} />
                            <span>40</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <ShareNetworkIcon size={25} />
                            <span>25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
