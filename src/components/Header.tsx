import { ReactNode } from 'react'
import { Search } from './Search'
import { TopMenu } from './TopMenu'

interface IHeaderProps {
  children?: ReactNode
}

export function Header({ children }: IHeaderProps) {
  return (
    <div className="w-full flex flex-shrink-0 items-center justify-between bg-white rounded-t-[30px] px-8 py-4 ">
      <Search />
      <TopMenu />
    </div>
  )
}
