import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateOrderPage } from './update-order.page';

describe('UpdateOrderPage', () => {
  let component: UpdateOrderPage;
  let fixture: ComponentFixture<UpdateOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
