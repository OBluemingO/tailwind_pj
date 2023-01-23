import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BsHandbag } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
const NavbarHome = () => {
    return (
        <div
            className="flex flex-col items-center justify-between fixed z-[1000] top-0
            max-h-[113px] h-screen md:h-auto xl:h-[16%] bg-[#F1F1F1] pt-[31px] 
          left-[50%] translate-x-[-50%] w-full
        "
        >
            <div className="
                md:px-10
                xl:px-0 xl:max-w-[1320px] xl:max-h-[53px] 
                flex items-center w-full
                justify-between border-b-[1px] border-[#E3E3E3] pb-3
                ">
                <span className="cursor-pointer">
                    <AiOutlineSearch size={25} />
                </span>
                <span className="text-[28px] absolute left-[50%] translate-x-[-50%]">CORAL</span>
                <div className=" xl:flex xl:gap-[24px]">
                    <div className="capitalize items-center gap-2 cursor-pointer md:hidden xl:flex"><VscAccount size={30} /> account</div>
                    <div className="capitalize items-center gap-2 cursor-pointer md:hidden xl:flex"> <BsHandbag size={30} /> Shoping</div>
                    <div className="capitalize items-center gap-2 cursor-pointer md:flex xl:hidden"> <FiMenu size={30} /> </div>
                </div>
            </div>
            <div className="
                md:opacity-0 md:hidden 
                xl:text-base xl:opacity-100 xl:flex
                xl:w-full xl:justify-between xl:my-auto xl:max-w-[1320px]
                ">
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">Craft Supplies & Tools</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">searchClothing & Shoes</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">search Home & Living</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">searchWedding & Party</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">searchToys & Entertainment</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">searchArt & Collectibles</span>
                <span className="cursor-pointer hover:bg-[#1E2832] hover:text-white px-1 rounded">searchCraft Supplies & Tools</span>
            </div>
        </div>
    );
};

export default NavbarHome;
