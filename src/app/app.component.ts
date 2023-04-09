import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  pa:any
  myForm: FormGroup;
value:any
value2:any
    user3:any
  x:any
  formuser!: FormGroup; 
  constructor(private serv:UserService,private formBuilder : FormBuilder){
    this.myForm = this.formBuilder.group({
      items: this.formBuilder.array([
        this.formBuilder.group({
          id:[null],
          datedeb:['',Validators.required],
          datefin:['',Validators.required],
          email: ['',Validators.required],
          username:['',Validators.required],
          password:['',Validators.required],
        })
      ])
    });
  }
  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      inputList: this.formBuilder.array([
        this.formBuilder.group({
          id:[null],

          datedeb:['',Validators.required],
          datefin:['',Validators.required],
          email: ['',Validators.required],
          username:['',Validators.required],
          password:['',Validators.required],
        })
      ])
    });

    this.formuser = this.formBuilder.group({

      id:[null],
      datedeb:['',Validators.required],
      datefin:['',Validators.required],
      email: ['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
     })
this.getalluser()  }
  users: any[] = [];
  getalluser() {
    this.serv.getall().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  action(code :any){
  this.x=code  
    console.log(this.x)
    this.serv.getbyid(this.x).subscribe(
      (data: any) => {
        this.user3=data
    this.formuser.patchValue({
      id:this.user3.id,
      datedeb:this.user3.datedeb,
      datefin:this.user3.datefin,
      email: this.user3.email,
      username:this.user3.username,
      password:this.user3.password




    })
  
      });
  
  
  
    }
    saveuser(){
this.serv.saveone(this.formuser?.value).subscribe(
  (data: any) => {
console.log(this.formuser.value);
this.getalluser()
  },
  (error) => {
    console.log(error);
  }
);


    }
    saveuser2(){
      this.serv.save(this.myForm.get('inputList')?.value).subscribe(
        (data: any) => {
      console.log(this.myForm.value);
      this.getalluser()
        },
        (error) => {
          console.log(error);
        }
      );}
      
      get inputList(): FormArray {
        return this.myForm.get('inputList') as FormArray;
      }
    
      addInput() {
        this.inputList.push(this.formBuilder.group({
          id:[null],

          datedeb:['',Validators.required],
          datefin:['',Validators.required],
          email: ['',Validators.required],
          username:['',Validators.required],
          password:['',Validators.required],
        }));
      }
    
      onSubmit() {
        console.log("cccccccccc"+this.inputList.value);
      }

      getdata(event:any){
        
          // récupérer les valeurs des deux input
          
         this.value=event.target.value
          console.log("dv1"+this.value);
          if (this.value2!=null){  this.serv.getData(this.value, this.value2, 1).subscribe(
            (response) => {
              this.pa = response;
              console.log("paaaaaaa"+this.pa.username);
              
            },
            (error) => {
              console.log(error);
            }
          );
         }
         return this.value
       
          

          
    
          // faire quelque chose avec les valeurs récupérées
  
      }
      
      getdata2(event:any){
        
        // récupérer les valeurs des deux input
        
       this.value2=event.target.value
        console.log("dv2"+this.value2);
        this.serv.getData(this.value, this.value2, 1).subscribe(
          (response) => {
            this.pa = response;
            console.log("paaaaaaa"+this.pa.username);
            
          },
          (error) => {
            console.log(error);
          }
        );
       
     
        

        
  
        // faire quelque chose avec les valeurs récupérées

      }
    fetchData() {
      this.getdata(event)
      this.getdata2(event)
      this.serv.getData(this.value, this.value2, 1).subscribe(
        (response) => {
          this.pa = response;
          console.log("paaaaaaa"+this.pa.username);
          
        },
        (error) => {
          console.log(error);
        }
      );
    }



      }

