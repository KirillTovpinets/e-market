import { TestBed, inject } from '@angular/core/testing';

import { AddService } from './get-params.service';

describe('GetParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddService]
    });
  });

  it('should be created', inject([AddService], (service: AddService) => {
    expect(service).toBeTruthy();
  }));
});
