"use client"
import Image from "next/image";
import Link from "next/link";
import { Carousel } from '@mantine/carousel';

// Styles
import '@mantine/carousel/styles.css';



const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Gallery = ({ Images }: { Images: any }) => {
    return (
        <section className="flex flex-col gap-10 md:px-10 lg:px-20">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Gallery</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            {
                Images.map((items: any) => (
                    <>
                        <div
                            key={items.name}
                            className=" min-h-[40vh] flex flex-col gap-10">
                            {/* Sanitary System */}
                            <div className="flex flex-col gap-3 items-starat">
                                <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">{items.name}</h1>
                                <hr className="w-1/5 text-red-800 border-2 border-red-800" />
                            </div>
                            <div>
                                <Carousel
                                    align="start"
                                    height='200'
                                    slideGap="xl"
                                    slideSize='70%'
                                    controlsOffset="md"
                                    controlSize={35}
                                    withIndicators
                                    dragFree

                                >
                                    {
                                        items.imgs.map((item: any) => (
                                            <Carousel.Slide
                                                key={item.id}>
                                                <div className="w-full md:w- h-full bg-white px-2">
                                                    <Image
                                                        className="w-full md:w-auto h-auto"
                                                        loader={myLoader}
                                                        src={item.img}
                                                        alt="Placeholder"
                                                        width={500}
                                                        height={500}
                                                    />
                                                </div>
                                            </Carousel.Slide>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div >
                    </>
                ))
            }
        </section >
    );
}
export default Gallery;

