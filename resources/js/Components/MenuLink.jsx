import { Link } from '@inertiajs/react';

export default function MenuLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'hover:bg-[#4a4443] flex gap-2 rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ' +
                (active
                    ? 'bg-[#4a4443]'
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
