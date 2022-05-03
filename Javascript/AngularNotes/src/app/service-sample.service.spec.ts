import { TestBed } from '@angular/core/testing';

import { ServiceSampleService } from './service-sample.service';

describe('ServiceSampleService', () => {
  let service: ServiceSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
