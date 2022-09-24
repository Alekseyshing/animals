import React from 'react';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={"max-w-[1920px] mx-auto min-h-[40vw]"}>{children}</div>
  );
}
