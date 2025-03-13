import { Component } from '@angular/core';

@Component({
  selector: 'app-reporting-entity-new',
  templateUrl: './reporting-entity-new.component.html',
  styleUrl: './reporting-entity-new.component.scss'
})
export class ReportingEntityNewComponent {


    options: any[] = [
        { name: 'კვლევა და განვითარება' },
        { name: 'ინტელექტუალური საკუთრებისფლობა ან მართვა' },
        { name: 'შესყიდვები' },
        { name: 'დამზადება ან წარმოება'},
        { name: 'გაყიდვები, მარკეტინგი ან დისტრიბუცია'},
        { name: 'ადმინისტრაციული, მენეჯმენტთან დაკავშირებული ან დამხმარე მომსახურება'},
        { name: 'მომსახურების გაწევა დამოუკიდებელი მხარეებისთვის'},
        { name: 'შიდაჯგუფური დაფინანსება'},
        { name: 'რეგულირებულიფინანსური მომსახურებები'},
        { name: 'დაზღვევა'},
        { name: 'აქციების ან სხვა წილობრივი ინსტრუმენტების ფლობა'},
        { name: 'უმოქმედო'},
    
    ];

}
