const ProfileImage = () => {
    return (
        <div className="relative flex flex-col items-center w-full h-[45vh] py-2 px-1">
            <div className="card overflow-hidden">
                <img
                    className="w-auto h-[35vh] object-fill bg-center"
                    src="https://images2.content-hci.com/commimg/myhotcourses/blog/post/myhc_89683.jpg" alt="Background Image" />
            </div>
            <div className="absolute bottom-0 avatar w-48">
                <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://media.licdn.com/dms/image/D4E03AQF-pGhCwv_e0g/profile-displayphoto-shrink_200_200/0/1664565500017?e=1675900800&v=beta&t=trGa7kI9h92yvK7ANYOhuwZScokGUXHBrcs3DGfvpOs" />
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;