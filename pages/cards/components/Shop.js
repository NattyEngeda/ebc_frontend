import Image from "next/image";

const Shop = () => {

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <div className="flex flex-col gap-10">
            {/* Top Section */}
            <div className="flex flex-col gap-2">
                <p className="text-3xl font-Sanchez">Shop</p>
                <hr className="text-black bg-black border border-black rounded-full w-1/3" />
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        loader={myLoader}
                        src="https://a.cdn-hotels.com/gdcs/production159/d1884/32da0d4a-4124-4fce-a82b-0b5df674e9be.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <Image
                        loader={myLoader}
                        src="https://a.cdn-hotels.com/gdcs/production159/d1884/32da0d4a-4124-4fce-a82b-0b5df674e9be.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <Image
                        loader={myLoader}
                        src="https://a.cdn-hotels.com/gdcs/production159/d1884/32da0d4a-4124-4fce-a82b-0b5df674e9be.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Shop;