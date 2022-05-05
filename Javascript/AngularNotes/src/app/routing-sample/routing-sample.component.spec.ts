import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSampleComponent } from './routing-sample.component';

describe('RoutingSampleComponent', () => {
  let component: RoutingSampleComponent;
  let fixture: ComponentFixture<RoutingSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
