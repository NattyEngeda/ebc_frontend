import React, { useState } from "react";
import Image from "next/image";
import { List, Modal } from "@mantine/core";

// Images
import fire from '../../../../assets/images/girma/skills/fire.jpg';
import havac from '../../../../assets/images/girma/skills/havac.avif';
import sanitary from '../../../../assets/images/girma/skills/sanitary.jpg';

const skill = [
    {
        id: 1, image: sanitary, name: 'Sanitary Works', detail: [
            { id: 1, name: 'Sanitary Design', desc: 'Sanitary design is the application of design techniques that allow the timely and effective cleaning of the entire manufacturing asset' },
            { id: 2, name: 'Water Supply Installation', desc: 'Water supply is the provision of water by public utilities, commercial organisations, community endeavors or by individuals, usually via a system of pumps and pipes.' },
            { id: 3, name: 'Waste Water Pipe Installation', desc: 'Pipe for draining liquid waste or excess liquids. Plumbing. a pipe for draining away the wastes of a building other than those from water closets.' },
            { id: 4, name: 'Supervision and Consulting', desc: 'Giving Super Vision and Consulting on areas of Sanitary System' }
        ]
    },
    {
        id: 2, image: havac, name: 'HVAC System', detail: [
            { id: 1, name: 'Mechanical HVAC', desc: 'Heating and cooling systems make indoor spaces more comfortable.' },
            { id: 2, name: 'HVAC System Installation', desc: 'installing, maintenance, repairs, and service to heating, ventilation, air conditioning, and refrigeration systems that control the air quality and temperature in buildings.' }
        ]
    },
    {
        id: 3, image: fire, name: 'Fire Fighting System', detail: [
            { id: 2, name: 'Fire FIghting System Design and Installation', desc: "The design of any fire-protection system is an exact science that takes into account a building's use, occupancy, footprint, and even its other installed systems." }
        ]
    }
];


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Skills = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentInfo, setCurrentInfo] = useState();

    const handleModal = (items) => {
        setCurrentInfo(items);
        setModalOpen(true);
        console.log(currentInfo);
    }

    return (
        <>
            {currentInfo &&
                <Modal
                    opened={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={currentInfo.name}
                >
                    <div className="w-full flex flex-col gap-5 px-1 md:px-10">
                        <div>
                            <h1 className="font-bold text-lg">What we Offer</h1>
                        </div>
                        <div>
                            <ul className="list-disc">
                                {
                                    currentInfo.detail.map((items) => (
                                        <>
                                            <li className="font-bold">{items.name}</li>
                                            <div>
                                                <p>{items.desc}</p>
                                            </div>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </Modal>
            }
            <section className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-3xl md:text-5xl text-black">What I do</h1>
                    <hr className="w-1/6 text-red-800 border-2 border-red-800" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-1 md:px-20">
                    {
                        skill.map((items) => (
                            <div className="flex flex-col gap-5 rounded-xl overflow-hidden boorshad shadow-lg"
                                key={items.id}
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={() => {
                                    handleModal(items);
                                }}
                            >
                                <div className="overlof-hidden h-52">
                                    <Image
                                        className="w-full h-full"
                                        loader={myLoader}
                                        src={items.image}
                                        alt="Placeholder"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div

                                    className="py-4 px-5 bg-gray-100">
                                    <p className="text-2xl">{items.name}</p>
                                    <p>{'See More >>'}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>

        </>

    );
}

export default Skills;