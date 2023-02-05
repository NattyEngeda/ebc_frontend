import Image from "next/image";
import Link from "next/link";

// Images
import img1 from '../../../../assets/images/girma/photos/1.jpg';
import img2 from '../../../../assets/images/girma/photos/2.jpg';
import img3 from '../../../../assets/images/girma/photos/3.jpg';
import img4 from '../../../../assets/images/girma/photos/4.jpg';
import img5 from '../../../../assets/images/girma/photos/5.jpg';
import img6 from '../../../../assets/images/girma/photos/6.jpg';

const Imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
];
const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}



const Gallery = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Gallery</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="min-h-[30vh] grid grid-cols-2 md:grid-cols-3 gap-5 px-1 md:px-20">
                {
                    Imgs.map((items) => (
                        <div 
                        key={items.id}
                        className="w-full h-44">
                            <Image
                                className="w-full h-full"
                                loader={myLoader}
                                src={items.img}
                                alt="Placeholder"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="px-2 md:px-20 w-full flex flex-row items-cener justify-end">
                <Link
                    href='/cards/girma/gallery'
                    className="text-xl font-bolc text-red-700"
                >{'See more >>'}</Link>
            </div>
        </section>
    );
}

export default Gallery;