import Image from "next/image";

// Images
import img1 from '../../../assets/images/work1.png';
import img2 from '../../../assets/images/work2.png';
import img3 from '../../../assets/images/work3.png';

const Work = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className="flex flex-col gap-10">
            {/* Top Section */}
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Works</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            {/* Bottom Section */}
            <div className="container flex flex-col gap-5">
                {/* <h1>Swiper</h1> */}
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        loader={myLoader}
                        src={img1}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <Image
                        loader={myLoader}
                        src={img2}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <Image
                        loader={myLoader}
                        src={img3}
                        alt="Picture of the author"
                        // width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Work;