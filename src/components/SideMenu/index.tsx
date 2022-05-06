import { useState } from 'react'
import { Icon } from '@iconify/react'

import { ActiveAnimate } from './ActiveAnimate'
import { CustomLink } from '../CustomLink'

const menuItems = [
  {
    id: 0,
    name: 'Dashboard',
    route: 'dashboard',
    icon: 'ant-design:home-outlined',
    to: '/',
  },
  {
    id: 1,
    name: 'Pacientes',
    route: 'pacientes',
    icon: 'gridicons:product-downloadable',
    to: 'pacientes',
  },
  {
    id: 2,
    name: 'Testes',
    route: 'testes',
    icon: 'gridicons:product-downloadable',
    to: 'testes',
    disabled: true,
  },
  {
    id: 3,
    name: 'Configurações',
    route: 'configuracoes',
    icon: 'gridicons:product-downloadable',
    to: 'configuracoes',
    disabled: true,
  },
]

export function SideMenu() {
  const [indexMenu, setIndexMenu] = useState(0)
  const [activeTopStyle, setActiveTopStyle] = useState('-16px')

  const setTopStylesClass = (
    element: (EventTarget & HTMLAnchorElement) | HTMLDivElement
  ) => {
    if (!element) {
      return
    }

    const parentTop = element.offsetParent?.getBoundingClientRect().top || 0
    const elementTop = element.getBoundingClientRect().top || 0

    const top = elementTop - parentTop - 16
    const classTop = top > 0 ? `${top}px` : '-16px'

    setActiveTopStyle(classTop)
  }

  return (
    <div className="flex flex-col pb-10 gap-12 pl-6 relative">
      <ActiveAnimate topStyle={activeTopStyle} />
      {menuItems.map((item, index) => (
        <CustomLink
          key={index}
          to={item.to}
          getActiveElement={(e) => {
            if (item?.disabled) return
            setTopStylesClass(e)
            setTimeout(() => setIndexMenu(index), 100)
          }}
          onClick={(e) => {
            if (item?.disabled) return
            setTopStylesClass(e.currentTarget)
            setTimeout(() => setIndexMenu(index), 100)
          }}
          style={{
            color: item.id === indexMenu ? '#303B5B' : '#ffffff',
            pointerEvents: item?.disabled ? 'none' : 'painted',
          }}
          className={`flex z-10 gap-4 items-center font-poppins font-semibold`}
        >
          <Icon icon={item.icon} /> {item.name}
        </CustomLink>
      ))}
    </div>
  )
}
