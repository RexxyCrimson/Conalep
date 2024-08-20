import React from 'react'
import { Link } from '@inertiajs/react';
import { useState, createContext, useContext } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Transition } from '@headlessui/react';

const MenuContext = createContext();

const Menu = ({ children }) => {
    const [open, setOpen] = useState(true);
    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MenuContext.Provider>
    )
}

const Header = () => {
    const { open, setOpen } = useContext(MenuContext);
    return (
        <div className="p-3" style={{ width: '4rem' }}>
            {/* Botón para colocar menú */}
            <button  onClick={() => setOpen(true)} >
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.361694 0.138306V5.12014H35.0851V0.138306H0.361694ZM0.361694 14.9344V19.9162H35.0851V14.9344H0.361694ZM0.361694 29.8799V34.8617H35.0851V29.8799H0.361694Z" fill="black" />
                </svg>
            </button>            
        </div>
    )
}

const Body = ({ auth }) => {
    const { open, setOpen } = useContext(MenuContext);

    return (
        <>
            {/* Transición para que el menu salga desde la derecha */}
            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform -translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="transform translate-x-0"
                leaveTo="transform -translate-x-full"
            >
                <nav className='navbar flex flex-col flex-none absolute dark:bg-black nowgrap w-full sm:max-w-80' style={{
                    top: 0,
                    bottom: 0,
                    borderRadius: '0 8px 8px 0'
                }} >

                    <div className='pl-4 pr-6 content-nav mb-5 bg-[#09310D]'
                        style={{
                            borderTopRightRadius: '8px'
                        }}
                    >
                        <div className='flex justify-between items-center text-white'>
                            <div>
                                {/* Botón para quitar menú */}
                                <button onClick={() => setOpen(false)} >
                                    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.361694 0.138306V5.12014H35.0851V0.138306H0.361694ZM0.361694 14.9344V19.9162H35.0851V14.9344H0.361694ZM0.361694 29.8799V34.8617H35.0851V29.8799H0.361694Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <ApplicationLogo className='w-auto h-16' />
                        </div>
                    </div>

                    <div className='pl-4 pr-6 content-nav mb-5'>
                        <div className='flex gap-2 items-center text-white '>
                            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#1A3C1D]">
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0.5C13.05 0.5 9 5.54 9 11.75C9 17.96 13.05 23 18 23C22.95 23 27 17.96 27 11.75C27 5.54 22.95 0.5 18 0.5ZM8.595 23C3.825 23.225 0 27.14 0 32V36.5H36V32C36 27.14 32.22 23.225 27.405 23C24.975 25.745 21.645 27.5 18 27.5C14.355 27.5 11.025 25.745 8.595 23Z" fill="white" />
                                </svg>
                            </div>
                            <p className='text-left' style={{ width: '50%', fontSize: '18px' }}>Jael Pineda Quiroz</p>
                        </div>
                    </div>

                    <div className='pl-4 pr-6 content-nav mb-5'>
                        <h2 className='text-white pb-2' style={{ borderBottom: 'thin solid white' }}>Tutorias</h2>

                        <Link
                            href={route('profile.edit')}
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 11.0001C15.9167 11.0001 16.2708 10.8542 16.5625 10.5626C16.8542 10.2709 17 9.91673 17 9.50006C17 9.08339 16.8542 8.72923 16.5625 8.43756C16.2708 8.14589 15.9167 8.00006 15.5 8.00006C15.0833 8.00006 14.7292 8.14589 14.4375 8.43756C14.1458 8.72923 14 9.08339 14 9.50006C14 9.91673 14.1458 10.2709 14.4375 10.5626C14.7292 10.8542 15.0833 11.0001 15.5 11.0001ZM8.5 11.0001C8.91667 11.0001 9.27083 10.8542 9.5625 10.5626C9.85417 10.2709 10 9.91673 10 9.50006C10 9.08339 9.85417 8.72923 9.5625 8.43756C9.27083 8.14589 8.91667 8.00006 8.5 8.00006C8.08333 8.00006 7.72917 8.14589 7.4375 8.43756C7.14583 8.72923 7 9.08339 7 9.50006C7 9.91673 7.14583 10.2709 7.4375 10.5626C7.72917 10.8542 8.08333 11.0001 8.5 11.0001ZM12 17.5001C13.1333 17.5001 14.1625 17.1792 15.0875 16.5376C16.0125 15.8959 16.6833 15.0501 17.1 14.0001H6.9C7.31667 15.0501 7.9875 15.8959 8.9125 16.5376C9.8375 17.1792 10.8667 17.5001 12 17.5001ZM12 22.0001C10.6167 22.0001 9.31667 21.7376 8.1 21.2126C6.88333 20.6876 5.825 19.9751 4.925 19.0751C4.025 18.1751 3.3125 17.1167 2.7875 15.9001C2.2625 14.6834 2 13.3834 2 12.0001C2 10.6167 2.2625 9.31673 2.7875 8.10006C3.3125 6.88339 4.025 5.82506 4.925 4.92506C5.825 4.02506 6.88333 3.31256 8.1 2.78756C9.31667 2.26256 10.6167 2.00006 12 2.00006C13.3833 2.00006 14.6833 2.26256 15.9 2.78756C17.1167 3.31256 18.175 4.02506 19.075 4.92506C19.975 5.82506 20.6875 6.88339 21.2125 8.10006C21.7375 9.31673 22 10.6167 22 12.0001C22 13.3834 21.7375 14.6834 21.2125 15.9001C20.6875 17.1167 19.975 18.1751 19.075 19.0751C18.175 19.9751 17.1167 20.6876 15.9 21.2126C14.6833 21.7376 13.3833 22.0001 12 22.0001ZM12 20.0001C14.2333 20.0001 16.125 19.2251 17.675 17.6751C19.225 16.1251 20 14.2334 20 12.0001C20 9.76673 19.225 7.87506 17.675 6.32506C16.125 4.77506 14.2333 4.00006 12 4.00006C9.76667 4.00006 7.875 4.77506 6.325 6.32506C4.775 7.87506 4 9.76673 4 12.0001C4 14.2334 4.775 16.1251 6.325 17.6751C7.875 19.2251 9.76667 20.0001 12 20.0001Z" fill="#57DC74" />
                            </svg>
                            <p>Canalizar alumno</p>
                        </Link>

                        <Link
                            href={route('logout')}
                            method="post"
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 20.0001V7.00006H2V4.00006H15V7.00006H10V20.0001H7ZM16 20.0001V12.0001H13V9.00006H22V12.0001H19V20.0001H16Z" fill="#57DC74" />
                            </svg>
                            <p> Realizar entrevista</p>
                        </Link>

                        <Link
                            href={route('login')}
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 0.000244141L11.875 2.5002L16.625 7.50011L19 5.00016L14.25 0.000244141ZM9.5 5.00016L0 15V19.9999H4.75L14.25 10.0001L9.5 5.00016Z" fill="#57DC74" />
                            </svg>
                            <p>Reportes</p>
                        </Link>

                    </div>

                    <div className='pl-4 pr-6 content-nav mb-5'>
                        <h2 className='text-white pb-2' style={{ borderBottom: 'thin solid white' }}>Cuenta</h2>

                        <Link
                            href={route('profile.edit')}
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 2.00012L19 4.00012M19 4.00012L22 7.00012L18.5 10.5001L15.5 7.50012M19 4.00012L15.5 7.50012M11.39 11.6101C11.9064 12.1196 12.3168 12.7262 12.5978 13.3949C12.8787 14.0637 13.0246 14.7814 13.0271 15.5068C13.0295 16.2321 12.8884 16.9508 12.6119 17.6214C12.3355 18.292 11.9291 18.9014 11.4162 19.4143C10.9033 19.9272 10.294 20.3336 9.62333 20.61C8.95271 20.8865 8.23403 21.0276 7.50866 21.0251C6.7833 21.0227 6.06557 20.8768 5.39682 20.5959C4.72807 20.3149 4.1215 19.9045 3.61203 19.3881C2.61016 18.3508 2.05579 16.9615 2.06832 15.5194C2.08085 14.0773 2.65928 12.6979 3.67903 11.6781C4.69877 10.6584 6.07824 10.0799 7.52032 10.0674C8.96241 10.0549 10.3517 10.6093 11.389 11.6111L11.39 11.6101ZM11.39 11.6101L15.5 7.50012" stroke="#57DC74" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p> Configuración</p>
                        </Link>

                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 20.0001H4C3.46957 20.0001 2.96086 19.7894 2.58579 19.4143C2.21071 19.0393 2 18.5306 2 18.0001V4.00012C2 3.46969 2.21071 2.96098 2.58579 2.58591C2.96086 2.21084 3.46957 2.00012 4 2.00012H8M15 16.0001L20 11.0001M20 11.0001L15 6.00012M20 11.0001H8" stroke="#57DC74" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p> Cerrar sesión</p>

                        </Link>

                        <Link
                            href={route('login')}
                            className="flex gap-2 block rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                </nav>
            </Transition>
        </>
    )
}

Menu.Header = Header;
Menu.Body = Body;

export default Menu