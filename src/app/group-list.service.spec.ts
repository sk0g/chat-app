import { TestBed, inject } from '@angular/core/testing';

import { GroupListService } from './group-list.service';

describe('GroupListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupListService]
    });
  });

  it('should be created', inject([GroupListService], (service: GroupListService) => {
    expect(service).toBeTruthy();
  }));
});
