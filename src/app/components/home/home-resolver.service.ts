import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DataServiceService } from '../../service/data-service.service'
import { Global } from '../../service/models/global';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<Global> {

  constructor(private dataService: DataServiceService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

   const item =  this.dataService.getGlobalData();
  //  console.log(item)
  //  this.note = item['Notes']
  // if (item.length === 0) {
  //   return  this.dataservice.getNotes();
  // }
  return item
  // return item
  // }


}
}
