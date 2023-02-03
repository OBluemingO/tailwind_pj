import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BsHandbag } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { useRef, useState } from "react";
import clsx from "clsx";

const NavbarHome = () => {
    const [searchItem, setSearchItem] = useState(null)

    const inputSearchRef = useRef()

    const handleSearchItem = () => {
        const containerSearch = inputSearchRef.current 
        if(!searchItem) setSearchItem(prev => !prev)

        document.body.addEventListener('click', (e) => {
            if(!containerSearch.contains(e.target)) {
                setSearchItem(false)
                containerSearch.firstChild.value = ''
            }
        })
    }

    return (
        <div
            className="flex flex-col items-center justify-between fixed z-[1000] top-0
            max-h-[113px] h-screen sm:h-auto xl:h-[16%] bg-[#F1F1F1] pt-[31px] 
            left-[50%] translate-x-[-50%] w-full
        "
        >
            <div className="
                sm:px-10
                xl:px-0 xl:max-w-[1320px] xl:max-h-[53px] 
                flex items-center w-full
                justify-between border-b-[1px] border-[#E3E3E3] pb-3
                ">
                <span className={'cursor-pointer relative'} onClick={handleSearchItem}>
                    <AiOutlineSearch size={25} className={clsx('transition-all duration-500',{'opacity-0 -translate-x-5': searchItem},{'opacity-100 -translate-x-0': !searchItem})} />
                    
                    <div ref={inputSearchRef} className={clsx('absolute top-0 transition-all duration-500',{'opacity-0 -translate-x-5': !searchItem},{'opacity-100 -translate-x-0': searchItem})}>
                        <input type="text" placeholder="seach product ...." name="search" className="px-2 py-1 rounded outline-0" />
                    </div>
                </span>
                <span className="text-[28px] absolute left-[50%] translate-x-[-50%]">CORAL</span>
                <div className=" xl:flex xl:gap-[24px]">
                    <div className="capitalize items-center gap-2 cursor-pointer sm:hidden xl:flex"><VscAccount size={30} /> account</div>
                    <div className="capitalize items-center gap-2 cursor-pointer sm:hidden xl:flex"> <BsHandbag size={30} /> Shoping</div>
                    <div className="capitalize items-center gap-2 cursor-pointer sm:flex xl:hidden"> <FiMenu size={30} /> </div>
                </div>
            </div>
            <div className="
                sm:opacity-0 sm:hidden 
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
