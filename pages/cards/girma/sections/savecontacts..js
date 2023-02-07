import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";

// Images
import logo from '/assets/images/girma/logo/logo.png'


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const saveFile = () => {
    saveAs(
        "/Girma Atlabachew.vcf",
        "GrimaAtlabachew"
    );
};

const SaveContacts = () => {
    return (
        <div className="w-full md:w-2/4 h-auto px-5 py-5">
            <div className="w-full h-16 rounded-xl bg-white flex flex-row items-center justify-between px-5 shadow-xl">
                <div>
                    <Image
                        className="w-12"
                        loader={myLoader}
                        src={logo}
                        alt={'Ethio Grace Enginerring'}
                        width={500}
                        height={500}
                    />
                </div>
                <button
                    onClick={saveFile}
                    className="px-5 py-2  bg-gradient-to-br from-slate-700 via-violet-500 to-purple-700 text-white rounded-xl"> Save Contact</button>
            </div>
        </div>
    );
}
export default SaveContacts;