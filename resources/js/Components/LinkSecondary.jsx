import { Link } from '@inertiajs/react'
import React from 'react'

const LinkSecondary = ({ className = '' ,children, ...props}) => {
  return (
    <Link 
    {...props}
    className={`inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-[#222225] border border-gray-300 dark:border-none rounded-md font-semibold text-xs text-gray-700 dark:text-white uppercase tracking-widest shadow-sm hover:bg-gray-200 dark:hover:bg-[#3F4045] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 `
        + className
    }>
        {children}
    </Link>
  )
}

export default LinkSecondary