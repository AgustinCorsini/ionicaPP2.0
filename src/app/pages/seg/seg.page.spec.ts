import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegPage } from './seg.page';

describe('SegPage', () => {
  let component: SegPage;
  let fixture: ComponentFixture<SegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
