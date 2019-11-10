import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../interfaces/note';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  @Output() addedNote = new EventEmitter();
  public noteTitle: string;
  public noteDescription: string;
  public notelabel: string;


  constructor() { }

  onSubmit() {
    const newNote = {
      title: this.noteTitle,
      description: this.noteDescription,
      label: this.notelabel,
      isDone: false,
      isArchived: false,
    };

    this.addedNote.emit(newNote);

    this.noteTitle = '';
    this.noteDescription = '';
    this.notelabel = '';
  }

  ngOnInit() {
  }
}
