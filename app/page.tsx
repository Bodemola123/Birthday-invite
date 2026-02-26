"use client";

import LandingPage from '@/components/LandingPage';
import NoPage from '@/components/NoPage';
import YesPage from '@/components/YesPage';
import { useState } from 'react';

type PageType = 'landing' | 'yes' | 'no';

function Page() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onResponse={setCurrentPage} />
      )}

      {currentPage === 'yes' && <YesPage />}

      {currentPage === 'no' && (
        <NoPage onGoBack={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default Page;