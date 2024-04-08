export function sortHighlights(arr: any[]) {
  const expandedArray: number[] = [];

  console.log(arr)

  arr?.forEach((item: string) => {
    if (typeof item === 'string') {
      const [start, end] = item.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        expandedArray.push(i);
      }
    } else {
      expandedArray.push(item);
    }
  });

  return expandedArray.sort((a, b) => a - b);
}