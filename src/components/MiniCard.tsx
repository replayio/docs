import Link from "next/link";
import { CardAttributes } from "./Card";
import { Icon } from "./Icon";

export default function MiniCard({
  title,
  content,
  icon,
  href,
}: CardAttributes) {

return (
    <Link href={href}>
        <li key={title} className="col-span-1 flex rounded-md shadow-md dark:bg-gray-950/50 bg-gray-100/90 bg-opacity-30 hover:bg-gray-200/90 dark:hover:bg-gray-700/90 transition-colors">
          <div className="flex justify-center items-center p-5">
            <Icon icon={icon} className="w-8 h-8" />
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-1 px-4 py-2 text-sm">
              <p className="font-bold dark:text-white">
                {title}
              </p>
              <p className="dark:text-gray-300 text-gray-700">{content}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
                <Icon icon="chevron" className="w-8 h-8" />
            </div>
          </div>
        </li>
    </Link>
  )
}
