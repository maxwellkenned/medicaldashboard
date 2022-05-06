interface ICardImportantProps {
  card: {
    name: string
    test: string
    date: string
    img: string
    canceled: boolean
  }
}

export function CardImportant({ card }: ICardImportantProps) {
  return (
    <div className="flex gap-4 p-4 w-[496px] h-[128px] bg-white rounded-md drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
      <img
        className="w-24 h-24 rounded-md object-cover"
        src={card.img}
        alt="foto perfil"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-sans font-extrabold text-[10px] leading-[14px] text-[#303B5B]/30">
            PACIENTE
          </p>
          <p className="font-bold font-sans text-lg leading-5 text-primary">
            {card.name}
          </p>
          <p
            className="font-sans text-xs leading-4"
            style={{ color: card.canceled ? '#EF0C35' : '#1EAC79' }}
          >
            {card.canceled ? 'CANCELOU' : 'COMPLETOU'} O TESTE:{' '}
            <span className="font-bold">TDAH CAB ADHD</span>
          </p>
        </div>
        <footer>
          <p className="font-sans font-extrabold text-[10px] leading-[14px] text-[#303B5B]/30">
            REALIZADO EM: {card.date}
          </p>
        </footer>
      </div>
    </div>
  )
}
