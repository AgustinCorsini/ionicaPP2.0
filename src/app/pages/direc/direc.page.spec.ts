import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecPage } from './direc.page';

describe('DirecPage', () => {
  let component: DirecPage;
  let fixture: ComponentFixture<DirecPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
