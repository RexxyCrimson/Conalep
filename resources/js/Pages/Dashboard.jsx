import { Head, Link } from '@inertiajs/react';
import Menu2 from '@/Components/Menu2';

export default function Dashboard({ auth }) {
    return (

        <Menu2 user={auth.user}>
            <Head title="Inicio" />
            <div className='h-screen flex flex-col justify-center items-center'>
                <div className='flex justify-between gap-32'>
                   
                        <Link
                        href='https://www.facebook.com/CONALEP.Mex'
                        title='Facebook Conalep'
                        >
                             <div className='rounded-md flex justify-center w-24 bg-[#5B8F7A]'>
                            <svg width="48" height="85" viewBox="0 0 48 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.75 2.91669H33.9584C28.7461 2.91669 23.7474 5.00187 20.0617 8.71353C16.3761 12.4252 14.3056 17.4593 14.3056 22.7084V34.5834H2.51392V50.4167H14.3056V82.0834H30.0278V50.4167H41.8195L45.75 34.5834H30.0278V22.7084C30.0278 21.6585 30.4419 20.6517 31.179 19.9094C31.9162 19.1671 32.9159 18.75 33.9584 18.75H45.75V2.91669Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </div>
                        </Link>
                    

                    <div className='rounded-md flex justify-center w-24 bg-[#5B8F7A]'>
                        <Link
                        href='https://www.instagram.com/conalep.cuautla/?igsh=dHphemswMXIxM29t'
                        title='Instagram Conalep'
                        >
                            <svg width="83" height="85" viewBox="0 0 83 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.1181 20.7292H63.1574M21.8472 2.91669H61.1528C72.0067 2.91669 80.8056 11.7777 80.8056 22.7084V62.2917C80.8056 73.2223 72.0067 82.0834 61.1528 82.0834H21.8472C10.9933 82.0834 2.19446 73.2223 2.19446 62.2917V22.7084C2.19446 11.7777 10.9933 2.91669 21.8472 2.91669ZM57.2222 40.0063C57.7073 43.3006 57.1486 46.665 55.6255 49.6211C54.1024 52.5772 51.6925 54.9744 48.7386 56.4716C45.7847 57.9689 42.4372 58.4901 39.1723 57.961C35.9073 57.4319 32.8912 55.8795 30.5528 53.5246C28.2144 51.1697 26.6729 48.1322 26.1475 44.8442C25.6221 41.5562 26.1397 38.185 27.6264 35.2103C29.1132 32.2355 31.4935 29.8086 34.4289 28.2747C37.3642 26.7409 40.7051 26.1782 43.9763 26.6667C47.313 27.165 50.4021 28.7308 52.7874 31.1329C55.1726 33.535 56.7274 36.646 57.2222 40.0063Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Link>
                    </div>

                    <div className='rounded-md flex justify-center w-24 bg-[#5B8F7A]'>
                        <Link>
                            <svg width="92" height="76" viewBox="0 0 92 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M89.0695 2.87501C85.3055 5.54877 81.1381 7.59377 76.7276 8.93126C74.3603 6.19016 71.2143 4.24733 67.7149 3.36555C64.2156 2.48377 60.5317 2.70557 57.1616 4.00097C53.7915 5.29637 50.8977 7.60285 48.8716 10.6085C46.8456 13.6141 45.785 17.1738 45.8334 20.8063V24.7646C38.926 24.945 32.0815 23.4022 25.9094 20.2736C19.7374 17.1451 14.4295 12.5279 10.4584 6.83334C10.4584 6.83334 -5.26382 42.4583 30.1112 58.2917C22.0163 63.8253 12.3732 66.5999 2.59729 66.2083C37.9723 86 81.2084 66.2083 81.2084 20.6875C81.2048 19.5849 81.0995 18.4851 80.8939 17.4021C84.9055 13.418 87.7364 8.38783 89.0695 2.87501Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className='mt-16'>
                    <p className='text-4xl'>“Educación tecnica para la equidad y el bienestar"</p>
                </div>
            </div>
        </Menu2>

    );
}
