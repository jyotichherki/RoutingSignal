import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductdComp11 } from './productd-comp11';

describe('ProductdComp11', () => {
  let component: ProductdComp11;
  let fixture: ComponentFixture<ProductdComp11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductdComp11],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductdComp11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
