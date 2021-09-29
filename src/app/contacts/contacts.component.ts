
import { Component, Input, OnInit } from "@angular/core";
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class CardComponent implements OnInit {

    // @Input Card: string


    photo = '././assets/images/photo.png'
    name = 'Иванов Иван Иванович'
    tel = '+380443456789'
    email = 'ivan.ivanov@romashki.com'
    jobOrganization = 'ООО "Ромашки"'
    jobDepartment = 'Главное отделение'
    jobStatus = 'Эксперт'
    
    
    ngOnInit() {}
   
}