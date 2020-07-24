import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateOtpPage } from './validate-otp.page';

describe('ValidateOtpPage', () => {
  let component: ValidateOtpPage;
  let fixture: ComponentFixture<ValidateOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
