import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HomePage from './HomePage';

const Home: React.FC = () => {
  return (
    <div >
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link href="/">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/greador%20de%20imagens%20APP%2FOpenAI_Logo.svg.png?alt=media&token=2dd78a73-0e3a-4dfc-b9c9-92020abdd9f2"
            alt="logo"
            className="w-28 object-contain cursor-pointer"
            width={140}
            height={32}
          />
        </Link>
        <Link
          href="/CreatePost"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Criar Imagem
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-blue-50 min-h-[calc(100vh-73px)]">
        <HomePage/>
      </main>
    </div>
  );
};

export default Home;
