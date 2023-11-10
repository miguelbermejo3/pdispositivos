import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})
export class ListContactsPage implements OnInit {

titulo="Lista de contactos"
contacts:any;
  constructor(private contactService:ContactsService) { }

  ngOnInit() {

    this.contactService.get_contacts().subscribe(data=>
      {
        console.log(data);
        this.contacts=data;
      }

    )
  }

}
