import { Icon, iconStyles } from "./Icon";

export function Basic({ 
  children, 
  icon }: { 
    title: string, 
    color?: keyof typeof iconStyles
    children: React.ReactNode 
    icon: React.ComponentProps<typeof Icon>['icon'] }) {
  return (
    <div className="flex lg:-ml-[50px] ml-0">
      <div className="mr-4 mt-16 flex-shrink-0">
        <Icon icon={icon} className="h-9 w-9 fill-slate-50 dark:fill-gray-950" />
      </div>
      <div>
         { children }
      </div>
    </div>
  )
}
