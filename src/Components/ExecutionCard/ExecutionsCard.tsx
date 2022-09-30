
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
      <div className="flex flex-row w-full gap-2 text-lg text-black">
        <div className="min-w-[160px]">{type}</div>
        <div>{time}</div>
        <div>{name}</div>
      </div>
    </div>
  )
}