import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugComponent } from './sug.component';

describe('SugComponent', () => {
  let component: SugComponent;
  let fixture: ComponentFixture<SugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
