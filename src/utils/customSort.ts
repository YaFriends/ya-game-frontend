declare global {
  interface Array<T> {
    customSort(comparator?: Comparator): T[];
  }
}

type SortingPosition = -1 | 1 | 0;
type Comparator = <T>(a: T, b: T) => SortingPosition;

Array.prototype.customSort = function (comparator = defaultComparator) {
  const start = 0;
  const end = this.length - 1;

  const recursiveSort = (start: number, end: number): void => {
    if (end - start < 1) {
      return;
    }

    const pivot = this[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const lessThanThePivot = comparator(this[i], pivot) === -1;
      if (lessThanThePivot) {
        if (splitIndex !== i) {
          swap(this, splitIndex, i);
        }
        splitIndex++;
      }
    }

    this[end] = this[splitIndex];
    this[splitIndex] = pivot;

    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  recursiveSort(start, end);
  return this;
};

const defaultComparator: Comparator = function (firstParam, secondParam): SortingPosition {
  if (firstParam < secondParam) {
    return -1;
  }
  if (firstParam > secondParam) {
    return 1;
  }
  return 0;
};

const swap = function <T>(array: T[], firstIndex: number, secondIndex: number): void {
  [array[secondIndex], array[firstIndex]] = [array[firstIndex], array[secondIndex]];
};

export {};
