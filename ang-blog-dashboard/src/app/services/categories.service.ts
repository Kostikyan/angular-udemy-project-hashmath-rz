import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Category} from "../models/category";
import {ToastrService} from "ngx-toastr";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore, private tss: ToastrService) {
  }


  saveData(categoryData: any) {

    this.afs.collection('categories').add(categoryData).then(docRef => {
      this.tss.success('Data Insert Successfully ..!')
    }).catch(err => {
      console.log(err)
    })

  }

  loadData() {

    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
        })
      })
    )

  }

  updateData(id: any, EditData: any) {
    this.afs.doc(`categories/${id}`).update(EditData)
      .then(docRef => {
        this.tss.success('Data Updated Successfully ..!')
      }).catch(err => {
        console.log(err)
      })
  }

  deleteData(id: string) {
    this.afs.doc(`categories/${id}`).delete()
      .then(docRef => {
        this.tss.success('Data Deleted Successfully ..!')
      }).catch(err => {
      console.log(err)
    });
  }
}
