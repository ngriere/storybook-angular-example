import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCustomComponent } from './bouton-custom.component';

describe('BoutonCustomComponent', () => {
  let component: BoutonCustomComponent;
  let fixture: ComponentFixture<BoutonCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
