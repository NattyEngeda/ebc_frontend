
const Social = ({ list }: { list: any }) => {
    return (
        <div className="flex flex-row items-center justify-center px-5 gap-5 py-2">
            {
                list.map((items: any) => (
                    <a
                        key={items.id}
                        href={items.link}
                        target="_blank"
                        rel='noreferrer'
                        className={items.class}>
                        {items.icon}
                    </a>
                ))
            }
        </div>
    );
}

export default Social;