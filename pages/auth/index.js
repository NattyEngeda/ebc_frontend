import Header from '../components/header';

const Index = () => {
    return (
        <>
            <Header />
            <main className="w-full py-28 flex items-cener justify-center">
                <div className="w-1/3 rounded-xl shadow-xl h-auto">
                    <div className="text-center flex flex-col items-center gap-2">
                        <h1 className="text-2xl font-Glory">Login or Signup</h1>
                        <hr className="w-2/3 text-black border border-black"/>
                    </div>
                    <div className>
                        <button>Login</button>
                        <button>Signup</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Index;