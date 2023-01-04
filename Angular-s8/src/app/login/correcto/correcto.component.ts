import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.component.html',
  styleUrls: ['./correcto.component.css']
})
export class CorrectoComponent implements OnInit {
  @Input() text!: string;

  links = ['Home', 'Support', 'Contact'];

  constructor() { }

  ngOnInit(): void {
  }

}
