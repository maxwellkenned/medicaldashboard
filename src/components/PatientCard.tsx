import { Icon } from '@iconify/react'

interface IPatientCardProps {
  card: {
    name: string
    diagnostic: string
    img: string
    testPerformed: number
    testCanceled: number
    testPending: number
  }
}

export function PatientCard({ card }: IPatientCardProps) {
  return (
    <div className="flex border-[1px] flex-wrap rounded-md border-[#EFF2F9]">
      <div className="flex w-[365px] gap-4 p-4 border-r-[1px] border-[#EFF2F9]">
        <img
          className="h-16 w-16 rounded-md object-cover"
          src={card.img}
          alt="foto de perfil"
        />
        <div className="flex flex-col gap-2">
          <p className="font-sans font-bold text-lg leading-6 text-primary">
            {card.name}
          </p>
          <span className="font-sans font-extrabold text-[10px] leading-[8px] text-[#303B5B]/30">
            DIAGNÓSTICO
          </span>
          <p className="font-semibold text-xs leading-[18px] text-[#1EAC79]">
            {card.diagnostic}
          </p>
        </div>
      </div>
      <div className="flex flex-col border-r-[1px] border-[#EFF2F9] p-4 gap-2">
        <p className="font-bold text-4xl leading-[32px] tracking-[1px] text-[#1EAC79]">
          {card.testPerformed}
        </p>
        <p className="text-[#1EAC79] text-sm">Testes realizados</p>
      </div>
      <div className="flex flex-col border-r-[1px] border-[#EFF2F9] p-4 gap-2">
        <p className="font-bold text-4xl leading-[32px] tracking-[1px] text-[#EF0C35]">
          {card.testCanceled}
        </p>
        <p className="text-[#EF0C35] text-sm">Testes cancelados</p>
      </div>
      <div className="flex flex-col border-r-[1px] border-[#EFF2F9] p-4 gap-2">
        <p className="font-bold text-4xl leading-[32px] tracking-[1px] text-[#FF6B00]">
          {card.testPending}
        </p>
        <p className="text-[#FF6B00] text-sm">Testes pendentes</p>
      </div>
      <div className="flex flex-1 gap-4 items-center justify-end">
        <button className="w-8 h-8 rounded-full border-[1px] border-[#EFF2F9] flex items-center justify-center hover:brightness-75">
          <Icon
            icon="ant-design:edit-filled"
            className="text-base"
            color="#145AD2"
          />
        </button>
        <button className="h-8 px-3 rounded-full bg-pinkgradient flex items-center justify-center font-sans font-bold text-white text-[10px] leading-[13.62px] tracking-[1px] hover:brightness-90">
          ENVIAR NOVO TESTE
        </button>
        <button className="h-8 px-3 rounded-full bg-bluegradient flex items-center justify-center font-sans font-bold text-white text-[10px] leading-[13.62px] tracking-[1px] hover:brightness-90">
          ALTERAR CADASTRO
        </button>
      </div>
    </div>
  )
}
