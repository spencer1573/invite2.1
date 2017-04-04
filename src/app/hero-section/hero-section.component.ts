import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PullAfService } from '../services/pull-af.service';
import 'rxjs/add/operator/concatMap';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  sub;
  name;
  user: any;
  caption: string;
  imgSource: string;
  paragraph: string;
  belowParagraph = '';

  constructor(public route: ActivatedRoute, public pullaf: PullAfService ) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .concatMap(params => this.pullaf.getUser(params))
      .subscribe(user => {
        this.user = user;
        console.log('this is here: ', this.user);
        this.name = this.user.name;
        this.caption = this.user.caption;
        this.imgSource = this.user.img;
        this.paragraph = this.user.paragraph;
        this.paragraph.replace('enter_Historic_Link', 'LINK');
        this.paragraph = this.user.paragraph;
        if ('custom' in this.user) {
          if ('below_paragraph' in this.user.custom) {
            this.belowParagraph = this.user.below_paragraph;
          }
        }
        console.log('this is the final para ', this.user.paragraph);
        console.log(this.name);
      });


    console.log(this.user);
  }

}
