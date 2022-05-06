import { Icon } from '@iconify/react'

import { DropdownMenu } from './DropdownMenu'
import IconSquares from '../assets/img/iconSquares.svg'

export function TopMenu() {
  return (
    <div className="flex gap-6 items-center">
      <Icon icon="ic:baseline-settings" />
      <div className="relative">
        <span className="absolute top-[0.15rem] right-[0.07rem] h-[6px] w-[6px] rounded-full bg-[#FF001F]" />
        <Icon icon="ic:baseline-notifications" />
      </div>
      <DropdownMenu />
      <img src={IconSquares} alt="Icone com 9 quadrados pequenos" />
    </div>
  )
}
