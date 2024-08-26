import '/resources/css/menu.css';

import { Link, Head } from '@inertiajs/react';

export default function Welcome() {
 
    return (
        <>
            <Head title="Welcome" />
            
            <main className='flex container mx-auto'>

            <div className='divider'> </div>

                <div className='px-20 pt-20'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod veritatis magnam quas. Commodi earum consequuntur ad! Eligendi voluptas soluta quis debitis minima voluptatum, eum excepturi corrupti, laborum error ipsam!</p>
                
                </div>

            <div className='divider'> </div>

            </main >
        </>
    );
}
