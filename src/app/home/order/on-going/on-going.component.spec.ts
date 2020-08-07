import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnGoingComponent } from './on-going.component';

describe('OnGoingComponent', () => {
  let component: OnGoingComponent;
  let fixture: ComponentFixture<OnGoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
