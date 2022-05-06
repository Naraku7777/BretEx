import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn : 'root'
})

export class BasedatosService {
  constructor ( public AngularFirestore: AngularFirestore) {} 

  createDocument <tipo>(data: tipo, enlace: string ){
    const empleoCollection: AngularFirestoreCollection<tipo> =
                          this.AngularFirestore.collection<tipo>(enlace);
    return empleoCollection.add(data);
  }
}
