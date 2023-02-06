import Image from "next/image";
import Link from "next/link";
import { Carousel } from '@mantine/carousel';

// Images
import img1 from '../../../../assets/images/girma/photos/1.jpg';
import img2 from '../../../../assets/images/girma/photos/2.jpg';
import img3 from '../../../../assets/images/girma/photos/3.jpg';
import img4 from '../../../../assets/images/girma/photos/4.jpg';
import img5 from '../../../../assets/images/girma/photos/5.jpg';
import img6 from '../../../../assets/images/girma/photos/6.jpg';

import fire1 from '/assets/images/girma/gallery/Fire Fithing/1.jpg';
import fire2 from '/assets/images/girma/gallery/Fire Fithing/2.jpg';
import fire3 from '/assets/images/girma/gallery/Fire Fithing/3.jpg';
import fire4 from '/assets/images/girma/gallery/Fire Fithing/4.jpg';
import fire5 from '/assets/images/girma/gallery/Fire Fithing/5.jpg';
import fire6 from '/assets/images/girma/gallery/Fire Fithing/6.jpg';

import san1 from '../../../../assets/images/girma/gallery/Sanitary Works/1.jpg';
import san2 from '../../../../assets/images/girma/gallery/Sanitary Works/2.jpg';
import san3 from '../../../../assets/images/girma/gallery/Sanitary Works/3.jpg';
import san4 from '../../../../assets/images/girma/gallery/Sanitary Works/4.jpg';
import san5 from '../../../../assets/images/girma/gallery/Sanitary Works/5.jpg';
import san6 from '../../../../assets/images/girma/gallery/Sanitary Works/6.jpg';

import fix1 from '/assets/images/girma/gallery/Fixiture Fixing/1.jpg';
import fix2 from '/assets/images/girma/gallery/Fixiture Fixing/2.jpg';
import fix3 from '/assets/images/girma/gallery/Fixiture Fixing/3.jpg';
import fix4 from '/assets/images/girma/gallery/Fixiture Fixing/4.jpg';
import fix5 from '/assets/images/girma/gallery/Fixiture Fixing/5.jpg';
import fix6 from '/assets/images/girma/gallery/Fixiture Fixing/6.jpg';
import fix7 from '/assets/images/girma/gallery/Fixiture Fixing/7.jpg';
import fix8 from '/assets/images/girma/gallery/Fixiture Fixing/8.jpg';
import fix9 from '/assets/images/girma/gallery/Fixiture Fixing/9.jpg';
import fix10 from '/assets/images/girma/gallery/Fixiture Fixing/10.jpg';

import hvac1 from '../../../../assets/images/girma/gallery/HVAC System/1.jpg';
import hvac2 from '../../../../assets/images/girma/gallery/HVAC System/2.jpg';
import hvac3 from '../../../../assets/images/girma/gallery/HVAC System/3.jpg';
import hvac4 from '../../../../assets/images/girma/gallery/HVAC System/4.jpg';
import hvac5 from '../../../../assets/images/girma/gallery/HVAC System/5.jpg';
import hvac6 from '../../../../assets/images/girma/gallery/HVAC System/6.jpg';
import hvac7 from '../../../../assets/images/girma/gallery/HVAC System/7.jpg';
import hvac8 from '../../../../assets/images/girma/gallery/HVAC System/8.jpg';
import hvac9 from '../../../../assets/images/girma/gallery/HVAC System/9.jpg';
import hvac10 from '../../../../assets/images/girma/gallery/HVAC System/10.jpg';
import hvac11 from '../../../../assets/images/girma/gallery/HVAC System/11.jpg';
import hvac12 from '../../../../assets/images/girma/gallery/HVAC System/12.jpg';

import pipe1 from '../../../../assets/images/girma/gallery/Pipe Installation/1.jpg'
import pipe2 from '../../../../assets/images/girma/gallery/Pipe Installation/2.jpg'
import pipe3 from '../../../../assets/images/girma/gallery/Pipe Installation/3.jpg'
import pipe4 from '../../../../assets/images/girma/gallery/Pipe Installation/4.jpg'
import pipe5 from '../../../../assets/images/girma/gallery/Pipe Installation/5.jpg'
import pipe6 from '../../../../assets/images/girma/gallery/Pipe Installation/6.jpg'
import pipe7 from '../../../../assets/images/girma/gallery/Pipe Installation/7.jpg'
import pipe8 from '../../../../assets/images/girma/gallery/Pipe Installation/8.jpg'
import pipe9 from '../../../../assets/images/girma/gallery/Pipe Installation/9.jpg'
import pipe10 from '../../../../assets/images/girma/gallery/Pipe Installation/10.jpg'
import pipe11 from '../../../../assets/images/girma/gallery/Pipe Installation/11.jpg'
import pipe12 from '../../../../assets/images/girma/gallery/Pipe Installation/12.jpg'
import pipe13 from '../../../../assets/images/girma/gallery/Pipe Installation/13.jpg'
import pipe14 from '../../../../assets/images/girma/gallery/Pipe Installation/14.jpg'
import pipe15 from '../../../../assets/images/girma/gallery/Pipe Installation/15.jpg'
import pipe16 from '../../../../assets/images/girma/gallery/Pipe Installation/16.jpg'
import pipe17 from '../../../../assets/images/girma/gallery/Pipe Installation/17.jpg'
import pipe18 from '../../../../assets/images/girma/gallery/Pipe Installation/18.jpg'
import pipe19 from '../../../../assets/images/girma/gallery/Pipe Installation/19.jpg'

