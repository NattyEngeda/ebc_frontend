import Image from "next/image";

// Images
import img1 from '../../../assets/images/shop2.png';
import img2 from '../../../assets/images/work1.png';
import img3 from '../../../assets/images/work2.png';

const Project = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className="flex flex-col gap-10">
            {/* Top Section */}
            <div className="flex flex-col gap-2">
                <p className="text-3xl font-Sanchez">Projects</p>
                <hr className="text-black bg-black border border-black rounded-full w-1/3" />
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col gap-5">
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
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;