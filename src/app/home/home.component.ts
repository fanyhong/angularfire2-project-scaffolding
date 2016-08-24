import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {

  subtitle = 'Hello angularfire2!';
  
  objectitem: FirebaseObjectObservable<any>;
  listitem: FirebaseListObservable<any[]>;
  queriedlistitem: FirebaseListObservable<any[]>;

  codingskillsSubject: Subject<any>;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));

    this.objectitem = af.database.object('/user_objectitem');
    this.listitem = af.database.list('/profiles_listitem');

    this.codingskillsSubject = new Subject();
    this.queriedlistitem = af.database.list('/profiles_listitem', {
      query: {
        orderByChild: 'codingskills',
        equalTo: this.codingskillsSubject
      }
    });
  }

  ngOnInit() {
  }


  // methods for obejctitem
  save(newUserId: string) {
    this.objectitem.set({ userid: newUserId });
  }
  update(newUserEmail: string) {
    this.objectitem.update({ useremail: newUserEmail });
  }
  delete() {
    this.objectitem.remove();
  }
  snapshot(){
    this.objectitem = this.af.database.object('/user_objectitem', { preserveSnapshot: true });
    this.objectitem.subscribe(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.val())
    });
  }


  // methods for listitem
  addItem(newName: string, newCompany: string,newCodingSkills: string, newNote: string) {
    this.listitem.push({ 
                          name: newName, 
                          company: newCompany, 
                          codingskills: newCodingSkills, 
                          note: newNote 
                        });
  }
  updateItem(key: string, newName: string, newCompany: string,newCodingSkills: string, newNote: string) {
    this.listitem.update(key, { 
                                name: newName, 
                                company: newCompany, 
                                codingskills: newCodingSkills, 
                                note: newNote 
                              });
  }
  deleteItem(key: string) {    
    this.listitem.remove(key); 
  }
  deleteEverything() {
    this.listitem.remove();
  }
  snapshotItem(){
    this.listitem = this.af.database.list('/profiles_listitem', { preserveSnapshot: true });
    this.listitem
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key)
          console.log(snapshot.val())
        });
      })
  }


  // filter for listItem
  filterBy(codingskills: string) {
    this.codingskillsSubject.next(codingskills); 
  }

}
