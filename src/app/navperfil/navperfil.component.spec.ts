import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavperfilComponent } from './navperfil.component';

describe('NavperfilComponent', () => {
  let component: NavperfilComponent;
  let fixture: ComponentFixture<NavperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
