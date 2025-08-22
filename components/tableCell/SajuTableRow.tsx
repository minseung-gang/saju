import { cn } from '@/utilts/cn';
import React from 'react';

interface SajuTableRowProps {
  className?: string;
  children: React.ReactNode;
}

const SajuTableRow = ({ className, children }: SajuTableRowProps) => {
  const baseRowStyles = 'grid grid-cols-5 border-r-2 border-b-2';
  return <div className={cn(baseRowStyles, className)}>{children}</div>;
};

export default SajuTableRow;
