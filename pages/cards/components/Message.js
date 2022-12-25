const Message = () => {
    return (
        <>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Send A Message !!
                </div>
                <div className="collapse-content">
                    <div className="w-full flex flex-col gap-5">
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;