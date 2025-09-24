export default function Header() {
    return (
        <div className="w-full h-[100px] fixed z-50 top-0 px-3 bg-[#000000FF] text-white flex items-center justify-between text-lg font-bold">
            <img src="/images/logo.webp" alt="Logo" className="w-[100px]" />

            <div className="flex items-center gap-6">
                <a href="#">Games</a>
                <a href="#">Community</a>
                <a href="#">Events</a>
                <a href="#">About</a>
            </div>

            <div className="flex items-center gap-4">
                <span>Shop</span>
                <span>Log in</span>
            </div>
        </div>
    );
}
