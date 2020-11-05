import { TestBed } from '@angular/core/testing';
import { CustomersListTableService } from './customers-list-service.service';


describe('CustomersListServiceService', () => {
  let service: CustomersListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
