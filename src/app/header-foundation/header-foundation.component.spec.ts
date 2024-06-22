import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFoundationComponent } from './header-foundation.component';

describe('HeaderFoundationComponent', () => {
  let component: HeaderFoundationComponent;
  let fixture: ComponentFixture<HeaderFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFoundationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
