import Image from "next/image";

// Images

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const GalleryPage = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Gallery</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div>
                <h1>Gallery</h1>
            </div>
        </section>
    );
}

export default GalleryPage;