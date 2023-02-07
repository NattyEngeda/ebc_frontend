import Image from "next/image";

// Images
import carrier from '/assets/images/clients/girma/carrier.png';
import clivet from '/assets/images/clients/girma/clivet.jpg';
import hp from '/assets/images/clients/girma/hp.jpg';
import rak from '/assets/images/clients/girma/rak.jpg';
import rifeng from '/assets/images/clients/girma/rifeng.jpg';
import gf from '/assets/images/clients/girma/gf.png';

const clients = [
    { id: 1, name: "carrier", image: carrier },
    { id: 2, name: "clivet", image: clivet },
    { id: 3, name: "hp", image: hp },
    { id: 4, name: "rak", image: rak },
    { id: 5, name: "rifeng", image: rifeng },
    { id: 6, name: "gf", image: gf },
];

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Clients = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl md:text-5xl text-black">Clients</h1>
                <hr className="w-1/6 text-red-800 border-2 border-red-800" />
            </div>
            <div className="min-h-40vh grid grid-cols-2 md:grid-cols-3 gap-10  md:px-20">
                {
                    clients.map((items) => (
                        <div className="flex flex-col h-32 md:h-60 w-full bg-white items-center justify-center gap-4 rounded-xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl" key={items.id}>
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