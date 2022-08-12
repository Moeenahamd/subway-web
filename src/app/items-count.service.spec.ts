import { TestBed } from '@angular/core/testing';

import { ItemsCountService } from './items-count.service';

describe('ItemsCountService', () => {
  let service: ItemsCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
