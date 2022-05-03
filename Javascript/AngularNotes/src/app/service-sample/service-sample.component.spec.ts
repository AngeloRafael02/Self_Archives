import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSampleComponent } from './service-sample.component';

describe('ServiceSampleComponent', () => {
  let component: ServiceSampleComponent;
  let fixture: ComponentFixture<ServiceSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
