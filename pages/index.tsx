import StoryPanel from '@/components/storyPanel';
import TableCell from '@/components/tableCell';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <main className='max-w-container mx-auto w-full'>
        <StoryPanel />
        <TableCell />
      </main>
    </div>
  );
}
