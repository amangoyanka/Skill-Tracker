import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackengDetailsComponent } from './fullstackeng-details.component';

describe('FullstackengDetailsComponent', () => {
  let component: FullstackengDetailsComponent;
  let fixture: ComponentFixture<FullstackengDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullstackengDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullstackengDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
