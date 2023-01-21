import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import {BsHandbag} from 'react-icons/bs'
const NavbarHome = () => {
    return (
        <div
            className="flex flex-col items-center justify-between fixed z-[1000] top-0
          max-h-[113px] h-screen lg:h-[16%] bg-[#F1F1F1] pt-[31px] 
          left-[50%] translate-x-[-50%] w-full
        "
        >
            <div className="xl:max-w-[1320px] flex items-center w-full xl:max-h-[53px] justify-between border-b-[1px] border-[#E3E3E3] xl:pb-3">
                <span className="cursor-pointer">
                    <AiOutlineSearch size={25} />
                </span>
                <span className="xl:text-[28px] absolute left-[50%] translate-x-[-50%]">CORAL</span>
                <div className="flex gap-[24px]">
                    <div className="capitalize flex items-center gap-2 cursor-pointer"><VscAccount size={30} /> account</div>
                    <div className="capitalize flex items-center gap-2 cursor-pointer"> <BsHandbag size={30} /> Shoping</div>
                </div>
            </div>
            <div className="flex w-full justify-between my-auto max-w-[1320px]">
                <span className="">Craft Supplies & Tools</span>
                <span className="">searchClothing & Shoes</span>
                <span className="">search Home & Living</span>
                <span className="">searchWedding & Party</span>
                <span className="">searchToys & Entertainment</span>
                <span className="">searchArt & Collectibles</span>
                <span className="">searchCraft Supplies & Tools</span>
            </div>
        </div>
    );
};

export default NavbarHome;
