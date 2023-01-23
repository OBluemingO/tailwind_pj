const ProductCard = ({
    title,
    category,
    description,
    price,
    images,
    ...props
}) => {
    return (
        <div className="h-full xl:max-h-[477px] md:max-h-[250px] sm:max-h-[250px] sm:w-[47.5%] md:w-[24%] bg-white">
            <div className="overflow-hidden xl:max-h-[400px] sm:max-h-[200px] sm:h-[80%] xl:h-[84%] w-full">
                <img
                    src={images}
                    alt={description}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-2 xl:max-h-[77px]  sm:h-[20%] xl:h-[16%] flex flex-col justify-center">
                <h1 className="sm:text-[13px] md:text-[13px] xl:text-base font-bold">{title}</h1>
                <div className="flex justify-between">
                    <p className="text-stone-500 sm:text-[12px] xl:text-base">{category?.id == 3 ? 'chair' : category?.name}</p>
                    <p className="font-bold sm:text-[12px] xl:text-base">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
