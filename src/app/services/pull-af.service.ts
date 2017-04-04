import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class PullAfService {
  items: FirebaseListObservable<any[]>;
  user;

  constructor(public af: AngularFire ) {
  }

  getUser(params) {
    return this.af.database.object('/users/' + params['id'])
      .concatMap(user => {
        return this.getParagraph(user);
      });
  }


  getParagraph(user) {

    return this.af.database.object('/paragraphs' + (function(){

        let castType: string;
        let multiple: string;
        let castColor: string;
        // decide paragraph
        console.log('object type: ', Object.keys(user.type)[0]);
        castType = '';
        castType = Object.keys(user.type)[0].toString();

        if (user.multiple === true) {
          multiple = 'multiple';
        } else {
          multiple = 'single';
        }

        if ('custom' in user) {
          user.paragraph = user.custom.paragraph;
          if ( 'below_paragraph' in user.custom) {
            user.below_paragraph = user.custom.below_paragraph;
          }
          return '/nothing';
        } else if ('presidency' === castType || castType === '') {
          user.paragraph = user.custom.paragraph;
          if ( 'below_paragraph' in user.custom) {
            user.below_paragraph = user.custom.below_paragraph;
          }
          return '/nothing';
        } else if ('family' === castType) {
          // console.log(multiple);
          castColor = user.type.family;
          // console.log(castColor);
          let location: string;
          location = '/' + 'family' + '/' + castColor + '/' + multiple;
          // console.log(location);
          return location;
          // return '/family/red/multiple';

        }
    })())
      .map( paragraph => {
        // console.log('this is coming from get para type ', castType);
        if (paragraph.$value === 'its_empty') {
          console.log('you made it to its empty');
        } else {
          user.paragraph = paragraph.$value;
          // console.log('paragraph family : ', user.paragaph);
        }
        // user.paragraph = ;
        return user;
        // obj[castType][castColor]
      });
  }
}
