import React from 'react';


interface IItem {
  id?: string,
  className?: string,
  As?: 'a' | 'li' | 'button' | 'div',
  href?: string,
  element?: React.ReactNode,
  onClick?: (id: string | undefined) => void,
}

interface IGenericListProps {
  list: IItem[];
  className?: string;
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps){

  return (
    <React.Fragment>
    {list.map(({ As = 'li', element, onClick = noop, className, id, href }) => (
      <As
        className={className}
        onClick={() => onClick(id)}
        href={href}
        key={id}
        id={id}
      >
        {element}
      </As>
    ))}
    </React.Fragment>
  );
}

