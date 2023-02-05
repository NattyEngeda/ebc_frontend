import Image from "next/image";

// Images


const Gallery = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Gallery</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="min-h-[30vh] grid gri-cols-3 gap-10 px-5 md:px-20">


            </div>
        </section>
    );
}

export default Gallery;