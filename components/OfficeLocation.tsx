const OfficeLoaction = ({ Location }: { Location: string }) => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Location</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="w-full gap-10 md:px-20">

                <iframe
                    className="boorshad shadow-xl hover:shadow-2xl h-96 md:h-[40rem]"
                    src={Location}
                    width="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    );
}

export default OfficeLoaction;