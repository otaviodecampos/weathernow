export function minutesToMilliseconds(minutes: number): number {
  return minutes * 60 * 1000;
}

export function millisecondsToMinutes(ms: number): number {
  return Math.floor((ms / 1000) / 60);
}

export function differenceInMilliseconds(date1: Date, date2: Date) {
  return Math.abs(date1.getTime() - date2.getTime());
}

export function differenceInMinutes(date1: Date, date2: Date) {
  const diff = differenceInMilliseconds(date1, date2);
  return millisecondsToMinutes(diff);
}
