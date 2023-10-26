"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import { saveAs } from "file-saver";

const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const SaveContacts = ({
    name, contactInfo, image, color, imageWidth, textColor }: { name: string, contactInfo: string, image: StaticImageData, color: string, imageWidth: string, textColor: string }) => {
    const saveFile = async () => {
        saveAs(
            contactInfo,
            name
        );
    };

    return (
        <div
            className="w-full md:w-2/4 h-auto px-5 py-5">
            <div
                className="w-full h-16 rounded-xl bg-white flex flex-row items-center justify-between px-2 shadow-xl">
                <div>
                    <Image
                        className={imageWidth}
                        loader={myLoader}
                        src={image}
                        alt={'Ethio Grace Enginerring'}
                        width={500}
                        height={500}
                    />
                </div>
                <button
                    onClick={saveFile}
                    className={`px-2 py-3 text-sm  rounded-lg ${color} ${textColor}`}>
                    Save Contact</button>
            </div>
        </div>
    );
}
export default SaveContacts;