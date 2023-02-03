import React from "react";
import { CiSettings } from "react-icons/ci";

const NavbarSliceBar = () => {
    return (
        <div className="h-screen max-w-[500px] w-[50%] fixed z-[3000] right-0 bg-stone-600">
            <ul className="h-full w-full">
                <div className="group mt-10 h-[10%] bg-white flex items-center justify-around">
                    <div className="hero bg-sky-700 w-[25%] h-[80%] rounded-full overflow-hidden">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/167/167750.png"
                            alt="https://cdn-icons-png.flaticon.com/512/167/167750.png"
                        />
                    </div>
                    <div className="info-person h-[80%] w-[50%] flex justify-between items-center">
                        <div className="name text-base">
                            <div className="fullname font-bold">
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className="detail text-stone-500">
                                Lorem, ipsum dolor.
                            </div>
                            <div>
                                last-date-login: xx-xx-xxxx
                            </div>
                        </div>
                        <div className="setting my-auto">
                            <CiSettings size={25} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 h-full lg:max-h-[56px] w-full group mt-10 bg-green-200">
                    <div className="h-full w-[20%] bg-black">

                    </div>
                    <span className="group-odd:bg-yellow-200 group-even:bg-white cursor-pointer hover:bg-[#1E2832] hover:text-white px-1  border-b-2 ">
                        Collection Product
                    </span>
                </div>
                
                {/* <div className="group p-4">
                    <li className="group-odd:bg-green-200 group-even:bg-white cursor-pointer hover:bg-[#1E2832] hover:text-white px-1  border-b-2 ">
                        search Home & Living
                    </li>
                </div>
                <div className="group p-4">
                    <li className="group-odd:bg-green-200 group-even:bg-white cursor-pointer hover:bg-[#1E2832] hover:text-white px-1  border-b-2 ">
                        searchWedding & Party
                    </li>
                </div>
                <div className="group p-4">
                    <li className="group-odd:bg-green-200 group-even:bg-white cursor-pointer hover:bg-[#1E2832] hover:text-white px-1  border-b-2 ">
                        searchToys & Entertainment
                    </li>
                </div>
                <div className="group p-4">
                    <li className="group-odd:bg-green-200 group-even:bg-white cursor-pointer hover:bg-[#1E2832] hover:text-white px-1  border-b-2 ">
                        searchArt & Collectibles
                    </li>
                </div> */}
            </ul>
        </div>
    );
};

export default NavbarSliceBar;
