import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5vedioComponent } from './component5vedio.component';

describe('Component5vedioComponent', () => {
  let component: Component5vedioComponent;
  let fixture: ComponentFixture<Component5vedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component5vedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component5vedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
