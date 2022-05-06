import { useEffect, useRef } from 'react'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'
import { ActiveAnimate } from './SideMenu/ActiveAnimate'

type ICustomLinkProps = LinkProps & {
  disabled?: boolean
  getActiveElement?: (element: HTMLDivElement) => void
}

export function CustomLink({
  children,
  to,
  disabled,
  getActiveElement,
  ...props
}: ICustomLinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  const linkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (getActiveElement && match && linkRef.current) {
      getActiveElement(linkRef.current)
    }
  }, [match])

  return (
    <div ref={linkRef}>
      <Link
        to={to}
        style={{
          color: match ? '#303B5B' : '#ffffff',
          pointerEvents: disabled ? 'none' : 'painted',
        }}
        {...props}
      >
        <div className="flex gap-4 z-20 items-center font-poppins font-semibold  pl-6">
          {children}
        </div>
      </Link>
    </div>
  )
}
