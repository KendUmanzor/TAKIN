import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpleadorComponent } from './registro-empleador.component';

describe('RegistroEmpleadorComponent', () => {
  let component: RegistroEmpleadorComponent;
  let fixture: ComponentFixture<RegistroEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEmpleadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
