import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { DocResponse, legalDocuments, PaginationParams } from '../../interface/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private api: ApiService,
  ) { }


  getDocuments = (params: PaginationParams) : Observable<legalDocuments> => { 
    return this.api.get<legalDocuments>("https://legal-hub.onrender.com/legal_hub/api/v1/bundles", { params });
  }

  postDocument = (body: FormData) : Observable<DocResponse> => {
    return this.api.post("https://legal-hub.onrender.com/legal_hub/api/v1/bundles/upload", body);
  }

}
