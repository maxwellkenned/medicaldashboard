interface IActiveAnimateProps {
  topStyle?: string | number
}

export function ActiveAnimate({ topStyle }: IActiveAnimateProps) {
  return (
    <div
      style={{ top: topStyle }}
      className="bg-background absolute left-0 h-14 w-full -z-10 rounded-l-full transition-all duration-500 inverted-border-radius"
    ></div>
  )
}
