
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
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