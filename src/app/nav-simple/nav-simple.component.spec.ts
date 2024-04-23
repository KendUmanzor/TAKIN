import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSimpleComponent } from './nav-simple.component';

describe('NavSimpleComponent', () => {
  let component: NavSimpleComponent;
  let fixture: ComponentFixture<NavSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
