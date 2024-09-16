import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const BotonTema = ({className=''}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`z-20 + ${className}`} style={{top:0, right:0}}>
        <button type="button" onClick={toggleTheme} className="inline-flex items-center py-2 px-3 bg-[#e3e4e6] dark:bg-neutral-800 hover:bg-[#d6d7da] hover:dark:bg-white/20 rounded-full text-sm text-black dark:text-white focus:outline-none">
            <div className='dark:hidden'>
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
            </div>

            <div className='flex flex-col justify-center dark:inline hidden'>
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
            </div>
        </button>
        </div>
    );
};

export default BotonTema;