import { Icon, iconExists } from '@iconify/react'

interface ICardProps {
  card: {
    text: string
    icon: string
    percent: string
    percentPositive: boolean
    number: number
    textTotal: string
    numberTotal: number
  }
}

export function Card({ card }: ICardProps) {
  return (
    <div className="bg-white max-w-[368px] max-h-[176px] grow flex flex-col gap-5 relative pl-4 pr-6 pt-6 pb-8 rounded-md group drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
      <header className="flex items-center justify-between">
        {iconExists(card.icon) ? (
          <Icon
            className="text-[2.5rem] -ml-[6px]"
            icon={card.icon}
            color="#0057FF"
          />
        ) : (
          <img className="text-[2.5rem] -ml-[6px]" src={card.icon} />
        )}

        <span
          style={{
            backgroundColor: card.percentPositive ? '#1CBF84' : '#EF0C35',
          }}
          className="p-2 w-14 font-bold text-white text-[10px] leading-[15px] rounded-[20px] text-center"
        >
          {card.percent}
        </span>
      </header>
      <div className="flex flex-col text-primary">
        <p className="font-bold text-3xl leading-[54px]">{card.number}</p>
        <p className="font-normal text-base">{card.text}</p>
      </div>

      <div className="opacity-0 overflow-hidden group-hover:w-[144px] group-hover:opacity-100 bg-white flex flex-col gap-2 absolute -top-12 right-4 p-4 rounded-lg drop-shadow-[4px_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 ease-linear">
        <p className="text-primary font-bold text-xs">{card.textTotal}</p>
        <p
          style={{ color: card.percentPositive ? '#1CBF84' : '#EF0C35' }}
          className="font-bold text-2xl"
        >
          {card.numberTotal}
        </p>
      </div>
    </div>
  )
}
