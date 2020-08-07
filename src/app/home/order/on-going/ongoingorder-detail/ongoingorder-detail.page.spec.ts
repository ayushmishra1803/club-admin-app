import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingorderDetailPage } from './ongoingorder-detail.page';

describe('OngoingorderDetailPage', () => {
  let component: OngoingorderDetailPage;
  let fixture: ComponentFixture<OngoingorderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingorderDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingorderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
