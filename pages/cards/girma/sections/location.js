const Location = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Location</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="w-full gap-10 md:px-20">

                <iframe
                    className="boorshad shadow-xl hover:shadow-2xl h-96 md:h-[40rem]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5246201596756!2d38.738253199999996!3d9.0158138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85df14fb2625%3A0xe80d3f08b64ff454!2zRGVsaW5hIEJ1aWxkaW5nIHwgbGlkZXRhIHwg4Yuw4YiK4YqTIOGIheGKleGNgyB8IOGIjeGLsOGJsw!5e0!3m2!1sam!2set!4v1675601013084!5m2!1sam!2set"
                    width="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    );
}

export default Location;