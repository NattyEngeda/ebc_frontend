"use client"
import Image from "next/image";


const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Clients = ({ Clients }: { Clients: any }) => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Clients</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="min-h-40vh grid grid-cols-2 md:grid-cols-3 gap-10  md:px-20">
                {
                    Clients.map((items: any) => (
                        <div
                            key={items.id}
                            className="flex flex-col h-32 md:h-60 w-full bg-white items-center justify-center gap-4 rounded-xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl">
                            <Image
                                loader={myLoader}
                                src={items.image}
                                alt={items.name}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Clients;