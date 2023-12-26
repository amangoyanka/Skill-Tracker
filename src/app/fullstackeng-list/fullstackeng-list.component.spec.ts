import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackengListComponent } from './fullstackeng-list.component';

describe('FullstackengListComponent', () => {
  let component: FullstackengListComponent;
  let fixture: ComponentFixture<FullstackengListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullstackengListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullstackengListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
