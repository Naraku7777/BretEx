import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable()

export class BasedatosService {
  constructor ( public AngularFirestore: AngularFirestore) {} 

  createDocument ( ){
    
  }
}
