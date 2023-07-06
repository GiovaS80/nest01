import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService){}
  onModuleInit(){this.getUser()}

  dataUser = {
    title:'',
    firstName:'',
    lastName:'',
    gender:'',
    city:'',
    state:'',
    email:'',
  };

  getApi() {
    let user = {}
    return this.httpService
      .get(`https://randomuser.me/api/`)
      .pipe(
        map((response) => {
          return response.data
        }
        )
      )
      // return user;
  }//end getApi

  getUser(){
    
    this.getApi().subscribe(
      {
        next: (result :any) => {
          this.dataUser.title = result.results[0].name.title;
          this.dataUser.firstName = result.results[0].name.first;
          this.dataUser.lastName = result.results[0].name.last;
          this.dataUser.gender = result.results[0].gender;
          this.dataUser.city = result.results[0].location.city;
          this.dataUser.state = result.results[0].location.state;
          this.dataUser.email = result.results[0].email;
          console.log("********* result *********")
          console.log(this.dataUser)
          console.log("********* END *********")
        },
        complete: () => {return this.dataUser}
        
      }
    )

  }//end getUser

  getHello(): string {
    return 'Hello World!';
  }
}
