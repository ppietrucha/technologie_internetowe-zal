import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtDescriptionComponent } from './yacht-description.component';

describe('YachtDescriptionComponent', () => {
  let component: YachtDescriptionComponent;
  let fixture: ComponentFixture<YachtDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
