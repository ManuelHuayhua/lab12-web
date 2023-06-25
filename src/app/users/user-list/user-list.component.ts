import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];

  constructor() { }
  

  ngOnInit(): void {
  }
  showUserDetails(userId: number) {
    // Aquí puedes realizar la lógica para mostrar los detalles del usuario
    console.log('Mostrando detalles del usuario con ID:', userId);
  }


}