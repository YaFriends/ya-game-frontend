type SortingPosition = -1 | 1 | 0;
export type Comparator = <T>(a: T, b: T) => SortingPosition;
type Sort = <T>(array: T[], callBack?: Comparator) => T[];

const defaultComparator: Comparator = (firstParam, secondParam): SortingPosition => {
  if (firstParam < secondParam) {
    return -1;
  }
  if (firstParam > secondParam) {
    return 1;
  }
  return 0;
};

function swap<T>(array: T[], firstIndex: number, secondIndex: number): void {
  const temp: T = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

export const sort: Sort = <T>(array: T[], comparator = defaultComparator): T[] => {
  const sortedArray = [...array];

  const start = 0;
  const end: number = array.length - 1;

  const recursiveSort = (start: number, end: number): void => {
    if (end - start < 1) {
      return;
    }

    const pivot: T = sortedArray[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const lessThanThePivot = comparator(sortedArray[i], pivot) === -1;
      if (lessThanThePivot) {
        if (splitIndex !== i) {
          swap(sortedArray, splitIndex, i);
        }
        splitIndex++;
      }
    }

    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivot;

    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  recursiveSort(start, end);
  return sortedArray;
};
