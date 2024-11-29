import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItScreenComponent } from './sub-it-screen.component';

describe('SubItScreenComponent', () => {
  let component: SubItScreenComponent;
  let fixture: ComponentFixture<SubItScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubItScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubItScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
