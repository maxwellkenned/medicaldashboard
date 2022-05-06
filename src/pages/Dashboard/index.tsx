import { Icon, iconExists } from '@iconify/react'

import iconTestTubeSuccess from '../../assets/img/iconTestTubeSuccess.svg'
import iconTestTubeError from '../../assets/img/iconTestTubeError.svg'
import iconBrainGradient from '../../assets/img/iconBrainGradient.svg'
import iconCellsGradient from '../../assets/img/iconCellsGradient.svg'
import { Card } from '../../components/Card'
import { CardTest } from '../../components/CardTest'
import { CardImportant } from '../../components/CardImportant'

export function Dashboard() {
  const cards = [
    {
      text: 'Pacientes ativos',
      icon: 'ic:baseline-person-outline',
      percent: '+30%',
      percentPositive: true,
      number: 26,
      textTotal: 'Pacientes totais',
      numberTotal: 268,
    },
    {
      text: 'Testes realizados',
      icon: 'bx:bx-test-tube',
      percent: '-10%',
      percentPositive: false,
      number: 306,
      textTotal: 'Testes totais',
      numberTotal: 1.265,
    },
    {
      text: 'Testes concluídos',
      icon: iconTestTubeSuccess,
      percent: '+30%',
      percentPositive: true,
      number: 139,
      textTotal: 'Testes totais concluídos',
      numberTotal: 10.55,
    },
    {
      text: 'Testes cancelados',
      icon: iconTestTubeError,
      percent: '-3%',
      percentPositive: false,
      number: 11,
      textTotal: 'Testes totais cancelados',
      numberTotal: 618,
    },
  ]

  const tests = [
    {
      name: 'Renata Augusto Ferreira',
      test: 'TDAH CAB ADHD',
      date: '20/10/2023',
      img: iconBrainGradient,
    },
    {
      name: 'Renata Augusto Ferreira',
      test: 'Autismo',
      date: '20/09/2023',
      img: iconCellsGradient,
    },
    {
      name: 'Renata Augusto Ferreira',
      test: 'TDAH CAB ADHD',
      date: '20/10/2023',
      img: iconBrainGradient,
    },
    {
      name: 'Renata Augusto Ferreira',
      test: 'Autismo',
      date: '20/09/2023',
      img: iconCellsGradient,
    },
  ]

  const importantsUpdates = [
    {
      name: 'Renata Augusto Ferreira',
      test: 'TDAH CAB ADHD',
      date: '20/10/2023',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      canceled: false,
    },
    {
      name: 'Carlos Nobrega Baccio',
      test: 'TDAH CAB ADHD',
      date: '20/10/2023',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      canceled: true,
    },
    {
      name: 'Suelton A. Mellis',
      test: 'TDAH CAB ADHD',
      date: '20/10/2023',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      canceled: true,
    },
  ]

  const renderCards = () => {
    return cards.map((card, index) => <Card card={card} key={index} />)
  }

  const renderTests = () => {
    return tests.map((card, index) => <CardTest card={card} key={index} />)
  }

  const renderImportantsUpdates = () => {
    return importantsUpdates.map((card, index) => (
      <CardImportant card={card} key={index} />
    ))
  }

  return (
    <section className="w-full h-[85vh] bg-background rounded-b-[30px] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-zinc-300">
      <article className="p-8 w-full flex flex-col gap-12 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-bold text-primary">Informações Gerais</h1>
          <div className="flex gap-4 flex-wrap">{renderCards()}</div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-6">
            <h1 className="flex items-center text-lg font-bold text-primary gap-2">
              Histórico de atendimentos
              <button
                type="button"
                className="text-white font-sans font-bold text-[10px] leading-3 bg-bluegradient px-4 py-2 rounded-[20px] hover:brightness-90"
              >
                Ver Todos
              </button>
            </h1>
            <div className="flex gap-4 p-4 flex-wrap bg-white rounded-md drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
              {renderTests()}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-lg font-bold text-primary">
              Teste mais realizado
            </h1>
            <article className="bg-white w-[368px] h-[320px] rounded-md pt-10 pb-7 flex flex-col gap-12 drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
              <div className="flex items-center justify-center">
                <img
                  src={iconCellsGradient}
                  alt="icone"
                  className="w-[93.44px] h-[93px]"
                />
              </div>
              <div className="p-4 flex flex-col">
                <p className="font-bold font-sans text-[26px] leading-[35.41px] text-primary">
                  Autismo
                </p>
                <p className="font-sans font-extrabold text-[10px] leading-[14px] text-[#303B5B]/30 mt-4">
                  LICENÇAS DISPONÍVES
                </p>
                <p className="flex items-center gap-4 font-bold font-sans text-[26px] leading-[35.41px] text-primary mt-2">
                  13
                  <button
                    type="button"
                    className="text-white font-sans font-bold text-[10px] leading-3 bg-bluegradient px-4 py-2 rounded-[20px] hover:brightness-90"
                  >
                    COMPRAR MAIS
                  </button>
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-bold text-primary">
            Atualizações importantes
          </h1>
          <div className="flex gap-4">{renderImportantsUpdates()}</div>
        </div>
      </article>
    </section>
  )
}
