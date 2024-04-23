import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilinicioComponent } from './perfilinicio.component';

describe('PerfilinicioComponent', () => {
  let component: PerfilinicioComponent;
  let fixture: ComponentFixture<PerfilinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilinicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
