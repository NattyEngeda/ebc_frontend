import Layout from "./components/layout";

const About = () => {
    return ( 
    <>
    <section className="min-h-screen">
        <div>
            <h1>Hello Man</h1>
        </div>
    </section>    
    </> );
}
 
About.getLayout = (page) => {
    return (
        <>
        <Layout>
            {page}
        </Layout>
        </>
    )
}

export default About;