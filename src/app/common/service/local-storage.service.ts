import { Injectable } from '@angular/core';
import { differenceInMinutes } from '@app/common/function/time';

interface StorageValue {

  storedIn: Date;

  value: any;

}

function storageKey(key: string): string {
  return `WeatherNow-${key}`;
}

function serializeValue(value: any): string {
  return JSON.stringify(value);
}

function deserializeValue(rawValue: string): any {
  const storageValue = JSON.parse(rawValue!) as StorageValue;
  storageValue.storedIn = new Date(storageValue.storedIn);
  return storageValue;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    const storageValue = {
      storedIn: new Date(),
      value: value
    } as StorageValue;
    this.storage.setItem(storageKey(key), serializeValue(storageValue));
  }

  get(key: string, cacheTimeInMinutes: number = 0): any {
    const storageRawValue = this.storage.getItem(storageKey(key));
    if (storageRawValue) {
      const storageValue = deserializeValue(storageRawValue);
      if (!cacheTimeInMinutes || differenceInMinutes(storageValue.storedIn, new Date) < cacheTimeInMinutes) {
        return storageValue.value;
      }
    }
    return null;
  }

}
