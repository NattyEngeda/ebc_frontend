"use client"

import React, { useState } from "react";
import Image from "next/image";
// import { List, Modal } from "@mantine/core";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";



const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Skills = ({ skill }: { skill: any }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [currentInfo, setCurrentInfo] = useState<any>();

    const handleModal = (items: any) => {
        setCurrentInfo(items);
        // setModalOpen(true);
        onOpen();
    }
    return (
        <>
            {currentInfo &&
                < Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1 font-bold text-lg">{currentInfo.name}</ModalHeader>
                                <ModalBody>
                                    <div className="w-full flex flex-col gap-5 px-1 md:px-10">
                                        <div>
                                            <ul className="list-disc">
                                                {
                                                    currentInfo.detail.map((items: any) => (
                                                        <>
                                                            <li
                                                                key={items.id}
                                                                className="font-bold">{items.name}</li>
                                                            <div>
                                                                <p>{items.desc}</p>
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </ModalBody>

                            </>
                        )}
                    </ModalContent>
                </Modal>
            }
            <section className="flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-3xl md:text-5xl text-black">What I do</h1>
                    <hr className="w-1/6 text-red-800 border-2 border-red-800" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-1 md:px-20">
                    {
                        skill.map((items: any) => (
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
                                        className="w-full h-60"
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
