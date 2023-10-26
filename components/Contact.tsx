
const Contact = ({ list }: any) => {
    return (
        <div className="flex flex-col gap-5 w-full md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                {
                    list.map((items: any) => (
                        <div
                            key={items.id}
                            className="w-full rounded-xl boorshad shadow-lg p-2 py-4 flex flex-row gap-5 items-center">
                            {items.icon}
                            <a
                                href={items.href}
                                target={items.target}
                                className="text-lg"
                            >{items.label}</a>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Contact;