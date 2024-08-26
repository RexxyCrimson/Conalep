import { Link } from '@inertiajs/react';

export default function MenuLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'hover:bg-[#4a4443] flex gap-2 rounded-md py-2 ring-1 ring-transparent transition  focus:outline-none focus-visible:ring-[#FF2D20] text-white hover:text-white/80 focus-visible:ring-white '+
                (active
                    ? 'bg-[#4a4443] '
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
