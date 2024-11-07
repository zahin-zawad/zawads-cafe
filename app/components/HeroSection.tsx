import React from 'react'
import BgImage from '@/public/Images/HeroSectionImages/bg-slate.png'
import CoffeeMug from '@/public/Images/HeroSectionImages/black.png'

const bgImage = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

export default function HeroSection() {
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container">
                {/* navbar section */}
                {/* Hero section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>

                    {/* text content section */}
                    <div className='text-lightOrange mt-24 md:mt-0 p-4 space-y-28'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='z-10 relative space-y-4'>
                                <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio totam quo et, nobis alias architecto nemo aspernatur necessitatibus excepturi ipsam quam,</h1>
                            </div>
                            <div className='w-64 h-48 absolute -top-6 -left-10 bg-gray-700/25'></div>
                        </div>
                    </div>
                    {/* hero image section */}
                    <div className='relative'>
                        <img src={CoffeeMug.src} alt="CoffeeMug" className='relative z-40 h-96 md:h-[700px] img-shadow' />
                        {/* orange ring */}
                        <div className='h-44 w-44 absolute top-24 -right-16 border-primary border-[20px] rounded-full z-20'></div>
                        {/* big text section  */}
                        <div className='absolute -top-20 left-52 z-10'>
                        <h1 className='text-9xl scale-150 font-bold text-darkGray/40 leading-none'>Blvck Tumbler</h1>
                        </div>
                    </div>

                    {/* third div section  */}
                    <div className='text-lightOrange mt-24 md:mt-0 p-4 space-y-28'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='z-10 relative space-y-4'>
                                <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio totam quo et, nobis alias architecto nemo aspernatur necessitatibus excepturi ipsam quam,</h1>
                            </div>
                            <div className='w-64 h-48 absolute -top-6 -right-10 bg-darkGray'></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>

    </main>
  )
}
