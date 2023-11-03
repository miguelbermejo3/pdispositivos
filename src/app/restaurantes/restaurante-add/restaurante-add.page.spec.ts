import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestauranteAddPage } from './restaurante-add.page';

describe('RestauranteAddPage', () => {
  let component: RestauranteAddPage;
  let fixture: ComponentFixture<RestauranteAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestauranteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
