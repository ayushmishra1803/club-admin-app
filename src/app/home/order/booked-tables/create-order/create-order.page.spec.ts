import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOrderPage } from './create-order.page';

describe('CreateOrderPage', () => {
  let component: CreateOrderPage;
  let fixture: ComponentFixture<CreateOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
