import { TestBed, inject } from '@angular/core/testing';

import { PullAfService } from './pull-af.service';

describe('PullAfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PullAfService]
    });
  });

  it('should ...', inject([PullAfService], (service: PullAfService) => {
    expect(service).toBeTruthy();
  }));
});
