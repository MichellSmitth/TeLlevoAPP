import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportrequestPage } from './transportrequest.page';

describe('TransportrequestPage', () => {
  let component: TransportrequestPage;
  let fixture: ComponentFixture<TransportrequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransportrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
