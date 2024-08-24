import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
    return (
        <div className='flex mt-2 justify-between'>
            <div id="app-name" className='flex items-center'>
                <Link href="/">
                    <Image
                        src="/assets/images/OK.png"
                        alt='app-icon'
                        width={50}
                        height={50}
                    />
                </Link>
                <h1 className='text-2xl font-bold ml-2'>Migidari</h1>
            </div>
            <div className="flex items-center">
                <Link className="mr-2" href="/settings">
                    <SettingsIcon color="inherit"/>
                </Link>
                <Link href="/profile">
                    <Image
                        src="/assets/images/OK.png"
                        alt='profile-icon'
                        width={50}
                        height={50}
                        
                    />
                </Link>
            </div>

        </div>
    )
}

export default NavBar;