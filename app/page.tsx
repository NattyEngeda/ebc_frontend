import MainPageLayout from './layouts/MainPageLayout'

export default function Home() {
  return (
    <MainPageLayout>
      <div className='w-full h-full flex flex-col gap-5'>
        <section className='w-full h-full'>
          <h1>Main Page</h1>
        </section>
      </div>
    </MainPageLayout>
  )
}
