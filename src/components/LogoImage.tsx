import { Icon } from '@iconify/react'

export function LogoImage() {
  return (
    <div className="flex gap-2 items-center text-white mr-6 border-b-white border-b-[1px] py-6 mb-10">
      <Icon icon="jam:aperture" className="w-8 h-8 ml-[10px]" />
      <h1 className="text-[26px] leading-[39px] tracking-[1px]">
        <span className="font-black">IDENT</span>LOGO
      </h1>
    </div>
  )
}
