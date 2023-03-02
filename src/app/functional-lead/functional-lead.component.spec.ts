import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalLeadComponent } from './functional-lead.component';

describe('FunctionalLeadComponent', () => {
  let component: FunctionalLeadComponent;
  let fixture: ComponentFixture<FunctionalLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
