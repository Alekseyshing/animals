
export interface IExecutionsCard {
  type: string;
  time: string;
  name: string;
  id?: string;
  element?: React.ReactNode,
}

export function ExecutionsCard({ type, time, name }: IExecutionsCard) {
  return (
    <div className="min-w-[160px]">Сегодня в {time} на процедуру "{type}" приедет {name}</div>
  )
}