const Images = [
    {
        id: 1,
        name: 'Sanitary Works',
        imgs: [
            { id: 1, img: san1, name: '' },
            { id: 2, img: san2, name: '' },
            { id: 3, img: san3, name: '' },
            { id: 4, img: san4, name: '' },
            { id: 5, img: san5, name: '' },
            { id: 6, img: san6, name: '' },
        ]
    },
    {
        id: 2,
        name: 'Fire Fighting',
        imgs: [
            { id: 91, img: fire1, name: '' },
            { id: 92, img: fire2, name: '' },
            { id: 93, img: fire3, name: '' },
            { id: 94, img: fire4, name: '' },
            { id: 95, img: fire5, name: '' },
            { id: 96, img: fire6, name: '' }
        ]
    },
    {
        id: 3,
        name: 'Fixiture Fixing',
        imgs: [
            { id: 81, img: fix1, name: '' },
            { id: 82, img: fix2, name: '' },
            { id: 83, img: fix3, name: '' },
            { id: 84, img: fix4, name: '' },
            { id: 85, img: fix5, name: '' },
            { id: 86, img: fix6, name: '' },
            { id: 87, img: fix7, name: '' },
            { id: 88, img: fix8, name: '' },
            { id: 89, img: fix9, name: '' },
            { id: 810, img: fix10, name: '' },
        ]
    },
    {
        id: 4,
        name: 'HVAC System',
        imgs: [
            { id: 81, img: hvac1, name: '' },
            { id: 82, img: hvac2, name: '' },
            { id: 83, img: hvac3, name: '' },
            { id: 84, img: hvac4, name: '' },
            { id: 85, img: hvac5, name: '' },
            { id: 86, img: hvac6, name: '' },
            { id: 87, img: hvac7, name: '' },
            { id: 88, img: hvac8, name: '' },
            { id: 89, img: hvac9, name: '' },
            { id: 810, img: hvac10, name: '' },
            { id: 811, img: hvac11, name: '' },
            { id: 812, img: hvac12, name: '' },
        ]
    },
    {
        id: 5,
        name: 'Pipe Installation',
        imgs: [
            { id: 71, img: pipe1, name: '' },
            { id: 72, img: pipe2, name: '' },
            { id: 73, img: pipe3, name: '' },
            { id: 74, img: pipe4, name: '' },
            { id: 75, img: pipe5, name: '' },
            { id: 76, img: pipe6, name: '' },
            { id: 77, img: pipe7, name: '' },
            { id: 78, img: pipe8, name: '' },
            { id: 79, img: pipe9, name: '' },
            { id: 710, img: pipe10, name: '' },
            { id: 711, img: pipe11, name: '' },
            { id: 712, img: pipe12, name: '' },
            { id: 713, img: pipe13, name: '' },
            { id: 714, img: pipe14, name: '' },
            { id: 715, img: pipe15, name: '' },
            { id: 716, img: pipe16, name: '' },
            { id: 717, img: pipe17, name: '' },
            { id: 718, img: pipe18, name: '' },
            { id: 719, img: pipe19, name: '' },
        ]
    }
];

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Gallery = () => {
    return (
        <section className="flex flex-col gap-10 md:px-10 lg:px-20">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Gallery</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            {/* For sm */}
            {
                Images.map((items) => (
                    <>
                        <div
                            key={items.id}
                            className=" min-h-[40vh] flex flex-col gap-10">
                            {/* Sanitary System */}
                            <div className="flex flex-col gap-3 items-starat">
                                <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">{items.name}</h1>
                                <hr className="w-1/5 text-red-800 border-2 border-red-800" />
                            </div>
                            <div>
                                <Carousel
                                    align="start"
                                    slideGap="xl"
                                    breakpoints={[
                                        { maxWidth: 'sm', slideSize: '70%', slideGap: "xl", height: '200' },
                                        { maxWidth: 'md', slideSize: '50%', slideGap: "xl", height: '259' },
                                        { maxWidth: 'lg', slideSize: '30%', slideGap: "xl", height: '300' },
                                        { maxWidth: 'xl', slideSize: '30%', slideGap: "xl", height: '300' },
                                    ]}
                                    controlsOffset="xs"
                                    dragFree>
                                    {
                                        items.imgs.map((item) => (
                                            <Carousel.Slide
                                                key={item.id}>
                                                <div className="w-full md:w- h-full bg-blue-500">
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
                        </div>
                    </>
                ))
            }
        </section>
    );
}
export default Gallery;