import React from "react";
import { AiFillShopping } from "react-icons/ai";

const IconCard = ({ head, body, icon, ...props }) => {
    return (
        <div className="h-full w-[200px] inline-block">
            <div className="flex xl:gap-4 h-full">
                <div className="grid place-items-center xl:ml-4">{icon}</div>
                <div className=" flex justify-center flex-col">
                    <h1 className="text-2xl text-black mb-0">{head}</h1>
                    <p className="text-xs text-stone-400">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default IconCard;
