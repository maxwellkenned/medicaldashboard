import { CardTest } from '../../components/CardTest'
import iconBrainGradient from '../../assets/img/iconBrainGradient.svg'
import iconCellsGradient from '../../assets/img/iconCellsGradient.svg'
import { Search } from '../../components/Search'
import { Icon } from '@iconify/react'
import { PatientCard } from '../../components/PatientCard'

export function Patients() {
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
  ]

  const patients = [
    {
      name: 'Renata Augusto Ferreira',
      diagnostic: 'TDAH CAB ADHD, Autismo',
      img: 'https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3',
      testPerformed: 3,
      testCanceled: 1,
      testPending: 1,
    },
    {
      name: 'Leandro Motta Braga',
      diagnostic: 'TDAH CAB ADHD, Autismo',
      img: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
      testPerformed: 6,
      testCanceled: 50,
      testPending: 1,
    },
    {
      name: 'Kuromi Naori Kagasawa',
      diagnostic: 'TDAH CAB ADHD, Autismo',
      img: 'https://images.unsplash.com/photo-1628103217446-99040c5a89f0',
      testPerformed: 22,
      testCanceled: 0,
      testPending: 2,
    },
  ]

  const renderTests = () => {
    return tests.map((card, index) => <CardTest card={card} key={index} />)
  }

  const renderPatients = () => {
    return patients.map((card, index) => (
      <PatientCard card={card} key={index} />
    ))
  }

  return (
    <section className="h-[85vh] w-full bg-background rounded-b-[30px] overflow-auto scrollbar-thin scrollbar-thumb-zinc-300">
      <article className="py-8 flex flex-col gap-12">
        <div className="flex flex-col px-8 w-full h-full gap-6">
          <h1 className="flex items-center text-lg font-bold text-primary gap-2">
            Atualizações de pacientes
          </h1>
          <div className="w-full bg-white rounded-md drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
            <div className="flex gap-4 p-4 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-100 hover:scrollbar-thumb-zinc-400">
              {renderTests()}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 w-full h-full  gap-6">
          <h1 className="flex items-center text-lg font-bold text-primary gap-2">
            Todos os pacientes
          </h1>
          <div className="w-full bg-white rounded-md drop-shadow-[0_8px_26px_rgba(71,87,122,0.08)] hover:drop-shadow-[0_8px_26px_rgba(71,87,122,0.3)]">
            <div className="flex flex-col gap-4 p-4 flex-wrap">
              <header className="flex justify-between px-2 items-center w-full flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-bold text-base text-[#565468]/60">
                    Lista de Pacientes(36)
                  </p>
                  <Search placeholder="Buscar paciente..." />
                </div>
                <div>
                  <Icon icon="gridicons:ellipsis" className="text-3xl" />
                </div>
              </header>
              <div>{renderPatients()}</div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
