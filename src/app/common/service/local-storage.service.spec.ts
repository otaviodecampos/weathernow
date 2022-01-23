import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@app/common/service/local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.get(LocalStorageService);
    let store = {} as any;

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(window.localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(window.localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get a value', () => {
    service.set('testKey', 'testValue');
    expect(service.get('testKey')).toEqual('testValue');
  });

  it('should get null when value is expired', () => {
    const storedDate = new Date();
    storedDate.setMinutes(storedDate.getMinutes() - 11);
    window.localStorage.setItem('WeatherNow-testExpiredKey', JSON.stringify({
      storedIn: storedDate,
      value: 'testValue'
    }));
    expect(service.get('testExpiredKey', 10)).toEqual(null);
  });

});
