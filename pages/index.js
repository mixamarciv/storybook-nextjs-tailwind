import Head from 'next/head';

export default function Home() {
    return (
        <div className="dark dark:bg-gray-800 dark:text-gray-400 min-h-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-red-900">
                <div className="p-5 text-center font-bold">
                    Welcome to Next.js!
                </div>
            </div>
        </div>
    );
}
