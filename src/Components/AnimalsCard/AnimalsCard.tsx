
export interface IAnimalsCard {
  name: string,
  specName: string,
  element?: React.ReactNode,
  onClick: (id: string) => void;
}

export function AnimalsCard({ name, specName }: IAnimalsCard) {
  return (
    <div className="min-w-[160px]">{name} это "{specName}"</div>
  )
}