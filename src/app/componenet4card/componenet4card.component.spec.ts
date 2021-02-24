import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet4cardComponent } from './componenet4card.component';

describe('Componenet4cardComponent', () => {
  let component: Componenet4cardComponent;
  let fixture: ComponentFixture<Componenet4cardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componenet4cardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenet4cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
