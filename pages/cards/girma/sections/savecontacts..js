import React from "react";

const SaveContacts = () => {
    const handleContactBtn = () => {
        window.open('../../../assets/contacts/Girma_Atlabachew.vcf');
    }
    return (
        <div className="w-full md:w-2/4 h-auto px-5 py-5">
            <div className="w-full h-16 rounded-xl bg-white flex flex-row items-center justify-end px-5 shadow-xl">
                <button
                    onClick={handleContactBtn}
                    className="px-5 py-2  bg-gradient-to-br from-slate-700 via-violet-500 to-purple-700 text-white rounded-xl"> Save Contact</button>
            </div>

        </div>
    );
}

export default SaveContacts;