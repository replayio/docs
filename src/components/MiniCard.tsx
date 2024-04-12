import clsx from "clsx";
import { CardAttributes } from "./Card";
import { Icon } from "./Icon";

export default function MiniCard({
  title, 
  content,
  icon,
  href,
}: CardAttributes) {

return (
    <div>
      
          <li key={title} className="col-span-1 flex rounded-md shadow-sm bg-black bg-opacity-30">
            <div className="flex justify-center items-center p-5">
              <Icon icon={icon} className="w-8 h-8" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex-1 px-4 py-2 text-sm">
                <p className="font-medium text-white hover:text-gray-600">
                  {title}
                </p>
                <p>{content}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                  <Icon icon="chevron" className="w-8 h-8" />
              </div>
            </div>
          </li>
    
    </div>
  )
}
