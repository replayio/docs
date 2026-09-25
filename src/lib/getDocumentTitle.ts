import assert from 'assert'
import { NavigationItem, navigation, flatNavigation } from './navigation'

/** Returned when `pathname` has no matching navigation entry. */
export const DEFAULT_DOCUMENT_TITLE = 'Replay docs'

export function getDocumentTitle(pathname: string) {
  let queue: Array<
    NavigationItem & {
      parent?: NavigationItem
    }
  > = [...flatNavigation]

  while (queue.length > 0) {
    let current = queue.pop()

    assert(current)

    if (current.href === pathname) {
      const title = current.title

      const titles = []
      while (current != null) {
        if (!current.omitFromDocumentTitle) {
          titles.unshift(current.title)
        }

        current = current.parent
      }

      if (titles.length > 0) {
        return titles.join(': ')
      } else {
        return title
      }
    } else if (current.links) {
      current.links.forEach((link) => {
        queue.push({
          ...link,
          parent: current,
        })
      })
    }
  }

  return DEFAULT_DOCUMENT_TITLE
}
