import img from "../assets/claudeChefLogo.avif"
export default function Header() {
    return (
        <header className="navContainer flex gap-3.5 justify-center align-middle items-center h-[100px] shadow-md ">
            <img src={img} alt="claude chef logo" className="chefLogo w-[70px]" />
            <span className="logoText text-[30px] tracking-wide">Claude Chef</span>
        </header >
    )
}