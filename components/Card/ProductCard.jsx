const ProductCard = ({
    title,
    category,
    description,
    price,
    images,
    ...props
}) => {
    return (
        <div className="h-full xl:max-h-[477px] xl:w-[24%] bg-white">
            <div className="overflow-hidden xl:max-h-[400px] xl:h-[84%] w-full">
                <img
                    src={images}
                    alt={title + description}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-2 xl:max-h-[77px] xl:h-[16%] flex flex-col justify-center">
                <h1 className="font-bold">{title}</h1>
                <div className="flex justify-between">
                    <p className="text-stone-500">{category?.id == 3 ? 'chair' : category?.name}</p>
                    <p className="font-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
