
export interface IExecutionsCard {
  type: string;
  time: string;
  name: string;
  id?: string;
  element?: React.ReactNode,
}

export function ExecutionsCard({ type, time, name }: IExecutionsCard) {
  return (
    <div >
      <div className="flex flex-row gap-5">
        <div>{type}</div>
        <div>{time}</div>
        <div>{name}</div>
      </div>
    </div>
  )
}