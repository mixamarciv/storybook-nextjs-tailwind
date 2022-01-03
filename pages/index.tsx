import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    return (
        <>
            <div className="w-full h-full">test1</div>
            <div className="bg-red-900">
                <div className="p-5 text-center font-bold">
                    Welcome to Next.js!
                </div>
            </div>
        </>
    );
};

export default Home;
