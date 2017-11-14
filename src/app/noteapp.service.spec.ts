import { TestBed, inject } from '@angular/core/testing';

import { NoteappService } from './noteapp.service';

describe('NoteappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteappService]
    });
  });

  it('should be created', inject([NoteappService], (service: NoteappService) => {
    expect(service).toBeTruthy();
  }));
});
