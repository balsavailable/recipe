import { TestBed, inject } from '@angular/core/testing';

import { Dummy2Service } from './dummy2.service';

describe('Dummy2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dummy2Service]
    });
  });

  it('should be created', inject([Dummy2Service], (service: Dummy2Service) => {
    expect(service).toBeTruthy();
  }));
});
