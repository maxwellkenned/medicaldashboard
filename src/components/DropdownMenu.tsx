import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'

export function DropdownMenu() {
  return (
    <Menu>
      <Menu.Button className="flex gap-[10px] items-center rounded-full pl-[14px] pr-2 py-2 hover:bg-gray-100 ">
        <h1 className="font-sans text-sm text-[#565468cc]">
          Olá, <span className="font-bold">Maxwell</span>
        </h1>
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
          alt="Imagem de perfil do usuário"
        />
      </Menu.Button>
      <Transition
        className="absolute  z-50 bg-white rounded-lg top-28 right-32 drop-shadow-[4px_4px_16px_rgba(0,0,0,0.1)]"
        enter="transition duration-600 linear"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-600 linear"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Menu.Items className="flex flex-col items-start justify-center">
          <Menu.Item>
            <a
              className="border-b-[#0000000d] border-b-2 font-poppins font-bold text-xs leading-[18px] p-4 text-primary"
              href="#"
            >
              Minha Conta
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              className="border-b-[#0000000d] border-b-2 font-poppins font-bold text-xs leading-[18px] p-4 text-primary"
              href="#"
            >
              Configurações
            </a>
          </Menu.Item>
          <Menu.Item>
            <button
              type="button"
              className="flex items-center gap-2  font-poppins font-bold text-xs leading-[18px] p-4 text-primary"
            >
              <Icon icon="heroicons-outline:logout" className="h-4 w-4" />
              <span className="opacity-75">Sair</span>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
