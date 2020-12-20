import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer_items_data = [
    { 
      title: "Learn More" ,
      body :"Lorem ipsum dolor sit amet i ad , velit quae ssitatibus laudantium exercitationem assumenda inventore, deleniti atque sequi magnam sunt",
      routeText:"more",
      route : ['more']
    }, 
    { 
      title: "Make devcity yours" ,
      body :"Lorem ipsum dolor sit amet i ad , velit quae ssitatibus laudantium exercitationem assumenda inventore, deleniti atque sequi magnam sunt",
      routeText:"explore",
      route : ['explore']
    },
    { 
      title: "share your thinking" ,
      body :"Lorem ipsum dolor sit amet i ad , velit quae ssitatibus laudantium exercitationem assumenda inventore, deleniti atque sequi magnam sunt",
      routeText:"write on devcity",
      route : ['write on devcity']
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
