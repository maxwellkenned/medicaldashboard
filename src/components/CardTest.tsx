interface ICardTestProps {
  card: {
    name: string
    test: string
    date: string
    img: string
  }
}

export function CardTest({ card }: ICardTestProps) {
  return (
    <article className="bg-white">
      <div className="border-[1px] border-[#EDF1F8] rounded-md ">
        <div className="w-[262px] h-[130px] bg-default flex items-center justify-center">
          <img src={card.img} alt="icone" />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-bold font-sans text-base text-primary">
            {card.name}
          </h3>
          <h5 className="font-sans font-extrabold text-[10px] leading-[14px] text-[#303B5B]/30">
            TESTE REALIZADO
          </h5>
          <h4 className="font-semibold font-sans text-sm text-primary">
            {card.test}
          </h4>
          <h5 className="font-sans font-extrabold text-[10px] leading-[14px] text-[#303B5B]/30">
            REALIZADO EM:
          </h5>
          <h4 className="font-semibold font-sans text-sm text-primary">
            {card.date}
          </h4>
        </div>
      </div>
    </article>
  )
}
//linear-gradient(134.9deg, #0094FF 3.37%, #00FFA3 103.38%)
