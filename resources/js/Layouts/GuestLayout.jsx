import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center bg-[#f2f4f7]">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className='flex flex-col sm:justify-center items-center'>
                    <Link href="/">
                        <ApplicationLogo className="w-auto h-40 fill-current text-gray-500" />
                    </Link>
                    <p className='py-4'>Bienvenidos a MiConalepEnLinea Docente</p>
                </div>
                {children}
            </div>
        </div>
    );
}
