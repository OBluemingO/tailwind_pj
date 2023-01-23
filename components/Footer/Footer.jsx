import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useState, useEffect, useCallback } from "react";

const Footer = () => {
    const [categories, setCateGories] = useState([]);

    const fetchCategory = useCallback(async () => {
        const dataRes = await fetch(
            `https://api.escuelajs.co/api/v1/categories`
        );
        const dataJson = await dataRes.json();
        setCateGories(dataJson);
    }, []);
    
    useEffect(() => {
        fetchCategory();
    }, [fetchCategory]);

    return (
        <>
            <div className="sm:pb-10 md:pb-0 xl:max-w-[1320px] md:h-[200px] xl:h-[211px] mx-auto sm:mt-[120px] xl:mt-[140px] flex sm:justify-center md:justify-between xl:gap-[20px] sm:px-5 md:px-10 xl:px-0">
                <div className="sm:max-w-[175px] md:max-w-[367px]">
                    <h4 className="uppercase text-2xl">coral</h4>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <div className="flex items-center gap-[10px]">
                        <div className="inline-flex w-[20px]">
                            <BsFacebook size={20} color={"#1E2832"} />
                        </div>
                        <div className="inline-flex w-[20px]">
                            <BsLinkedin size={20} color={"#1E2832"} />
                        </div>
                        <div className="inline-flex w-[20px]">
                            <RiInstagramFill size={20} color={"#1E2832"} />
                        </div>
                    </div>
                </div>
                <ul className="sm:hidden md:block">
                    <li className="font-bold mb-5">Category</li>
                    {categories.length > 0
                        ? categories.slice(0,5).map((el) => (
                              <li key={`footer-list-${el.id}`}>
                                  {el.id == 3 ? "chair" : el.name}
                              </li>
                          ))
                        : null}
                </ul>
                <ul>
                    <li className="font-bold mb-5">ABOUT US</li>
                    <li>Our Producers</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul className="sm:hidden xl:block">
                    <li className="font-bold mb-5">CUSTOMER SERVICES</li>
                    <li>Contact Us</li>
                    <li>Track Your Order</li>
                    <li>Product Care & Repair</li>
                    <li>Book an Appointment</li>
                    <li>Shipping & Returns</li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
