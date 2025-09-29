import {
    InstagramLogoIcon,
    XLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <div className="flex flex-col gap-10 p-10">
            <div className="flex items-center justify-between pb-10 border-b border-gray-700">
                <span className="font-bold text-2xl">Decks & Dices</span>
                <div className="flex items-center gap-3">
                    <span>Company</span>
                    <span>Legal</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span>© 2025 Decks & Dices. All rights reserved.</span>
                <div className="flex items-center gap-3">
                    <XLogoIcon size={30} />
                    <InstagramLogoIcon size={30} />
                    <YoutubeLogoIcon size={30} />
                </div>
            </div>
        </div>
    );
}
