import { Icon } from '@iconify/react'

interface ISearchProps {
  placeholder?: string
}

export function Search({ placeholder = 'Busca...' }: ISearchProps) {
  return (
    <form>
      <div className="relative flex items-center rounded-[5px] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Icon
          icon="ic:baseline-search"
          color="#787686"
          className="absolute h-5 w-5 left-3"
        />
        <input
          className="min-w-max w-[400px] bg-neutral-100 border-none rounded-[5px] pl-8 text-[#2C2E3D]"
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
        />
      </div>
    </form>
  )
}
